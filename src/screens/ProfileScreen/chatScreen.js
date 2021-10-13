import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Input, Center, NativeBaseProvider, Button } from "native-base"
import { Auth } from 'aws-amplify';
import typo from '../../styles/typography';
import Avatar from '../../assets/images/avatar.png';
import FloatLogo from '../../assets/images/float.png';
import { color } from '../../styles/theme';

const initialState = { name: '', description: '' }

const chatScreen = ({ navigation }) => {



  return (
    <NativeBaseProvider>
      <View
        style={styles.container}
      >

        <View style={{ marginTop: 10, width: 48, height: 20, backgroundColor: '#999999', borderRadius: 5, alignItems: 'center', alignSelf: 'center' }}>
          <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}>Today</Text>
        </View>

        <View style={{ marginTop: 10, height: 25, backgroundColor: '#4263DD', borderRadius: 5, paddingTop: 3, paddingRight: 25, paddingLeft: 5, alignItems: 'center', alignSelf: 'flex-end' }}>
          <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}>Hello !</Text>
        </View>

        <View style={{ marginTop: 10, height: 25, backgroundColor: '#44BED9', paddingRight: 25, paddingLeft: 5, paddingTop: 3, borderRadius: 5, alignItems: 'center', alignSelf: 'flex-start' }}>
          <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}>Hello !</Text>
        </View>

        <View style={{ height: 40, backgroundColor: 'white', paddingRight: 5, position: 'absolute', bottom: 0, left: 0, right: 0, paddingLeft: 5, alignSelf: 'flex-start' }}>
          <Text style={{ color: '#666666', fontFamily: 'Montserrat-Regular', paddingLeft: 10, paddingTop: 10 }}>Message</Text>
        </View>
      </View>

    </NativeBaseProvider >
  )
}
const styles = StyleSheet.create({
  container: { width: '100%', display: 'flex', paddingLeft: 20, paddingRight: 20, minHeight: '100%', backgroundColor: color.bg },
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
    marginTop: 30,
    marginLeft: 20,
    fontSize: 14,
    fontWeight: '500',
    color: 'red',
    fontFamily: 'Lato-Regular',
  },

})

export default chatScreen;