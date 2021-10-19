import React, { useState } from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Select } from 'native-base';
import { Auth } from 'aws-amplify';
import typo from '../../styles/typography';
import { color } from '../../styles/theme';
import FloatLogo from '../../assets/images/float.png';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';

const SignUpScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [bdate, setbDate] = useState('');
  const [errorstate, seterrorState] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  async function signUp() {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
          'custom:birthday': bdate,
          'custom:gender': gender,
          'custom:phone': phone
        }
      });
      console.log(user);
      navigation.navigate('otp', username);
    } catch (error) {
      console.log('error signing up:', error);
      seterrorState(true);
      seterrorMessage(error.message);
    }
  }

  return (
    <NativeBaseProvider>
      <ScrollView
        style={styles.container}
      >
        <View style={{ width: '100%', }}>
          <KeyboardAvoidingView
            behavior="position"
            style={{ justifyContent: 'flex-start', display: 'flex', width: '100%', }}
          >
            <View style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image source={FloatLogo} style={{ width: 120, height: 120 }} />
              <Text style={[typo.H0]}>
                Sign Up
              </Text>
            </View>
            <View style={{ marginLeft: 40 }}>
              <Text style={[typo.H2, { color: 'white', marginTop: 10 }]}>
                Username
              </Text>
              <Input
                value={username}
                style={{ width: 331, height: 40 }}
                onChangeText={text => setUsername(text)}
                variant="underlined"
                placeholder="Username"
                _light={{ color: "white", }}
                _dark={{ color: "white", }}
              />
              <Text style={[typo.H2, { color: 'white', marginTop: 10 }]}>
                Email
              </Text>
              <Input
                value={email}
                style={{ width: 331, height: 40 }}
                onChangeText={text => setEmail(text)}
                type="email"
                variant="underlined"
                placeholder="Your Email Address"
                _light={{ color: "white", }}
                _dark={{ color: "white", }}
              />
              <Text style={[typo.H2, { color: 'white', marginTop: 10 }]}>
                Password
              </Text>
              <Input
                value={password}
                onChangeText={text => setPassword(text)}
                variant="underlined"
                placeholder="Password"
                type="password"
                style={{ color: 'white', width: 331, height: 40 }}
                _light={{ color: "white", }}
                _dark={{ color: "white", }}
              />
              <Text style={[typo.H2, { color: 'white', marginTop: 10 }]}>
                Phone Number
              </Text>
              <Input
                value={phone}
                style={{ width: 331, height: 40 }}
                onChangeText={text => setPhone(text)}
                keyboardType="phone-pad"
                variant="underlined"
                placeholder="Your Phone Number"
                _light={{ color: "white", }}
                _dark={{ color: "white", }}
              />
              <Text style={[typo.H2, { color: 'white', marginTop: 10 }]}>
                Gender
              </Text>
              <View
                style={{ width: 331, height: 40 }}>
                <Select
                  accessibilityLabel="Gender"
                  placeholder="Gender"
                  onValueChange={(itemValue) => setGender(itemValue)}
                  _selectedItem={{
                    bg: "cyan.600",
                  }}
                  _light={{ color: "white", }}
                  _dark={{ color: "white", }}
                >
                  <Select.Item label="Female" value="Female" />
                  <Select.Item label="Male" value="Male" />
                  <Select.Item label="Others" value="Others" />
                </Select>
              </View>
              <View style={{ marginLeft: 40 }}>
                <Text style={styles.title}>
                  Birth Date
                </Text>
                <DatePicker
                  date={bdate}
                  style={styles.datePickerStyle}
                  mode="date" // The enum of date, datetime and time
                  placeholder="select date"
                  format="DD-MM-YYYY"
                  minDate="01-01-1940"
                  maxDate={Moment(Date.now()).format('DD-MM-YYYY')}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      //display: 'none',
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      borderWidth: 1,
                      backgroundColor: 'white',
                      color: 'white',
                      marginLeft: 0,
                    },
                  }}
                  onDateChange={(date) => {
                    setbDate(date)
                  }}
                />
              </View>
              <TouchableOpacity onPress={() => { signUp() }}>
                <View style={{
                  marginTop: 10,
                  marginRight: 46,
                  height: 48,
                  backgroundColor: '#4263DD',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 35
                }}
                >
                  <Text style={{ color: 'white' }}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text onPress={() => { navigation.navigate('Login') }}
              style={{ color: 'white', marginLeft: 40, marginTop: 15 }}
            >
              Already have an account? Log in.
            </Text>
            <Text onPress={() => {
              try {
                if (username.length != 0) {
                  navigation.navigate('otp', username)
                }
                else {
                  seterrorState(true);
                  seterrorMessage("Username cannot be empty");
                }
              }
              catch (error) {
                console.log(error);
                seterrorState(true);
                seterrorMessage(error.message);
              }
            }}
              style={{ color: 'white', marginLeft: 40, marginTop: 15 }}
            >
              Verfy your account
            </Text>
            {errorstate && (<Text style={styles.errorText}>{errorMessage}</Text>)}
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg,
  },
  image: {
    height: '50%',
    width: '50%'
  },
  datePickerStyle: {
    borderColor: 'blue',
    width: 320,
    marginLeft: -40,
    marginTop: 20,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    right: 140
  },
  errorText: {
    color: 'red',
    marginLeft: 40,
    marginTop: 15
  }
})

export default SignUpScreen;