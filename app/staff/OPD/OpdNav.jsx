
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import NewPage from './NewPage'; // The new page you want to navigate to
import OpdPatientList from './OpdPatientList';
import AddOpdPatient from './AddOpdPatient';
import { NavigationIndependentTree } from '@react-navigation/native';
const Stack = createStackNavigator();

function OpdNav() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpdPatientList" options={{ headerShown: false }}>
        <Stack.Screen name="OpdPatientList" component={OpdPatientList} />
        <Stack.Screen name="AddOpdPatient" component={AddOpdPatient} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default OpdNav;
