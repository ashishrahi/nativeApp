import React, { useState, Suspense, lazy, useMemo } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { BottomNavigation, IconButton, Badge } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../../store/cartSlice';

// Lazy load components
const Home = lazy(() => import('../Home/Home'));
const Search = lazy(() => import('../Search/Search'));
const Profile = lazy(() => import('../Profile/Profile'));
const Wishlist = lazy(() => import('../Wishlist/Wishlist'));
const Cart = lazy(() => import('../../Screens/CartList/CartList'));

const Main = () => {
  const cartItemCount = useSelector(selectCartItemCount);
  const [index, setIndex] = useState(0);

  // Memoizing the navigation state to avoid unnecessary re-renders
  const navigationState = useMemo(() => ({
    index,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'search', title: 'Search', icon: 'magnify' },
      { key: 'cart', title: 'Cart', icon: 'cart' },
      { key: 'wishlist', title: 'Wishlist', icon: 'heart' },
      { key: 'profile', title: 'Profile', icon: 'account' },
    ],
  }), [index]);

  // Memoizing the renderScene function
  const renderScene = useMemo(() => BottomNavigation.SceneMap({
    home: () => (
      <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
        <Home />
      </Suspense>
    ),
    search: () => (
      <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
        <Search />
      </Suspense>
    ),
    cart: () => (
      <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
        <Cart />
      </Suspense>
    ),
    wishlist: () => (
      <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
        <Wishlist />
      </Suspense>
    ),
    profile: () => (
      <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
        <Profile />
      </Suspense>
    ),
  }), []);

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={navigationState}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.barStyle}
        activeColor="blue"
        inactiveColor="gray"
        labeled={true}
        labelStyle={styles.labelStyle}
        renderIcon={({ route, color }) => (
          <View style={styles.iconContainer}>
            <IconButton
              icon={route.icon}
              size={24} // Keep a consistent icon size
              color={color}
              style={styles.iconButton} // To ensure proper centering
            />
            {route.key === 'cart' && cartItemCount > 0 && (
              <Badge style={styles.badge}>{cartItemCount}</Badge>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    backgroundColor: 'white',
  },
  barStyle: {
    backgroundColor: 'black',
    elevation: 8,
  },
  labelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    position: 'relative',
  },
  iconButton: {
    padding: 0, // Remove padding to improve alignment
  },
  badge: {
    position: 'absolute',
    top: -8, // Adjust top position of badge
    right: -8, // Adjust right position of badge
    backgroundColor: 'red', // Change badge color if needed
  },
});

export default Main;
