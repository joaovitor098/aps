/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {Home, List} from '../screens';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <Icon name="people-outline" color="#000" size={20} />;
          },
          tabBarLabel: ({color, focused}) => {
            return <Text style={{color: focused ? color : '#000'}}>Home</Text>;
          },
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: () => {
            return <Icon name="ios-clipboard-outline" color="#000" size={20} />;
          },
          tabBarLabel: ({color, focused}) => {
            return <Text style={{color: focused ? color : '#000'}}>List</Text>;
          },
        }}
      />
    </Tab.Navigator>
  );
}
