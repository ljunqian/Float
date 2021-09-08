import React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import typo from '../../../styles/typography';
import * as Progress from 'react-native-progress';

const GuideCardComponent = (props) => {
  console.log(props);
  
  return (
    <View style={[style.guideCard, props.style]}>
      <Text style={typo.T3}>
        Title Lorem Ipsum
      </Text>
      <MinuteView />
    </View> 
  )
}

const MinuteView = () => {
  return (<View style={[style.minute]}>
        <Text style={typo.T3}>
          2 mins
        </Text>
      </View>
  )
}

const MeditateScreen = ({navigation}) => {
  return (
    <ScrollView> 
      <View style={style.header}>
        <Text style={[typo.H1, {flex: 1}]}>
          Meditation
        </Text>
        <View style={{flex: 1, marginTop: 12}}>
          <Text style={typo.T2}>
            Level 2
          </Text>
          <Progress.Bar 
            progress={0.4}
            width={90}
            color={'blue'}
            unfilledColor={'white'}
            borderWidth={0}
          />
        </View>
        <View style={{display: 'flex', flex: 8, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text style={typo.H2}>
            Title Lorem Ipsum
          </Text>
          <View style={[style.big_button, {backgroundColor: '#FF9F00', marginBottom: 30}]}>
            <TouchableOpacity >
              <Text style={[typo.T4, {color: 'white'}]}>
                Play
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
      <View style={style.container}>
        <View style={[style.guideCard, {height: 155, display: 'flex', flexDirection: 'row'}]}>
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
      <View style={style.container}>
        <Text style={[typo.H2, {marginTop: 28}]}>
          Recent
        </Text>
        <View style={{display: 'flex', flexDirection:'row'}}>
          <View style={{flex:1, display: 'flex',flexDirection: 'column'}}>
            <GuideCardComponent style={{height: 130}}/>
            <GuideCardComponent style={{height: 200}}/>
          </View>
          <View style={{flex:1}}>
            <GuideCardComponent style={{height: 272}} thisis={"props"}/>
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
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={[typo.H2, {marginTop: 20}]}>
              Group Meditation
            </Text>
            <TouchableOpacity style={[style.big_button, {backgroundColor: '#074EE8'}]}>
              <Text style={[typo.T4, {color: 'white'}]}>
                Join
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, marginTop: 20}}>
            <View style={style.imageCard}>
              
            </View>
          </View>
        </View>
        
      </View>
    </ScrollView>
  )
}

const CardComponent = () => {
  return (
    <View style={style.card}>
        <Text style={typo.T1}>Title lorem ipsum</Text>
        <View style={{backgroundColor: '#EEEEEE', width: 80, height: 80}}></View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    display: 'flex',
    //alignItems: 'center'
  },
  header: {
    display: 'flex',
    width: '100%',
    height: 300,
    backgroundColor: '#EEEEEE',
    padding: 10,
  },
  minute: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 51,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  guideCard: {
    backgroundColor: "#EEEEEE",
    padding: 12,
    borderRadius: 20,
    margin: 6,
  },
  button: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    color: 'black',
    width: 180,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  big_button: {
    borderRadius: 48,
    width: 122,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
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
    justifyContent:'space-between',
    flexDirection: 'row'
  },
  imageCard: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: '#EEEEEE',
    height: 161,
    width: 180,
    marginHorizontal: 10,
  },
  progressBar: {
    height: 8
  }
})

export default MeditateScreen;