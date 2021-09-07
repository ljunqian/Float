import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import ProfileScreen from './ProfileScreen';
import { Icon } from 'react-native-elements'
const MainProf = ({navigation}) => {
  return (
    <View>
        <View style={{
              flexDirection: "row",  paddingLeft:5, paddingBottom:5, paddingRight: 5,justifyContent:'space-between'
            }}>
           <Icon name="home" size={30} color="black" />
           <Icon name="create" size={30} color="black" onPress={()=>{navigation.navigate('Account Settings')}}/>
       </View>
      <ProfileScreen/>
      <View style = {{alignSelf:'center' }}><Text>Coin Placeholder</Text></View>
      <View style={{
                    flexDirection: "row",  paddingLeft:5, paddingBottom:5, paddingRight: 5
                  }}>
                 <View style = {{width: '50%', height:45, borderWidth: 1}}><Text style = {{marginTop:10, alignSelf:'center' }}>Friends</Text></View>
                 <View style = {{width: '50%', height:45,borderWidth: 1}}><Text style = {{marginTop:10, alignSelf:'center' }}>Journey</Text></View>
      </View>
      <View style={{
            flexDirection: "column", paddingTop:20, paddingLeft:5, paddingBottom:25
          }}>
            <View style = {style.fl}><Text style = {style.container}>Total Time Meditated</Text></View>
            <View style = {style.fl}><Text style = {style.container}>Total Time Slept</Text></View>
            <View style = {style.fl}><Text style = {style.container}>Total Sessions Completed</Text></View>
            <View style = {style.fl}><Text style = {style.container}>Average Time Spent Per Session</Text></View>
      </View>
      <Button
              onPress={()=>{navigation.navigate('Today')}}
              title="go to today"
              style={style.buttonStyle}
              />
    </View>
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
    fl:{
        borderWidth: 1, margin: 5, borderRadius:5, height: 40
    }
})