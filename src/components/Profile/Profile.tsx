import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Address from '../../Screens/Address/Address';

const Profile = () => {
const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <View 
      style={{
        width:'100%',
        height:70,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
        }}>
    <Text style={{color:'black',fontWeight:'600',fontSize:18,marginLeft:15}}>Profile</Text>
   {/* Settings */}
    <TouchableOpacity 
    style={{
      width:30,
      height:30,
      marginRight:20,
      justifyContent:'center',
      alignItems:'center'}}>
<Image source={require('../../assests/images/settings.png')} style={{width:24,height:24}}/>
    </TouchableOpacity>
    </View>
    <Image source={require('../../assests/images/profile.png')} style={{width:80,height:80,alignSelf:'center',marginTop:50}}/>
    <Text style={{
      color:'black',
      alignSelf:'center',
      marginTop:20,
      fontSize:18,
      fontWeight:600
      }}> John Doe </Text>
      {/* Address */}
      <TouchableOpacity style=
      {{width:'100%',
      height:50,
      borderBottomWidth:.3,
      marginTop:20,
      borderBottomColor:'#8e8e8e',
      justifyContent:'center'}} onPress={()=>{navigation.navigate('Address')}}>
      <Text style={{color:'black',marginLeft:10}}>Address</Text>
      </TouchableOpacity>
         {/* Contact */}
         <TouchableOpacity style={{width:'100%',height:50,borderBottomWidth:.3,borderBottomColor:'#8e8e8e',justifyContent:'center'}}>
      <Text style={{color:'black',marginLeft:10}}>Contact</Text>
      </TouchableOpacity>
         {/* MyOrders */}
         <TouchableOpacity style={{width:'100%',height:50,borderBottomWidth:.3,borderBottomColor:'#8e8e8e',justifyContent:'center'}}>
      <Text style={{color:'black',marginLeft:10}}>Orders</Text>
      </TouchableOpacity>
       {/* Offers */}
       <TouchableOpacity style={{width:'100%',height:50,borderBottomWidth:.3,borderBottomColor:'#8e8e8e',justifyContent:'center'}}>
      <Text style={{color:'black',marginLeft:10}}>Offers</Text>
      </TouchableOpacity>
    </View>
  )
}
// Profile

export default Profile