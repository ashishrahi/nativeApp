import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart, removeFromCart } from '../../store/cartSlice';
import { Text, List } from 'react-native-paper';
import { RootState } from '../../store/store';
import { FlatList, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import Button from '../../assests/UI/Input/Button'

const CartComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Initialize navigation

  // Select cart products from the store
  const cartProducts = useSelector((state: RootState) => state.cart.products);

  // Load the cart from AsyncStorage on component mount
  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  // Memoize cart product list to avoid unnecessary re-renders
  const memoizedCartProducts = useMemo(() => cartProducts, [cartProducts]);

  const handleRemoveProduct = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout');
    navigation.navigate('Checkout'); // Navigate to Checkout screen
  };

  const renderProductItem = ({ item }) => (
    <CartProductItem
      product={item}
      onRemove={handleRemoveProduct}
    />
  );

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.headerText}>Your Cart</List.Subheader>
        {memoizedCartProducts.length === 0 ? (
          <Text style={[styles.emptyCartText, { color: 'black' }]}>
            No products in cart
          </Text>
        ) : (
          <FlatList
            data={memoizedCartProducts}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </List.Section>

      {/* Render Checkout button only if there are products in the cart */}
      {memoizedCartProducts.length > 0 && (
        <View style={styles.buttonContainer}>
          <Button
            textColor='white'
            mode="contained"
            onPress={handleCheckout}
            style={styles.checkoutButton}
            label='Checkout'
            
          />
            
        </View>
      )}
    </View>
  );
};

// Separated component for individual cart product item
const CartProductItem = ({ product, onRemove }) => (
  <List.Item
    title={product.name}
    titleStyle={{ color: 'black' }} // Set title color to black
    description={`Price: ${product.price} (Quantity: ${product.quantity})`}
    descriptionStyle={{ color: 'black' }} // Set description color to black
    right={props => (
      <Button
        {...props}
        textColor='black'
        style={{ backgroundColor: 'red' }}
        mode="contained"
        onPress={() => onRemove(product.id)}
        label='Remove'
        color='black'
      />
    )}
  />
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color for the container
  },
  flatListContent: {
    paddingBottom: 16, // Add padding for better scrolling experience
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: 'white', // Background color for the button area
  },
  checkoutButton: {
    marginTop: 16,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'black', // Set header text color to black
  },
  emptyCartText: {
    padding: 16,
  },
});

export default CartComponent;
