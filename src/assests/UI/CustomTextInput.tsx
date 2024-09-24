import { View, Text } from 'react-native'
import React from 'react'

export default function CustomTextInput({value,onChangeText,placeholder,icon,type}) {
  return (
    <View style={{
        width:'85%',
        height:50,
        borderWidth:0.5,
        borderRadius:10,
        alignSelf:'center',
        marginTop:30,
        flexDirection:'row',
        alignItems:'center'
    }}>
      <Text>CustomTextInput</Text>
    </View>
  )
}