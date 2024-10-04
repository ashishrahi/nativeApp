import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart, removeFromCart } from '../../store/cartSlice';
import { Text, List, Button } from 'react-native-paper';
import { RootState } from '../../store/store';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

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

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <List.Section>
          <List.Subheader style={styles.headerText}>Your Cart</List.Subheader>
          {memoizedCartProducts.length === 0 ? (
            <Text style={[styles.emptyCartText, { color: 'black' }]}>
              No products in cart
            </Text>
          ) : (
            memoizedCartProducts.map(product => (
              <CartProductItem
                key={product.id}
                product={product}
                onRemove={handleRemoveProduct}
              />
            ))
          )}
        </List.Section>
      </ScrollView>

      {/* Render Checkout button only if there are products in the cart */}
      {memoizedCartProducts.length > 0 && (
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleCheckout}
            style={styles.checkoutButton}
          >
            Checkout
          </Button>
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
        textColor='white'
        style={{ backgroundColor: 'red' }}
        mode="contained"
        onPress={() => onRemove(product.id)}
      >
        Remove
      </Button>
    )}
  />
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color for the container
  },
  scrollViewContent: {
    paddingBottom: 16, // Add padding for better scrolling experience
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: 'white', // Background color for the button area
  },
  checkoutButton: {
    marginTop: 16,
  },
  headerText: {
    color: 'black', // Set header text color to black
  },
  emptyCartText: {
    padding: 16,
  },
});

export default CartComponent;
