import React from 'react';
import {Button, Text, View} from 'react-native';

const RewardScreen = ({navigation}) => {
  return (
    <View>
      <Text>
        this is reward
      </Text>
      <Button 
        onPress={()=>{navigation.navigate('Today')}}
        title="go to today"/>
    </View>
  )
}

export default RewardScreen;