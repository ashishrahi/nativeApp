import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

// Import your logo image (make sure the path is correct)
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
            
            {/* Forgot Password link positioned below the Password field */}
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <Button onPress={handleSubmit} title="Sign In" />
            <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signupButton}>
              <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
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
  },
  input: {
    width: '100%',
    height: height * 0.06, // Responsive height
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: height * 0.02, // Responsive margin
    paddingHorizontal: width * 0.03, // Responsive padding
    borderRadius: 5, // Rounded corners for better aesthetics
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
});

export default LoginForm;
