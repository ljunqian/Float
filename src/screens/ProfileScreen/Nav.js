import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { flex } from "styled-system";
import { DataStore } from 'aws-amplify';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter';
import {User} from './src/models'

const profile = {
  name: 'Myname Is',
  username: 'user_name',
  email: 'email@mail.com',
  phone: '+65 12345678',
  gender: 'Male',
  birthday: 'Jan 1, 1998',
}

const Nav = () => {
  return (
    <View style={{
      flexDirection: "column", paddingTop:20, paddingLeft:5, paddingBottom:25
    }}>
      <View style={styles.row}>
        <Text style = {styles.container}>Username </Text>
        <Text style = {styles.container}>{profile.username}</Text>
      </View>
      <View style={styles.row}>
        <Text style = {styles.container}>Email </Text>
        <Text style = {styles.container}>{profile.email}</Text>
      </View>
      <View style={styles.row}>
        <Text style = {styles.container}>Phone number </Text>
        <Text style = {styles.container}>{profile.phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style = {styles.container}>Gender </Text>
        <Text style = {styles.container}>{profile.gender}</Text>
      </View>
      <View style={styles.row}>
        <Text style = {styles.container}>Birthday </Text>
        <Text style = {styles.container}>{profile.birthday}</Text>
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