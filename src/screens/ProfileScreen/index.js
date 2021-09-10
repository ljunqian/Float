import React from 'react';
import {Button, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import ProfileScreen from './ProfileScreen';
import { Icon } from 'react-native-elements';
import typo from '../../styles/typography';

const Coins = ({navigation}) => {
  return (
    <View style = {{alignSelf:'center',backgroundColor: '#C4C4C4', margin: 15, height: 45, padding:12}}>
      <TouchableOpacity 
        onPress={()=>{navigation.navigate('Reward');}}
      >
        <Text style={typo.H3}>My Coins Amount: 999</Text>
      </TouchableOpacity>
    </View>
  )
}

const MainProf = ({navigation}) => {
  return (
    <ScrollView>
      <ProfileScreen/>
      <Text style={[typo.H1, {textAlign: 'center'}]}>John Doe</Text>
      <Coins navigation={navigation}/>
      <View style={{
                    flexDirection: "row",  paddingLeft:5, paddingBottom:5, paddingRight: 5
                  }}>
                 <View style = {{width: '50%', height:45, borderWidth: 1}}><Text style = {{marginTop:10, alignSelf:'center' }}>Friends</Text></View>
                 <View style = {{width: '50%', height:45,borderWidth: 1}}><Text style = {{marginTop:10, alignSelf:'center' }}>Journey</Text></View>
      </View>
      <View style={{
            flexDirection: "column", paddingTop:20, paddingLeft:5, paddingBottom:25
          }}>
            <View style = {style.fl}><Text style = {style.container}>Total Time Meditated: 20mins</Text></View>
            <View style = {style.fl}><Text style = {style.container}>Total Time Slept: 20mins</Text></View>
            <View style = {style.fl}><Text style = {style.container}>Total Sessions Completed: 20mins</Text></View>
            <View style = {style.fl}><Text style = {style.container}>Average Time Spent Per Session: 20mins</Text></View>
      </View>
    </ScrollView>
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