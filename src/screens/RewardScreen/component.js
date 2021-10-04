import React, {Fragment} from 'react';
import { Button, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import style from './style';

export const TabClicked = (props) =>{ 
    return(
      <Fragment>
            <View style={{backgroundColor: '#A5A6F6', height: 2, width: 56, marginBottom: 8}}/>
              <View style = {style.tabIcon}>
              <Image source={props.img}/>
            </View>
            <Text style ={{fontSize: 14, fontFamily: 'Montserrat-Bold', color: '#A5A6F6'}}>{props.text}</Text>
      </Fragment>
    )
  }
  
export const TabNotClicked =(props) => {
    return(
      <Fragment>
        <View style={{height: 2, width: 56, marginBottom: 8}}/>
          <View style = {style.tabIcon}>
          <Image source={props.img}/>
        </View>
        <Text style ={{fontSize: 14, fontFamily: 'Montserrat-Bold', color: 'white'}}>{props.text}</Text>
      </Fragment>
    )
  }