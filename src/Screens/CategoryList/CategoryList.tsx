import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import {Categories} from '../../assests/data'; // Adjust the path as necessary

const CategoryList = () => {

  const renderItem = ({ item }) => (
  
  <View style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage}  />
      <Text style={styles.categoryName}>{item.name}</Text>
      <Text style={styles.categoryDescription}>{item.description}</Text>

    </View>
  );

  return (
    <>
    <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginTop:10,marginBottom:10,textAlign:'center'}}> Categories</Text>
    <FlatList
      data={Categories}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
    </>
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
    color: 'black',
  },
  categoryDescription: {
    marginTop: 95,
    fontSize: 14, // Slightly smaller for distinction
    color: 'grey', // Changed color for visual hierarchy
  }
});

export default CategoryList; 