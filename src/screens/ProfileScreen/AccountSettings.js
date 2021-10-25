import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, Image, TextInputField, TouchableOpacity, ScrollView } from 'react-native';
import Nav from './Nav';
import { Context } from '../Authenticate/store';
import { Auth, API, graphqlOperation, } from 'aws-amplify';
import ProfileScreen from './profile';
import { color } from '../../styles/theme';

import AWS from '../../../node_modules/aws-sdk/dist/aws-sdk-react-native';

import { deleteUser } from '../../graphql/mutations';

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

  async function handledelete() {
    const user = await Auth.currentAuthenticatedUser();
    //delete user metadata
    const userDetails = {
      id: user.attributes.sub,
      _version: 1
    };
    const deleteduser = await API.graphql(graphqlOperation(deleteUser, { input: userDetails }));
    console.log(deleteduser);

    //delete user instance from aws cognito
    AWS.config.apiVersions = {
      cognitoidentityserviceprovider: '2016-04-18',
    };
    AWS.config.update({ region: 'ap-southeast-1' });
    var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
    var params = {
      AccessToken: user.signInUserSession.accessToken.jwtToken.toString() /* required */
    };
    cognitoidentityserviceprovider.deleteUser(params, function (err, data) {
      if (err) {
        // an error occurred
        console.log(err, err.stack);
      }
      else {
        // successful response
        console.log(data)
        dispatch({ type: 'SIGN_OUT', payload: true });
        navigation.navigate('Login')
      };
    });
  }

  useEffect(() => {
    console.log('context', state);
  }, [])
  return (
    <ScrollView style={{ backgroundColor: color.bg, minHeight: '100%' }}>
      <ProfileScreen />
      <Nav />
      <View style={{ marginLeft: 20 }}>
        <TouchableOpacity onPress={() => { navigation.navigate('Edit Profile') }}>
          <View style={{
            marginTop: 10,
            marginRight: 46,
            height: 40,
            width:365,
            backgroundColor: '#4263DD',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 35
          }}>
            <Text style={{ color: 'white', fontFamily: "FredokaOne-Regular" }}>Edit Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { handlesignOut() }}>
          <View style={{
            marginTop: 10,
            marginRight: 46,
            height: 40,
            width:365,
            backgroundColor: '#4263DD',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 35
          }}>
            <Text style={{ color: 'white', fontFamily: "FredokaOne-Regular" }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { handledelete() }}>
          <View style={{
            marginTop: 10,
            marginRight: 46,
            height: 40,
            width:365,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 35,
            marginBottom: 40
          }}>
            <Text style={{ color: 'white', fontFamily: "FredokaOne-Regular" }}>Delete Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
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