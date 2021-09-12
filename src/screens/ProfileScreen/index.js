import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ProfileScreen from './profile';
import { Icon } from 'react-native-elements';
import typo from '../../styles/typography';

import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter';
import { User } from "../../../src/models";

DataStore.configure({
  storageAdapter: SQLiteAdapter
});

const MainProf = ({ navigation }) => {
  const Coins = ({ navigation }) => {

    return (
      <View style={{ alignSelf: 'center', backgroundColor: '#C4C4C4', margin: 15, height: 45, padding: 12 }}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Reward'); }}
        >
          <Text style={typo.H3}>My Coins Amount: {info.coins}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const [info, setInfo] = useState({
    name: '',
    email: '',
    coins: '',
    meditateD: '',
    sleepD: '',
    moveD: '',
    friends: []
  });

  const getUserInfo = async () => {
    try {
      //const post = await DataStore.query(User, Auth.currentAuthenticatedUser());
      const { attributes } = await Auth.currentAuthenticatedUser();
      const post = await DataStore.query(User, attributes.sub);
      //onsole.log(post.email);
      setInfo({
        name: post.name,
        email: post.email,
        coins: post.coins,
        meditateD: post.meditateD,
        sleepD: post.sleepD,
        moveD: post.moveD,
        focusD: post.focusD,
        friends: post.friends
      });
    } catch (error) {
      console.log("Error saving post", error);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ScrollView>
      <ProfileScreen />
      <Text style={[typo.H1, { textAlign: 'center' }]}>{info.name}</Text>
      <Coins navigation={navigation} />
      <View style={{
        flexDirection: "row", paddingLeft: 5, paddingBottom: 5, paddingRight: 5
      }}>
        <View style={{ width: '50%', height: 45, borderWidth: 1 }}><Text style={{ marginTop: 10, alignSelf: 'center' }}>Friends</Text></View>
        <View style={{ width: '50%', height: 45, borderWidth: 1 }}><Text style={{ marginTop: 10, alignSelf: 'center' }}>Journey</Text></View>
      </View>
      <View style={{
        flexDirection: "column", paddingTop: 20, paddingLeft: 5, paddingBottom: 25
      }}>
        <View style={style.fl}><Text style={style.container}>Total Time Meditated: {info.meditateD} mins</Text></View>
        <View style={style.fl}><Text style={style.container}>Total Time Slept: {info.sleepD}mins</Text></View>
        <View style={style.fl}><Text style={style.container}>Total Sessions Completed: {info.moveD}mins</Text></View>
        <View style={style.fl}><Text style={style.container}>Average Time Spent Per Session: {info.focusD}mins</Text></View>
      </View>
    </ScrollView>
  )
}

export default MainProf;
const style = StyleSheet.create({
  buttonStyle: {
    color: 'green',
    height: '40px',
  },
  container: {
    padding: 5, fontSize: 16, fontFamily: 'Roboto'
  },
  fl: {
    borderWidth: 1, margin: 5, borderRadius: 5, height: 40
  }
})