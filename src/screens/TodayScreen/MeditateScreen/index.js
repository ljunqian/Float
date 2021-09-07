import React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import typo from '../../../styles/typography';

const MeditateScreen = ({navigation}) => {
  return (
    <ScrollView style={style.container}> 
      <View style={style.header}>
      <Text style={typo.H1}>
        Meditation
      </Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row',}}>
        <TouchableOpacity style={style.button}>
          <Text>
            Button
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text>
            Button
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[typo.H2, {marginTop: 20}]}>
        Start your day
      </Text>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <Text style={[typo.H2, {marginTop: 20}]}>
        Your afternoon lift
      </Text>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
    </ScrollView>
  )
}

const CardComponent = () => {
  return (
    <View style={style.card}>
        <Text style={typo.T1}>Title lorem ipsum</Text>
        <View style={{backgroundColor: '#EEEEEE', width: 80, height: 80}}></View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 300,
    backgroundColor: '#EEEEEE',
  },
  button: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    color: 'black',
    width: 180,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  card: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    height: 100,
    width: '90%',
    borderRadius: 12,
    margin: 10,
    padding: 10,
    display: 'flex',
    justifyContent:'space-between',
    flexDirection: 'row'
  }
})

export default MeditateScreen;