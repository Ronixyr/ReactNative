import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home1 from './src/Home1';
import Home2 from './src/Home2';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home1" component={Home1} />
        <Drawer.Screen name="Home2" component={Home2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
