import React, { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart, removeFromCart } from '../../store/cartSlice';
import { List, Button, IconButton } from 'react-native-paper'; // Use IconButton for icons
import { RootState } from '../../store/store';
import { FlatList, View, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartComponent = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const groupedCartProducts = useMemo(() => {
    return cartProducts.reduce((acc, product) => {
      const { category } = product;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {} as Record<string, typeof cartProducts>);
  }, [cartProducts]);

  const handleRemoveProduct = useCallback((id: string) => {
    dispatch(removeFromCart(id));
  }, [dispatch]);

  const renderProductItem = useCallback(({ item }) => (
    <CartProductItem product={item} onRemove={handleRemoveProduct} />
  ), [handleRemoveProduct]);

  const renderCategoryItem = ({ item }) => (
    <View>
      <List.Subheader style={styles.headerText}>{item.category}</List.Subheader>
      <FlatList
        data={item.products}
        renderItem={renderProductItem}
        keyExtractor={(product) => product.id.toString()}
        scrollEnabled={false} // Disable scrolling for nested FlatList
      />
    </View>
  );

  const groupedProductsArray = useMemo(() => {
    return Object.entries(groupedCartProducts).map(([category, products]) => ({ category, products }));
  }, [groupedCartProducts]);

  const renderFooter = () => (
    cartProducts.length > 0 && (
      <View style={styles.checkoutContainer}>
        <Button
          mode="contained"
          textColor='white'
          onPress={() => navigation.navigate('Checkout')}
          style={styles.checkoutButton}
        >
          Checkout
        </Button>
      </View>
    )
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100} // Adjust based on your layout
    >
      <List.Subheader style={styles.headerText}>Your Cart</List.Subheader>
      <FlatList
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }} // Padding for the button space
        data={groupedProductsArray}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.category}
        ListEmptyComponent={
          <List.Item
            title="No products in cart"
            titleStyle={styles.emptyCartText}
          />
        }
        ListFooterComponent={renderFooter} // Adding the footer component for checkout button
      />
    </KeyboardAvoidingView>
  );
};

const CartProductItem = React.memo(({ product, onRemove }) => (
  <View style={styles.productContainer}>
    <View style={styles.productDetails}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>Price: ${product.price}</Text>
      <Text style={styles.productQuantity}>Quantity: {product.quantity}</Text>
    </View>
    <IconButton
      icon="delete" // Use the delete icon from Material Community Icons
      size={24}
      color="red"
      onPress={() => onRemove(product.id)}
      style={styles.removeButton}
    />
  </View>
));

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    color: 'black',
  },
  emptyCartText: {
    padding: 16,
    color: 'black',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  productQuantity: {
    fontSize: 14,
    color: 'gray',
  },
  removeButton: {
    marginLeft: 16,
  },
  checkoutContainer: {
    padding: 16,
    marginBottom: 20, // Extra space at the bottom
  },
  checkoutButton: {
    backgroundColor: 'black', // Change this color to fit your theme
  },
});

export default CartComponent;
