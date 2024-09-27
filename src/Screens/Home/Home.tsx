import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import CustomBanner from '../../components/Banner/Banner'
import CategoryList from '../CategoryList/CategoryList'
export default function Main() {
  return (
    <>
     <Header/>
    <CustomBanner/>
    <CategoryList/>
    </>
  )
}