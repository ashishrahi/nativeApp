import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, TouchableRipple } from 'react-native-paper'; // Importing React Native Paper components

import logo from '../../assests/images/logo.png'; // Replace with your actual logo path

const { width, height } = Dimensions.get('window');

const LoginForm = () => {
  const navigation = useNavigation();

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <View style={styles.container}>
      {/* Header with logo and title */}
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Sign In</Text>
      </View>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              label="Email"
              mode="outlined"
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              error={errors.email && touched.email}
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              label="Password"
              mode="outlined"
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              error={errors.password && touched.password}
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            
            {/* Forgot Password link positioned below the Password field */}
            <TouchableRipple onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableRipple>

            <Button mode="contained" onPress={handleSubmit} style={styles.signInButton}>
              Sign In
            </Button>

            <TouchableRipple onPress={() => navigation.navigate('Signup')} style={styles.signupButton}>
              <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
            </TouchableRipple>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05, // Responsive padding
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: height * 0.05, // Responsive margin
  },
  logo: {
    width: width * 0.25, // Responsive width
    height: height * 0.15, // Responsive height
  },
  title: {
    fontSize: width * 0.06, // Responsive font size
    fontWeight: 'bold',
    marginTop: height * 0.02, // Responsive margin
    color:'red',
  },
  input: {
    width: '100%',
    marginBottom: height * 0.02, // Responsive margin
  },
  errorText: {
    fontSize: width * 0.03, // Responsive font size
    color: 'red',
    alignSelf: 'flex-start', // Align error text to the left
    marginBottom: height * 0.01, // Responsive margin
  },
  signupButton: {
    marginTop: height * 0.02, // Responsive margin
  },
  signupText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  forgotPasswordButton: {
    marginTop: height * 0.01, // Responsive margin
    alignSelf: 'flex-end', // Align to the right
  },
  forgotPasswordText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  signInButton: {
    marginTop: height * 0.03, // Responsive margin
    width: '100%',
  },
});

export default LoginForm;
