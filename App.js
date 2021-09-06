import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

//import { Auth } from 'aws-amplify';

import SplashScreen from './screens/SplashScreen';
import TodayScreen from './screens/TodayScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import LoginScreen from './screens/LoginScreen';


const App = () => {
  const [name, setName] = useState('');
  const [sub, setSub] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState();

  const save = () => {
    console.warn('not valid')
  }
  //if (!isValid()) {
  //console.warn('not valid')
  //return;
  //}

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name......"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Bio......"
        multiline
        numberOfLines={5}
        value={bio}
        onChangeText={setBio}
      />
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)
        }>
        <Picker.Item label="Male" value="MALE" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="OTHER" />
      </Picker>
      <AmplifySignOut buttonText="Custom Text"></AmplifySignOut>

    </View>
  )
}

const styles = StyleSheet.create({
  root: { width: '100%', flex: 1, padding: 18 },
  container: { padding: 10 },
  input: { margin: 10, borderWidth: 2 },
  button: { padding: 10 }
})

export default withAuthenticator(App);