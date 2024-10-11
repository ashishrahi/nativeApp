import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, View, StyleSheet } from 'react-native';

const MyAppBar = () => {
  
  const handleBack = () => console.log('Back action pressed');
  const handleSearch = () => console.log('Search action pressed');
  const handleMore = () => console.log('More options pressed');
  const handleCart = () => console.log('Cart action pressed');

  return (
    <Appbar.Header>
      {/* Back Icon */}
      <Appbar.BackAction onPress={handleBack} />

      {/* Logo and App Title */}
      <View style={styles.titleContainer}>
        <Image
          source={require('../../assests/images/logo.png')} // Corrected path
          style={styles.logo}
        />
        <Appbar.Content title="Shooppy" subtitle="Your E-commerce Subtitle" />
      </View>

      {/* Search Icon */}
      <Appbar.Action icon="magnify" onPress={handleSearch} />
      
      {/* Cart Icon */}
      <Appbar.Action icon="cart" onPress={handleCart} />
      
      {/* Menu Icon */}
      <Appbar.Action icon="dots-vertical" onPress={handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,  // Adjust as needed
    height: 40, // Adjust as needed
    marginRight: 8, // Space between logo and title
  },
});

export default MyAppBar;
