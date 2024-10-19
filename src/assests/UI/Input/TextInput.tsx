import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface MyTextInputProps {
  label: string;
  placeholder: string;
  maxLength?: number;
}

const MyTextInput: React.FC<MyTextInputProps> = ({ label, placeholder, maxLength = 40 }) => {

  return (
    <TextInput
      mode="outlined"
      label={label}
      placeholder={placeholder}
      right={<TextInput.Affix text={`/${maxLength}`} />}
      maxLength={maxLength}
      style={styles.input}
       placeholderTextColor="#888"
      theme={{
        colors: {
          primary: 'black', // Border color
          placeholder: 'black', // Placeholder color
          text: 'black', // Input text color
          background: 'white', // Background color
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff', 
    color:'black',
    // Adding color here is not necessary since the theme handles it
  },
});

export default MyTextInput;
