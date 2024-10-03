// CartList.tsx
import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import CartItem from '../../components/CartItem/CartItem';

const CartList: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 59.99,
      image: 'https://via.placeholder.com/50',
    },
    // Add more items as needed
  ]);

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem item={item} onRemove={handleRemoveItem} />
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.total}>
          Total: $
          {cartItems
            .reduce((acc, item) => acc + item.price, 0)
            .toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  totalContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default CartList;
