
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RaiseConcerns1 from "../RaiseConcerns1"
import RaiseConcerns2 from '../RaiseConcerns2'; // Your current screen
//import NewPage from './NewPage'; // The new page you want to navigate to
import RaiseConcerns3 from '../RaiseConcerns3';
import RaiseConcerns4 from "../RaiseConcerns4"
import { NavigationIndependentTree } from '@react-navigation/native';
const Stack = createStackNavigator();

function RaiseConcernsNavigation() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RaiseConcerns1" options={{ headerShown: false }}>
        <Stack.Screen name="RaiseConcerns1" component={RaiseConcerns1} />
        <Stack.Screen name="RaiseConcerns2" component={RaiseConcerns2} />
        <Stack.Screen name="RaiseConcerns3" component={RaiseConcerns3} />
        <Stack.Screen name="RaiseConcerns4" component={RaiseConcerns4} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default RaiseConcernsNavigation;
