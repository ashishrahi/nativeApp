import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, RadioButton, Divider, List } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { selectTotalPrice, loadCart } from '../../store/cartSlice';
import { RootState } from '../../store/store'; // Ensure RootState is imported

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const dispatch = useDispatch();

  // Define a proper selector for cart products
  const cartProducts = useSelector((state: RootState) => state.cart.products);

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const handlePlaceOrder = () => {
    // Implement order placement logic here
    console.log('Order placed');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Checkout</Text>

      {/* Cart Summary */}
      <Card style={styles.card}>
        <Card.Title title="Order Summary" />
        <Card.Content>
          {cartProducts.length > 0 ? (
            cartProducts.map((item, index) => (
              <List.Item
                key={index}
                title={item.name}
                description={item.description}
                // right={() => <Text>${item.price.toFixed(2)}</Text>} // Ensure proper formatting
              />
            ))
          ) : (
            <Text>No items in the cart</Text>
          )}
          <Divider />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total</Text>
            {/* <Text style={styles.totalText}>${totalPrice.toFixed(2)}</Text>  */}
          </View>
        </Card.Content>
      </Card>

      {/* Payment Method */}
      <Card style={styles.card}>
        <Card.Title title="Payment Method" />
        <Card.Content>
          <RadioButton.Group
            onValueChange={(newValue) => setPaymentMethod(newValue)}
            value={paymentMethod}
          >
            <RadioButton.Item label="Credit Card" value="creditCard" />
            <RadioButton.Item label="PayPal" value="paypal" />
            <RadioButton.Item label="Cash on Delivery" value="cod" />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      {/* Place Order Button */}
      <Button
        mode="contained"
        onPress={handlePlaceOrder}
        style={styles.button}
        disabled={cartProducts.length === 0} // Disable if no items in cart
      >
        Place Order
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'black'
  },
  card: {
    marginBottom: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Add some space above the total
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
  },
});

export default Checkout;
