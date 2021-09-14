import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, ImageBackground, Image} from 'react-native';
import typo from '../../../styles/typography';
import { color } from '../../../styles/theme';
import layout from '../../../styles/componentLayout';
import * as Progress from 'react-native-progress';
import MedBG from '../../../assets/images/meditate-planet.png';
import MedAvatar from '../../../assets/images/meditate-avatar.png';
import Med from '../../../assets/images/med-1.png';
import Med1 from '../../../assets/images/med1.png';
import Med2 from '../../../assets/images/med2.png';
import Med3 from '../../../assets/images/med3.png';
import Sleep3 from '../../../assets/images/sleep3.png';
import { overflow } from 'styled-system';


const GuideCardComponent = (props) => {
  return (
    <View style={[layout.guideCard, props.style, {overflow: 'hidden'}]}>
      <Image source={props.img} style={{position: 'absolute', zIndex: 0, left: -5, width:props.width, height:props.height }}/>
      <Text style={typo.T3}>
        Activity
      </Text>
      <MinuteView />
    </View> 
  )
}

const MinuteView = () => {
  return (<View style={[layout.minute]}>
        <Text style={typo.T3}>
          2 mins
        </Text>
      </View>
  )
}

const MeditateScreen = ({navigation}) => {
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
            color={'#074EE8'}
            unfilledColor={'white'}
            borderWidth={0}
          />
          <Image source={MedAvatar} style={{ top: 20, left: 20,zIndex: 0, position: 'absolute'}}/>
        </View>
          <View style={{display: 'flex', flex: 8, justifyContent: 'flex-end', alignItems: 'center', zIndex:2}}>
            <Text style={typo.H1}>
              Meditation Session
            </Text>
            <TouchableOpacity style={[layout.big_button, {backgroundColor: color.Med3, marginBottom: 30, zIndex:2}]}>
                <Text style={[typo.T4, {color: 'white', fontWeight: '400'}]}>
                  Play
                </Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={[layout.container,]}>
        <ImageBackground source={Med} style={{width:'100%'}}>
        <View style={{height: 155, display: 'flex', 
          flexDirection: 'row',padding: 12,
          borderRadius: 20,
          margin: 6, }}>
          <View style={{flex: 1}}>
            <Text style={[typo.T1, ]}>
              Featured
            </Text> 
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <MinuteView />
          </View>
        </View>
        </ImageBackground>
        
      </View>
      <View style={layout.container}>
        <Text style={typo.H1}>
          Recent
        </Text>
        <View style={{display: 'flex', flexDirection:'row'}}>
          <View style={{flex:1, display: 'flex',flexDirection: 'column'}}>
            <GuideCardComponent style={{height: 130}} img={Sleep3} height={130} width={200}/>
            <GuideCardComponent style={{height: 200}} img={Med2} height={220} width={200}/>
          </View>
          <View style={{flex:1}}>
            <GuideCardComponent style={{height: 272}} img={Med3} height={272} width={250}/>
          </View>
        </View>
        <Text style={[typo.H1, {marginTop: 20}]}>
          Explore
        </Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{flex: 1, display: 'flex'}}>
            <GuideCardComponent style={{height: 130}} img={Med} height={140} width={200}/>
            <GuideCardComponent style={{height: 272}} img={Med2} height={320} width={200}/>
          </View>
          <View style={{flex: 1, display: 'flex'}}>
            <GuideCardComponent style={{height: 194}} img={Med3} height={200} width={200}/>
            <GuideCardComponent style={{height: 130}} img={Med} height={150} width={200}/>
          </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={[typo.H2, {marginTop: 20, color: 'white'}]}>
              Group Meditation
            </Text>
            <TouchableOpacity style={[layout.big_button, {backgroundColor: color.Med3}]}>
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