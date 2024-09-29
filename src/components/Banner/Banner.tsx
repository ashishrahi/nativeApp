import React, { useRef, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

// Adjust the path based on your project structure
const images = [
  require('../../assests/images/image1.jpg'), 
  require('../../assests/images/image2.jpg'),
  require('../../assests/images/image3.jpg'),
];

const ImageBanner = () => {
  const scrollViewRef = useRef<ScrollView>(null); // Ensure correct typing
  const scrollInterval = useRef<NodeJS.Timeout | null>(null); // Explicit typing for the interval

  useEffect(() => {
    const startAutoplay = () => {
      if (scrollViewRef.current) {
        let currentIndex = 0;

        scrollInterval.current = setInterval(() => {
          currentIndex = (currentIndex + 1) % images.length;
          scrollViewRef.current?.scrollTo({ x: currentIndex * width, animated: true });
        }, 3000); // Change image every 3 seconds
      }
    };

    startAutoplay();

    // Clean up the interval on component unmount
    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
        scrollInterval.current = null; // Avoid memory leaks
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200, // Set the height of the banner
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ImageBanner;
