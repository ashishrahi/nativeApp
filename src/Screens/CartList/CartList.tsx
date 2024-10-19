import { View, Text } from 'react-native'
import React from 'react'
import CartItem from '../../components/CartItems/CartItems'
import CartBar from '../../components/Appbar/Appbar'

export default function CartList() {

  return (
    <>
    <CartBar title='Cart List'  />
      <CartItem/>
    </>
  )
}