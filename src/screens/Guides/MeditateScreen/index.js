import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, ImageBackground, Image} from 'react-native';
import typo from '../../../styles/typography';
import { color } from '../../../styles/theme';
import layout from '../../../styles/componentLayout';
import * as Progress from 'react-native-progress';
import MedBG from '../../../assets/images/meditate-planet.png';
import MedAvatar from '../../../assets/images/meditate-avatar.png';
import Med from '../../../assets/images/med-1.png'; 
import Mov from '../../../assets/images/mov-1.png';
import Med2 from '../../../assets/images/med2.png';
import play from '../../../assets/icons/play.png';
import { Guides } from './constants';

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

const DLoadComponents = (props) => {
  return(
    <View>
      {Guides.map(({ title, thumbnail, duration }, index) => {
        let isActOne, isActTwo, isActThree, isActFour;

        if(index < 2 && props.isRecentLeft){
        return(
          <GuideCardComponent key={title} style={{height: 130}} title={title} dur={duration} img={thumbnail} height={140} width={200} click={props.click}/>
        )
        }else if(index == 2 && props.isRecentRight){
          return(
            <GuideCardComponent key={title} style={{height: 272}} title={title} dur={duration} img={thumbnail} height={278} width={250} click={props.click}/>
          )
        }else if(props.isExploreLeft){
          
          if(index == 0)
            isActOne = true;
          else if(index == 2)
            isActTwo = true;

          return(
            <View key={title}>
              {isActOne && <GuideCardComponent style={{height: 130}} title={title} dur={duration} img={thumbnail} height={140} width={200} click={props.click}/>}
              {isActTwo && <GuideCardComponent style={{height: 272}} title={title} dur={duration} img={thumbnail} height={285} width={200} click={props.click}/>}
            </View>
          )
        }else if(props.isExploreRight){
          
          if(index == 1)
            isActThree = true;
          else if(index == 3)
            isActFour = true;

          return(
            <View key={title} >
              {isActThree && <GuideCardComponent style={{height: 194}} title={title} dur={duration} img={thumbnail} height={210} width={200} click={props.click}/>}
              {isActFour && <GuideCardComponent style={{height: 130}} title={title} dur={duration} img={thumbnail} height={150} width={200} click={props.click}/>}
            </View>
          ) 
        }
        
        })}
    </View>
  )
}

const Recent = ({array, onDetail}) => {
  const one = array[0];
  return (
  <>
      <GuideCardComponent key={title} style={{height: 130}} title={one.title} dur={duration} img={thumbnail} height={140} width={200} click={onDetail}/>
      <GuideCardComponent key={title} style={{height: 272}} title={title} dur={duration} img={thumbnail} height={278} width={250} click={props.click}/>
  </>
)}


const MeditateScreen = ({navigation}) => {

  const moveToDetail = (content) => {
    navigation.navigate('Meditate GuideDetail', {guide: content})
  }
  return (
    <ScrollView style={{backgroundColor: '#272727'}}> 
      <ImageBackground source={MedBG}  resizeMode="cover" style={{width: '100%'}} >
      <View style={layout.header}>
        <View style={{height: 200}}>
          
        <Text style={[typo.H0]}>
          Meditation
        </Text>
        
          <Text style={[typo.T2, {color:'white'}]}>
            Level 1
          </Text>
          <Progress.Bar 
            progress={0.4}
            width={100}
            height={8}
            color={'#F57212'}
            unfilledColor={'white'}
            borderWidth={0}
          />
          <Image source={MedAvatar} style={{ top: 40, left: 20, zIndex: 0, position: 'absolute'}}/>
        </View>
          <View style={{display: 'flex', flex: 8, justifyContent: 'flex-end', alignItems: 'center', zIndex:2}}>
            <Text style={typo.H1}>
              Meditation Session
            </Text>
            <TouchableOpacity style={[layout.big_button, {backgroundColor: color.Med3, marginBottom: 30, zIndex:2, flexDirection: 'row'}]}>
                <Image source={play} style={{marginRight: 5}} />
                <Text style={[typo.T4, {color: 'white', fontWeight: '400'}]}>
                  Play
                </Text>
            </TouchableOpacity>
          </View>
      </View>
      <TouchableOpacity style={[layout.container,]} onPress={() => navigation.navigate('Meditate GuideDetail', {guide: Guides[0]})}>
        <ImageBackground source={Med} style={{width:'100%'}}>
        <View style={{height: 155, display: 'flex', 
          flexDirection: 'row', padding: 12,
          borderRadius: 20,
          margin: 6, }}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[typo.H4, {color: 'white'}]}>
              Featured
            </Text> 
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <MinuteView duration={2}/>
          </View>
        </View>
        </ImageBackground>
        
      </TouchableOpacity>
      <View style={layout.container}>


        <Recent array={Guides.recent} onDetail={moveToDetail}/> 


        <Text style={[typo.H1, {marginTop: 20}]}>
          Explore
        </Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{flex: 1, display: 'flex'}}>
            <DLoadComponents isExploreLeft={true} click={() => navigation.navigate('Meditate GuideDetail')}/>
          </View>
          <View style={{flex: 1, display: 'flex'}}>
            <DLoadComponents isExploreRight={true} click={() => navigation.navigate('Meditate GuideDetail')}/>
          </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={[typo.H4, {marginTop: 20, color: 'white'}]}>
              Group Meditation
            </Text>
            <TouchableOpacity style={[layout.bigger_button, {backgroundColor: color.Med3}]}>
              <Text style={[typo.T4, {color: 'white'}]}>
                Join
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, marginTop: 20}}>
            <View style={[layout.imageCard, {overflow: 'hidden'}]}>
              <Image source={Med2} style={{top: -15, left: -20}}/>
            </View>
          </View>
        </View>
      </View>
      </ImageBackground>
    </ScrollView>
  )
}


export default MeditateScreen;