import React, { useState } from 'react'
import {Button, Text, View, StyleSheet, Image} from 'react-native';
import Avatar from '../../assets/images/avatar.png';


const OtpCode = () => {
  const [code, setCode] = useState(0)
  return (

<View style={{
                                                                        flex:1,
                                                                      marginTop:60,
                                                                      marginBottom:20,
                                                                      alignItems: "center", // ignore this - we'll come back to it
                                                                      justifyContent: "center", // ignore this - we'll come back to it
                                                                      flexDirection: "row"}}>
                                                            <View style={styles.code} />
                                                            <View style={styles.code} />
                                                            <View style={styles.code} />
                                                            <View style={styles.code} />
                                                            <View style={styles.code} />
                                                            <View style={styles.code} />
                                                          </View>


  )
}


export default OtpCode;

const styles = StyleSheet.create({

  code:{backgroundColor: "#BBBBBB",
        width: 50,
        height: 60,
        margin: 4,
        borderRadius:10}
})
