import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, ImageBackground, Image} from 'react-native';
import typo from '../../../styles/typography';
import { color } from '../../../styles/theme';
import layout from '../../../styles/componentLayout';
import * as Progress from 'react-native-progress';
import oldMedBG from '../../../assets/images/meditate-planet.png';
import StarsBG from '../../../assets/images/stars.png';
import MedAvatar from '../../../assets/images/meditate-avatar.png';
import Med from '../../../assets/images/med-1.png'; 
import Mov from '../../../assets/images/mov-1.png';
import Med2 from '../../../assets/images/med2.png';
import play from '../../../assets/icons/play.png';
import { overflow } from 'styled-system';
import { Guides } from '../constants';

const GuideCardComponent = (props)  => {
  return (
    <TouchableOpacity style={[layout.guideCard, props.style, {overflow: 'hidden'}]} onPress={props.click}>
      <Image source={props.img} style={{position: 'absolute', zIndex: 0, top: -8, left: -5, width:props.width, height:props.height }}/>
      <Text style={[typo.T3, {marginBottom: 5}]}>
        {props.title}
      </Text>
      <MinuteView duration={props.dur}/>
    </TouchableOpacity>
  )
}

// navigation params

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
  const one = array[0];
  const two = array[1];
  const three = array[2];

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
  const one = array[3];
  const two = array[4];
  const three = array[5];
  const four = array[6];

  return (
    <View> 
      <Text style={[typo.H1, {marginTop: 20,left:10}]}>
        Explore
      </Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={{flex: 1, display: 'flex'}}>
          <GuideCardComponent style={{height: 130}} title={one.title} dur={one.duration} img={one.thumbnail} height={140} width={200} click={() => navigation.navigate('GuideDetail', one)}/>
          <GuideCardComponent style={{height: 272}} title={three.title} dur={three.duration} img={three.thumbnail} height={285} width={200} click={() => navigation.navigate('GuideDetail', three)}/>
        </View>
        <View style={{flex: 1, display: 'flex'}}>
          <GuideCardComponent style={{height: 195}} title={two.title} dur={two.duration} img={two.thumbnail} height={210} width={200} click={() => navigation.navigate('GuideDetail', two)}/>
          <GuideCardComponent style={{height: 130}} title={four.title} dur={four.duration} img={four.thumbnail} height={150} width={200} click={() => navigation.navigate('GuideDetail', four)}/>
        </View>
      </View>
    </View>
  )
}

const MeditateScreen = ({navigation}) => {
  return (
    <ScrollView sourcestyle={{backgroundColor: '#272727'}}> 
      {/* <Image source={oldMedBG} style={{marginRight: 5, position: 'absolute'}} /> */}
      <ImageBackground source={StarsBG}  resizeMode="cover" style={{width: '100%'}} >
      <Image source={oldMedBG} style={{ top: -1175, left: -45, zIndex: 0, transform:[{scaleY:-1}], position: 'absolute', width: '110%'}}/>
      <View style={layout.header}>
        <View style={{height: 200}}>
        
        <Text style={[typo.H0,{left:20}]}>
          Meditation
        </Text>
        
          <Text style={[typo.T2, {color:'white', left:20 }]}>
            Level 1
          </Text>
          <Progress.Bar 
            progress={0.4}
            width={100}
            height={8}
            color={'#F57212'}
            unfilledColor={'white'}
            borderWidth={0}
            top={10}
            left={20}
          />
          <Image source={MedAvatar} style={{ top: 40, left: 20, zIndex: 0, position: 'absolute'}}/>
          
        </View>
          <View style={{display: 'flex', flex: 8, justifyContent: 'flex-end', alignItems: 'center', zIndex:2}}>
            <Text style={typo.H1}>
              Meditation Session
            </Text>
            <TouchableOpacity style={[layout.big_button, {backgroundColor: color.Med1, marginBottom: 30, zIndex:2, flexDirection: 'row'}]}>
                <Image source={play} style={{marginRight: 5}} />
                <Text style={[typo.T4, {color: 'white', fontWeight: '400'}]}>
                  Play
                </Text>
            </TouchableOpacity>
          </View>
      </View>
      <TouchableOpacity style={[layout.container,]} onPress={() => navigation.navigate('GuideDetail', Guides[1])}>
      
      <View style={{height: 155, display: 'flex', 
        flexDirection: 'row', padding: 12,
        borderRadius: 20,
        margin: 6, overflow:'hidden'}}>
        <ImageBackground source={Med} style={{width:'108%', height: 155, top:-12, left:-16, flexDirection:'row', padding: 12}}>  
        <View style={{flex: 1}}></View>
        <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={[typo.H4, {color: 'white'}]}>
            Featured
          </Text> 
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <MinuteView duration={Guides[1].duration}/>
        </View>
        </ImageBackground>
      </View>
        
      </TouchableOpacity>
      <View style={layout.container}>
        <Recent array={Guides} navigation={navigation}/>
        <Explore array={Guides} navigation={navigation}/>

        
      </View>
      </ImageBackground>
    </ScrollView>
  )
}


export default MeditateScreen;