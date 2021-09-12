import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import typo from '../../../styles/typography';

import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter';
import { User } from "../../../models";

DataStore.configure({
  storageAdapter: SQLiteAdapter
});

const ExploreScreen = ({ navigation }) => {
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
    <ScrollView style={style.container}>
      <Text style={typo.H1}>
        Good morning, {info.name}
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', }}>
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
      <Text style={[typo.H2, { marginTop: 20 }]}>
        Start your day
      </Text>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <Text style={[typo.H2, { marginTop: 20 }]}>
        Your afternoon lift
      </Text>
      <CardComponent />
      <CardComponent />
      <Text style={[typo.H2, { marginTop: 20 }]}>
        At night
      </Text>
      <CardComponent />
      <CardComponent />
    </ScrollView>
  )
}

const CardComponent = () => {
  return (
    <View style={style.card}>
      <Text style={typo.T1}>Title lorem ipsum</Text>
      <View style={{ backgroundColor: '#EEEEEE', width: 80, height: 80 }}></View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
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
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})

export default ExploreScreen;