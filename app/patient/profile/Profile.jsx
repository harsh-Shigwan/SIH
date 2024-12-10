

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationIndependentTree } from '@react-navigation/native';

import MyAppointment from './MyAppointment';
import MyScheme from './MyScheme';
import ProfileHome from './ProfileHome';
import SavedDoc from './SavedDoc';
import SchemeDetails from './SchemeDetails';
const Stack = createStackNavigator();

function Profile() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfileHome" options={{ headerShown: false }}>
        <Stack.Screen name = "ProfileHome" component={ProfileHome} />
        <Stack.Screen name = "MyScheme" component={MyScheme} />
        <Stack.Screen name = "MyAppointment" component={MyAppointment} />
        <Stack.Screen name = "SavedDoc" component={SavedDoc} />
        <Stack.Screen name = "SchemeDetails" component={SchemeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default Profile;
