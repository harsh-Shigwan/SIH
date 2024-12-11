import { View, Text } from 'react-native'
import React from 'react'
import Home1 from './patient/home/Home1'
import Home2 from './patient/home/Home2'
import Home3 from './patient/home/Home3'
import LoginSignUp from './Auth/LoginSignUp'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationIndependentTree } from '@react-navigation/native'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import AdminTabNavigation from './admin/AdminTabNavigation'
const index = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{headerShown: false}} name="Home1" component={Home1} />
        <stack.Screen  options={{headerShown: false}}  name="Home2" component={Home2} />
        <stack.Screen  options={{headerShown: false}}  name="LoginSignUp" component={LoginSignUp} />
        <stack.Screen  name="SignUp" component={SignUp}/>
        <stack.Screen  name="SignIn" component={SignIn}/>
        <stack.Screen   options={{headerShown: false}} name="AdminTabNavigation" component={AdminTabNavigation}/>
        <stack.Screen   options={{headerShown: false}} name="Home3" component={Home3}/>
      
      </stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
     
   
  )
}

export default index