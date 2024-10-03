import * as React from 'react';
import { Button } from 'react-native-paper';

type CustomButtonProps = {
  icon: string;
  mode: 'text' | 'outlined' | 'contained';
  onPress: () => void;
  label: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ icon, mode, onPress, label }) => {
  return (
    <Button icon={icon} mode={mode} onPress={onPress}>
      {label}
    </Button>
  );
};

export default CustomButton;
