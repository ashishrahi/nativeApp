import React from 'react'
import AppNavigator from './src/AppNavigator'
import { Provider as PaperProvider, } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './src/store/store';


const App = () => {

  return (
    <Provider store={store}>
    <PaperProvider>
    <AppNavigator/>
    </PaperProvider>
    </Provider>

  )
}

export default App