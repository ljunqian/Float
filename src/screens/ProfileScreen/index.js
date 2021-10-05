import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import ProfileScreen from './profile';
import typo from '../../styles/typography';
import { color } from '../../styles/theme';

import Friend1 from '../../assets/images/friend1.png';
import Friend2 from '../../assets/images/friend2.png';
import Friend3 from '../../assets/images/friend3.png';
import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter';
import { User } from "../../../src/models";

DataStore.configure({
  storageAdapter: SQLiteAdapter
});


const Coins = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => { navigation.navigate('Reward'); }}
      style={{
        alignSelf: 'center', backgroundColor: '#C4C4C4', margin: 15, height: 45, paddingLeft: 12, paddingRight: 12, borderRadius: 8,
        display: 'flex', flexDirection: 'row', alignItems: 'center'
      }}>

      <Text style={typo.H3}>
        My Coins Amount: 999
      </Text>
      <View
        style={{ alignSelf: 'center', backgroundColor: '#CD5959', borderRadius: 8, marginLeft: 5, padding: 5, }}
      >
        <Text style={{ color: 'white' }}
        >
          Store
        </Text>
      </View>

    </TouchableOpacity>

  )
}

const JourneyComponent = ({ action, time }) => {
  return (
    <View style={style.fl}>
      <Text style={typo.T1}>
        {action}
      </Text>
      <Text style={[typo.H1, { color: color.Sleep2 }]}>
        {time}
      </Text>
    </View>
  )
}

const FriendComponent = ({ img, name }) => {
  return (
    <View style={style.friend}>
      <Image source={img} style={{ marginRight: 10, borderRadius: 20 }} />
      <Text style={typo.H2}>
        {name}
      </Text>
    </View>
  )
}

const MainProf = ({ navigation }) => {
  const [active, setActive] = useState(true);
  const [info, setInfo] = useState({
    coins: '',
    meditateD: '',
    sleepD: '',
    moveD: ''
  });

  const getUserInfo = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const query = await DataStore.query(User, user.attributes.sub);
      setInfo({
        meditateD: secondsToHms(query.meditateD),
        sleepD: secondsToHms(query.sleepD),
        moveD: secondsToHms(query.moveD),
        focusD: secondsToHms(query.focusD)
      });
    } catch (error) {
      console.log("Error saving post", error);
    }
  }

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h + (h == 1 ? " H " : " H ");
    var mDisplay = m + (m == 1 ? " Min " : " Min ");
    var sDisplay = s + (s == 1 ? " Sec" : " Sec");
    return hDisplay + mDisplay + sDisplay;
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: color.bg, color: 'white' }}>
      <ProfileScreen />
      <Text style={[typo.H1, { textAlign: 'center' }]}>Username</Text>
      <Coins navigation={navigation} />
      <View style={{
        flexDirection: "row", paddingLeft: 5, paddingBottom: 5, paddingRight: 5
      }}>
        <TouchableOpacity
          onPress={() => { console.log("friend"); setActive(true) }}
          style={{
            flex: 1, height: 45, margin: 5,
            borderRadius: 5, backgroundColor: active ? 'white' : color.Focus2,
          }}>
          <Text style={[typo.H2, { marginTop: 10, alignSelf: 'center' }]}>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { setActive(false) }}
          style={{
            flex: 1, height: 45, margin: 5,
            borderRadius: 5, backgroundColor: active ? color.Focus2 : 'white',
          }}>
          <Text style={[typo.H2, { marginTop: 10, alignSelf: 'center' }]}>Journey</Text>
        </TouchableOpacity>
      </View>
      {active ? (
        <View style={{
          flexDirection: "column", paddingTop: 10, paddingLeft: 5, paddingBottom: 25
        }}>
          <FriendComponent name="Friend 1" img={Friend1} />
          <FriendComponent name="Friend 2" img={Friend2} />
          <FriendComponent name="Friend 3" img={Friend3} />
          <FriendComponent name="Friend 4" img={Friend1} />
          <FriendComponent name="Friend 5" img={Friend2} />

        </View>
      ) : (
        <View style={{
          flexDirection: "column", paddingTop: 10, paddingLeft: 5, paddingBottom: 25
        }}>
          <JourneyComponent action="Total Time Meditated:" time={info.meditateD} />
          <JourneyComponent action="Total Time Slept:" time={info.sleepD} />
          <JourneyComponent action="Total Sessions Completed:" time={info.moveD} />
          <JourneyComponent action="Average Time Spent Per Session:" time={info.focusD} />
        </View>

      )}
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
  fl: {
    margin: 10, borderRadius: 20, height: 100,
    backgroundColor: 'white', padding: 12,
    display: 'flex', flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  friend: {
    margin: 10, borderRadius: 20, height: 120,
    backgroundColor: 'white', padding: 12,
    display: 'flex', flexDirection: 'row',
    alignItems: 'center'
  }
})