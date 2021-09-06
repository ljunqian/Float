import React from 'react';
import {Button, Text, View} from 'react-native';

const TodayScreen = ({navigation}) => {
  return (
    <View>
      <Text>
        this is today
      </Text>
      <Button 
        onPress={()=>{navigation.navigate('Splash')}}
        title="go to splash"/>
    </View>
  )
}

export default TodayScreen;