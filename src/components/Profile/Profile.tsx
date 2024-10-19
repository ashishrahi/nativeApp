import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing icons

const Profile = () => {
  const navigation = useNavigation();

  // Sign out function
  const handleSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          // Clear user data, tokens, etc.
          navigation.navigate('SignIn');
        },
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
          {/* Settings with icon */}
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Settings')} // Navigate to settings screen
          >
            <Icon name="settings-outline" size={24} color="black" />
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
        {/* Address with icon */}
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            borderBottomWidth: 0.3,
            marginTop: 20,
            borderBottomColor: '#8e8e8e',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Address')}
        >
          <Icon name="location-outline" size={20} color="black" style={{ marginLeft: 10 }} />
          <Text style={{ color: 'black', marginLeft: 10 }}>Address</Text>
        </TouchableOpacity>
        {/* Contact with icon */}
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            borderBottomWidth: 0.3,
            borderBottomColor: '#8e8e8e',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Icon name="call-outline" size={20} color="black" style={{ marginLeft: 10 }} />
          <Text style={{ color: 'black', marginLeft: 10 }}>Contact</Text>
        </TouchableOpacity>
        {/* My Orders with icon */}
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            borderBottomWidth: 0.3,
            borderBottomColor: '#8e8e8e',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Orders')}
        >
          <Icon name="list-outline" size={20} color="black" style={{ marginLeft: 10 }} />
          <Text style={{ color: 'black', marginLeft: 10 }}>Orders</Text>
        </TouchableOpacity>
        {/* Offers with icon */}
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            borderBottomWidth: 0.3,
            borderBottomColor: '#8e8e8e',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Icon name="star-outline" size={20} color="black" style={{ marginLeft: 10 }} />
          <Text style={{ color: 'black', marginLeft: 10 }}>Offers</Text>
        </TouchableOpacity>
        {/* Sign Out Button with icon */}
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            flexDirection: 'row', // Align icon and text in a row
          }}
          onPress={handleSignOut}
        >
          <Icon name="log-out-outline" size={20} color="red" style={{ marginRight: 10 }} />
          <Text style={{ color: 'red' }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
