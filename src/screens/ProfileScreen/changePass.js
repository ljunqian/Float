import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, Image, TextInputField, TouchableOpacity } from 'react-native';
import Nav from './Nav';
import Changeaccountinfo from '../../screens/ProfileScreen/Changeaccountinfo';
import { Context } from '../Authenticate/store';
import { Auth } from 'aws-amplify';
import ProfileScreen from './profile';
import { color } from '../../styles/theme';
import BirthDate from '../Authenticate/BirthDate'
import { Input, Center, Select, NativeBaseProvider } from "native-base"

const changePass = ({ navigation, route }) => {
  const [state, dispatch] = React.useContext(Context);
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [errorstate, seterrorState] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  async function handlechange() {
    if (newpassword == confirmpassword) {
      Auth.currentAuthenticatedUser()
        .then(user => {
          return Auth.changePassword(user, oldpassword, newpassword);
        })
        .then(data => console.log(data))
        .catch(err => { seterrorState(true); seterrorMessage(err.message); });
    }
    else {
      seterrorState(true)
      seterrorMessage("Password confirmation does not match")
    }
  }

  useEffect(() => {
    console.log('context', state);
  }, [])

  return (
    <NativeBaseProvider>
      <View style={{ backgroundColor: color.bg, minHeight: '100%' }}>
        <View style={{ marginLeft: 50 }}>
          {errorstate && (<Text style={style.errorText}>{errorMessage}</Text>)}
          <Input
            style={{ width: 331, height: 40 }}
            value={oldpassword}
            onChangeText={setOldPassword}
            variant="underlined"
            placeholder="Password"
            type="password"
            color='white'
          />
          <Input
            style={{ width: 331, height: 40 }}
            value={newpassword}
            onChangeText={setNewPassword}
            variant="underlined"
            placeholder="New Password"
            type="password"
            color='white'
          />
          <Input
            style={{ width: 331, height: 40 }}
            value={confirmpassword}
            onChangeText={setConfirmPassword}
            variant="underlined"
            placeholder="Confirm New Password"
            type="password"
            color='white'
          />
          <TouchableOpacity onPress={() => { handlechange() }}>
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
  },
  errorText: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 10,
    fontWeight: '500',
    color: 'red',
    fontFamily: 'Lato-Regular',
  },
})