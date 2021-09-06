import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>
        this is profile
      </Text>
      <Button 
        onPress={()=>{navigation.navigate('Today')}}
        title="go to today"
        style={style.buttonStyle}
        />
    </View>
  )
}

export default ProfileScreen;

const style = StyleSheet.create({
    buttonStyle: {
        color: 'green',
        height: '40px',
    }
})