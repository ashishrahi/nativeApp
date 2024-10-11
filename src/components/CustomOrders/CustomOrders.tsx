import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OrdersList = () => {
  const orders = [
    {
      id: '1',
      orderNumber: 'ORD123',
      customer: 'John Doe',
      date: '2024-10-08',
      total: '$150.00',
      status: 'Delivered',
    },
    {
      id: '2',
      orderNumber: 'ORD124',
      customer: 'Jane Smith',
      date: '2024-10-07',
      total: '$200.00',
      status: 'Shipped',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderNumber}>Order: {item.orderNumber}</Text>
      <Text style={styles.text}>Customer: {item.customer}</Text>
      <Text style={styles.text}>Date: {item.date}</Text>
      <Text style={styles.text}>Total: {item.total}</Text>
      <Text style={styles.text}>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black', // Black title text
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  orderNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black', // Black text for order number
  },
  text: {
    color: 'black', // Black text for other details
  },
});

export default OrdersList;
