import React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import typo from '../../styles/typography';
import { color } from '../../styles/theme';
import style from './style';

import CoinIcon from '../../assets/icons/coin.png';

const RewardCard = (props) => {
    return(
  
          <View style = {{flexDirection: 'column'}}>
            <View style = {style.rewardCardContainer}>
              <Image source={props.img} style= {style.rewardItemImage}/>
  
              <View style = {{flexDirection: "row"}}>
                <Text style={{marginTop: 5, marginLeft: 5,fontSize: 14, fontFamily: 'Montserrat-Bold'}}>
                  {props.asset} 
                </Text>
                <View style={{position:'absolute', right: 0, bottom: 0}}>
                  <CoinsValue coinsValue = {props.coinsValue}/>
                </View>
              </View>
  
            </View>
          </View>
  
    )
  } 

  const CoinsValue = (props, {onPress}) => {
    return(
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[typo.T1, {marginRight: 3}]}>{props.coinsValue}</Text>
        <Image source = {CoinIcon} style={{width: 16, height: 16}}/>
      </View>
    )
  }