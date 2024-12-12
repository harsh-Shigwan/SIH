import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import NewPage from './NewPage'; // The new page you want to navigate to
import ProfilePage from './ProfilePage';
import ConcernsList from './ConcernsList';
import EditProfile from "./EditProfile"; 
import { NavigationIndependentTree } from '@react-navigation/native';
import ConcernDetails from './ConcernDetails';
const Stack = createStackNavigator();

function ProfileNav() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfilePage" options={{ headerShown: false }}>
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ConcernsList" component={ConcernsList} />
        <Stack.Screen name="ConcernDetails" component={ConcernDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default ProfileNav;
