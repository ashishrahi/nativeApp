import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Divider, List, IconButton } from 'react-native-paper'; // Import IconButton
import { useSelector, useDispatch } from 'react-redux';
import { loadCart, removeFromCart,selectTotalCartPrice } from '../../store/cartSlice';
import { RootState } from '../../store/store';
import RazorpayCheckout from 'react-native-razorpay';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const totalPrice = useSelector(selectTotalCartPrice);
  console.log(totalPrice)
  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch the action to remove the item
  };

  const renderCartItem = (item) => (
    <List.Item
      title={item.name}
      description={item.description}
      titleStyle={styles.itemTitle}
      descriptionStyle={styles.itemDescription}
      right={props => (
        <View style={styles.itemRightContainer}>
          <Text style={styles.priceStyle}>₹{item.price}</Text>
          <IconButton
            icon="delete" // Use a delete icon
            size={20}
            onPress={() => handleRemoveFromCart(item.id)} // Call remove function
          />
        </View>
      )}
    />
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cart Summary */}
      {cartProducts.length > 0 ? (
        cartProducts.map((item, index) => (
          <View key={index}>
            {renderCartItem(item)}
            <Divider />
          </View>
        ))
      ) : (
        <Text style={styles.noItemsText}>No items in the cart</Text>
      )}

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price: ${totalPrice.toFixed(2)}</Text>
        {/* Add logic for total price if needed */}
      </View>

      {/* Place Order Button */}
      <Button
        mode="contained"
        onPress={() => {
          const options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: '', // Your API key
            amount: '5000',
            name: 'foo',
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software',
            },
            theme: { color: '#F37254' },
          };

          RazorpayCheckout.open(options)
            .then((data) => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch((error) => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}
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
  noItemsText: {
    color: 'black',
    textAlign: 'center',
  },
  priceStyle: {
    color: 'black',
  },
  itemTitle: {
    color: 'black',
  },
  itemDescription: {
    color: 'black',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4caf50',
  },
  itemRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Checkout;
