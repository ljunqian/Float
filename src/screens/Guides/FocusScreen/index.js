import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image, ImageBackground} from 'react-native';
import typo from '../../../styles/typography';
import layout from '../../../styles/componentLayout';
import { color } from '../../../styles/theme';
import * as Progress from 'react-native-progress';
import FocusBG from '../../../assets/images/focus-planet.png';
import StarsBG from '../../../assets/images/stars.png';
import SleepAvatar from '../../../assets/images/sleep-avatar.png';
import Focus1 from '../../../assets/images/focus-1.png';
import play from '../../../assets/icons/play.png';
import { Guides } from '../constants';


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
  const one = array[18];
  const two = array[19];
  const three = array[20];

  return (
    <View>
      <Text style={[typo.H1, {left:10}]}>
        Recent
      </Text>
      <View style={{display: 'flex', flexDirection:'row'}}>
        <View style={{flex:1, display: 'flex',flexDirection: 'column'}}>        
          <GuideCardComponent style={{height: 130}} title={one.title} dur={one.duration} img={one.thumbnail} height={140} width={200} click={() => navigation.navigate('GuideDetail', one)}/>
          <GuideCardComponent style={{height: 130}} title={two.title} dur={two.duration} img={two.thumbnail} height={140} width={200} click={() => navigation.navigate('GuideDetail', two)}/>        
        </View>
        <View style={{flex:1}}>
          <GuideCardComponent style={{height: 272}} title={three.title} dur={three.duration} img={three.thumbnail} height={278} width={250} click={() => navigation.navigate('GuideDetail', three)}/>          
         </View>
      </View>
    </View>
  )
}

const Explore = ({ array, navigation }) => {
  const one = array[21];
  const two = array[22];
  const three = array[23];
  const four = array[24];

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
          <GuideCardComponent style={{height: 195}} title={two.title} dur={two.duration} img={two.thumbnail} height={210} width={200} click={() => navigation.navigate('GuideDetail', two)}/>
          <GuideCardComponent style={{height: 130}} title={four.title} dur={four.duration} img={four.thumbnail} height={150} width={200} click={() => navigation.navigate('GuideDetail', four)}/>
        </View>
      </View>
    </View>
  )
}

const FocusScreen = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#272727'}}> 
      <ImageBackground source={StarsBG}  resizeMode="cover" style={{width: '100%'}} >
      <Image source={FocusBG} style={{ top: -1175, left: -45, zIndex: 0, transform:[{scaleY:-1}], position: 'absolute', width: '110%'}}/>
      <View style={layout.header}>
        <View style={{height: 200}}>
          
        <Text style={[typo.H0, {left:20}]}>
          Focus 
        </Text>
        
          <Text style={[typo.T2, {color:'white', left:20}]}>
            Level 2
          </Text>
          <Progress.Bar 
            progress={0.4}
            width={100}
            height={8}
            color={color.Focus3}
            unfilledColor={'white'}
            borderWidth={0}
            top={10}
            left={20}
          />
          <Image source={SleepAvatar} style={{ top: 20, left: 20,zIndex: 0, position: 'absolute'}}/>
        </View>
          <View style={{display: 'flex', flex: 8, justifyContent: 'flex-end', alignItems: 'center', zIndex:2}}>
            <Text style={typo.H1}>
              Focus Session
            </Text>

            <TouchableOpacity style={[layout.big_button, {backgroundColor: color.Focus3, marginBottom: 30, zIndex:2, flexDirection: 'row'}]}>
                <Image source={play} style={{marginRight: 5}} />
                <Text style={[typo.T4, {color: 'white', fontWeight: '400'}]}>
                  Play
                </Text>
            </TouchableOpacity>
          </View>
      </View>
      <TouchableOpacity style={layout.container} onPress={() => navigation.navigate('GuideDetail', Guides[25])}>
              
        <View style={{height: 155, display: 'flex', 
          flexDirection: 'row', padding: 12,
          borderRadius: 20,
          margin: 6, overflow: 'hidden'}}>
          <ImageBackground source={Focus1} style={{width:'107%', height: 155, top:-12, left:-12, flexDirection:'row', padding: 12}}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[typo.H4, {color: 'white'}]}>
              Featured
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start'}}>
            <MinuteView duration={Guides[25].duration}/>
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


export default FocusScreen;