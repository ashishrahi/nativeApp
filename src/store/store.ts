// store/store.ts
import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './authSlice'; 
import {cartReducer} from './cartSlice';
import {wishlistReducer} from './wishlistSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
