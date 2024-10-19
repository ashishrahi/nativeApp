import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

type CustomButtonProps = {
  icon: string;
  mode: 'text' | 'outlined' | 'contained';
  onPress: () => void;
  label: string;
  color?: string; // Optional color prop
};

const CustomButton: React.FC<CustomButtonProps> = ({ icon, mode, onPress, label, color, backgroundColor,textColor }) => {
  return (
    <Button icon={icon} textColor='white' mode={mode} onPress={onPress} color={color} style={[styles.button, { backgroundColor }]}>
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    // Add any additional styling if needed
  },
});

export default CustomButton;
