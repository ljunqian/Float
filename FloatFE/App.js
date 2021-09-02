/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import TodayScreen from './src/screens/TodayScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import RewardScreen from './src/screens/RewardScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Today" component={TodayScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Reward" component={RewardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;