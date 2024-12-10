

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationIndependentTree } from '@react-navigation/native';

import  Notifications  from './Notifications';
import NotificationDetails from './NotificationDetails';

const Stack = createStackNavigator();

function Notification() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notifications" options={{ headerShown: false }}>
        <Stack.Screen name="Notifications" options={{ headerShown: false }} component={Notifications} />
        <Stack.Screen name="NotificationDetails" component={NotificationDetails}  />
       
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default Notification;
