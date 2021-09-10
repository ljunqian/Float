import React, { useEffect } from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

// Styles
import typo from '../../styles/typography';
import style from './style';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    if(!__DEV__){
      console.log = () => {};
    } 
    setTimeout(()=>{
        console.log("move");
        //this.props.navigation.navigate("AuthStackNavigator");
    }, 1000)
  }, []);


  return (
    <View style={style.viewStyle}>
      <Text style={typo.H1}>
        Welcome to Float
      </Text>
      <Text style={typo.H2}>
        This is Heading 2
      </Text>
      <Text style={typo.H3}>
        This is heading 3
      </Text>
    </View>
  )
}

export default SplashScreen;

