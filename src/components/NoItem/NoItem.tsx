import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useSpring } from 'react-native-reanimated';

const EmptyCartAnimation = () => {
  const scale = useSpring(1, { damping: 5, stiffness: 100 });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Text style={styles.text}>Your cart is empty!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6347', // Customize the color
  },
});

export default EmptyCartAnimation;
