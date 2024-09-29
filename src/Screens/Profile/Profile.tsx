import { View, Text } from 'react-native'
import React from 'react'
import CustomProfile from '../../components/Profile/Profile'
import AppBar from '../../components/Appbar/Appbar'
export default function Profile() {
  return (
    <>
     <AppBar title="Profile"/>
      <CustomProfile/>
    </>
  )
}