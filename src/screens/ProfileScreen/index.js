
import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground, Modal } from 'react-native';

import ProfileScreen from './profile';
import typo from '../../styles/typography';
import { color } from '../../styles/theme';

import Friend1 from '../../assets/images/friend1.png';
import Friend2 from '../../assets/images/friend2.png';
import Friend3 from '../../assets/images/friend3.png';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from "../../graphql/queries"
import JourneyBG from '../../assets/images/journeybg-1.gif';
import Vector9 from '../../assets/images/Vector9.png';
import mappin from '../../assets/images/mappin.png';
import mappin1 from '../../assets/images/mappin-1.png';
import mappin2 from '../../assets/images/mappin-2.png';
import mappin3 from '../../assets/images/mappin-3.png';
import MedBG from '../../assets/images/meditate-planet.png';
import SleepBG from '../../assets/images/sleep-planet.png';
import MoveBG from '../../assets/images/move-planet.png';
import FocusBG from '../../assets/images/focus-planet.png';


const Coins = ({ navigation, i }) => {
  return (
    <TouchableOpacity
      onPress={() => { navigation.navigate('Reward'); }}
      style={{
        alignSelf: 'center', backgroundColor: '#C4C4C4', margin: 15, height: 45, paddingLeft: 12, paddingRight: 12, borderRadius: 8,
        display: 'flex', flexDirection: 'row', alignItems: 'center'
      }}>

      <Text style={typo.H3}>
        My Coins Amount: {i.coins}
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

const JourneyComponent = ({ action, colour, number, suffix }) => {

  return (
    <View style={style.fl}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex:2, top: 5}}>
        <Text style={[typo.H0, {color: colour}]}>
          {number}
        </Text>
        <Text style={[typo.H2, {color: colour}]}>
          {suffix}
        </Text>
      </View>
      <Text style={[typo.T1, {marginRight: 40, flex: 3, flexWrap: 'wrap'}]}>
        {action}
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

const NewJourney = ({ info }) => {
  const [modalVisible, setModalVisible] = useState(false); 
  const [type, setType] = useState('');

  const JourneyBtn = ({ text, colour, top, left, pressHanldler }) => {
    return(
      <TouchableOpacity style={[style.journeyButton, {top: top, left: left}]} onPress={pressHanldler}> 
        <Text style={[typo.H2, {color: colour}]}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }

  const JourneyBgImg = () => {
    const MapPin = ({ src, top, left }) => {
      return <Image source={src} style={{position: 'absolute', top: top, left: left}}/>
    }

    return(
      <>
        <Image source={JourneyBG} style={{width: 411, height: 731, position: 'absolute'}}/>
        <Image source={Vector9} style={{width: 300, height: 636.5, position: 'absolute', left: '15%'}}/>
        <MapPin src={mappin} top={'22%'} left={'78%'}/>
        <MapPin src={mappin1} top={'50%'} left={'10%'}/>
        <MapPin src={mappin2} top={'69.5%'} left={'60%'}/>
        <MapPin src={mappin3} top={'83%'} left={'28%'}/>
      </>
    )
  }

  const JourneyPopup = () => {
    const displayContent = () => {
      if (type === 'meditate'){
        return(
          <>
          <JourneyComponent action="Total Time Meditated" colour={color.Med1} number={'3'} suffix={'hrs'}/>
          <JourneyComponent action="Average Time Meditated Per Week" colour={color.Med1} number={'35'} suffix={'min'}/>
          </>
        )
      }else if(type === 'focus'){
        return(
          <>
          <JourneyComponent action="Average Focus Sessions Per Week" colour={color.Focus1} number={'4'} suffix={'sessions'}/>
          <JourneyComponent action="Average Time Spent Per Session" colour={color.Focus1} number={'35'} suffix={'min'}/>
          </>
        )
      }else if(type === 'move'){
        return(
          <>
          <JourneyComponent action="Average Move Sessions Per Week" colour={color.Move1} number={'3'} suffix={'sessions'}/>
          <JourneyComponent action="Average Time Spent Per Session" colour={color.Move1} number={'20'} suffix={'min'}/>
          </>
        )
      }else{

      }
    }
    
    return(
      <Modal 
        visible={modalVisible}
        animationType="slide"
        transparent={true}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Image source={background[type]} resizeMethod={'scale'} style={{top:185, left:-45, position: 'absolute'}}/>
          <TouchableOpacity style={{flex: 5}} onPress={() => setModalVisible(false)} />
          <View style={{flex: 5, alignItems: 'center', marginTop: 30}}>
            <Text style={[typo.H0, style.title]}>
              {title[type]}
            </Text>
            <View style={style.opaqueContainer}>
              {displayContent()}
            </View>
          </View>  
        </View>
        
      </Modal>
    )
  }

  return(
    <View style={{display: 'flex', width: 411, height: 731}}>
      <JourneyBgImg />
      <View style={{marginTop: 33, alignSelf: 'center'}}>
        <Text style={typo.H0}>
          My Journey
        </Text>
      </View>
      <JourneyBtn text={'Meditation'} colour={color.Med1} top={'23%'} left={'43%'} pressHanldler={() => {setModalVisible(true); setType('meditate')}}/>
      <JourneyBtn text={'Sleep'} colour={color.Sleep2} top={'51%'} left={'25%'}/>
      <JourneyBtn text={'Focus'} colour={color.Focus1} top={'70.5%'} left={'37%'} pressHanldler={() => {setModalVisible(true); setType('focus')}}/>
      <JourneyBtn text={'Move'} colour={color.Move1} top={'84%'} left={'43%'} pressHanldler={() => {setModalVisible(true); setType('move')}}/>
      <JourneyPopup />
    </View>
  )
}

const MainProf = ({ navigation }) => {
  const [active, setActive] = useState(true);
  const [info, setInfo] = useState({
    username: '',
    coins: 0,
    meditateD: '',
    sleepD: '',
    moveD: '',
    focusD: ''
  });

  const getUserInfo = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const {data} = await API.graphql(graphqlOperation(getUser, { id: user.attributes.sub }));
      console.log(data);
      setInfo({
        meditateD: secondsToHms(data.getUser.meditateD),
        sleepD: secondsToHms(data.getUser.sleepD),
        moveD: secondsToHms(data.getUser.moveD),
        focusD: secondsToHms(data.getUser.focusD),
        coins: data.getUser.coins,
        username: user.username
      });
    } catch (error) {
      console.log(error);
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
      <Text style={[typo.H1, { textAlign: 'center' }]}>{info.username}</Text>
      <Coins navigation={navigation} i={info} />
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
          flexDirection: "column", paddingTop: 10,
        }}>
          <NewJourney info={info}/>
        </View>

      )}
    </ScrollView>
  )
}

export default MainProf;

const title = {
  "meditate": "Meditation",
  "sleep": "Sleep",
  "move": "Move",
  "focus": "Focus"
}

const background = {
    meditate: MedBG,
    sleep: SleepBG,
    move: MoveBG,
    focus: FocusBG
}

const style = StyleSheet.create({

  buttonStyle: {
    color: 'green',
    height: '40px',
  },
  container: {
    padding: 5, fontSize: 16, fontFamily: 'Roboto'
  },
  fl: {
    margin: 10, borderRadius: 20, height: 90, width: 340,
    backgroundColor: 'white', padding: 20, display: 'flex',
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-evenly', left: 5
  },
  friend: {
    margin: 10, borderRadius: 20, height: 120,
    backgroundColor: 'white', padding: 12,
    display: 'flex', flexDirection: 'row',
    alignItems: 'center'
  },
  journeyButton: {
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    borderRadius: 20,
    position: 'absolute'
  },
  title: {
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  opaqueContainer: {
    height: 200,
    width: 340,
    top: 20,
    left: -10,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20
  }

})
