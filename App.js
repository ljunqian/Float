/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Avatar from './src/assets/images/avatar.png';
import React, { useState, useEffect } from 'react';
import { Animated, Image, View, TouchableOpacity, Text, Easing, StyleSheet } from 'react-native';
import typo from './src/styles/typography';
import {color}  from './src/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Checkin
import CheckInScreen from './src/screens/SplashScreen/CheckInScreen';

//* Guides
import ExploreScreen from './src/screens/Guides/ExploreScreen';
import Recents from './src/screens/Guides/ExploreScreen/Recents.js';
import Favourites from './src/screens/Guides/ExploreScreen/Favourites.js';
import GuidesLesson from './src/screens/Guides/ExploreScreen/GuidesLesson';
import SearchScreen from './src/screens/SearchScreen/';
import GuideComplete from './src/screens/Guides/MeditateScreen/GuideComplete.js';

import RewardScreen from './src/screens/RewardScreen/';
import AccountSettings from './src/screens/ProfileScreen/AccountSettings.js';
import LoginScreen from './src/screens/Authenticate/LoginScreen';
import SignUpScreen from './src/screens/Authenticate/SignUpScreen';
import otp from './src/screens/Authenticate/otp.js';
import forgetpass from './src/screens/Authenticate/forgetpass';
import confirmpass from './src/screens/Authenticate/confirmpass';
import chatScreen from './src/screens/ProfileScreen/chatScreen';
import changePass from './src/screens/ProfileScreen/changePass';

import MeditateScreen from './src/screens/Guides/MeditateScreen';
import GuideDetail from './src/screens/Guides/MeditateScreen/GuideDetail.js';
import GuideActivity from './src/screens/Guides/MeditateScreen/GuideActivity.js';
import FocusScreen from './src/screens/Guides/FocusScreen';
import SleepScreen from './src/screens/Guides/SleepScreen';
import MoveScreen from './src/screens/Guides/MoveScreen';

//* Profile
import editProfile from './src/screens/ProfileScreen/editProfile';
import ProfileScreen from './src/screens/ProfileScreen/';

//* icons
import { Icon } from 'react-native-elements';
import CoinIcon from './src/assets/icons/coins.png';
import UserIcon from './src/assets/icons/user.png';
import SleepIcon from './src/assets/icons/sleepclicked.png';
import SleepIconUnclicked from './src/assets/icons/sleepunclicked.png';
import MoveIcon from './src/assets/icons/moveclicked.png';
import MoveIconUnclicked from './src/assets/icons/moveunclicked.png';
import MeditateIcon from './src/assets/icons/meditateclicked.png';
import MeditateIconUnclicked from './src/assets/icons/meditateunclicked.png';
import FocusIcon from './src/assets/icons/focusclicked.png';
import FocusIconUnclicked from './src/assets/icons/focusunclicked.png';
import ExploreIcon from './src/assets/icons/explore.png';
import ExploreIconUnclicked from './src/assets/icons/exploreunclicked.png';
import MagnifyIcon from './src/assets/icons/magnifier.png';
// Image source
import Stars from './src/assets/images/stars.png';
import Float from './src/assets/images/float.png';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { withAuthenticator } from 'aws-amplify-react-native';

import Store, { Context } from './src/screens/Authenticate/store';
import { Provider, useSelector } from 'react-redux';
import NewStore from './src/screens/GlobalStates/GlobalStore';
import { getUserInfo } from './src/screens/GlobalStates/UserAction';

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
    position:'absolute',
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
          tabBarIcon: ({focused}) => {
            
            return ((focused)? 
            <View style={{alignItems: 'center', bottom: 2}}>
                <View style={{height: 2, width:50 , backgroundColor: 'white', bottom:13}}/>
                 <Image source={ExploreIcon} />
            </View>
            
            : <Image source ={ExploreIconUnclicked} />) 
          }, 
          
          headerShown: false,
          tabBarStyle: tabStyle,
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle:  {
            marginBottom: 10,
            fontWeight: "400",
          }
        })}
      />
      <Tab.Screen name="Meditate" component={MeditateScreen}
        options={({ }) => ({
          tabBarIcon: ({focused}) => {
            return ((focused)? 
            <View style={{alignItems: 'center', bottom: 2}}>
                <View style={{height: 2, width:50 , backgroundColor: color.Med1, bottom:15}}/>
                 <Image source={MeditateIcon} />
            </View> 
            : <Image source ={MeditateIconUnclicked} />) 
          }, 
          headerShown: false,
          tabBarStyle: tabStyle,
          tabBarActiveTintColor: color.Med1,

          tabBarLabelStyle: {
            marginBottom: 10,
            
            fontWeight: "400",
          }
        })}
      />
      <Tab.Screen name="Sleep" component={SleepScreen}
        options={({ }) => ({
          tabBarIcon: ({focused}) => {
            return ((focused)? 
            <View style={{alignItems: 'center', bottom: 2}}>
                <View style={{height: 2, width:50 , backgroundColor: color.Sleep1, bottom:14}}/>
                 <Image source={SleepIcon} />
            </View>  
            : <Image source ={SleepIconUnclicked} />) 
          }, 
          headerShown: false,
          tabBarStyle: tabStyle,
          tabBarActiveTintColor: color.Sleep1,
          tabBarLabelStyle: {
            marginBottom: 10,
            fontWeight: "400",
          }
        })}
      />
      <Tab.Screen name="Move" component={MoveScreen}
        options={({ }) => ({
          tabBarIcon: ({focused}) => {
            return ((focused)? 
            <View style={{alignItems: 'center', bottom: 2}}>
                <View style={{height: 2, width:50 , backgroundColor: color.Move2, bottom:14}}/>
                 <Image source={MoveIcon} />
            </View> 
            : <Image source ={MoveIconUnclicked} />) 
          }, 
          headerShown: false,
          tabBarStyle: tabStyle,
          tabBarActiveTintColor: color.Move2,
          tabBarLabelStyle: {
            marginBottom: 10,
            fontWeight: "400",
          }
        })}
      />
      <Tab.Screen name="Focus" component={FocusScreen}
        options={({ }) => ({
          tabBarIcon: ({focused}) => {
            return ((focused)? 
            <View style={{alignItems: 'center', bottom: 1}}>
                <View style={{height: 2, width:50 , backgroundColor: color.Focus2, bottom:13}}/>
                 <Image source={FocusIcon} />
            </View> 
            : <Image source ={FocusIconUnclicked} />) 
          }, 
          headerShown: false,
          tabBarStyle: tabStyle,
          tabBarActiveTintColor: color.Focus2,
          tabBarLabelStyle: {
            marginBottom: 10,
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
  const [state, dispatch] = React.useContext(Context);

  const {coins} = useSelector((state) => state.user.userData);
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
    isUserAuthenticated();
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
            headerShadowVisible: false,
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
          <Stack.Screen name="CheckIn" component={CheckInScreen} 
            options={()=>({
              headerShown: false
            })}
          />
        
          <Stack.Screen name="Guides" component={BottomBar}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Search')}
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
              headerStyle: {
                backgroundColor: '#272727',
              },
              headerShadowVisible: true,
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
              headerTintColor: 'white',
              headerShadowVisible: false,
            })}
          />
          <Stack.Screen name="Edit Profile" component={editProfile}
            options={() => ({
              headerTitleStyle: { color: 'white' },
              headerTintColor: 'white'
            })}
          />
          <Stack.Screen name="otp" component={otp}
            options={() => ({
              headerTitleStyle: { color: 'white' },
              headerTintColor: 'white'
            })}
          />
          <Stack.Screen name="Chat Screen" component={chatScreen}
            options={({ navigation }) => ({
              headerLeft: () => (
                <Image source={Avatar}
                             style={{marginLeft:70, width: 40, height: 40, borderRadius:80, alignSelf: 'center'}} />
              ),
              headerTitle: () => (<Text style={{marginLeft:10, color:'white', fontFamily:'FredokaOne-Regular'}}>username</Text>),
              headerTintColor: 'white'
            })}
          />
          <Stack.Screen name="Change Password" component={changePass}
            options={() => ({
              headerTitleStyle: { color: 'white' },
              headerTintColor: 'white'
            })}
          />
            <Stack.Screen name="forget password" component={forgetpass}
              options={({ navigation }) => ({
                headerShown: false
              })}
            />
            <Stack.Screen name="confirm password" component={confirmpass}
              options={({ navigation }) => ({
                headerShown: false
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
                    {coins}
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
          <Stack.Screen name="Search" component={SearchScreen} 
            options={()=>({
              headerShown: false
            })}
          />
          <Stack.Screen name="GuideDetail" component={GuideDetail} 
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
         
          <Stack.Screen name="GuideActivity" component={GuideActivity} 
            options={()=>({
              headerShown: false
            })}
          />
          <Stack.Screen name="GuideComplete" component={GuideComplete} 
            options={()=>({
              headerShown: false
            })}
          />
          <Stack.Screen name="Recents" component={Recents} 
            options={()=>({
              headerShown: false
            })}
          />
          <Stack.Screen name="Favourites" component={Favourites} 
            options={()=>({
              headerShown: false
            })}
          />
          <Stack.Screen name="GuidesLesson" component={GuidesLesson} 
            options={()=>({
              headerShadowVisible: false,
              headerTitleStyle: {color:'white'},
              headerTintColor: 'white',
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
    <Provider store={NewStore}>
      <Store>
        <App />
      </Store>
    </Provider>
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