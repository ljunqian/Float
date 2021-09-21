import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Input, Center, NativeBaseProvider, Button } from "native-base"
import { Auth } from 'aws-amplify';
import typo from '../../styles/typography';

import FloatLogo from '../../assets/images/float.png';
import { color } from '../../styles/theme';

const initialState = { name: '', description: '' }

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorstate, seterrorState] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  async function signIn() {
    try {
      const user = await Auth.signIn(email, password);
      navigation.navigate('Guides');
    } catch (error) {
      console.log('error signing in', error);
      seterrorState(true);
      seterrorMessage(error.message)
    }
  } 

  return (
    <NativeBaseProvider>
      <View
        style={styles.container}
      >
        <View style={{ width: '100%', }}>
          <Image source={FloatLogo} style={{ width: 120, height: 120 }} />
          <Text style={[typo.H0]}>
            Login
          </Text>
          <KeyboardAvoidingView
            behavior="position"
            style={{ margin: 20, justifyContent: 'flex-start', display: 'flex', width: '100%', }}
          >
            <Text style={[typo.H2, { color: 'white' }]}>
              Email
            </Text>
            <Input
              value={email}
              onChangeText={setEmail}
              variant="underlined"
              placeholder="Your Email Address"
              color='white'
            />
            <Text style={[typo.H2, { color: 'white' }]}>
              Password
            </Text>
            <Input
              value={password}
              onChangeText={setPassword}
              variant="underlined"
              placeholder="Password"
              type="password"
              color='white'
            />
          </KeyboardAvoidingView>
          <Button onPress={() => { signIn() }}>
            Login
          </Button>
          <TouchableOpacity>
            <Text style={styles.forgotButton}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('Signup') }} >
            <Text style={styles.navButtonText} >
              Don't have an acount? Create here
            </Text>
          </TouchableOpacity>
          {errorstate && (<Text style={styles.navButtonText}>{errorMessage}</Text>)}
        </View>
      </View>
    </NativeBaseProvider >
  )
}
const styles = StyleSheet.create({
  container: { width: '100%', display: 'flex', padding: 10, minHeight: '100%', alignItems: 'center', backgroundColor: color.bg },
  forgotButton: {
    marginVertical: 10,
    color: 'white',
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'Lato-Regular',
  },

})

export default LoginScreen;