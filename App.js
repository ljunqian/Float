/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useState, useEffect } from 'react';
import { Animated, Image, View, TouchableOpacity, Text, Easing, StyleSheet } from 'react-native';
import typo from './src/styles/typography';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExploreScreen from './src/screens/Guides/ExploreScreen'
import ProfileScreen from './src/screens/ProfileScreen/';
import RewardScreen from './src/screens/RewardScreen/';
import AccountSettings from './src/screens/ProfileScreen/AccountSettings.js';
import Changeaccountinfo from './src/screens/ProfileScreen/Changeaccountinfo';
import LoginScreen from './src/screens/Authenticate/LoginScreen';
import SignUpScreen from './src/screens/Authenticate/SignUpScreen';
import MeditateScreen from './src/screens/Guides/MeditateScreen';
import GuideDetail from './src/screens/Guides/MeditateScreen/GuideDetail.js';
import GuideActivity from './src/screens/Guides/MeditateScreen/GuideActivity.js';
import FocusScreen from './src/screens/Guides/FocusScreen';
import SleepScreen from './src/screens/Guides/SleepScreen';
import MoveScreen from './src/screens/Guides/MoveScreen';
import CoinIcon from './src/assets/icons/coins.png';
import UserIcon from './src/assets/icons/user.png';
import MoveIcon from './src/assets/icons/move.png';
import FocusIcon from './src/assets/icons/focus.png';
import ExploreIcon from './src/assets/icons/explore.png';
import MagnifyIcon from './src/assets/icons/magnifier.png';
// Image source
import Stars from './src/assets/images/stars.png';
import Float from './src/assets/images/float.png';

import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { withAuthenticator } from 'aws-amplify-react-native';
import Store, {Context} from './src/screens/Authenticate/store';

import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';

import config from './src/aws-exports'
Amplify.configure(config)

import { Analytics } from 'aws-amplify'
Analytics.configure({ disabled: true })

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const BottomBar = () => {
  const tabStyle = {
    height: 70,
    padding: 10,
    backgroundColor: '#4F4F4F',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  }
  return (

    <Tab.Navigator style={{ backgroundColor: 'none' }}
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: 'red'
        },
      })}
    //tabBar={()=>(<View style={{backgroundColor: 'none', height: 70}}></View>)}
    >
      <Tab.Screen name="Explore" component={ExploreScreen}
        options={({ }) => ({
          tabBarIcon: () => <Image source={ExploreIcon} />,
          headerShown: false,
          tabBarStyle: tabStyle,
          tabBarLabelStyle: {
            marginBottom: 10,
            color: 'white',
            fontWeight: "400",
          }
        })}
      />
      <Tab.Screen name="Meditate" component={MeditateScreen}
        options={({ }) => ({
          tabBarIcon: () => <Icon name="circle" size={30} color="white" />,
          headerShown: false,
          tabBarStyle: tabStyle,
          tabBarLabelStyle: {
            marginBottom: 10,
            color: 'white',
            fontWeight: "400",
          }
        })}
      />
      <Tab.Screen name="Sleep" component={SleepScreen}
        options={({ }) => ({
          tabBarIcon: () => <Icon name="nightlight-round" size={30} color="white" />,
          headerShown: false,
          tabBarStyle: tabStyle,
          tabBarLabelStyle: {
            marginBottom: 10,
            color: 'white',
            fontWeight: "400",
          }
        })}
      />
      <Tab.Screen name="Move" component={MoveScreen}
        options={({ }) => ({
          tabBarIcon: () => <Image source={MoveIcon} />,
          headerShown: false,
          tabBarStyle: tabStyle,
          tabBarLabelStyle: {
            marginBottom: 10,
            color: 'white',
            fontWeight: "400",
          }
        })}
      />
      <Tab.Screen name="Focus" component={FocusScreen}
        options={({ }) => ({
          tabBarIcon: () => <Image source={FocusIcon} />,
          headerShown: false,
          tabBarStyle: tabStyle,
          tabBarLabelStyle: {
            marginBottom: 10,
            color: 'white',
            fontWeight: "400",
          }
        })}
      />
    </Tab.Navigator>

  )
}

const App = () => {

  Analytics.configure({ disabled: true })
  const [verticalVal, setVerticalVal] = useState(new Animated.Value(1));
  const [isSplash, setIsSplash] = useState(true);
  const [isNotSignedIn, setisNotSignedIn] = useState(true);
  const [state, dispatch] = React.useContext(Context);

  async function isUserAuthenticated() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      //console.log('user is',user);
      if (user) {
        setisNotSignedIn(false);
        dispatch({type: 'SIGN_IN', payload: true});
      } else {
        {user === 'The user is not authenticated' && (setisNotSignedIn(true))};

      }
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    isUserAuthenticated()
    setTimeout(() => {
      setIsSplash(false);
    }, 6000)

    Animated.loop(
      Animated.timing(verticalVal, {
        toValue: -30,
        duration: 3000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      { iterations: 1000 },
    ).start();
  }, []);

  if (isSplash) {
    return (
      <View style={style.viewStyle}>
        <Image source={Stars} style={style.bgImage} />
        <View style={style.logoView}>
          <Animated.Image source={Float} style={{ top: 0, transform: [{ translateY: verticalVal }] }} />
          <Text style={[typo.H1, { color: 'white' }]}>
            Float
          </Text>
        </View>
      </View>
    )
  }
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={() => ({
            headerStyle: {
              backgroundColor: '#272727',
              shadowOpacity: 0,
              headerShown: false
            },
            headerLeft: null,
            headerTitle: () => (<View />),
          })}
          >
        {state.isSignout ? (
          <>
         <Stack.Screen name="Login" component={LoginScreen}
            screenOptions={() => ({
              headerStyle: {
                headerShown: false
              },
              headerTitle: () => (<View />),
            })}
          /> 
          <Stack.Screen name="Signup" component={SignUpScreen}
            options={({ navigation }) => ({
              headerShown: false
            })}
          />
          </>
       ) : (
        <>
       
        
          <Stack.Screen name="Guides" component={BottomBar}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => Auth.currentAuthenticatedUser().then(console.log)}
                >
                  <Image source={MagnifyIcon} />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}
                >
                  <Image source={UserIcon} />
                </TouchableOpacity>
              ),
              headerTitle: () => (<View />),
            })}
          />
          <Stack.Screen name="Profile" component={ProfileScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => console.log("pressed")}
                >
                  <Icon name="create" size={30} color="white" onPress={() => { navigation.navigate('Account Settings') }} />
                </TouchableOpacity>
              ),
              headerTitle: () => (<View />),
              headerTintColor: 'white'
            })}
          />
          <Stack.Screen name="Reward" component={RewardScreen}
            options={({ navigation }) => ({
              headerShadowVisible: false,
              headerTitle: () => (<View />),
              headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={CoinIcon} style={{ marginRight: 4 }} />
                  <Text style={{ fontSize: 18, fontFamily: 'FredokaOne-Regular', color: 'white' }}>
                    499
                    {/* {info.meditateD} */}
                  </Text>
                </View>
              ),
              headerTintColor: 'white'
            })}
          />
          <Stack.Screen name="Account Settings" component={AccountSettings}
            options={() => ({
              headerTitleStyle: { color: 'white' },
              headerTintColor: 'white'
            })}
          />

          <Stack.Screen name="Meditate GuideDetail" component={GuideDetail} 
            options={()=>({
              headerShadowVisible: false,
              headerTitleStyle: {color:'white'},
              headerTintColor: 'white',
              headerTitle: '',
              headerTransparent: true,
              headerStyle: {
                backgroundColor: 'transparent'
              }
            })}
          />
         
          <Stack.Screen name="Meditate GuideActivity" component={GuideActivity} 
            options={()=>({
              headerShadowVisible: false,
              headerTitleStyle: {color:'white'},
              headerTintColor: 'white',
              headerTitle: '',
              headerTransparent: true,
              headerStyle: {
                backgroundColor: 'transparent'
              }
            })}
          />

         </> )}
        </Stack.Navigator>
      </NavigationContainer>
    )
}


const Container = () => {
  return (
    <Store>
      <App/>
    </Store>
  )
}

export default Container;



const style = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#262626',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    zIndex: 2,
    position: 'absolute',
  },
  logoView: {
    zIndex: 4,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
  },
});