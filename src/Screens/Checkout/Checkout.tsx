import { View, Text } from 'react-native'
import React from 'react'
import CustomCheckout from '../../components/CustomCheckout/CustomCheckout'
import Appbar from '../../components/Appbar/Appbar'
export default function Checkout() {
  return (
    <>
      <Appbar  title='Checkout'/>
      <CustomCheckout/>
    </>
  )
}