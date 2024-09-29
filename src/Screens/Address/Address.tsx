import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import CustomAddress from '../../components/Address/CustomAddress'
import Appbar from '../../components/Appbar/Appbar'
export default function Address() {
    
  return (
        <>
        <Appbar title={Address}/>
      <CustomAddress/>
    </>

  )
}