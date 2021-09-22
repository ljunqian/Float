import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image, ImageBackground} from 'react-native';
import typo from '../../../styles/typography';
import layout from '../../../styles/componentLayout';
import { color } from '../../../styles/theme';
import * as Progress from 'react-native-progress';
import SleepBG from '../../../assets/images/sleep-planet.png';
import SleepAvatar from '../../../assets/images/sleep-avatar.png';
import Sleep1 from '../../../assets/images/sleep1.png';
import Sleep2 from '../../../assets/images/sleep2.png';
import Sleep3 from '../../../assets/images/sleep3.png';
import play from '../../../assets/icons/play.png';

/*TODO:
  1. Change <View> into <TouchableOpacity> for GuideCardComponent
  2. Set 'onPress' handler to GuideDetail page  
*/

const GuideCardComponent = (props) => {
  return (
    <TouchableOpacity style={[layout.guideCard, props.style, {overflow: 'hidden'}]}>
      <Image source={props.img} style={{position: 'absolute', zIndex: 0, left: -5, width:props.width, height:props.height }}/>
      <Text style={typo.T3}>
        Activity
      </Text>
      <MinuteView />
    </TouchableOpacity> 
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

const SleepScreen = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#272727'}}> 
      <ImageBackground source={SleepBG}  resizeMode="cover" style={{width: '100%'}} >
      <View style={layout.header}>
        <View style={{height: 200}}>
          
        <Text style={[typo.H0]}>
          Sleep 
        </Text>
        
          <Text style={[typo.T2, {color:'white'}]}>
            Level 2
          </Text>
          <Progress.Bar 
            progress={0.4}
            width={100}
            height={8}
            color={color.Sleep3}
            unfilledColor={'white'}
            borderWidth={0}
          />
          <Image source={SleepAvatar} style={{ top: 20, left: 20,zIndex: 0, position: 'absolute'}}/>
        </View>
          <View style={{display: 'flex', flex: 8, justifyContent: 'flex-end', alignItems: 'center', zIndex:2}}>
            <Text style={typo.H1}>
              Sleep Session
            </Text>
            <TouchableOpacity style={[layout.big_button, {backgroundColor: color.Sleep3, marginBottom: 30, zIndex:2, flexDirection: 'row'}]}>
                <Image source={play} style={{marginRight: 5}} />
                <Text style={[typo.T4, {color: 'white', fontWeight: '400'}]}>
                  Play
                </Text>
            </TouchableOpacity>
          </View>
      </View>
      <TouchableOpacity style={layout.container}>
        <ImageBackground source={Sleep1} style={{width:'100%'}}>
        <View style={{height: 155, display: 'flex', 
          flexDirection: 'row',padding: 12,
          borderRadius: 20,
          margin: 6, }}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[typo.H4, {color: 'white'}]}>
              Featured
            </Text> 
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <MinuteView />
          </View>
        </View>
        </ImageBackground>
        
      </TouchableOpacity>
      <View style={layout.container}>
        <Text style={typo.H1}>
          Recent
        </Text>
        <View style={{display: 'flex', flexDirection:'row'}}>
          <View style={{flex:1, display: 'flex',flexDirection: 'column'}}>
            <GuideCardComponent style={{height: 130}} img={Sleep2} height={130} width={200}/>
            <GuideCardComponent style={{height: 200}} img={Sleep1} height={220} width={200}/>
          </View>
          <View style={{flex:1}}>
            <GuideCardComponent style={{height: 272}} img={Sleep3} height={272} width={250}/>
          </View>
        </View>
        <Text style={[typo.H1, {marginTop: 20}]}>
          Explore
        </Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{flex: 1, display: 'flex'}}>
            <GuideCardComponent style={{height: 130}} img={Sleep1} height={150} width={200}/>
            <GuideCardComponent style={{height: 272}} img={Sleep2} height={300} width={200}/>
          </View>
          <View style={{flex: 1, display: 'flex'}}>
            <GuideCardComponent style={{height: 194}} img={Sleep3} height={200} width={200}/>
            <GuideCardComponent style={{height: 130}} img={Sleep1} height={150} width={200}/>
          </View>
        </View>
        
      </View>
      </ImageBackground>
    </ScrollView>
  )
}


export default SleepScreen;