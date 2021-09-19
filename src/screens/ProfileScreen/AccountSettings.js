import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, Image, TextInputField } from 'react-native';
import Nav from './Nav';

import { Auth } from 'aws-amplify';
import ProfileScreen from './profile';
import { color } from '../../styles/theme';
const AccountSettings = ({ navigation }) => {


const Changeaccountinfo = ({ navigation }) => {
  return (
    <View style={{backgroundColor: color.bg, minHeight: '100%'}}>
      <ProfileScreen/>
      <Nav />
      <Button
        //user aws app sync to handle, only after our data schema is finalisedd
        onPress={() => { navigation.navigate('Change User infomation') }}
        title="Change account information"
        style={style.buttonStyle}
      />
      <Button
        onPress={() => { }}
        title="Change my Password"
        style={style.buttonStyle}
      />
      {/*
      <Button
        onPress={() => { Auth.signOut(); }}
        title="Signout"
        style={style.buttonStyle}
      />
      <Button
        onPress={() => { }}
        title="Delete my account"
        color="#ff0000"
        style={style.warnStyle}
      /> */}
    </View>
  )
}
const style = StyleSheet.create({
  buttonStyle: {
    color: 'green',
    height: '40px',
  },
  warnStyle: {
    height: '40px'
  }
})


export default Changeaccountinfo;