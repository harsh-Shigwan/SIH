
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdminProfile from "./AdminProfile"
import EditProfile from './EditProfile'; 
//import NewPage from './NewPage'; // The new page you want to navigate to
import { NavigationIndependentTree } from '@react-navigation/native';
const Stack = createStackNavigator();

function AdminProfileNavigation() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdminProfile" options={{ headerShown: false }}>
        <Stack.Screen name="AdminProfile" component={AdminProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default AdminProfileNavigation;
