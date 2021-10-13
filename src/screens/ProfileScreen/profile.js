import React, {useEffect, useState} from 'react';
import {Button, Text, View, StyleSheet, Image} from 'react-native';
import Avatar from '../../assets/images/avatar.png';

import {bindActionCreators} from 'redux';
import {connect, useSelector, useDispatch} from 'react-redux';
import { 
  BackgroundImages,
  HatImages,
  AccessoryImages,
} from '../RewardScreen/assetConstants';

const ProfileScreen = (props) => {

  const userState = useSelector((state)=> state.reward);

  const AvatarBackground = ({backgroundName}) => {
    const bg = BackgroundImages.find(background => background.name === backgroundName);
    if (bg) {
      return (
        <Image source={bg.source} style={{width: 200, alignSelf:'center', height: 180, width:180, zIndex: -1, position:'absolute'}}/>
      )
    }
    return <View/>
  }

  const AvatarHat = ({hatName}) => {
    const hat = HatImages.find(hat => hat.name === hatName);
    let top = 18, left = 110;
    if (hatName==="Ushanka") {
      top = 6; left=128;
    }
    if (hat) {
      return (
        
        <Image source={hat.source} style={{transform: [{ rotate: '7 deg' }], top:top, left:left, position: 'absolute', zIndex: 2, width: 164, height: 140}}/>
      )
    }
    return <View />
  }

  const AvatarAccessory = ({accName}) => {
    const acc = AccessoryImages.find(acc => acc.name === accName);
    let top = 0, left = 0;

    if (acc) {
      if(accName === 'Eyepatch'){
        top = 33
        left = 142
      }else if(accName === 'Band Aid'){
        top = 25
        left = 156
      }else {
        if (accName === 'Mustache'){
          top = 43
        }else{
          top = 50
        }
        left = 159
      }

      return (
        <Image source={acc.source} style={{top: top, left: left, position: 'absolute', zIndex: 3, width: 164, height: 140}}/>
      )
    }
    return <View />
  }
  return (
    <View>
        <AvatarHat hatName={userState.hat}/>
        <AvatarAccessory accName={userState.accessory}/>
      <Image source={Avatar}
             style={{width: 160, height: 160, borderRadius:80, alignSelf: 'center', marginTop:20, }} />
        <AvatarBackground backgroundName={userState.background}/>
    </View>
  )
}


export default ProfileScreen;