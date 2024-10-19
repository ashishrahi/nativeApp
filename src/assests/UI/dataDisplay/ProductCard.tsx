import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <View style={styles.card}>
            <Image source={product.image} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>{product.price}</Text>
            
            <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
                    <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
                    <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => onAddToCart(product, quantity)}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );  
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3, // Shadow effect on Android
        padding: 10,
        margin: 10,
        width: 150, // Adjust based on your design
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'black', // Set text color to black
    },
    description: {
        fontSize: 14,
        color: 'black', // Set text color to black
        textAlign: 'center',
    },
    price: {
        fontSize: 16,
        color: 'black', // Set text color to black
        marginTop: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    quantityButton: {
        backgroundColor: 'lightgray', // Button color for quantity
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    quantityButtonText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    quantityText: {
        fontSize: 16,
        marginHorizontal: 10,
        color: 'black', // Set text color to black
    },
    button: {
        backgroundColor: 'blue', // Button color
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ProductCard;
