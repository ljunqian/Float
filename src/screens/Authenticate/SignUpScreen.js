import React from 'react'
import { View, Image, StyleSheet, Button } from 'react-native'

import { Auth } from 'aws-amplify';


const initialState = { name: '', description: '' }

const SignUpScreen = () => {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={Auth.signOut()}
        title="Share your story"
      />
      <Button
        onPress={signOut()}
        title="Listen to others"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { height: '50%', width: '50%' }
})

export default SignUpScreen;