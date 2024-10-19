import { View, Text } from 'react-native'
import React from 'react'
import CustomProfile from '../../components/Profile/Profile'
import ProfileBar from '../../components/Appbar/Appbar'
export default function Profile() {
  return (
    <>
     <ProfileBar title="Profile"/>
      <CustomProfile/>
    </>
  )
}