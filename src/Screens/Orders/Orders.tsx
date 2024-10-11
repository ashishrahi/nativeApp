import { View, Text } from 'react-native'
import React from 'react'
import CustomOrders from '../../components/CustomOrders/CustomOrders'
import Appbar from '../../components/Appbar/Appbar'
export default function Orders() {
  return (
    <>
    <Appbar title='Orders List'/>
      <CustomOrders/>
    </>
  )
}