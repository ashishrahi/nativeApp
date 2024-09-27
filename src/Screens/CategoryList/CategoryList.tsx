import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const CategoryList = () => {
  const categories = [
    { id: '1', name: 'Electronics', image: 'https://example.com/electronics.png' },
    { id: '2', name: 'Books', image: 'https://example.com/books.png' },
    { id: '3', name: 'Clothing', image: 'https://example.com/clothing.png' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal // Use horizontal={false} for vertical list
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  categoryItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35, // Circular image
  },
  categoryName: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default CategoryList;
