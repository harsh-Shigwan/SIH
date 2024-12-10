import { View, Text } from 'react-native'
import React from 'react'
import Home1 from './patient/home/Home1'
import Home2 from './patient/home/Home2'
import Home3 from './patient/home/Home3'
import AdminTabNavigation from './admin/AdminTabNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationIndependentTree } from '@react-navigation/native'

const index = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{headerShown: false}} name="Home1" component={Home1} />
        <stack.Screen   name="Home2" component={Home2} />
        <stack.Screen   options={{headerShown: false}} name="AdminTabNavigation" component={AdminTabNavigation}/>
      </stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
     
   
  )
}

export default index