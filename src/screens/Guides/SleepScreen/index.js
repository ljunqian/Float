import React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import typo from '../../../styles/typography';

const GuideCardComponent = (props) => {
  console.log(props);
  return (
    <View style={[style.guideCard, props.style]}>
      <Text style={typo.H3}>
        Title Lorem Ipsum
      </Text>
      <View style={style.minute}>
        <Text style={typo.T3}>
          2 mins
        </Text>
      </View>
    </View>
  )
}
const SleepScreen = ({navigation}) => {
  return (
    <ScrollView> 
      <View style={style.header}>
        <Text style={typo.H1}>
          Sleep
        </Text>
      </View>
      
      <View style={style.container}>
        <GuideCardComponent style={{height: 150, display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}/>
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
        <Text style={[typo.H2, {marginTop: 28}]}>
          Explore
        </Text>
        <View style={{display: 'flex', flexDirection:'row'}}>
          <View style={{flex:1, display: 'flex',flexDirection: 'column'}}>
            <GuideCardComponent style={{height: 130}}/>
            <GuideCardComponent style={{height: 272}}/>
          </View>
          <View style={{flex:1}}>
            <GuideCardComponent style={{height: 200}} thisis={"props"}/>
            <GuideCardComponent style={{height: 130}} thisis={"props"}/>
          </View>
        </View>
      </View>
    </ScrollView>
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
    marginTop: 3,
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
  }
})

export default SleepScreen;