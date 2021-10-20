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
    date: '',

  });

  const getUserInfo = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setInfo({
        name: user.username,
        email: user.attributes.email,
        phone: user.attributes["custom:phone"],
        gender: user.attributes["custom:gender"],
        date: user.attributes["custom:birthday"],

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
    <View style={[styles.row, {backgroundColor:"white", marginLeft: 18, height:48, width:365, selfAlign:"center", paddingLeft:10, paddingRight:10}]}>
            <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>Name: </Text>
            <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>{info.name}</Text>
          </View>
      <View style={[styles.row, {backgroundColor:"white", marginTop:10, marginLeft: 18, height:48, width:365, selfAlign:"center", paddingLeft:10, paddingRight:10}]}>
        <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>Username: </Text>
        <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>{info.name}</Text>
      </View>
      <View style={[styles.row, {backgroundColor:"white", marginTop:10, marginLeft: 18, height:48, width:365, selfAlign:"center", paddingLeft:10, paddingRight:10}]}>
        <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>Email </Text>
        <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>{info.email}</Text>
      </View>
      <View style={[styles.row, {backgroundColor:"white", marginTop:10, marginLeft: 18, height:48, width:365, selfAlign:"center", paddingLeft:10, paddingRight:10}]}>
        <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>Phone number </Text>
        <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>{info.phone}</Text>
      </View>
      <View style={[styles.row, {backgroundColor:"white", marginTop:10, marginLeft: 18, height:48, width:365, selfAlign:"center", paddingLeft:10, paddingRight:10}]}>
        <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>Gender </Text>
        <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>{info.gender}</Text>
      </View>
      <View style={[styles.row, {backgroundColor:"white", marginTop:10, marginLeft: 18, height:48, width:365, selfAlign:"center", paddingLeft:10, paddingRight:10}]}>
        <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>Birthday </Text>
        <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>{info.date}</Text>
      </View>
      <View style={[styles.row, {backgroundColor:"white", marginTop:10, marginLeft: 18, height:48, width:365, selfAlign:"center", paddingLeft:10, paddingRight:10}]}>
              <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>Password </Text>
              <Text style={[styles.container, {color:"black", marginTop:8, fontFamily: "FredokaOne-Regular"}]}>******</Text>
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