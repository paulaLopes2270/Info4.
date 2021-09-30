

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/screens/Login"
import Home from "./src/screens/Home"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Home" component={Home}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}