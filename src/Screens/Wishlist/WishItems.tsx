import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Wishlist = () => {
  // Sample wishlist data
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: 'Wishlist Item 1',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Wishlist Item 2',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
    },
    // More items
  ]);

  // Remove item from wishlist
  const removeFromWishlist = (id: number) => {
    setWishlistItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // Move item to cart (for this example, just remove from wishlist)
  const moveToCart = (id: number) => {
    removeFromWishlist(id);
    // Logic to add the item to the cart could go here
  };

  const renderWishlistItem = ({ item }: { item: WishlistItem }) => (
    <View style={styles.wishlistItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => moveToCart(item.id)} style={styles.moveToCartButton}>
          <Text style={styles.moveToCartButtonText}>Move to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeFromWishlist(item.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlistItems}
        renderItem={renderWishlistItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>Your wishlist is empty</Text>}
      />
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  wishlistItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moveToCartButton: {
    backgroundColor: '#28a745',
    padding: 8,
    borderRadius: 5,
    marginRight: 8,
  },
  moveToCartButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  removeButton: {
    backgroundColor: '#ff6347',
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});
