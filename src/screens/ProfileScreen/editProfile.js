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

const editProfile = ({ navigation, route }) => {
  const [state, dispatch] = React.useContext(Context);
  const [name, setName] = useState('Jun Qian');
  const [username, setUsername] = useState('ljunqian');
  const [email, setEmail] = useState('ljunqian123@gmail.com');
  const [phone, setPhone] = useState('12345678');
  const [password, setPassword] = useState('testing123');
  const [errorstate, seterrorState] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  const [gender, setGender] = useState('M');


  const handlechange = async () => {
    try {
      let user = await Auth.currentAuthenticatedUser();

      let result = await Auth.updateUserAttributes(user, {
        'email': 'me@anotherdomain.com',
        'family_name': 'Lastname'
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log('context', state);
  }, [])

  return (
    <NativeBaseProvider>
      <View style={{ backgroundColor: color.bg, minHeight: '100%' }}>
        <View style={{ marginLeft: 50 }}>
          <Input
            style={{ width: 331, height: 40 }}
            value={name}
            onChangeText={setName}
            variant="underlined"
            placeholder="Name"
            color='white'
          />
          <Input
            style={{ width: 331, height: 40 }}
            value={username}
            onChangeText={setUsername}
            variant="underlined"
            placeholder="Username"
            color='white'
          />
          <Input
            style={{ width: 331, height: 40 }}
            value={email}
            onChangeText={setEmail}
            variant="underlined"
            placeholder="Your Email Address"
            color='white'
          />
          <Input
            style={{ width: 331, height: 40 }}
            value={phone}
            onChangeText={setPhone}
            variant="underlined"
            placeholder="Phone Number"
            color='white'
          />
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
              <Select.Item label="Female" value="F" />
              <Select.Item label="Male" value="M" />
              <Select.Item label="Others" value="NA" />
            </Select></View>
          <View style={{ marginBottom: 100 }}>
            <BirthDate />
          </View>
          <TouchableOpacity onPress={() => { navigation.navigate('Change Password') }}>
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
          <TouchableOpacity onPress={() => { }}>
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

export default editProfile;

const style = StyleSheet.create({
  buttonStyle: {
    color: 'green',
    height: '40px',
  },
  warnStyle: {
    height: '40px'
  }
})