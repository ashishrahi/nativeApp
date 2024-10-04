import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppThunk } from './store'; // assuming you have this setup

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}

interface CartState {
  products: CartItem[];
}

const initialState: CartState = {
  products: [],
};

// Helper function to save cart to AsyncStorage
const saveCartToStorage = async (cart: CartItem[]) => {
  try {
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart to storage:', error);
  }
};

// Helper function to load cart from AsyncStorage
const loadCartFromStorage = async (): Promise<CartItem[]> => {
  try {
    const cartData = await AsyncStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error('Failed to load cart from storage:', error);
    return [];
  }
};

// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.products.findIndex(product => product.id === action.payload.id);
      if (itemIndex >= 0) {
        state.products[itemIndex].quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      saveCartToStorage(state.products);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
      saveCartToStorage(state.products);
    },

    clearCart: (state) => {
      state.products = [];
      saveCartToStorage(state.products);
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const productIndex = state.products.findIndex(product => product.id === action.payload);
      if (productIndex >= 0) {
        state.products[productIndex].quantity += 1;
        saveCartToStorage(state.products);
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const productIndex = state.products.findIndex(product => product.id === action.payload);
      if (productIndex >= 0 && state.products[productIndex].quantity > 1) {
        state.products[productIndex].quantity -= 1;
        saveCartToStorage(state.products);
      }
    },

    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.products = action.payload;
    },
  },
});

// Thunk to load cart from AsyncStorage when app starts
export const loadCart = (): AppThunk => async (dispatch) => {
  const cartData = await loadCartFromStorage();
  dispatch(cartSlice.actions.setCart(cartData));
};

export const selectCartItemCount = (state: { cart: CartState }) => {
  return state.cart.products.reduce((total, product) => total + product.quantity, 0);
};

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity, setCart } = cartSlice.actions;
export default cartSlice.reducer;
