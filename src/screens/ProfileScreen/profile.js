import React from 'react';
import {Button, Text, View, StyleSheet, Image} from 'react-native';
import Avatar from '../../assets/images/avatar.png';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Image source={Avatar}
             style={{width: 160, height: 160, borderRadius:80, alignSelf: 'center', marginTop:20, backgroundColor:'#A5A6F6'}} />
    </View>
  )
}


export default ProfileScreen;