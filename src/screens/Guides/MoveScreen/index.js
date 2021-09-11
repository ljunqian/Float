import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import typo from '../../../styles/typography';
import layout from '../../../styles/componentLayout';
import * as Progress from 'react-native-progress';

const GuideCardComponent = (props) => {  
  return (
    <View style={[layout.guideCard, props.style]}>
      <Text style={typo.T3}>
        Title Lorem Ipsum
      </Text>
      <MinuteView />
    </View> 
  )
}

const MinuteView = () => {
  return (<View style={[layout.minute]}>
        <Text style ={typo.T3}>
          2 mins
        </Text>
      </View>
  )
}

const MoveScreen = ({navigation}) => {
  return (
    <ScrollView> 
      <View style={layout.header}>
        <Text style={[typo.H1, {flex: 1}]}>
          Move 
        </Text>
        <View style={{flex: 1, marginTop: 12}}>
          <Text style={typo.T2}>
            Level 2
          </Text>
          <Progress.Bar 
            progress={0.4}
            width={100}
            height={8}
            color={'#074EE8'}
            unfilledColor={'white'}
            borderWidth={0}
          />
        </View>
        <View style={{display: 'flex', flex: 8, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text style={typo.H2}>
            Title Lorem Ipsum
          </Text>
          <View style={[layout.big_button, {backgroundColor: '#4263DD', marginBottom: 30}]}>
            <TouchableOpacity >
              <Text style={[typo.T4, {color: 'white'}]}>
                Play
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
      <View style={layout.container}>
        <View style={[layout.guideCard, {height: 155, display: 'flex', flexDirection: 'row'}]}>
          <View style={{flex: 1}}>
            <Text style={[typo.T1, {marginTop: 3}]}>
              Title Lorem Ipsum
            </Text> 
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <MinuteView />
          </View>
        </View>
        
      </View>
      <View style={layout.container}>
        <Text style={typo.H2}>
          Recent
        </Text>
        <View style={{display: 'flex', flexDirection:'row'}}>
          <View style={{flex:1, display: 'flex',flexDirection: 'column'}}>
            <GuideCardComponent style={{height: 130}}/>
            <GuideCardComponent style={{height: 200}}/>
          </View>
          <View style={{flex:1}}>
            <GuideCardComponent style={{height: 272}}/>
          </View>
        </View>
        <Text style={[typo.H2, {marginTop: 20}]}>
          Explore
        </Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{flex: 1, display: 'flex'}}>
            <GuideCardComponent style={{height: 130}}/>
            <GuideCardComponent style={{height: 272}}/>
          </View>
          <View style={{flex: 1, display: 'flex'}}>
            <GuideCardComponent style={{height: 194}}/>
            <GuideCardComponent style={{height: 130}}/>
          </View>
        </View>
        
      </View>
    </ScrollView>
  )
}


export default MoveScreen;