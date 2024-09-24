import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

// Import your logo image (make sure the path is correct)
import logo from '../../assests/images/logo.png'; // Update this path to your logo

const AuthForm = () => {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const signupValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <View style={styles.container}>
      {/* Header with logo and title */}
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
      </View>

      {/* Formik for Login and Signup */}
      <Formik
        initialValues={isLogin ? { email: '', password: '' } : { email: '', password: '', confirmPassword: '' }}
        validationSchema={isLogin ? loginValidationSchema : signupValidationSchema}
        onSubmit={values => console.log(values)} // Handle signup/login logic here
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            {!isLogin && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </>
            )}
            <Button onPress={handleSubmit} title={isLogin ? 'Sign In' : 'Sign Up'} />
            
            {/* Toggle between Sign In and Sign Up */}
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.toggleButton}>
              <Text style={styles.toggleText}>
                {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
              </Text>
            </TouchableOpacity>
          </View>
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
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20, // Space between header and form
  },
  logo: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
  },
  title: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold',
    marginTop: 10, // Space between logo and title
  },
  formContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
  toggleButton: {
    marginTop: 20,
  },
  toggleText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default AuthForm;
