
import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Pressable, Modal, Keyboard, TextInput } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import BottomDrawer from 'react-native-bottom-drawer-view';

import ProfileScreen from './profile';
import typo from '../../styles/typography';
import { color } from '../../styles/theme';
import {useSelector, useDispatch} from 'react-redux';
// import {JCalendar} from './bigCalendar';   // uncomment to view ; comment './weekcalendar'
import {JCalendar} from './weekCalendar';
import * as Progress from 'react-native-progress';
import { changeChatName } from '../GlobalStates/UserAction';
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
import Coin from '../../assets/icons/coins.png';
import Forward from '../../assets/icons/forwardarrow.png';
import Backward from '../../assets/icons/backarrow.png';
import { ActiveFriends, Friends } from './constants';
const SearchBar = (props) => {
  return (
    <View style={style.container2}>
      <View
        style={
          !props.clicked
            ? style.searchBar__unclicked
            : style.searchBar__unclicked
        }
      >
        {/* search Icon */}

        {/* Input field */}
        <TextInput
          style={style.input2}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {/* {props.clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              props.setSearchPhrase("")
          }}/>
        )} */}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
     {/*  {props.clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          ></Button>
        </View>
      )} */}
    </View>
  );
};
const Coins = ({ navigation, i }) => {
  const {coins} = useSelector((state) => state.user.userData);
  return (
    <TouchableOpacity
      onPress={() => { navigation.navigate('Reward'); }}
      style={{
        alignSelf: 'center', height: 45, paddingLeft: 12, paddingRight: 12, borderRadius: 8,
        display: 'flex', flexDirection: 'row', alignItems: 'center'
      }}>

      <Image source={Coin}/>
      <Text style={[typo.H3, {marginLeft: 5, color: '#F4C34D'}]}>
         : {coins}
        {//i.coins
        }
      </Text>
      <View
        style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#CD5959', borderRadius: 8, height: 28, width: 80, marginLeft: 7}}
      >
        <Text style= {[typo.H3, {color: '#FFF'}]}
        >
          STORE
        </Text>
      </View>

    </TouchableOpacity>

  )
}

const JourneyComponent = ({ action, colour, number, number2, suffix, suffix2, isSleep }) => {

  const Jtime = ({time, suf, bg}) => {
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', flex:2, top: 5, backgroundColor: bg}}>
        <Text style={[typo.H0, {color: colour}]}>
          {time}
        </Text>
        <Text style={[typo.H2, {color: colour}]}>
          {suf}
        </Text>
      </View>)
  }

  if(isSleep){
    return(
      <View style={style.fl}>
        <Jtime time={number} suf={suffix} bg={'none'}/>
        <Jtime time={number2} suf={suffix2} bg={'none'}/>
        <Text style={[typo.T1, {marginLeft: 17, flex: 6, flexWrap: 'wrap'}]}>
          {action}
        </Text>
      </View>
    )
  }
  else{
    return (
      <View style={style.fl}>
        <Jtime time={number} suf={suffix}/>
        <Text style={[typo.T1, {marginRight: 40, flex: 3, flexWrap: 'wrap'}]}>
          {action}
        </Text>
      </View>
    )
  }
  
}


const FriendComponent = ({ img, name, onPress }) => {
  return (
    <TouchableOpacity style={style.friend} onPress={onPress}>
      <Image source={img} style={{ marginRight: 10, borderRadius: 20 }} />
      <Text style={[{color: "white"}, typo.H2]}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

const FriendTop = ({ img, name }) => {
  return (
    <View style={style.friendcol}>
      <Image source={img} style={{  borderRadius: 20 }} />
      <Text style={[{color: "white"}, typo.H2]}>
        {name}
      </Text>
    </View>
  )
}

const NewJourney = ({ info }) => {
  const [modalVisible, setModalVisible] = useState(false); 
  const [type, setType] = useState('');
  const {levels} = useSelector((state) => state.user);
  const {exp} = useSelector((state) => state.user);
  
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
          <JourneyComponent action="Total Time Meditated" colour={color.Med1} number={'3'} suffix={'hrs'} isSleep={false}/>
          <JourneyComponent action="Average Time Meditated Per Week" colour={color.Med1} number={'35'} suffix={'min'} isSleep={false}/>
          </>
        )
      }else if(type === 'focus'){
        return(
          <>
          <JourneyComponent action="Average Focus Sessions Per Week" colour={color.Focus1} number={'4'} suffix={'sessions'} isSleep={false}/>
          <JourneyComponent action="Average Time Spent Per Session" colour={color.Focus1} number={'35'} suffix={'min'} isSleep={false}/>
          </>
        )
      }else if(type === 'move'){
        return(
          <>
          <JourneyComponent action="Average Move Sessions Per Week" colour={color.Move1} number={'3'} suffix={'sessions'} isSleep={false}/>
          <JourneyComponent action="Average Time Spent Per Session" colour={color.Move1} number={'20'} suffix={'min'} isSleep={false}/>
          </>
        )
      }else{
        return(
          <>
          <JourneyComponent action="Average Time In Bed" colour={color.Sleep2} number={'6'} suffix={'hrs'} number2={'36'} suffix2={'min'} isSleep={true}/>
          <JCalendar styles={style.fls}/>
          </>
        )
      }
    }
    
    return(
      <Modal 
        visible={modalVisible}
        animationType="slide"
        transparent={true}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Image source={background[type]} resizeMethod={'scale'} style={{top:type=='sleep'?-5:155, left:-45, position: 'absolute'}}/>
          <TouchableOpacity style={{flex: type=='sleep'?1:5}} onPress={() => setModalVisible(false)} />
          <View style={{flex: type=='sleep'?4.5:6, alignItems: 'center', marginTop: 30}}>
            <Text style={[typo.H0, style.title]}>
              {title[type]}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', right: 5, margin: 10}}>
              <Text style={[typo.T3, {color:'white'}]}>
                Level {levels['level'+type]}
              </Text>
              <Progress.Bar 
                progress={exp && exp[type+'exp'] ? (exp[type+'exp']%180)/180 : 0}
                width={100}
                height={8}
                color={colours[type]}
                unfilledColor={'white'}
                borderWidth={0}
                top={1}
                left={15}
              />
            </View>
            <View style={[style.opaqueContainer, {height: type=='sleep'? 370:200}]}>
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
      <JourneyBtn text={'Sleep'} colour={color.Sleep2} top={'51%'} left={'25%'} pressHanldler={() => {setModalVisible(true); setType('sleep')}}/>
      <JourneyBtn text={'Focus'} colour={color.Focus1} top={'70.5%'} left={'37%'} pressHanldler={() => {setModalVisible(true); setType('focus')}}/>
      <JourneyBtn text={'Move'} colour={color.Move1} top={'84%'} left={'43%'} pressHanldler={() => {setModalVisible(true); setType('move')}}/>
      <JourneyPopup />
    </View>
  )
}

const MainProf = ({ navigation }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [info, setInfo] = useState({
    username: '',
    coins: 0,
    meditateD: '',
    sleepD: '',
    moveD: '',
    focusD: '',
    search: ''
  });
  const [feelings, setFeelings] =  useState([{
    date: '',
    feeling: '',
  }]);

  const getUserInfo = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const {data} = await API.graphql(graphqlOperation(getUser, { id: user.attributes.sub }));
      let myFeelings =  [];

      setInfo({
        ...info,
        meditateD: secondsToHms(data.getUser.meditateD),
        sleepD: secondsToHms(data.getUser.sleepD),
        moveD: secondsToHms(data.getUser.moveD),
        focusD: secondsToHms(data.getUser.focusD),
        coins: data.getUser.coins,
        username: user.username,
      });

      // Get list of feelings, and update myFeelings
      data.getUser.feelings.map(item => {
        const newArr = {
          date: item.slice(6,16),
          feeling: item.slice(26,-1).toLowerCase()
        }
        myFeelings = [...myFeelings, newArr];
        setFeelings(myFeelings);
      })
      

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
    console.log("get user info")
    return {

    }
  }, []);

  let customDatesStyles = [];
  let today = moment();
  let day = today.clone().startOf('month');
  //stylise individual date(s)
  feelings.map(item => {
    customDatesStyles.push({
    //Example of date I want to stylise
    date: moment(item.date, 'DD-MM-YYYY'),
    // Mood colour
    style: {backgroundColor: moodColors[item.feeling]},
    containerStyle: [], // extra styling for day container
  });
  })
  

  const customDayHeaderStylesCallback = (dayOfWeek, month, year) => {
    return {
      textStyle: {
        color: '#262626',
        fontFamily: 'Montserrat-Bold',
        fontSize: 14
      }
    };
  }

  const goToChat = (name) => {
    dispatch(changeChatName({name: name}));
    navigation.navigate('Chat Screen')
  }
  return (
    <View>
    <ScrollView style={{ backgroundColor: '#3C886B', color: 'white' }}>
    <View style={{backgroundColor: color.bg, height: 280, width: '100%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, elevation: 10, zIndex: -1}}>
      <ProfileScreen />
      <Text style={[typo.H1, { textAlign: 'center' }]}>{info.username}</Text> 
      <Coins navigation={navigation} i={info} />
    </View>
    <Text style={[typo.H1, {marginTop: 20, marginLeft: 20, marginBottom: 13, textShadowColor: '#262626', textShadowOffset: {width: 2, height: 2}, textShadowRadius: 10}]}>Mood Tracker</Text>
      <View style={{alignItems: 'center', position: 'relative'}}>
        <View style={{marginBottom: 80}}>
          <View style={{backgroundColor: '#FFF', position: 'absolute', width: 340, height: '85%', borderRadius: 20, marginTop: 47, alignSelf: 'center'}}/>
          <CalendarPicker 
              customDayHeaderStyles={customDayHeaderStylesCallback}
              customDatesStyles={customDatesStyles}
              monthTitleStyle={{
                color: '#FFF',
                fontFamily: 'FredokaOne-Regular',
                fontSize: 20,
              }}
              yearTitleStyle={{
                color: '#FFF',
                fontFamily: 'FredokaOne-Regular',
                fontSize: 20,
              }}
              dayOfWeekStyles={{
                marginRight: 100
              }}
              dayLabelsWrapper={{
                borderTopWidth: 0,
                borderBottomWidth: 0,
                paddingTop: 20
              }}
              monthYearHeaderWrapperStyle={{
                paddingTop: 10,
                
              }}
                textStyle={{
                  color: '#262626',
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 14
                }}
                todayTextStyle = {{color: '#FFF'}}
                previousTitle= {<Image source={Backward}/>}
                previousTitleStyle={{paddingLeft: 45}}
                nextTitle= {<Image source={Forward}/>}
                nextTitleStyle={{paddingRight: 45}}
                width = {360}
                height= {400}
                enableDateChange= {false}
            />
          </View>
      </View>
    </ScrollView>

        <BottomDrawer
            containerHeight={685}
            downDisplay={530}
            startUp={false}
            paddingBottom={100}
            backgroundColor={'transparent'}
        > 
          <View style={{width: '100%', height: 30, backgroundColor: '#3C886B', borderTopLeftRadius: 20, borderTopRightRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 100, height: 3, backgroundColor: '#fff'}}/>
          </View>
          <View style={{flexDirection: "row", backgroundColor: '#3C886B'}}>
            <TouchableOpacity style={{backgroundColor: '#262626', width: '50%', height: 56, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10, marginRight: 1}}
            onPress={() => { console.log("friend"); setActive(true) }} 
            >
              <Text style={{color: '#FFF', fontFamily: 'FredokaOne-Regular', fontSize: 24}}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#262626', width: '50%', height: 56, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10,marginLeft: 1}}
            onPress={() => { console.log("friend"); setActive(false) }}
            >
              <Text style={{color: '#FFF', fontFamily: 'FredokaOne-Regular', fontSize: 24}}>Journey</Text>
            </TouchableOpacity> 
            
          </View>

          {active ? (
        <>
        
        <ScrollView style={{backgroundColor: '#262626'}}>
        <Pressable style={{paddingBottom: 80, marginTop: 20}}>
        <View style={{backgroundColor:'#262626', paddingTop:40}}>

          <Text style={{fontFamily:'FredokaOne-Regular', fontSize:32, marginLeft:20, color:'white'}}>Active Chats</Text>
          <ScrollView style={{
                    flexDirection: "row", paddingTop: 10,  paddingBottom: 25
                  }} horizontal>
                    {ActiveFriends.map((friend) => {
                      return (
                        <TouchableOpacity onPress={() => {goToChat(friend.name)}}>
                            <FriendTop name={friend.name} img={friend.img} />
                      </TouchableOpacity>
                      )
                    })}
                  </ScrollView>


          <View style={{
                flexDirection: "row", paddingLeft: 5, paddingBottom: 5, paddingRight: 5
              }}>
                <TouchableOpacity
                  onPress={() => {goToChat('Hao Weng')}}
                  style={{

                    flex: 1, height: 45, margin: 5,
                    borderRadius: 5, backgroundColor: '#44BED9', borderRadius: 35
                  }}>
                    <Text style={{ color:'white',marginTop: 12, alignSelf: 'center', justifyContent:'center' , fontFamily:'Montserrat-Bold'}}>
                    Listen to Others
                    </Text>
                  </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {goToChat('Hao Weng')}}
                  style={{

                    flex: 1, height: 45, margin: 5,
                    borderRadius: 5, backgroundColor: '#44BED9',borderRadius: 35
                  }}>
                  <Text style={{ color:'white',marginTop: 12, alignSelf: 'center', justifyContent:'center' , fontFamily:'Montserrat-Bold'}}>Share your Story</Text>
                </TouchableOpacity>
              </View>

              <Text style={{fontFamily:'FredokaOne-Regular', fontSize:32, marginLeft:20, color:'white'}}>My Friends</Text>
              <SearchBar clicked={clicked} setClicked={setClicked} setSearchPhrase={setSearchPhrase} searchPhrase={searchPhrase}/>
                <View style={{
                  flexDirection: "column", paddingTop: 10, paddingLeft: 5, paddingBottom: 25
                }}>
                  {Friends.map((friend) => (
                    <FriendComponent name={friend.name} img={friend.img} onPress={() => {goToChat(friend.name)}}/>
                  ))}

                </View>
            </View>
        </Pressable>
        </ScrollView>
        </>
      ) : (
        <ScrollView style={{backgroundColor: '#262626'}}>
          <Pressable style={{
            flexDirection: "column", paddingLeft: 0.5, paddingBottom: 80
          }}>
            <NewJourney info={info}/>
          </Pressable>
        </ScrollView>
      )}
        </BottomDrawer>
      </View>
  )
}

export default MainProf;


const title = {
  "meditate": "Meditation",
  "sleep": "Sleep",
  "move": "Move",
  "focus": "Focus"
}


const moodColors = {
  "happy": color.Med1,
  "sad": color.Sleep2,
  "anxious": color.Move1,
  "calm": color.Focus2,
  "santa": color.Focus2,
}

const colours = {
  "meditate": color.Med2,
  "move": color.Move2,
  "focus": color.Focus3,
  "sleep": color.Sleep1,
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
    backgroundColor: 'white', paddingLeft: 10, paddingRight: 20, paddingVertical: 20, display: 'flex',
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'center', left: 5
  },
  fls: {
    margin: 10, borderRadius: 20, height: 260, width: 340,
    backgroundColor: 'white', padding: 20, left: 5, paddingRight: 30
  },
  friend: {
    marginLeft: 20, borderRadius: 20, height: 120,
    backgroundColor: '#262626', padding: 5,
    display: 'flex', flexDirection: 'row',
    alignItems: 'center'
  },
  friendcol: {
      marginLeft: 20, borderRadius: 20, height: 120,
      backgroundColor: '#262626', padding: 5,
      display: 'flex', flexDirection: 'column',
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
  },
  container2: {
        marginLeft:20,
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "95%",

      },
      searchBar__unclicked: {
        padding: 0,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
      },
      searchBar__clicked: {
        padding: 0,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      input2: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
      },

})
