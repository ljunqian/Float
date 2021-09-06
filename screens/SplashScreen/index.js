import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

// Styles
import typo from '../../styles/typography';
import style from './style';

const SplashScreen = ({navigation}) => {
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
      <Button 
        onPress={()=>{navigation.navigate('Today')}}
        title="go to today"
      />
      <Button 
        onPress={()=>{navigation.navigate('Profile')}}
        title="go to profile"
      />
      <Button 
        onPress={()=>{navigation.navigate('Reward')}}
        title="go to reward"
        style={style.buttonStyle}
      />
    </View>
  )
}

export default SplashScreen;
