import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  // Sign out function
  const handleSignOut = () => {
    // Implement your sign-out logic here
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          // Clear user data, tokens, etc.
          // For example: AsyncStorage.removeItem('userToken');
          navigation.navigate('SignIn'); // Navigate to login screen or wherever appropriate
        },
      },
    ]);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'black', fontWeight: '600', fontSize: 18, marginLeft: 15 }}>
          Profile
        </Text>
        {/* Settings */}
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={require('../../assests/images/settings.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assests/images/profile.png')}
        style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 50 }}
      />
      <Text
        style={{
          color: 'black',
          alignSelf: 'center',
          marginTop: 20,
          fontSize: 18,
          fontWeight: '600',
        }}
      >
        John Doe
      </Text>
      {/* Address */}
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('Address');
        }}
      >
        <Text style={{ color: 'black', marginLeft: 10 }}>Address</Text>
      </TouchableOpacity>
      {/* Contact */}
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          borderBottomWidth: 0.3,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'black', marginLeft: 10 }}>Contact</Text>
      </TouchableOpacity>
      {/* My Orders */}
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          borderBottomWidth: 0.3,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('Orders');
        }}
      >
        <Text style={{ color: 'black', marginLeft: 10 }}>Orders</Text>
      </TouchableOpacity>
      {/* Offers */}
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          borderBottomWidth: 0.3,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'black', marginLeft: 10 }}>Offers</Text>
      </TouchableOpacity>
      {/* Sign Out Button */}
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={handleSignOut}
      >
        <Text style={{ color: 'red' }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
