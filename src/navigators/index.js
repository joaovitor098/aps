import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tab from './Tab';
import {Login, Signup} from '../screens/index';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Menus">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Menus" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
