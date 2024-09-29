// CustomTextInput.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  error,
  ...props
}) => {
  return (
    <PaperTextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined" // or "flat"
      error={!!error}
      style={styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
});

export default CustomTextInput;
