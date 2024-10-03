import { View, Text } from 'react-native'
import React from 'react'
import Appbar from '../../components/Appbar/Appbar'
import WishItems from './WishItems'

const Wishlist = () => {
  return (
    <>
    <Appbar title="Wishlist"/>
      <WishItems/>
    </>
  )
}

export default Wishlist