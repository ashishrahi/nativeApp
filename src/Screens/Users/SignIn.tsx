import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import CustomTextInput from '../../assests/UI/Input/TextInput'; // Assuming you have a custom input component
import CustomButton from '../../assests/UI/Input/Button'; // Assuming this is your button component
import adminLogo from '../../assests/images/logo.png'; // Add path to your admin logo image
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
// Validation schema for Sign In
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignInComponent = () => {
  const navigation = useNavigation(); // Get the navigation object

  const handleSignIn = async (values) => {
    console.log(values);
    // Simulate an API call to authenticate the user
    try {
      // Example: Save user data or token after successful authentication
      const userData = { email: values.email }; // Replace with actual user data from your API
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      // Optionally navigate to a different screen after successful login
      navigation.navigate('Home'); // Change to your home screen
    } catch (error) {
      console.error('Failed to save user data:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSignIn} // Use the handleSignIn function
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            {/* Admin Logo */}
            <Image source={adminLogo} style={styles.logo} />

            <CustomTextInput
              label="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
            />
            {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

            <CustomTextInput
              label="Password"
              secureTextEntry={true}  // Show password as dots
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.input}
            />
            {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}
            
            {/* Forgot Password */}
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>

            <CustomButton onPress={handleSubmit} label="Sign In" mode="elevated" />

            {/* Sign Up */}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.linkTexts}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
    rowGap: 12,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    textDecorationColor: 'black',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  linkText: {
    color: '#007BFF',
    textAlign: 'right',
    marginBottom: 12,
  },
  linkTexts: {
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 12,
  },
  adminText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Adjust color as needed
  },
});

export default SignInComponent;
