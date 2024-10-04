import { View, Text } from 'react-native'
import React from 'react'
import CartItem from '../../components/CartItems/CartItems'
import AppBar from '../../components/Appbar/Appbar'
export default function CartList() {
  return (
    <>
    <AppBar title='Cart List'/>
      <CartItem/>
    </>
  )
}