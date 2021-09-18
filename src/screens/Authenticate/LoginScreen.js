import React, {useState} from 'react'
import { View, Image, StyleSheet, Text, KeyboardAvoidingView } from 'react-native'
import { Input, Center, NativeBaseProvider, Button } from "native-base"
import { Auth } from 'aws-amplify';
import typo from '../../styles/typography';

import FloatLogo from '../../assets/images/float.png';
import { color } from '../../styles/theme';

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
  }

  return (
    <NativeBaseProvider>
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
    
export default LoginScreen;