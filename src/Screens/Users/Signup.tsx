import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../assests/UI/Input/TextInput'; // Custom input component
import CustomButton from '../../assests/UI/Input/Button'; // Custom button component
import adminLogo from '../../assests/images/logo.png'; // Path to your admin logo image
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// Validation schema for Sign Up
const validationSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required*'),
  email: Yup.string().email('Invalid email').required('Email is required*'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required*'),
  repassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});

const SignupComponent = () => {
  const navigation = useNavigation(); // Get the navigation object
  const [loading, setLoading] = useState(false); // State to track loading

  // Function to store user data in AsyncStorage
  const storeUserData = async (values) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(values));
      console.log('User data stored successfully:', values);
    } catch (error) {
      console.error('Error storing user data:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{ email: '', password: '', repassword: '', username: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          setLoading(true); // Start loading
          console.log(values);
          // Simulate API call
          setTimeout(async () => {
            await storeUserData(values); // Store user data in AsyncStorage
            setLoading(false); // Stop loading
            // Handle navigation after successful signup
            navigation.navigate('Home'); // Navigate to Home or any other screen
          }, 2000); // Simulate a 2-second API call
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            {/* Admin Logo with Administration Text */}
            <View style={styles.logoContainer}>
              <Image source={adminLogo} style={styles.logo} />
              <Text style={styles.adminText}>Shooopy</Text>
            </View>

            {/* Username */}
            <CustomTextInput
              label="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              style={styles.input}
            />
            {errors.username && touched.username && <Text style={styles.error}>{errors.username}</Text>}

            {/* Email */}
            <CustomTextInput
              label="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
            />
            {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

            {/* Password */}
            <CustomTextInput
              label="Password"
              secureTextEntry={true}  // Show password as dots
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.input}
            />
            {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

            {/* Confirm Password */}
            <CustomTextInput
              label="Confirm Password"
              secureTextEntry={true}  // Show confirm password as dots
              onChangeText={handleChange('repassword')}
              onBlur={handleBlur('repassword')}
              value={values.repassword}
              style={styles.input}
            />
            {errors.repassword && touched.repassword && <Text style={styles.error}>{errors.repassword}</Text>}

            {/* Sign Up Button */}
            <CustomButton onPress={handleSubmit} label="Sign Up" mode="elevated" />
            
            {/* Circular Progress Indicator */}
            {loading && (
              <ActivityIndicator size="large" color="#007BFF" style={styles.loadingIndicator} />
            )}

            {/* Sign In Link */}
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.linkText}>You have an account? Sign In</Text>
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
    flexGrow: 1, // Allow content to grow
    justifyContent: 'center',
    rowGap: 12,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  adminText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Adjust color as needed
  },
  input: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  linkText: {
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 12,
  },
  loadingIndicator: {
    marginTop: 16,
    alignSelf: 'center', // Center the loading indicator
  },
});

export default SignupComponent;
