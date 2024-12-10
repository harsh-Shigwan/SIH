
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Modal from './Modal/Modal'; // Your current screen
//import NewPage from './NewPage'; // The new page you want to navigate to
import NewPage from './Modal/NewPage';
import { NavigationIndependentTree } from '@react-navigation/native';
import DocPage from './Modal/DocPage';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" options={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Modal} />
        <Stack.Screen name="NewPage" component={NewPage} />
        <Stack.Screen name="DocPage" component={DocPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default App;
