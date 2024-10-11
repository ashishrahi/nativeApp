import React from 'react'
import AppNavigator from './src/AppNavigator'
import { Provider as PaperProvider, } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <PaperProvider>
    <AppNavigator/>
    </PaperProvider>
    </Provider>
    </QueryClientProvider>

  )
}

export default App