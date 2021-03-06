import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../Authenticate/store';
import { Auth } from 'aws-amplify';
import { color } from '../../styles/theme';
import { Input, Select, NativeBaseProvider } from "native-base"

import DatePicker from 'react-native-datepicker';
import Moment from 'moment';

const editProfile = ({ navigation, route }) => {
  const [state, dispatch] = React.useContext(Context);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [bdate, setbDate] = useState('');
  const [errorstate, seterrorState] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  const getUserInfo = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setEmail(user.attributes.email)
      setPhone(user.attributes["custom:phone"])
      setGender(user.attributes["custom:gender"])
      setbDate(user.attributes["custom:birthday"])
    } catch (error) {
      console.log("Error saving post", error);
    }
  }

  const handlechange = async () => {
    try {
      let user = await Auth.currentAuthenticatedUser();

      let result = await Auth.updateUserAttributes(user, {
        'email': email,
        'custom:birthday': bdate,
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
  }, [])

  return (
    <NativeBaseProvider>
      <View style={{ backgroundColor: color.bg, minHeight: '100%' }}>
        <View style={{ marginLeft: 40 }}>
          <Input
            style={{ width: 331, height: 40, backgroundColor:"white", marginTop:10 , fontFamily:"FredokaOne-Regular"}}
            value={email}
            onChangeText={setEmail}
            variant="underlined"
            placeholder="Your Email Address"
            color='black'
          />
          <Input
            style={{ width: 331, height: 40, backgroundColor:"white", marginTop:20 , fontFamily:"FredokaOne-Regular"}}
            value={phone}
            onChangeText={setPhone}
            variant="underlined"
            placeholder="Phone Number"
            color='black'
          />
          <View
            style={{ width: 331, height: 40, backgroundColor:"white", marginTop:20 }}>
            <Select

              selectedValue={gender}
              minWidth={200}
              accessibilityLabel="Gender"
              placeholder="Gender"

              onValueChange={(itemValue) => setGender(itemValue)}
              _selectedItem={{
                bg: "cyan.600",
              }}
              _light={{ color: "black", fontFamily:"FredokaOne-Regular" }}
              _dark={{ color: "white", fontFamily:"FredokaOne-Regular" }}
            >
              <Select.Item label="Female" value="Female" />
              <Select.Item label="Male" value="Male" />
              <Select.Item label="Others" value="Others" />
            </Select>
          </View>
          <View style={{ marginBottom: 100 }}>
            <View style={{ marginLeft: 40 }}>

              <DatePicker
                date={bdate}
                style={[style.datePickerStyle, {width:331}]}
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
          </View>
          <TouchableOpacity onPress={() => { navigation.navigate('Change password') }}>
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
          <TouchableOpacity onPress={() => { handlechange() }}>
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
    marginLeft: -40,
    marginTop: 20,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    right: 140
  }
})