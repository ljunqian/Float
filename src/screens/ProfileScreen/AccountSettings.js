import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, Image, TextInputField, TouchableOpacity } from 'react-native';
import Nav from './Nav';
import Changeaccountinfo from '../../screens/ProfileScreen/Changeaccountinfo';

import { Auth } from 'aws-amplify';
import ProfileScreen from './profile';
import { color } from '../../styles/theme';

const AccountSettings = ({ navigation }) => {

  async function handlesignOut() {
    try {
        await Auth.signOut();
        navigation.navigate('Login');
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
  return (
    <View style={{ backgroundColor: color.bg, minHeight: '100%' }}>
      <ProfileScreen />
      <Nav />
      <View style={{marginLeft:50}}>
      <TouchableOpacity onPress={() => {}}>
        <View style={{
                      marginTop:10,
                      marginRight:46,
                      height: 40,
                      backgroundColor: '#4263DD',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 35
                      }}>
            <Text style={{ color: 'white' }}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={{
                      marginTop:10,
                      marginRight:46,
                      height: 40,
                      backgroundColor: '#4263DD',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 35
                      }}>
            <Text style={{ color: 'white' }}>Change Password</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {handlesignOut()}}>
        <View style={{
                      marginTop:10,
                      marginRight:46,
                      height: 40,
                      backgroundColor: '#4263DD',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 35
                      }}>
            <Text style={{ color: 'white' }}>Sign Out</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {Auth.currentAuthenticatedUser().then(console.log)}}>
        <View style={{
                      marginTop:10,
                      marginRight:46,
                      height: 40,
                      backgroundColor: 'red',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 35
                      }}>
            <Text style={{ color: 'white' }}>Delete Account</Text>
        </View>
      </TouchableOpacity>
       </View>
    </View>
  )
}


export default AccountSettings;

const style = StyleSheet.create({
  buttonStyle: {
    color: 'green',
    height: '40px',
  },
  warnStyle: {
    height: '40px'
  }
})