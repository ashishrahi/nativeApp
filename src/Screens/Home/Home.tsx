import { View, FlatList } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import CustomBanner from '../../components/Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import Products from '../ProductList/Products';

export default function Home() {
  const renderProducts = () => <Products />;

  return (
    <FlatList
      data={[]}
      keyExtractor={() => 'key'}
      renderItem={null}
      ListHeaderComponent={
        <>
          <Header />
          <CustomBanner />
          <CategoryList />
        </>
      }
      ListFooterComponent={renderProducts}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}
