<<<<<<< HEAD
import React, {useState} from 'react'
import { View, Image, StyleSheet, Text, KeyboardAvoidingView } from 'react-native'
=======
import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
>>>>>>> 830395eaa9000eff889711d32eeec716c164cfc7
import { Input, Center, NativeBaseProvider, Button } from "native-base"
import { Auth } from 'aws-amplify';
import typo from '../../styles/typography';

import FloatLogo from '../../assets/images/float.png';
import { color } from '../../styles/theme';
<<<<<<< HEAD

const initialState = { name: '', description: '' }

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onLogin = () => {
    console.log("submit request");
=======
import { Context } from './store';
const initialState = { name: '', description: '' }

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorstate, seterrorState] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  const [state, dispatch] = React.useContext(Context);

  async function signIn() {
    try {
      if (email != '' && password != '') {
        const user = await Auth.signIn(email, password);
        if (user) { dispatch({ type: 'SIGN_IN', payload: true }); }
        // TODO: set false 
        navigation.navigate('Guides');
      }
    } catch (error) {
      console.log('error signing in', error);
      seterrorState(true);
      seterrorMessage(error.message)
    }
>>>>>>> 830395eaa9000eff889711d32eeec716c164cfc7
  }

  return (
    <NativeBaseProvider>
<<<<<<< HEAD
    <View
      style={styles.container}
    >
        <View style={{width: '100%', }}>
          <Image source={FloatLogo} style={{width: 120,height:120}}/>
          <Text style={[typo.H0]}>
            Login
          </Text>
          <KeyboardAvoidingView
            behavior="position"
            style={{margin:20, justifyContent: 'flex-start', display:'flex', width:'100%',}}
          >
            <Text style={[typo.H2, {color:'white'}]}>
              Email
            </Text>
            <Input
              value={email}
              onChange={onChangeEmail}
              type="email"
              variant="underlined"
              placeholder="Your Email Address"
              _light={{color: "white",}}
              _dark={{ color: "white", }}
            />
            <Text style={[typo.H2, {color:'white'}]}>
              Password
            </Text>
            <Input
              value={password}
              onChange={onChangePassword}
              variant="underlined"
              placeholder="Passoword"
              type="password"
              _light={{color: "white",}}
              _dark={{ color: "white", }}
            />
            <Text>
              Forgot password?
            </Text>
          </KeyboardAvoidingView>
          <Button onPress={onLogin}>
            Login
          </Button>
        </View>
    </View>
      </NativeBaseProvider>

       )
     }
const styles = StyleSheet.create({
    container: { width:'100%', display: 'flex', padding: 10 ,minHeight:'100%',alignItems: 'center', backgroundColor: color.bg},
      
 })
    
=======
      <View
        style={styles.container}
      >
        <View style={{ width: '100%', }}>
          <View style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

            <Image source={FloatLogo} style={{ width: 160, height: 160 }} />
            <Text style={[typo.H0]}>
              Float
            </Text>
          </View>
          <KeyboardAvoidingView
            behavior="position"
            style={{ margin: 20, justifyContent: 'flex-start', display: 'flex', width: '100%', }}
          >
            <Text style={[typo.H2, { color: 'white' }]}>
              Username
            </Text>
            <Input
              style={{ width: 331, height: 40 }}
              value={email}
              onChangeText={setEmail}
              variant="underlined"
              placeholder="Your Username"
              color='white'
            />
            <Text style={[typo.H2, { color: 'white', paddingTop: 20 }]}>
              Password
            </Text>
            <Input
              style={{ width: 331, height: 40 }}
              value={password}
              onChangeText={setPassword}
              variant="underlined"
              placeholder="Password"
              type="password"
              color='white'
            />
          </KeyboardAvoidingView>

          <TouchableOpacity onPress={() => { signIn() }}>
            <View style={{
              marginLeft: 20,
              marginRight: 20,
              height: 48,
              backgroundColor: '#4263DD',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 35
            }}
            >
              <Text style={{ color: 'white' }}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotButton}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('Signup') }} >
            <Text style={styles.navButtonText} >
              Don't have an account? Create here
            </Text>
          </TouchableOpacity>
          {errorstate && (<Text style={styles.errorText}>{errorMessage}</Text>)}
        </View>
      </View>
    </NativeBaseProvider >
  )
}
const styles = StyleSheet.create({
  container: { width: '100%', display: 'flex', paddingLeft: 20, paddingRight: 20, minHeight: '100%', alignItems: 'center', backgroundColor: color.bg },
  forgotButton: {
    marginVertical: 10,
    marginLeft: 20,
    color: 'white',
  },
  navButtonText: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'Lato-Regular',
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

>>>>>>> 830395eaa9000eff889711d32eeec716c164cfc7
export default LoginScreen;