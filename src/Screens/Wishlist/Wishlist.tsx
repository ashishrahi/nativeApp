import { View, Text } from 'react-native'
import React from 'react'
import Wishbar from '../../components/Appbar/Appbar'
import WishItems from './WishItems'

const Wishlist = () => {
  return (
    <>
    <Wishbar title="Wishlist"/>
      <WishItems/>
    </>
  )
}

export default Wishlist