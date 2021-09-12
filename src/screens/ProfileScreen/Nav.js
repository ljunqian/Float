import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { flex } from "styled-system";

import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter';
import { User } from "../../../src/models";

DataStore.configure({
  storageAdapter: SQLiteAdapter
});

const Nav = () => {
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
    <View style={{
      flexDirection: "column", paddingTop:20, paddingLeft:5, paddingBottom:25
    }}>
      <View style={styles.row}>
        <Text style = {styles.container}>Username </Text>
        <Text style = {styles.container}>{info.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style = {styles.container}>Email </Text>
        <Text style = {styles.container}>{info.email}</Text>
      </View>
      <View style={styles.row}>
        <Text style = {styles.container}>Phone number </Text>
        <Text style = {styles.container}>Not stored yet</Text>
      </View>
      <View style={styles.row}>
        <Text style = {styles.container}>Gender </Text>
        <Text style = {styles.container}>Not stored yet</Text>
      </View>
      <View style={styles.row}>
        <Text style = {styles.container}>Birthday </Text>
        <Text style = {styles.container}>Not stored yet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5, fontSize: 16, fontFamily: 'Roboto'
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }
});


export default Nav;