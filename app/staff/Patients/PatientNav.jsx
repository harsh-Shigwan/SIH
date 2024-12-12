import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PatientList from './PatientList'; // Your current screen
//import NewPage from './NewPage'; // The new page you want to navigate to
import AddPatient1 from './AddPatient/AddPatient1';
import AddPatient2 from './AddPatient/AddPatient2';
import AddPatient3 from './AddPatient/AddPatient3';
import AddPatient4 from './AddPatient/AddPatient4';
import EditPatient1 from './EditPaitient/EditPatient1';
import EditPatient2 from './EditPaitient/EditPatient2';
import EditPatient3 from './EditPaitient/EditPatient3';
import EditPatient4 from './EditPaitient/EditPatient4';
import { NavigationIndependentTree } from '@react-navigation/native';
const Stack = createStackNavigator();

function PatientNav() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PatientList" options={{ headerShown: false }}>
        <Stack.Screen name="PatientList" component={PatientList} />

        <Stack.Screen name="EditPatient1" component={EditPatient1} />
        <Stack.Screen name="EditPatient2" component={EditPatient2} />
        <Stack.Screen name="EditPatient3" component={EditPatient3} />
        <Stack.Screen name="EditPatient4" component={EditPatient4} />

        <Stack.Screen name="AddPatient1" component={AddPatient1} />
        <Stack.Screen name="AddPatient2" component={AddPatient2} />
        <Stack.Screen name="AddPatient3" component={AddPatient3} />
        <Stack.Screen name="AddPatient4" component={AddPatient4} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default PatientNav;
