<<<<<<< HEAD
import React, {useState} from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Text, ScrollView } from 'react-native';
import {Input, NativeBaseProvider, Select, Button} from 'native-base';
=======
import React, { useState } from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Select, Button } from 'native-base';
>>>>>>> 830395eaa9000eff889711d32eeec716c164cfc7
import { Auth } from 'aws-amplify';
import typo from '../../styles/typography';
import { color } from '../../styles/theme';
import FloatLogo from '../../assets/images/float.png';
<<<<<<< HEAD

const initialState = { name: '', description: '' }

const SignUpScreen = ({navigation}) => {
=======
import DatePicker from 'react-native-datepicker';


const initialState = { name: '', description: '' }

const SignUpScreen = ({ navigation }) => {
>>>>>>> 830395eaa9000eff889711d32eeec716c164cfc7
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
<<<<<<< HEAD
  const [gender, setGender] = useState('M');
  const [birthday, setBirthday] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  }

  const onSignUp = () => {
    console.log("sign up")
=======
  const [gender, setGender] = useState('');
  const [date, setDate] = useState();
  const [errorstate, seterrorState] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  async function signUp() {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
          'custom:birthday': date,
          'custom:gender': gender,
          'custom:phone': phone
        }
      });
      console.log(user);
      navigation.navigate('Login');
    } catch (error) {
      console.log('error signing up:', error);
      seterrorState(true);
      seterrorMessage(error.message);
    }
>>>>>>> 830395eaa9000eff889711d32eeec716c164cfc7
  }

  return (
    <NativeBaseProvider>
<<<<<<< HEAD
    <ScrollView
      style={styles.container}
    >
        <View style={{width: '100%', }}>
          <KeyboardAvoidingView
            behavior="position"
            style={{margin:20, justifyContent: 'flex-start', display:'flex', width:'100%',}}
          >
          <Image source={FloatLogo} style={{width: 120,height:120}}/>
          <Text style={[typo.H0]}>
            Sign Up
          </Text>
            <Text style={[typo.H2, {color:'white', marginTop:10}]}>
              Username
            </Text>
            <Input
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
              variant="underlined"
              placeholder="Username"
              _light={{color: "white",}}
              _dark={{ color: "white", }}
            />
            <Text style={[typo.H2, {color:'white', marginTop:10}]}>
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
            <Text style={[typo.H2, {color:'white', marginTop:10}]}>
              Password
            </Text>
            <Input
              value={password}
              onChange={onChangePassword}
              variant="underlined"
              placeholder="Passoword"
              type="password"
              style={{color: 'white'}}
              _light={{color: "white",}}
              _dark={{ color: "white", }}
            />
            <Text style={[typo.H2, {color:'white', marginTop:10}]}>
              Phone Number
            </Text>
            <Input
              value={phone}
              onChange={onChangePhone}
              type="email"
              variant="underlined"
              placeholder="Your Email Address"
              _light={{color: "white",}}
              _dark={{ color: "white", }}
            />
            <Text style={[typo.H2, {color:'white', marginTop:10}]}>
              Gender
            </Text>
            <Select
              selectedValue={gender}
              minWidth={200}
              accessibilityLabel="Gender"
              placeholder="Gender"
              onValueChange={(itemValue) => setGender(itemValue)}
              _selectedItem={{
                bg: "cyan.600",
              }}
              _light={{color: "white",}}
              _dark={{ color: "white", }}
            >
              <Select.Item label="Female" value="F" />
              <Select.Item label="Male" value="M" />
              <Select.Item label="Others" value="NA" />
            </Select>
            <Text style={[typo.H2, {color:'white', marginTop:10}]}>
              Birthday
            </Text>



          <Button onPress={onSignUp}>
            Sign Up
          </Button>
          <Text onPress={()=>{navigation.navigate('Login')}}
            style={{color:'white'}}
          >
            Already have an account? Log in.
          </Text>
          </KeyboardAvoidingView>
        </View>
    </ScrollView>
      </NativeBaseProvider>
=======
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
              </Text></View>
            <View style={{ marginLeft: 40 }}>
              <Text style={[typo.H2, { color: 'white', marginTop: 10 }]}>
                Username
              </Text>
              <Input
                style={{ width: 331, height: 40 }}
                value={username}
                onChangeText={setUsername}
                variant="underlined"
                placeholder="Username"
                _light={{ color: "white", }}
                _dark={{ color: "white", }}
              />
              <Text style={[typo.H2, { color: 'white', marginTop: 10 }]}>
                Email
              </Text>
              <Input
                style={{ width: 331, height: 40 }}
                value={email}
                onChangeText={setEmail}
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
                onChangeText={setPassword}
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
                style={{ width: 331, height: 40 }}
                value={phone}
                onChangeText={setPhone}
                type="email"
                variant="underlined"
                placeholder="Your Phone Number"
                _light={{ color: "white", }}
                _dark={{ color: "white", }}
              />
              <Text style={[typo.H2, { color: 'white', marginTop: 10, marginBottom: 10 }]}>
                Gender
              </Text>
              <View
                style={{ width: 331, height: 45 }}>
                <Select

                  selectedValue={gender}
                  minWidth={200}
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
                  <Select.Item label="Others" value="NA" />
                </Select></View>
              <View style={styles.pickerposition}>
                <Text style={styles.title}>
                  Birth Date
                </Text>
                <DatePicker
                  style={styles.datePickerStyle}
                  date={date} // Initial date from state
                  mode="date" // The enum of date, datetime and time
                  placeholder="select date"
                  format="DD-MM-YYYY"
                  minDate="01-01-1940"
                  maxDate="29-09-2021"
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
                    setDate(date);
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
            {errorstate && (<Text style={styles.errorText}>{errorMessage}</Text>)}
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </NativeBaseProvider>
>>>>>>> 830395eaa9000eff889711d32eeec716c164cfc7
  )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: { flex: 1,  backgroundColor: color.bg },
  image: { height: '50%', width: '50%' }
=======
  container: { flex: 1, backgroundColor: color.bg },
  image: { height: '50%', width: '50%' },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    right: 140
  },
  datePickerStyle: {
    borderColor: 'blue',
    width: 320,
    marginLeft: -40,
    marginTop: 10,
  },
  pickerposition: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 14,
    fontWeight: '500',
    color: 'red',
    fontFamily: 'Lato-Regular',
  }
>>>>>>> 830395eaa9000eff889711d32eeec716c164cfc7
})

export default SignUpScreen;