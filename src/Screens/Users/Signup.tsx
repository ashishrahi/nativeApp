import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import adminLogo from '../../assests/images/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import CustomButton from '../../assests/UI/Input/Button'; // Custom button component
import Icon from 'react-native-vector-icons/Ionicons';
import { registerUser } from '../../store/authSlice';

// Validation schema for Sign Up
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required*'),
  email: Yup.string().email('Invalid email').required('Email is required*'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required*'),
});

const SignupComponent = () => {
  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(''); // State for error messages

  const handleSubmit = (values) => {
    setLoading(true); 
    setError(''); 
    try {
       dispatch(registerUser(values)); 
      console.log(values)
      navigation.navigate('SignIn'); // Navigate to Sign In
    } catch (error) {
      console.error('Registration failed:', error); // Log error
      setError('Registration failed. Please try again.'); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            {/* Admin Logo with Administration Text */}
            <View style={styles.logoContainer}>
              <Image source={adminLogo} style={styles.logo} />
              <Text style={styles.adminText}>Shooopy</Text>
            </View>

            {/* Username */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              {touched.username && errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}
            </View>

            {/* Email */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="#007BFF" />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
            </View>

            {/* Error Message */}
            {error ? <Text style={styles.error}>{error}</Text> : null}

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
    flexGrow: 1,
    justifyContent: 'center',
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
    color: '#000',
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#000',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: '#000',
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
  linkText: {
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 12,
  },
  loadingIndicator: {
    marginTop: 16,
    alignSelf: 'center',
  },
});

export default SignupComponent;
