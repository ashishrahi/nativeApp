import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TextInput as RNTextInput } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Button from '../../assests/UI/Input/Button';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../../store/authSlice';
import { useDispatch } from 'react-redux';

// Define types for form values
interface SignUpFormValues {
  email: string;
  username: string;
  password: string;
}

// Validation schema for the form
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignUpComponent: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch(); // Use the typed dispatch

  const initialValues: SignUpFormValues = { email: '', username: '', password: '' };

  const handleSubmit = (values: SignUpFormValues, { resetForm }: FormikHelpers<SignUpFormValues>) => {
    console.log(values);
    // Dispatch the registerUser action with the form values
    dispatch(registerUser(values));
    resetForm(); // Optionally reset the form after submission
    navigation.navigate('SignIn')
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assests/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Sign Up</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <RNTextInput
                placeholder="Enter your email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={[styles.input, { color: 'black' }]} // Apply text color
              />
              {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <RNTextInput
                placeholder="Enter your username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                style={[styles.input, { color: 'black' }]} // Apply text color
              />
              {errors.username && touched.username && <Text style={styles.error}>{errors.username}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <RNTextInput
                placeholder="Enter your password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                style={[styles.input, { color: 'black' }]} // Apply text color
              />
              {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}
            </View>

            <Button onPress={handleSubmit} label="Sign Up" style={styles.button} backgroundColor='blue' textColor='black' />
          </View>
        )}
      </Formik>

      {/* Additional Links */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account? 
          <Text 
            style={styles.signUpText} 
            onPress={() => navigation.navigate('SignIn')} // Navigate to SignIn
          >
            Sign In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2874f0',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2874f0',
    borderRadius: 5,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#000',
  },
  signUpText: {
    color: '#2874f0',
    fontWeight: 'bold',
  },
});

export default SignUpComponent;
