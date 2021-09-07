/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Button, Image, View, TouchableOpacity } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 import SplashScreen from './src/screens/SplashScreen';
 import TodayScreen from './src/screens/TodayScreen/index';
 import ProfileScreen from './src/screens/ProfileScreen/';
 import RewardScreen from './src/screens/RewardScreen/';
 import AccountSettings from './src/screens/ProfileScreen/AccountSettings.js';

 import MeditateScreen from './src/screens/TodayScreen/MeditateScreen';
 import FocusScreen from './src/screens/TodayScreen/FocusScreen';
 import SleepScreen from './src/screens/TodayScreen/SleepScreen';
 import MoveScreen from './src/screens/TodayScreen/MoveScreen';

 import UserIcon from './src/assets/icons/user.png';
 import MagnifyIcon from './src/assets/icons/magnifier.png';
 import { Icon } from 'react-native-elements';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
 
const BottomBar = () => {
  return (
    
      <Tab.Navigator style={{height: 60}}>
        <Tab.Screen name="Explore" component={TodayScreen} 
         options={({}) => ({
          tabBarIcon: () => <Icon name="explore" size={30} color="black"/>,
          headerShown: false,
          tabBarStyle: {
            height: 70,
            padding: 10
          },
          tabBarLabelStyle: {marginBottom:10}
          })}
        />
        <Tab.Screen name="Meditate" component={MeditateScreen} 
         options={({}) => ({
          tabBarIcon: () => <Icon name="radio-button-unchecked" size={30} color="black"/>,
          headerShown: false,
          tabBarStyle: {
            height: 70,
            padding: 10
          },
          tabBarLabelStyle: {marginBottom:10}
          })}
        />
        <Tab.Screen name="Sleep" component={SleepScreen} 
         options={({}) => ({
          tabBarIcon: () => <Icon name="nightlight-round" size={30} color="black"/>,
          headerShown: false,
          tabBarStyle: {
            height: 70,
            padding: 10
          },
          tabBarLabelStyle: {marginBottom:10}
          })}
        />
        <Tab.Screen name="Move" component={MoveScreen} 
         options={({}) => ({
          tabBarIcon: () => <Icon name="timeline" size={30} color="black"/>,
          headerShown: false,
          tabBarStyle: {
            height: 70,
            padding: 10
          },
          tabBarLabelStyle: {marginBottom:10}
          })}
        />
        <Tab.Screen name="Focus" component={FocusScreen} 
         options={({}) => ({
          tabBarIcon: () => <Icon name="adjust" size={30} color="black"/>,
          headerShown: false,
          tabBarStyle: {
            height: 70,
            padding: 10
          },
          tabBarLabelStyle: {marginBottom:10}
          })}
        />
      </Tab.Navigator>
  )
}

 const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Today" component={BottomBar} 
           options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => console.log("pressed")}
              >
                <Image source={MagnifyIcon}/>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
              >
                <Image source={UserIcon}  />
              </TouchableOpacity>
          ),
            headerTitle: () => (<View/>),
            
          })}
         />
         <Stack.Screen name="Splash" component={SplashScreen} 
          options={({navigation}) => ({
          headerShown: false
          })}
         />
         <Stack.Screen name="Profile" component={ProfileScreen} 
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => console.log("pressed")}
              >
                <Icon name="create" size={30} color="black" onPress={()=>{navigation.navigate('Account Settings')}}/>
              </TouchableOpacity>
            ),
            headerTitle: () => (<View/>),
            
          })}
         
         />
         <Stack.Screen name="Reward" component={RewardScreen} />
         <Stack.Screen name="Account Settings" component={AccountSettings} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 export default App;