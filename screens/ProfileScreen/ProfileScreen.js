import React from 'react';
import {Button, Text, View} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>
        this is profile
      </Text>
      <Button 
        onPress={()=>{navigation.navigate('Today')}}
        title="go to today"/>
    </View>
  )
}

export default ProfileScreen;