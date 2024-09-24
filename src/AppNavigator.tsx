import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './Screens/Splash'
import SignIn from './Screens/SignIn'
import SignupForm from './Screens/Signup'
const Stack = createStackNavigator()
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
               {/* Splash */}
               <Stack.Screen
                    options={{ headerShown: false }}
                    name="Splash"
                    component={Splash}
                />
               {/* SignIn */}
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="SignIn"
                    component={SignIn}
                />
                {/* SignUp */}
                 <Stack.Screen
                    options={{ headerShown: false }}
                    name="Signup"
                    component={SignupForm}
                />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default AppNavigator