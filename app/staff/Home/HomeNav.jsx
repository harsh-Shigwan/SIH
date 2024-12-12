
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StaffDashboard from './StaffDashboard'; // Your current screen
//import NewPage from './NewPage'; // The new page you want to navigate to
import PolicyList from './PolicyList';
import PolicyDetails from './PolicyDetails';
import { NavigationIndependentTree } from '@react-navigation/native';
const Stack = createStackNavigator();

function HomeNav() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StaffDashboard" options={{ headerShown: false }}>
        <Stack.Screen name="StaffDashboard" component={StaffDashboard} />
        <Stack.Screen name="PolicyList" component={PolicyList} />
        <Stack.Screen name="PolicyDetails" component={PolicyDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default HomeNav;
