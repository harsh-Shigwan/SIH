
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import NewPage from './NewPage'; // The new page you want to navigate to
import IpdPatientList from './IpdPatientList';
import AddIpdPatient from './AddIpdPatient';
import { NavigationIndependentTree } from '@react-navigation/native';
const Stack = createStackNavigator();

function IpdNav() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IpdPatientList" options={{ headerShown: false }}>
        <Stack.Screen name="IpdPatientList" component={IpdPatientList} />
        <Stack.Screen name="AddIpdPatient" component={AddIpdPatient} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default IpdNav;
