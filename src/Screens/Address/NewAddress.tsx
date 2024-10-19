import { View, Text } from 'react-native'
import React from 'react'
import CustomNewAddress from '../../components/Address/CustomNewAddress'
import Addressbar from '../../components/Appbar/Appbar'
export default function NewAddress() {
  return (
    <>
    <Addressbar title='Address'/>
      <CustomNewAddress/>
    </>
  )
}