import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import CustomTextInput from '../../assests/UI/Input/TextInput';
import CustomButton from '../../assests/UI/Input/Button';
import adminLogo from '../../assests/images/logo.png';
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignInComponent = () => {
  const navigation = useNavigation();

  const handleSignIn = async (values) => {
    try {
      // Implement your sign-in logic here (e.g., Firebase Auth)
      const userData = { email: values.email };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      navigation.navigate('Home');
    } catch (error) {
      console.error('Failed to sign in:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSignIn}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
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
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.input}
            />
            {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>
            <CustomButton onPress={handleSubmit} label="Sign In" mode="elevated" />
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
});

export default SignInComponent;
