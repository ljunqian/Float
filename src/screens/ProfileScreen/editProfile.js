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
import DatePicker from 'react-native-datepicker';


const editProfile = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');

  const getUserInfo = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setEmail(user.attributes.email);
      setPhone(user.attributes["custom:phone"]);
      setGender(user.attributes["custom:gender"]);
      setDate(user.attributes["custom:birthday"]);
    } catch (error) {
      console.log("Error saving post", error);
    }
  }

  async function handleupdate() {
    try {
      let user = await Auth.currentAuthenticatedUser();

      let result = await Auth.updateUserAttributes(user, {
        'email': email,
        'custom:birthday': date,
        'custom:gender': gender,
        'custom:phone': phone
      });
      console.log(result); // SUCCESS
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <NativeBaseProvider>
      <View style={{ backgroundColor: color.bg, minHeight: '100%' }}>
        <View style={{ marginLeft: 50 }}>
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
            </Select></View>
          <View style={style.pickerposition}>
            <Text style={style.title}>
              Birth Date
            </Text>
            <DatePicker
              style={style.datePickerStyle}
              date={date} // Initial date from state
              mode="date" // The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-1940"
              maxDate="29-09-2100"
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
          <TouchableOpacity onPress={() => { handleupdate() }}>
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
  },
  datePickerStyle: {
    borderColor: 'blue',
    width: 320,
    marginLeft: -30,
    marginTop: 10,
  },
  pickerposition: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    right: 140
  }
})