import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../Authenticate/store';
import { Auth } from 'aws-amplify';
import ProfileScreen from './profile';
import { color } from '../../styles/theme';
import { Input, Center, Select, NativeBaseProvider } from "native-base"

const changePass = ({ navigation, route }) => {
  const [state, dispatch] = React.useContext(Context);
  const [oldpassword, setoldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [errorstate, seterrorState] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  const handlepassword = () => {
    if (newpassword == confirmpassword) {
      Auth.currentAuthenticatedUser()
        .then(user => {
          return Auth.changePassword(user, 'oldPassword', 'newPassword');
        })
        .then(data => console.log(data))
        .catch(err => {
          console.log(err.toString())
          seterrorState(true);
          seterrorMessage(err.toString());
        });
    }
    else {
      seterrorState(true);
      seterrorMessage("Password and confirm password is not matching");
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
            onChangeText={setoldPassword}
            variant="underlined"
            placeholder="Old password"
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

          <TouchableOpacity onPress={() => { handlepassword() }}>
            <View style={{
              marginTop: 10,
              marginRight: 46,
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
  },
  errorText: {
    color: 'red',
    marginTop: 15
  }
})