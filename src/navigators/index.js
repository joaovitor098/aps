import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tab from './Tab';

const Stack = createStackNavigator();

export default function Index(props) {
  console.log(props);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="APS"
          component={Tab}
          options={{
            title: 'APS',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
