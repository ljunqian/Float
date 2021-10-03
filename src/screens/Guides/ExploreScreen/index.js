
import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import typo from '../../../styles/typography';
import theme, {color} from '../../../styles/theme';
import { Icon } from 'react-native-elements';
import LoveRed from '../../../assets/icons/lovered.png';
import LoveYellow from '../../../assets/icons/loveyellow.png';
import Explore1 from '../../../assets/images/explore1.png';
import Explore2 from '../../../assets/images/explore2.png';
import Explore3 from '../../../assets/images/explore3.png';
import Explore4 from '../../../assets/images/explore4.png';

import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter';
import { User } from "../../../models";

DataStore.configure({
  storageAdapter: SQLiteAdapter
});

const ExploreScreen = ({ navigation }) => {
  
  const [info, setInfo] = useState({
    name: '',
    email: '',
    coins: '',
    meditateD: '',
    sleepD: '',
    moveD: '',
    friends: []
  });

  const getUserInfo = async () => {
    try {
      const { attributes } = await Auth.currentAuthenticatedUser();
      const post = await DataStore.query(User, attributes.sub);
      setInfo({
        name: post.name,
        email: post.email,
        coins: post.coins,
        meditateD: post.meditateD,
        sleepD: post.sleepD,
        moveD: post.moveD,
        focusD: post.focusD,
        friends: post.friends
      });
    } catch (error) {
      console.log("Error saving post", error);
    }
  }

/*
  useEffect(() => {
    getUserInfo();
  }, []);
  */
  return (

    <ScrollView style={theme.container}> 
      <Text style={[typo.H1, {color: 'white'}]}>
        Good morning, User {info.name}
      </Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

        <TouchableOpacity style={style.button}>
          <Image source={LoveRed} style={{marginRight: 10}}/>
          <Text>
            Favourites
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Recents') }>
          <Image source={LoveYellow} style={{marginRight: 10}}/>
          <Text>
            Recents
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[style.header, typo.H2]}>
        Start your day
      </Text>
        <CardComponent img={Explore1} title={"Meditate Session"}/>
        <CardComponent img={Explore2} title={"Focus Session"}/>
    
      <Text style={[style.header, typo.H2]}>
        Your afternoon lift
      </Text>
        <CardComponent img={Explore3} title={"Move Session"}/>

      <Text style={[style.header, typo.H2]}>
        At night
      </Text>
        <CardComponent img={Explore1} title={"Meditate Session"}/>
        <CardComponent img={Explore4} title={"Sleep Session"}/>

    </ScrollView>
  )
}

const CardComponent = ({img, title}) => {
  return (

    <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Icon name="radio-button-unchecked" size={30} color="white"/>
      <View style={style.card}>
          <Text style={typo.T1}>{title}</Text>
          <Image source={img} style={{backgroundColor: '#EEEEEE', width: 80, height: 80}} />
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    paddingBottom: 40
  },
  button: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    color: 'black',
    width: 180,
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    
  },
  card: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    height: 100,
    width: '90%',
    borderRadius: 12,
    margin: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  header: {marginTop: 20, color: 'white'},
  
})

export default ExploreScreen;