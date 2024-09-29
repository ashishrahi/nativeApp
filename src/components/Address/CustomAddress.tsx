import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Address() {
    const navigation = useNavigation()
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
    <Text style={{color:'black',fontWeight:'600',fontSize:18,marginLeft:15,}}>My Address</Text>
   {/* Settings */}
    <TouchableOpacity 
    style={{
      marginRight:20,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:.2,
      padding:5,
      borderRadius:10,
      
      }} onPress={()=>{navigation.navigate('NewAddress')}}>
<Text style={{color:'black',fontWeight:'600',fontSize:13}}>Add Address</Text>
    </TouchableOpacity>
    </View>
    </View>

  )
}