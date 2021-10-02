import React, { useEffect, useState } from 'react';
import {Text, Animated, View, StyleSheet, Image, Easing} from 'react-native';

// Styles
import typo from '../../styles/typography';
import style from './style';

// Image source
import Stars from '../../assets/images/stars.png';
import Float from '../../assets/images/float.png';


const SplashScreen = ({navigation}) => {

  const [verticalVal, setVerticalVal ] =  useState(new Animated.Value(1));

  useEffect(() => {
    if(!__DEV__){
      console.log = () => {};
    } 
    setTimeout(()=>{
      navigation.navigate("Explore")
    }, 1000)

   

    Animated.loop(
      Animated.timing(verticalVal, {
        toValue: -30,
        duration: 3000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      {iterations: 1000},
    ).start();

    /*
    setInterval(() => {
      
    }, )*/

  }, []);


  return (
    <View style={style.viewStyle}>
      <Image source={Stars} style={style.bgImage}/>
      <View style={style.logoView}>
        <Animated.Image source={Float} style={{top: 0,transform: [{translateY: verticalVal}]}}/>
        <Text style={[typo.H1, {color: 'white'}]}>
          Float
        </Text>
        
      </View>
    </View>
  )
}

export default SplashScreen;

