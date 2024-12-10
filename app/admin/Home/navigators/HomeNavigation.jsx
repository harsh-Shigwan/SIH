
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdminDashboard from "../AdminDashboard"
import HospitalList from '../HospitalList'; // Your current screen
//import NewPage from './NewPage'; // The new page you want to navigate to
import HospitalDetails from '../HospitalDetails';
import RaiseConcerns1 from "../RaiseConcerns1"
import { NavigationIndependentTree } from '@react-navigation/native';
const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdminDashboard" options={{ headerShown: false }}>
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="HospitalList" component={HospitalList} />
        <Stack.Screen name="HospitalDetails" component={HospitalDetails} />
        <Stack.Screen name="RaiseConcerns1" component={RaiseConcerns1} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default HomeNavigation;
