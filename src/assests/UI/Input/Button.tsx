import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CustomButton = () => {
  return (
    <Button
      mode="contained" // Can be 'text', 'outlined', or 'contained'
    //   icon="camera"    // Optional, adds an icon to the button
      onPress={() => console.log('Button Pressed')}
      contentStyle={styles.buttonContent} // Style for content within the button
      label={styles.buttonLabel} // Style for the label/text in the button
      style={styles.button} // Style for the button itself
      textColor='black'
      />
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    borderRadius: 20, // Rounded corners
  },
  buttonContent: {
    height: 50, // Adjust height of the button
    color:'black',
  },
  buttonLabel: {
    fontSize: 18, // Adjust font size
    color: 'black', // Custom label color
  },
});

export default CustomButton;
