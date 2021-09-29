import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, Image, TextInputField, TouchableOpacity } from 'react-native';
import Nav from './Nav';
import Changeaccountinfo from '../../screens/ProfileScreen/Changeaccountinfo';
import { Context } from '../Authenticate/store';
import { Auth } from 'aws-amplify';
import ProfileScreen from './profile';
import { color } from '../../styles/theme';

import { DataStore } from 'aws-amplify';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter';
import { User } from "../../../src/models";

DataStore.configure({
  storageAdapter: SQLiteAdapter
});


const AccountSettings = ({ navigation }) => {
const AccountSettings = ({ navigation, route }) => {
  const [state, dispatch] = React.useContext(Context);
  async function handlesignOut() {
    try {
      await Auth.signOut();
      dispatch({ type: 'SIGN_OUT', payload: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  async function handleupdate() {
    try {
      let user = await Auth.currentAuthenticatedUser();

      let result = await Auth.updateUserAttributes(user, {
        'email': 'me@anotherdomain.com',
        'family_name': 'Lastname'
      });
      console.log(result); // SUCCESS
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log('context', state);
  }, [])
  return (
    <View style={{ backgroundColor: color.bg, minHeight: '100%' }}>
      <ProfileScreen />
      <Nav />
      <View style={{ marginLeft: 50 }}>
        <TouchableOpacity onPress={() => { navigation.navigate('Change Account Information'); }}>
          <View style={{
            marginTop: 10,
            marginRight: 46,
            height: 40,
            backgroundColor: '#4263DD',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 35
          }}>
            <Text style={{ color: 'white' }}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <View style={{
            marginTop: 10,
            marginRight: 46,
            height: 40,
            backgroundColor: '#4263DD',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 35
          }}>
            <Text style={{ color: 'white' }}>Change Password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { handlesignOut() }}>
          <View style={{
            marginTop: 10,
            marginRight: 46,
            height: 40,
            backgroundColor: '#4263DD',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 35
          }}>
      <View style={{marginLeft:50}}>
      <TouchableOpacity onPress={() => {navigation.navigate('Edit Profile')}}>
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
        <TouchableOpacity onPress={() => { Auth.currentAuthenticatedUser().then(console.log) }}>
          <View style={{
            marginTop: 10,
            marginRight: 46,
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