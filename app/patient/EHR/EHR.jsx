

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationIndependentTree } from '@react-navigation/native';

import AddFile from './AddFile';
import AddRecords from './AddRecords';
import EHRHome from './EHRHome';
import UploadFile from './UploadFile';

const Stack = createStackNavigator();

function EHR() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EHRHome" >
        <Stack.Screen name="EHRHome" component={EHRHome} />
        <Stack.Screen name="AddFile"  component={AddFile} />
        <Stack.Screen name="UploadFile"  component={UploadFile} />
        <Stack.Screen name="AddRecords" component={AddRecords} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default EHR;
