import { View } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import CustomBanner from '../../components/Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import Products from '../ProductList/Products';

export default function Home() {
  return (
    <View >
      <Header />
        <CustomBanner />
        <CategoryList />
        <Products />
    </View>
  );
}
