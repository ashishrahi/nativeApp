import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './Screens/Users/Splash'
import SignIn from './Screens/Users/SignIn'
import SignupForm from './Screens/Users/Signup'
import Main from './Screens/Mains/Main'
const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
               {/* Splash */}
               {/* <Stack.Screen
                    options={{ headerShown: false }}
                    name="Splash"
                    component={Splash}
                /> */}
               {/* SignIn */}
                {/* <Stack.Screen
                    options={{ headerShown: false }}
                    name="SignIn"
                    component={SignIn}
                /> */}
                {/* SignUp */}
                 {/* <Stack.Screen
                    options={{ headerShown: false }}
                    name="Signup"
                    component={SignupForm}
                /> */}
                  {/* Home */}
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="Main"
                    component={Main}
                />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default AppNavigator