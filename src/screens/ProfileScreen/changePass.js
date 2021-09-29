import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, Image, TextInputField, TouchableOpacity } from 'react-native';
import Nav from './Nav';
import Changeaccountinfo from '../../screens/ProfileScreen/Changeaccountinfo';
import { Context } from '../Authenticate/store';
import { Auth } from 'aws-amplify';
import ProfileScreen from './profile';
import { color } from '../../styles/theme';
import BirthDate from '../Authenticate/BirthDate'
import { Input, Center,Select, NativeBaseProvider } from "native-base"

const changePass = ({ navigation, route }) => {
  const [state, dispatch] = React.useContext(Context);
  const [password, setPassword] = useState('testing123');
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
useEffect(()=> {
  console.log('context',state);
}, [])
  return (
  <NativeBaseProvider>
    <View style={{ backgroundColor: color.bg, minHeight: '100%' }}>
      <View style={{marginLeft:50}}>
        <Input
                        style = {{width:331, height:40}}
                      value={password}
                      onChangeText={setPassword}
                      variant="underlined"
                      placeholder="Password"
                      type="password"
                      color='white'
                    />
        <Input
                        style = {{width:331, height:40}}
                      value={newpassword}
                      onChangeText={setNewPassword}
                      variant="underlined"
                      placeholder="New Password"
                      type="password"
                      color='white'
                    />
        <Input
                        style = {{width:331, height:40}}
                      value={confirmpassword}
                      onChangeText={setConfirmPassword}
                      variant="underlined"
                      placeholder="Confirm New Password"
                      type="password"
                      color='white'
                    />

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
                   <Text style={{ color: 'white' }}>Save Account Settings</Text>
               </View>
             </TouchableOpacity>
       </View>

    </View>

    </NativeBaseProvider>

  )
}


export default changePass;

const style = StyleSheet.create({
  buttonStyle: {
    color: 'green',
    height: '40px',
  },
  warnStyle: {
    height: '40px'
  }
})