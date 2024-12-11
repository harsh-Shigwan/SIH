

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import AdminProfile from "./AdminProfile"
//
import DetailQueay from './DetailQueay';
import ShortQuery from './ShortQuery';
import InDetailQuary from './InDetailQuary';
import { NavigationIndependentTree } from '@react-navigation/native';
const Stack = createStackNavigator();

function QueriesNavigation() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DetailQueay" options={{ headerShown: false }}>
        <Stack.Screen name="DetailQueay" component={DetailQueay} />
        <Stack.Screen name="ShortQuery" component={ShortQuery} />
        <Stack.Screen name="InDetailQuary" component={InDetailQuary} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default QueriesNavigation;

