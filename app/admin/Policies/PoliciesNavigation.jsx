
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PoliciesOverview from "./PoliciesOverview"
import AddNewPolicy from './AddNewPolicy'; // Your current screen
//import NewPage from './NewPage'; // The new page you want to navigate to
import ActivePolicies from './ActivePolicies';
import UpcomingPolicies from './UpcomingPoicies'
import PolicyDescription from "./PolicyDescription"
import { NavigationIndependentTree } from '@react-navigation/native';
const Stack = createStackNavigator();

function RaiseConcernsNavigation() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PolicyOverview" options={{ headerShown: false }}>
        <Stack.Screen name="PolicyOverview" component={PoliciesOverview} />
        <Stack.Screen name="AddNewPolicy" component={AddNewPolicy} />
        <Stack.Screen name="ActivePolicies" component={ActivePolicies} />
        <Stack.Screen name="UpcomingPolicies" component={UpcomingPolicies} />
        <Stack.Screen name="PoliciyDescription" component={PolicyDescription} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default RaiseConcernsNavigation;
