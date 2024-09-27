import React from 'react'
import AppNavigator from './src/AppNavigator'
import { Provider as PaperProvider, } from 'react-native-paper';




const App = () => {
  return (
    <PaperProvider >
    <AppNavigator />
    </PaperProvider>
  )
}

export default App