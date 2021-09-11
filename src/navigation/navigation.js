import React from 'react';
import { Button, Image, View, TouchableOpacity,Icon } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GuideRoutes } from './routes';
 // Starting Screens
 import SplashScreen from "../screens/SplashScreen";
 import LoginScreen from "../screens/Authenticate/LoginScreen";
 import SignUpScreen from "../screens/Authenticate/SignUpScreen";
 
 // Profile
 import ProfileScreen from "../screens/ProfileScreen/";
 import AccountSettings from "../screens/ProfileScreen/AccountSettings";
 import RewardScreen from "../screens/RewardScreen";
// Guides
import ExploreScreen from "../screens/Guides/ExploreScreen";
import MeditateScreen from "../screens/Guides/MeditateScreen";
import FocusScreen from "../screens/Guides/FocusScreen";
import SleepScreen from "../screens/Guides/SleepScreen";
import MoveScreen from "../screens/Guides/MoveScreen";


import UserIcon from '../assets/icons/user.png';
import MagnifyIcon from '../assets/icons/magnifier.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const MainRoutes = [
  {}
];

const BottomTabOption = (iconName) => {
  return (
    {
          
      headerShown: false,
      tabBarStyle: {
        height: 70,
        padding: 10
      },
      tabBarLabelStyle: {marginBottom:10}
      }
  )
}
const BottomBar = () => {
  return (
      <Tab.Navigator 
        style={{height: 60}}
        screenOptions={()=>(BottomTabOption())}
      >
         <Tab.Screen name="Explore" component={ExploreScreen} 
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

const StackComponent = ({name, component, icon,}) => {
  return (
    <Stack.Screen name={name} component={component} 
      options={({navigation}) => ({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => console.log("pressed")}
          >
            <Image source={MagnifyIcon} />
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
  )
}
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Guides" component={BottomBar} 
      options={({navigation}) => ({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => console.log("pressed")}
        >
          <Image source={MagnifyIcon} />
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
        <Stack.Screen name="Reward" component={RewardScreen}/>
        <Stack.Screen name="Account Settings" component={AccountSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
 export default Navigation;