import React, {useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image, ImageBackground} from 'react-native';
import typo from '../../../styles/typography';
import layout from '../../../styles/componentLayout';
import { color } from '../../../styles/theme';
import * as Progress from 'react-native-progress';
import SleepBG from '../../../assets/images/sleep-planet.png';
import StarsBG from '../../../assets/images/stars.png';
import Badge2 from '../../../assets/images/Badges2.png';
import SleepAvatar from '../../../assets/images/sleep-avatar.png';
import Sleep1 from '../../../assets/images/sleep1.png';
// import Sleep2 from '../../../assets/images/sleep2.png';
// import Sleep3 from '../../../assets/images/sleep3.png';
import play from '../../../assets/icons/play.png';
import { Guides, types, badges } from '../constants';
import { useSelector, useDispatch } from 'react-redux';

const GuideCardComponent = (props)  => {
  return (
    <TouchableOpacity style={[layout.guideCard, props.style, {overflow: 'hidden'}]} onPress={props.click}>
      <Image source={props.img} style={{position: 'absolute', zIndex: 0, top: -6, left: -5, width:props.width, height:props.height }}/>
      <Text style={[typo.T3, {marginBottom: 5}]}>
        {props.title}
      </Text>
      <MinuteView duration={props.dur}/>
    </TouchableOpacity>
  )
}

const MinuteView = (props) => {
  let duration = props.duration;
  let isTwoDigit = false;
  if (duration > 9)
    isTwoDigit = true;
  return (
    <View style={[layout.minute, {width: isTwoDigit? 61 : 51}]}>
      <Text style={typo.T3}>
        {duration} mins
      </Text>
    </View>
  )
}

const Recent = ({ array, navigation }) => {
  const one = array[7];
  const two = array[8];
  const three = array[9];

  return (
    <View>
      <Text style={[typo.H1, {left:10}]}>
        Recent
      </Text>
      <View style={{display: 'flex', flexDirection:'row'}}>
        <View style={{flex:1, display: 'flex',flexDirection: 'column'}}>        
          <GuideCardComponent style={{height: 130}} title={one.title} dur={one.duration} img={one.thumbnail} height={140} width={200} click={() => navigation.navigate('GuideDetail', one)}/>
          <GuideCardComponent style={{height: 195}} title={two.title} dur={two.duration} img={two.thumbnail} height={210} width={200} click={() => navigation.navigate('GuideDetail', two)}/>        
        </View>
        <View style={{flex:1}}>
          <GuideCardComponent style={{height: 272}} title={three.title} dur={three.duration} img={three.thumbnail} height={285} width={200} click={() => navigation.navigate('GuideDetail', three)}/>          
         </View>
      </View>
    </View>
  )
}

const Explore = ({ array, navigation }) => {
  const one = array[10];
  const two = array[11];
  const three = array[9];
  const four = array[7];

  return (
    <View> 
      <Text style={[typo.H1, {marginTop: 20, left:10}]}>
        Explore
      </Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={{flex: 1, display: 'flex'}}>
          <GuideCardComponent style={{height: 130}} title={one.title} dur={one.duration} img={one.thumbnail} height={140} width={200} click={() => navigation.navigate('GuideDetail', one)}/>
          <GuideCardComponent style={{height: 272}} title={three.title} dur={three.duration} img={three.thumbnail} height={285} width={200} click={() => navigation.navigate('GuideDetail', three)}/>
        </View>
        <View style={{flex: 1, display: 'flex'}}>
          <GuideCardComponent style={{height: 195}} title={two.title} dur={two.duration} img={two.thumbnail} height={220} width={200} click={() => navigation.navigate('GuideDetail', two)}/>
          <GuideCardComponent style={{height: 130}} title={four.title} dur={four.duration} img={four.thumbnail} height={150} width={200} click={() => navigation.navigate('GuideDetail', four)}/>
        </View>
      </View>
    </View>
  )
}

const SleepScreen = ({navigation}) => {
  const {levelsleep} = useSelector((state) => state.user.levels);
  const {sleepexp} = useSelector((state) => state.user.exp);
  
  const GetBadge = () => {
    const levels = levelsleep;
    console.log("in reduce", levels);
    let icon1 = badges.Level1;
    let icon = icon1;
    let icon2 = badges.Level2;
    let icon3 = badges.Level3;
    if(levels == 2){
        icon = icon2;
        
    } else if (levels >= 3){
      icon = icon3;
    } 
  
    return(
      icon
    )
      
  
  }
  
  return (
    <ScrollView style={{backgroundColor: '#272727',}}> 
      <ImageBackground source={StarsBG}  resizeMode="cover" style={{width: '100%'}} >
      <Image source={SleepBG} style={{ top: -900, left: -20, zIndex: 0, transform:[{scaleY:-1}], position: 'absolute', width: '110%', resizeMode: "contain"}}/>
      <View style={layout.header}>
        <View style={{height: 200}}>
          
        <Text style={[typo.H0, {left:20}]}>
          Sleep 
        </Text>
        <View style={{flexDirection:'row', alignItems : 'center'}}> 
          <Image source={GetBadge()} style={{ top: 3, marginLeft: 17} }/>
          
          <View style={{top: -6, marginLeft: -10}}>
            <Text style={[typo.T1, {color:'white', left:20, top:2}]}>
            Level {levelsleep}
          </Text>
          <Progress.Bar 
            progress={sleepexp? (sleepexp%180)/180 : 0.1}
            width={100}
            height={8}
            color={color.Sleep3}
            unfilledColor={'white'}
            borderWidth={0}
            top={6}
            left={20}
          />
          </View>
        </View>
          
          <Image source={SleepAvatar} style={{ top: 20, left: 20,zIndex: 0, position: 'absolute'}}/>
        </View>
          <View style={{display: 'flex', flex: 8, justifyContent: 'flex-end', alignItems: 'center', zIndex:2}}>
            <Text style={typo.H1}>
              Sleep Session
            </Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('GuidesLesson', types.sleep)}
              style={[layout.big_button, {backgroundColor: color.Sleep2, marginBottom: 30, zIndex:2, flexDirection: 'row'}]}>
                <Image source={play} style={{marginRight: 5}} />
                <Text style={[typo.T4, {color: 'white', fontWeight: '400'}]}>
                  Play
                </Text>
            </TouchableOpacity>
          </View>
      </View>
      <TouchableOpacity style={layout.container} onPress={() => navigation.navigate('GuideDetail', Guides[12])}>
        
        <View style={{height: 155, display: 'flex', 
          flexDirection: 'row',padding: 12,
          borderRadius: 20,
          margin: 6, overflow:'hidden'}}>
          <ImageBackground source={Sleep1} style={{width:'108%', height: 155, top:-12, left:-16, flexDirection:'row', padding: 12}}>  
          <View style={{flex: 1}}></View>
          <View style={{flex: 3, alignItems: 'center', justifyContent: 'center', left:3}}>
            <Text style={[typo.H4, {color: 'white'}]}>
              Featured
            </Text> 
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <MinuteView duration={Guides[12].duration}/>
          </View>
          </ImageBackground>
        </View>
        
      </TouchableOpacity>
      <View style={layout.container}>
        <Recent array={Guides} navigation={navigation}/>
        <Explore array={Guides} navigation={navigation}/>
      </View>
      <View style={{height: 100}}/>
      </ImageBackground>
    </ScrollView>
  )
}


export default SleepScreen;