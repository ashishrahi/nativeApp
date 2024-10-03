import { View, Text } from 'react-native'
import React from 'react'
import CartItem from './CartItem'
import Appbar from '../../components/Appbar/Appbar'

export default function Cart() {

    return (
    <>
    <Appbar title="Cart List"/>
    <CartItem/>
    </>
  )
}