import React, { useState } from 'react'
import { View, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Input, NativeBaseProvider } from "native-base"
import { Auth } from 'aws-amplify';
import typo from '../../styles/typography';
import { color } from '../../styles/theme';

const otp = ({ navigation, route }) => {
  const username = route.params;

  const [code, setCode] = useState(0)
  const [errorstate, seterrorState] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate('Login');
    } catch (error) {
      console.log('error confirming sign up', error);
      console.log('error confirming sign up', error);
      seterrorMessage(error.message);
    }
  }

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (error) {
      console.log('error resending code: ', error);
      seterrorState(true);
      seterrorMessage(error.message);
    }
  }

  return (
    <NativeBaseProvider>
      <View
        style={styles.container}
      >
        <View style={{ width: '100%', }}>
          <View style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={[typo.H0]}>
              Verification
            </Text>
            <Text style={[typo.H2, { color: 'white', fontFamily: 'Montserrat-Bold', marginTop: 20 }]}>
              We've sent a code to
            </Text>
            <Text style={[typo.H2, { color: 'white', fontFamily: 'Montserrat-Bold' }]}>
              EMAIL
            </Text>
            <View style={{
              flex: 1,
              marginTop: 60,
              marginBottom: 20,
              alignItems: "center", // ignore this - we'll come back to it
              justifyContent: "center", // ignore this - we'll come back to it
              flexDirection: "row"
            }}>
              <Input
                style={{ height: 100, color: 'transparent', position: 'absolute', left: 0, right: 0, zIndex: 20 }}
                value={code}
                onChangeText={setCode}
                variant=""
                placeholder=""
                color='white'
                type="none"
                keyboardType="number-pad"
                caretHidden={true}
                maxLength={6}
              />

              <View style={styles.code}>
                <Input
                  style={{ height: 60, color: 'white', fontFamily: "FredokaOne-Regular", fontSize: 25 }}
                  value={code[0]}
                  variant=""
                  placeholder="X"
                  color='white'
                  type="string"
                  keyboardType="number-pad"
                  caretHidden={true}
                  maxLength={6}
                />
              </View>
              <View style={styles.code}>
                <Input
                  style={{ height: 60, color: 'white', fontFamily: "FredokaOne-Regular", fontSize: 25 }}
                  value={code[1]}
                  variant=""
                  placeholder="X"
                  color='white'
                  type="string"
                  keyboardType="number-pad"
                  caretHidden={true}
                  maxLength={6}
                />
              </View>
              <View style={styles.code}>
                <Input
                  style={{ height: 60, color: 'white', fontFamily: "FredokaOne-Regular", fontSize: 25 }}
                  value={code[2]}
                  variant=""
                  placeholder="X"
                  color='white'
                  type="string"
                  keyboardType="number-pad"
                  caretHidden={true}
                  maxLength={6}
                />
              </View>
              <View style={styles.code}>
                <Input
                  style={{ height: 60, color: 'white', fontFamily: "FredokaOne-Regular", fontSize: 25 }}
                  value={code[3]}
                  variant=""
                  placeholder="X"
                  color='white'
                  type="string"
                  keyboardType="number-pad"
                  caretHidden={true}
                  maxLength={6}
                />
              </View>
              <View style={styles.code}>
                <Input
                  style={{ height: 60, color: 'white', fontFamily: "FredokaOne-Regular", fontSize: 25 }}
                  value={code[4]}
                  variant=""
                  placeholder="X"
                  color='white'
                  type="string"
                  keyboardType="number-pad"
                  caretHidden={true}
                  maxLength={6}
                />
              </View>
              <View style={styles.code}>
                <Input
                  style={{ height: 60, color: 'white', fontFamily: "FredokaOne-Regular", fontSize: 25 }}
                  value={code[5]}
                  variant=" "
                  placeholder="X"
                  color='white'
                  type="string"
                  keyboardType="number-pad"
                  caretHidden={true}
                  maxLength={6}
                />
              </View>
            </View>
          </View>
          <KeyboardAvoidingView
            behavior="position"
            style={{ margin: 20, justifyContent: 'flex-start', display: 'flex', width: '100%', }}
          >
          </KeyboardAvoidingView>

          <TouchableOpacity onPress={() => { confirmSignUp() }}>
            <View style={{
              marginLeft: 20,
              marginRight: 20,
              height: 48,
              backgroundColor: '#FF9F00',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 35
            }}
            >
              <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold' }}>Verify</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { resendConfirmationCode() }} style={{ marginTop: 20, }}>
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
  container: { width: '100%', display: 'flex', paddingLeft: 20, paddingRight: 20, minHeight: '100%', alignItems: 'center', backgroundColor: color.bg },
  forgotButton: {
    marginVertical: 10,
    marginLeft: 20,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  navButtonText: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
  errorText: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 14,
    fontWeight: '500',
    color: 'red',
    fontFamily: 'Montserrat',
  },
  code: {
    backgroundColor: "#BBBBBB",
    width: 50,
    height: 60,
    margin: 4,
    borderRadius: 10
  }
})

export default otp;