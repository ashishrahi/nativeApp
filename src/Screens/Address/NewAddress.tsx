import { View, Text } from 'react-native'
import React from 'react'
import CustomNewAddress from '../../components/Address/CustomNewAddress'
import Appbar from '../../components/Appbar/Appbar'
export default function NewAddress() {
  return (
    <>
    <Appbar/>
      <CustomNewAddress/>
    </>
  )
}