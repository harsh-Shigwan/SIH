
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorsList from './DoctorsList'; // Your current screen
//import NewPage from './NewPage'; // The new page you want to navigate to
import DoctorDetais from './DoctorDetails';
import { NavigationIndependentTree } from '@react-navigation/native';
const Stack = createStackNavigator();

function DoctorsNavigation() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DoctorsList" options={{ headerShown: false }}>
        <Stack.Screen name="DoctorsList" component={DoctorsList} />
        <Stack.Screen name="DoctorDetails" component={DoctorDetais} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default DoctorsNavigation;
