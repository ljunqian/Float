import React from 'react'
import { useState } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Input
        placeholder='Enter your email'
        label='Email'
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <Input
        placeholder='Enter your password'
        label='Password'
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="login"
        onPress={() => { navigation.navigate('Profile') }}
      />
      <Button title="register" />
    </View>
  )
}
export default LoginScreen