import React from 'react';
import { Button, Text, View } from 'react-native';

const RewardScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={()=>{navigation.navigate('Splash')}}
        title="go to splash"
      />
    </View>
  )
}

export default RewardScreen;