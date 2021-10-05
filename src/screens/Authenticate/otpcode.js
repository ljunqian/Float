import React, { useState } from 'react'
import {Button, Text, View, StyleSheet, Image} from 'react-native';
import Avatar from '../../assets/images/avatar.png';
import { Input, Center, NativeBaseProvider } from "native-base"

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

<Input
                                                                                    style = {{ height:100, color:'transparent', position:'absolute', left:0,right:0,zIndex:20}}
                                                                                    value={code}
onChangeText={setCode}
                                                                                    variant=""
                                                                                    placeholder=""
                                                                                    color='white'
                                                                                    type="none"
                                                                                  />

                                                            <View style={styles.code}>
                                                                <Input
                                                                                    style = {{ height:60, color:'white', fontFamily: "FredokaOne-Regular", fontSize:25}}
                                                                                    value={code[0]}

                                                                                    variant=""
                                                                                    placeholder="X"
                                                                                    color='white'
                                                                                    type="string"
                                                                                  />
                                                            </View>
 <View style={styles.code}>
                                                                 <Input
                                                                                     style = {{ height:60, color:'white', fontFamily: "FredokaOne-Regular", fontSize:25}}
                                                                                     value={code[1]}

                                                                                     variant=""
                                                                                     placeholder="X"
                                                                                     color='white'
                                                                                     type="string"
                                                                                   />
                                                             </View>
  <View style={styles.code}>
                                                                  <Input
                                                                                      style = {{ height:60, color:'white', fontFamily: "FredokaOne-Regular", fontSize:25}}
                                                                                      value={code[2]}

                                                                                      variant=""
                                                                                      placeholder="X"
                                                                                      color='white'
                                                                                      type="string"
                                                                                    />
                                                              </View>
   <View style={styles.code}>
                                                                   <Input
                                                                                       style = {{ height:60, color:'white', fontFamily: "FredokaOne-Regular", fontSize:25}}
                                                                                       value={code[3]}

                                                                                       variant=""
                                                                                       placeholder="X"
                                                                                       color='white'
                                                                                       type="string"
                                                                                     />
                                                               </View>
   <View style={styles.code}>
                                                                   <Input
                                                                                       style = {{ height:60, color:'white', fontFamily: "FredokaOne-Regular", fontSize:25}}
                                                                                       value={code[4]}

                                                                                       variant=""
                                                                                       placeholder="X"
                                                                                       color='white'
                                                                                       type="string"
                                                                                     />
                                                               </View>
   <View style={styles.code}>
                                                                   <Input
                                                                                       style = {{ height:60, color:'white', fontFamily: "FredokaOne-Regular", fontSize:25}}
                                                                                       value={code[5]}

                                                                                       variant=" "
                                                                                       placeholder="X"
                                                                                       color='white'
                                                                                       type="string"
                                                                                     />
                                                               </View>

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
