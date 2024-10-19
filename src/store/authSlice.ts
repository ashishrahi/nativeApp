import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../utilities/config';

// Define the types for user and initial state
interface User {
  email: string;
  username: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  token: string | null;
  tokenExpiresAt: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  status: 'idle',
  error: null,
  token: null,
  tokenExpiresAt: null,
};

// Helper function to check if the token is expired
const isTokenExpired = (expiresAt: string | null): boolean => {
  if (!expiresAt) return true;
  return new Date() > new Date(expiresAt);
};

// Register user thunk
export const registerUser = createAsyncThunk< 
  { user: User; token: string; tokenExpiresAt: string },
  { email: string; username: string; password: string },
  { rejectValue: string }
>('users/signup', async (userData, { rejectWithValue }) => {
  try {
    const response = await api.post('/users/signup', userData);
    // Storing token and user data securely
    await AsyncStorage.setItem('token', response.data.token);
    await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    await AsyncStorage.setItem('tokenExpiresAt', response.data.tokenExpiresAt);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Registration failed');
  }
});

// Login user thunk
export const loginUser = createAsyncThunk<
  { user: User; token: string; tokenExpiresAt: string },
  { email: string; password: string },
  { rejectValue: string }
>('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await api.post('/users/signin', userData);
    // Storing token and user data securely
    await AsyncStorage.setItem('token', response.data.token);
    await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    await AsyncStorage.setItem('tokenExpiresAt', response.data.tokenExpiresAt);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

// Logout user thunk
export const logout = createAsyncThunk<string, void, { rejectValue: string }>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('tokenExpiresAt');
      return 'Logged out successfully'; // Optionally return a message
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Logout failed');
    }
  }
);

// Load token on app launch
export const loadToken = createAsyncThunk<string | null>(
  'auth/loadToken',
  async () => {
    const token = await AsyncStorage.getItem('token');
    return token; // Return token if it exists
  }
);

// Refresh token if necessary
export const refreshToken = createAsyncThunk<
  { token: string; tokenExpiresAt: string },
  void,
  { rejectValue: string }
>('auth/refreshToken', async (_, { rejectWithValue }) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await api.post('/users/refresh-token', { token });
    await AsyncStorage.setItem('token', response.data.token);
    await AsyncStorage.setItem('tokenExpiresAt', response.data.tokenExpiresAt);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Token refresh failed');
  }
});

// Define the slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.tokenExpiresAt = null;
      state.status = 'idle';
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string; tokenExpiresAt: string }>) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.tokenExpiresAt = action.payload.tokenExpiresAt;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || 'Registration failed';
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string; tokenExpiresAt: string }>) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.tokenExpiresAt = action.payload.tokenExpiresAt;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed';
      })
      .addCase(logout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'succeeded';
        state.user = null;
        state.isAuthenticated = false;
        state.token = null;
        state.tokenExpiresAt = null;
      })
      .addCase(logout.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || 'Logout failed';
      })
      .addCase(loadToken.fulfilled, (state, action: PayloadAction<string | null>) => {
        if (action.payload) {
          state.isAuthenticated = true;
          state.token = action.payload;
          if (state.tokenExpiresAt && isTokenExpired(state.tokenExpiresAt)) {
            // Token is expired, dispatch refresh token action
            // Ensure you handle this action in your component or middleware
          }
        }
      })
      .addCase(refreshToken.fulfilled, (state, action: PayloadAction<{ token: string; tokenExpiresAt: string }>) => {
        state.token = action.payload.token;
        state.tokenExpiresAt = action.payload.tokenExpiresAt;
      })
      .addCase(refreshToken.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || 'Token refresh failed';
      });
  },
});

// Export actions and reducer
export const { logoutUser, clearError } = authSlice.actions;
export default authSlice.reducer;
