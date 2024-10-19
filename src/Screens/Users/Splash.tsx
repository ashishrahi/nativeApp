import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 1000); // Delay for 1000 milliseconds (1 second)

    return () => clearTimeout(timer); // Clean up the timeout on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assests/images/logo.png')} // Update with your image path
        style={styles.image} 
      />
      <Text style={styles.text}>Shopppy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150, // Adjust width as needed
    height: 150, // Adjust height as needed
    marginBottom: 20, // Space between image and text
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Splash;
