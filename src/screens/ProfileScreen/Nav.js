import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { flex } from "styled-system";

const profile = {
  name: 'John Doe',
  username: 'user_name',
  email: 'email@mail.com',
  password: '********'
}

const Nav = () => {
  return (
    <View style={{
      flexDirection: "column", paddingTop:20, paddingLeft:5, paddingBottom:25
    }}>
      <View style={styles.row}>
        <Text style = {styles.container}>Name </Text>
        <Text style = {styles.container}>{profile.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style = {styles.container}>Username </Text>
        <Text style = {styles.container}>{profile.username}</Text>
      </View>
      <View style={styles.row}>
        <Text style = {styles.container}>Email </Text>
        <Text style = {styles.container}>{profile.email}</Text>
      </View>
      <View style={styles.row}>
        <Text style = {styles.container}>Password </Text>
        <Text style = {styles.container}>{profile.password}</Text>
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