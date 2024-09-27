import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.bottomBar}>
        {/* Home */}
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require('../../assests/images/home.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Search */}
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require('../../assests/images/search.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Center Button (Custom) */}
        <View style={styles.centerButtonContainer}>
          <TouchableOpacity style={styles.centerButton}>
            <Image
              source={require('../../assests/images/bag.png')}
              style={styles.centerIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Shop */}
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require('../../assests/images/wishlist.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require('../../assests/images/user.png')}
            style={styles.icon}
          />
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
    backgroundColor: '#fff',
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
    width: 40,
    height: 40,
  },
  centerButtonContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 10, // elevates the button slightly above the bottom bar
  },
  centerIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff', // Ensures that the icon contrasts with the black background
  },
});
