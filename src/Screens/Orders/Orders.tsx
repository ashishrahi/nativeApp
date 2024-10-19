import { View, Text } from 'react-native'
import React from 'react'
import CustomOrders from '../../components/CustomOrders/CustomOrders'
import Orderbar from '../../components/Appbar/Appbar'
export default function Orders() {
  return (
    <>
    <Orderbar title='Orders List'/>
      <CustomOrders/>
    </>
  )
}