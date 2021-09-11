import React from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import Nav from './Nav';
import { Auth } from 'aws-amplify';
const AccountSettings = ({ navigation }) => {
  return (
    <View>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' }}
        style={{ width: 160, height: 160, borderRadius: 80, marginTop: 30, alignSelf: 'center' }} />
      <Nav />
      <Button
        onPress={() => { }}
        title="Save Account Settings"
        style={style.buttonStyle}
      />
      <Button
        onPress={() => {Auth.signOut();}}
        title="Signout"
        style={style.buttonStyle}
      />

    </View>
  )
}
const style = StyleSheet.create({
  buttonStyle: {
    color: 'green',
    height: '40px',
  }
})


export default AccountSettings;