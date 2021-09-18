import React, {useState} from 'react'
import { View, Image, StyleSheet, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Input, Select, NativeBaseProvider, Button } from "native-base"
import { Auth } from 'aws-amplify';
import DateTimePicker from '@react-native-community/datetimepicker';
import typo from '../../styles/typography';

import FloatLogo from '../../assets/images/float.png';
import { color } from '../../styles/theme';

const initialState = { name: '', description: '' }

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
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
    console.log("submit request");
  }

  const onChangeDate = (event, selectedDate) => {
      const currentDate = selectedDate || birthday;
      setBirthday(currentDate);
    };
  return (
    <NativeBaseProvider>
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
          </KeyboardAvoidingView>
        </View>
    </ScrollView>
      </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: { width:'100%', display: 'flex', padding: 10 , paddingBottom: 50, minHeight:'100%', backgroundColor: color.bg},
  
})

export default SignUpScreen;