import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { flex } from "styled-system";

import { Auth } from 'aws-amplify';

const Nav = () => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    date: ''
  });

  const getUserInfo = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setInfo({
        name: user.username,
        email: user.attributes.email,
        phone: user.attributes["custom:phone"],
        gender: user.attributes["custom:gender"],
        date: user.attributes["custom:birthday"]
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
      flexDirection: "column", paddingTop: 20, paddingLeft: 5, paddingBottom: 25, color: 'white'
    }}>
      <View style={styles.row}>
        <Text style={styles.container}>Username </Text>
        <Text style={styles.container}>{info.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.container}>Email </Text>
        <Text style={styles.container}>{info.email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.container}>Phone number </Text>
        <Text style={styles.container}>{info.phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.container}>Gender </Text>
        <Text style={styles.container}>{info.gender}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.container}>Birthday </Text>
        <Text style={styles.container}>{info.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5, fontSize: 16, fontFamily: 'Roboto', color: 'white'
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }
});


export default Nav;