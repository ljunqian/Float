import React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import typo from '../../../styles/typography';

const GuideCardComponent = (props) => {
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
  