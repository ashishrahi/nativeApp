import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import api from '../../utilities/config';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories'); // Replace with your actual API endpoint
        setCategories(response.data); // Assuming response.data is the array of categories
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.categoryname}</Text>
      <Text style={styles.categoryDescription}>{item.categorydescription}</Text>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
  }

  if (error) {
    return <Text style={styles.errorText}>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} // Use index as a fallback
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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
    color: 'black',
  },
  categoryDescription: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 24,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CategoryList;
