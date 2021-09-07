import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Nav = () => {
  return (
    <View style={{
      flexDirection: "column", paddingTop:20, paddingLeft:5, paddingBottom:25
    }}>
      <Text style = {styles.container}>Name</Text>
      <Text style = {styles.container}>Username</Text>
      <Text style = {styles.container}>Email</Text>
      <Text style = {styles.container}>Password</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5, fontSize: 16, fontFamily: 'Roboto'
  },
});


export default Nav;