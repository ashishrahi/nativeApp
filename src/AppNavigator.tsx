import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './Screens/Users/Splash'
import SignIn from './Screens/Users/SignIn'
import SignupForm from './Screens/Users/Signup'
import Address from './Screens/Address/Address'
import Main from './Screens/Mains/Main'
import NewAddress from './Screens/Address/NewAddress'
import Contact from './Screens/Contact/Contact'
import Orders from './Screens/Orders/Orders'

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
                
                {/* Address */}
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Address"
                  component={Address}
              />
                
                {/* NewAddress */}
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="NewAddress"
                  component={NewAddress}
              />
                
                {/* Contact */}
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Contact"
                  component={Contact}
              />
              
               {/* Orders */}
              <Stack.Screen
                options={{ headerShown: false }}
                name="Orders"
                component={Orders}
            />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default AppNavigator