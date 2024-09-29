import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../assests/UI/Input/Button'; // Corrected path
import TextInput from '../../assests/UI/Input/TextInput'; // Corrected path

// Validation schema using Yup
const AddressSchema = Yup.object().shape({
  street: Yup.string().required('Street is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().required('Zip Code is required').matches(/^\d{5}$/, 'Must be a valid zip code'),
});

const AddressForm = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Formik
        initialValues={{ street: '', city: '', state: '', zipCode: '' }}
        validationSchema={AddressSchema}
        onSubmit={(values) => {
          console.log(values); // Check values here
          // Handle form submission
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <Text>Street Address</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('street')}
              onBlur={handleBlur('street')}
              value={values.street}
              placeholder="Enter Street Address"
            />
            {touched.street && errors.street && <Text style={styles.error}>{errors.street}</Text>}

            <Text>City</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              value={values.city}
              placeholder="Enter City"
            />
            {touched.city && errors.city && <Text style={styles.error}>{errors.city}</Text>}

            <Text>State</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('state')}
              onBlur={handleBlur('state')}
              value={values.state}
              placeholder="Enter State"
            />
            {touched.state && errors.state && <Text style={styles.error}>{errors.state}</Text>}

            <Text>Zip Code</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('zipCode')}
              onBlur={handleBlur('zipCode')}
              value={values.zipCode}
              placeholder="Enter Zip Code"
              keyboardType="numeric"
            />
            {touched.zipCode && errors.zipCode && <Text style={styles.error}>{errors.zipCode}</Text>}

            <Button onPress={handleSubmit} label="Submit" />
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
  error: {
    color: 'red',
  },
});

export default AddressForm;
