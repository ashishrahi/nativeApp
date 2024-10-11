import React from 'react';
import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native';

const ProductDetail = ({ route }) => {
  const { product } = route.params; // Get product data from route parameters

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.product_photo }} style={styles.image} />
      <Text style={styles.title}>{product.product_title}</Text>
      <Text style={styles.price}>{product.product_price}</Text>
      <Text style={styles.rating}>Rating: {product.product_star_rating}</Text>
      <Text style={styles.delivery}>{product.delivery}</Text>
      <Button
        title="View on Amazon"
        onPress={() => Linking.openURL(product.product_url)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 4,
  },
  rating: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 4,
  },
  delivery: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 16,
  },
});

export default ProductDetail;
