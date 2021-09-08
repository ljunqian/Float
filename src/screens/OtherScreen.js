import React, { useState } from 'react'
import { View, StyleSheet, TextInput,} from 'react-native';
import { Picker } from '@react-native-picker/picker';

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

    </View>
  )
}

const styles = StyleSheet.create({
  root: { width: '100%', flex: 1, padding: 18 },
  container: { padding: 10 },
  input: { margin: 10, borderWidth: 2 },
  button: { padding: 10 }
})

export default App;
