import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

const ProductCard = ({ product,onAddToCart  }) => {
    return (
        <View style={styles.card}>
            <Image source={product.image} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <TouchableOpacity style={styles.button} onPress={() => onAddToCart(product)}>
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
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    price: {
        fontSize: 16,
        color: 'green',
        marginTop: 5,
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
