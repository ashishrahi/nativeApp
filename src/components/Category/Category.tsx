import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Category = ({ name, description, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.categoryContainer} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{name}</Text>
      <Text style={styles.categoryDescription}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  categoryImage: {
    width: '100%', // Adjust as needed
    height: 150, // Set a fixed height
    borderRadius: 5,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default Category;
