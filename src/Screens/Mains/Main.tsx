import { View, Text, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../../Screens/CartList/CartList';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../../store/store'; // Assuming this is the correct import

export default function Main() {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectCartItemCount = (state: { cart: CartState }) => {
    return state.cart.products.length;
  };
  const cartItemCount = useSelector(selectCartItemCount); 
  const bounceValue = useRef(new Animated.Value(1)).current;

  const handleTabPress = (tabIndex: number) => {
    // Start bounce animation
    Animated.sequence([
      Animated.spring(bounceValue, {
        toValue: 1.2, // scale up
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.spring(bounceValue, {
        toValue: 1, // scale back to normal
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
    
    setSelectedTab(tabIndex);
  };

  return (
    <View style={styles.container}>
      {selectedTab === 0 ? <Home /> : selectedTab === 1 ? <Search /> : selectedTab === 2 ? <Cart /> : selectedTab === 3 ? <Wishlist /> : <Profile />}

      <View style={styles.bottomBar}>
      
        {/* Home */}
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleTabPress(0)}>
          <Animated.Image
            source={require('../../assests/images/home.png')}
            style={[styles.icon, { tintColor: selectedTab === 0 ? '#ffa700' : 'gray', transform: [{ scale: selectedTab === 0 ? bounceValue : 1 }] }]}
          />
          <Text style={{ color: selectedTab === 0 ? '#ffa700' : 'gray' }}>Home</Text>
        </TouchableOpacity>

        {/* Search */}
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleTabPress(1)}>
          <Animated.Image
            source={require('../../assests/images/search.png')}
            style={[styles.icon, { tintColor: selectedTab === 1 ? '#ffa700' : 'gray', transform: [{ scale: selectedTab === 1 ? bounceValue : 1 }] }]}
          />
          <Text style={{ color: selectedTab === 1 ? '#ffa700' : 'gray' }}>Search</Text>
        </TouchableOpacity>

        {/* Center Button (Custom) */}
        <View style={styles.centerButtonContainer}>
          <TouchableOpacity style={styles.centerButton} onPress={() => handleTabPress(2)}>
            <Animated.Image
              source={require('../../assests/images/bag.png')}
              style={[styles.centerIcon, { tintColor: selectedTab === 2 ? '#ffa700' : '#fff', transform: [{ scale: selectedTab === 2 ? bounceValue : 1 }] }]}
            />
           
            {/* Dynamic Badge */}
            {cartItemCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartItemCount}</Text>
              </View>
            )}
            <Text style={{ color: selectedTab === 2 ? '#ffa700' : 'gray' }}>Checkout</Text>
          </TouchableOpacity>
        </View>

        {/* Wishlist */}
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleTabPress(3)}>
          <Animated.Image
            source={require('../../assests/images/wishlist.png')}
            style={[styles.icon, { tintColor: selectedTab === 3 ? '#ffa700' : 'gray', transform: [{ scale: selectedTab === 3 ? bounceValue : 1 }] }]}
          />
          <Text style={{ color: selectedTab === 3 ? '#ffa700' : 'gray' }}>Wishlist</Text>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleTabPress(4)}>
          <Animated.Image
            source={require('../../assests/images/user.png')}
            style={[styles.icon, { tintColor: selectedTab === 4 ? '#ffa700' : 'gray', transform: [{ scale: selectedTab === 4 ? bounceValue : 1 }] }]}
          />
          <Text style={{ color: selectedTab === 4 ? '#ffa700' : 'gray' }}>User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBar: {
    width: '100%',
    height: 70,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  centerButtonContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 10,
  },
  centerIcon: {
    width: 30,
    height: 30,
  },
  badge: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
