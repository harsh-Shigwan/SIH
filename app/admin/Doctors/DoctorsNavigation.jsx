
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorsList from './DoctorsList'; // Your current screen
//import NewPage from './NewPage'; // The new page you want to navigate to
import DoctorDetais from './DoctorDetails';
import DocForm1 from './DocForm1';
import DocForm2 from './DocForm2';
import DocForm3 from './DocForm3';
import { NavigationIndependentTree } from '@react-navigation/native';
const Stack = createStackNavigator();

function DoctorsNavigation() {

  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DoctorsList" options={{ headerShown: false }}>
        <Stack.Screen name="DoctorsList" component={DoctorsList} />
        <Stack.Screen name="DoctorDetails" component={DoctorDetais} />
        <Stack.Screen name='DocForm1' component={DocForm1}/>
        <Stack.Screen name='DocForm2' component={DocForm2}/>
        <Stack.Screen name='DocForm3' component={DocForm3}/>
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default DoctorsNavigation;
