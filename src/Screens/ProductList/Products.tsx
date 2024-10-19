import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Products } from '../../assests/data'; // Corrected the folder name
import ProductCard from '../../assests/UI/dataDisplay/ProductCard'; 
import { addToCart } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

const ProductList = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product, quantity) => {
        // Create the cart item with the required structure
        const cartItem = {
            ...product, // Spread the product properties
            quantity, // Add the quantity as a separate key
        };

        console.log("Added to cart:", cartItem);
        dispatch(addToCart(cartItem)); // Dispatch the formatted object
    };

    const { width } = Dimensions.get('window');
    const numColumns = Math.floor(width / 150); // Adjust 150 to your card width

    const handlePress = (item) => {
        // Handle the press event, like navigation or any action
        console.log('Product selected:', item);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            onPress={() => handlePress(item)} 
            activeOpacity={0.7} // Change opacity when pressed
        >
            <View style={styles.cardContainer}>
                <ProductCard product={item} onAddToCart={handleAddToCart} />
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={Products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()} // Ensure id is unique
            numColumns={numColumns}
            contentContainerStyle={styles.listContainer}
            scrollEnabled={true} // Allow FlatList scrolling
            ListEmptyComponent={
                <Text style={styles.emptyMessage}>No products available.</Text> // Message for empty list
            }
        />
    );
};

// Product Style
const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
    cardContainer: {
        flex: 1,
        margin: 5, // Adjust spacing between cards
        maxWidth: 150, // Set a max width to prevent stretching
    },
    emptyMessage: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default ProductList;
