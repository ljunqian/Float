import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Input, Center, NativeBaseProvider, Button } from "native-base"
import { Auth } from 'aws-amplify';
import typo from '../../styles/typography';
import OtpCode from './otpcode'
import FloatLogo from '../../assets/images/float.png';
import { color } from '../../styles/theme';
import { Context } from './store';
const initialState = { name: '', description: '' }

const otp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorstate, seterrorState] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  const [state, dispatch] = React.useContext(Context);

  async function signIn() {
    try {
      const user = await Auth.signIn(email, password);
      if (user) {dispatch({type: 'SIGN_IN', payload: true});}
      // TODO: set false
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
          <View style={{width:'100%',
          justifyContent: 'center',
          alignItems: 'center'}}>
                <Text style={[typo.H0]}>
                    Verification
                </Text>
               <Text style={[typo.H2, { color: 'white', fontFamily:'Montserrat-Bold', marginTop:20 }]}>
                             We've sent a code to
                           </Text>
                           <Text style={[typo.H2, { color: 'white',  fontFamily:'Montserrat-Bold' }]}>
                                                        EMAIL
                                                      </Text>
                           <OtpCode/>

          </View>
          <KeyboardAvoidingView
            behavior="position"
            style={{ margin: 20, justifyContent: 'flex-start', display: 'flex', width: '100%', }}
          >

          </KeyboardAvoidingView>



          <TouchableOpacity onPress={() => {}}>
            <View style={{
                marginLeft:20,
                marginRight:20,
                height: 48,
                backgroundColor: '#FF9F00',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 35
              }}
            >
              <Text style={{ color: 'white',  fontFamily:'Montserrat-Bold' }}>Verify</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('Signup') }} style={{marginTop:20,}}>
            <Text style={styles.navButtonText} >
              Didn't receive code? Resend code
            </Text>
          </TouchableOpacity>
          {errorstate && (<Text style={styles.errorText}>{errorMessage}</Text>)}
        </View>
      </View>
    </NativeBaseProvider >
  )
}
const styles = StyleSheet.create({
  container: { width: '100%', display: 'flex', paddingLeft: 20, paddingRight:20, minHeight: '100%', alignItems: 'center', backgroundColor: color.bg },
  forgotButton: {
    marginVertical: 10,
    marginLeft:20,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  navButtonText: {
  marginLeft:20,
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
  errorText: {
  marginTop:30,
    marginLeft:20,
      fontSize: 14,
      fontWeight: '500',
      color: 'red',
      fontFamily: 'Montserrat',
    },
  code:{backgroundColor: "#BBBBBB",
        width: 50,
        height: 60,
        margin: 4,
        borderRadius:10}
})

export default otp;