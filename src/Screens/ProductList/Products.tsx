import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Products } from '../../assests/data'; 
import ProductCard from '../../assests/UI/dataDisplay/ProductCard'; 
import { addToCart } from '../../store/cartSlice';
import { useDispatch} from 'react-redux';

const ProductList = () => {

    const dispatch = useDispatch();


    const handleAddToCart = async(products) => {
        console.log("Added to cart:", products);
dispatch(addToCart(products))
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
        <>
            <Text style={styles.title}>Products</Text>
            <FlatList
                data={Products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={numColumns}
                contentContainerStyle={styles.listContainer}
            />
        </>
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
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default ProductList;
