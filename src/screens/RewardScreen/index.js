
import React, {Fragment, useState} from 'react';
import { Center, NativeBaseProvider, HStack, Box, VStack } from 'native-base';
import { Button, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import typo from '../../styles/typography';
import { color } from '../../styles/theme';
import style from './style';

import ProfileScreen from '../ProfileScreen/profile'
import CoinIcon from '../../assets/icons/coins.png';

import BackGroundTab from '../../assets/icons/Tab_Background.png';
import HatTab from '../../assets/icons/Tab_Hat.png';
import AccessoryTab from '../../assets/icons/Tab_Accessory.png';
import VoucherTab from '../../assets/icons/Tab_Voucher.png';

import BackGroundTabClicked from '../../assets/icons/Tab_Background_Clicked.png';
import HatTabClicked from '../../assets/icons/Tab_Hat_Clicked.png';
import AccessoryTabClicked from '../../assets/icons/Tab_Accessory_Clicked.png';
import VoucherTabClicked from '../../assets/icons/Tab_Voucher_Clicked.png';

import AvatarMountain from '../../assets/images/Background-Mountain.png'
import AvatarHat1 from '../../assets/images/Hat-Cowboy.png'
import AvatarHat2 from '../../assets/images/Hat-Santa.png'
import { Card } from 'react-native-elements/dist/card/Card';
import { display } from 'styled-system';

import { BackgroundImages } from './constants';
import { HatImages } from './constants';
import { AccessoryImages } from './constants';
import { VoucherImages } from './constants';

const RewardScreen = ({ navigation }) => {
  const [tab, setIsTab] = useState("Background");

  const [CardBGStatus, setIsCardBGStatus] = useState(""); //initial data
  const [BGEquipped, setIsBGEquipped] = useState(CardBGStatus == "" ? "No" : "Yes");

  const [CardHatStatus, setIsCardHatStatus] = useState(""); //initial data
  const [HatEquipped, setIsHatEquipped] = useState(CardHatStatus == "" ? "No" : "Yes");

  const clickBackgroundTab = () =>{
    setIsTab("Background");
  }
  
  const clickHatsTab = () =>{
    setIsTab("Hats");
  }

  const clickAccessoryTab = () =>{
    setIsTab("Accessories");
  }

  const clickVouchersTab = () =>{
    setIsTab("Vouchers");
  }

  const Activate_Background = () =>{
    if (HatEquipped == "Yes" && CardHatStatus == "Activate_SantaHat") {
      setIsCardHatStatus("");
      setIsHatEquipped("No");
    } else {
      setIsCardHatStatus("Activate_SantaHat");
      setIsHatEquipped("Yes");
    }
  }

  const PlaceBackgroundOnAvatar = () =>{

    if(CardBGStatus === "Activate_MountainBG"){
      return(
        <Image source={AvatarMountain} style={{marginTop:20, position: 'absolute', zIndex: -1, alignSelf: 'center', width: 164, height: 140}}/>
      )
    }else{
      return null
    }
  }

  const PlaceHatOnAvatar = () =>{

    if (CardHatStatus === "Activate_CowboyHat") {
      return(
        <Image source={AvatarHat1} style={{marginTop:28, marginLeft:130, position: 'absolute', zIndex: 2, width: 164, height: 140}}/>
      )
    }else if(CardHatStatus === "Activate_SantaHat"){
      return(
        <Image source={AvatarHat2} style={{marginTop:30, marginLeft:129, position: 'absolute', zIndex: 2, width: 164, height: 140}}/>
      )
    }else{
      return null
    }
  }

  return (
    <VStack style={{backgroundColor: color.bg}}>
      <ProfileScreen style={{position: 'absolute', zIndex: 1}}/>
      <PlaceBackgroundOnAvatar/>
      <PlaceHatOnAvatar/>
     
      <HStack style={style.tabBar}>
        <TouchableOpacity onPress= {clickBackgroundTab}>
          <View style = {{alignItems: 'center', justifyContent: 'center'}}>
              {tab === "Background" ? (
                <TabClicked img={BackGroundTabClicked} text="Background"/>
              ) : (
                <TabNotClicked img={BackGroundTab} text="Background"/>
              )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {clickHatsTab}>
          <View style = {{alignItems: 'center', justifyContent: 'center'}}>
              {tab === "Hats" ? (
                <TabClicked img={HatTabClicked} text="Hats"/>
              ) : (
                <TabNotClicked img={HatTab} text="Hats"/>
              )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {clickAccessoryTab}>
          <View style = {{alignItems: 'center', justifyContent: 'center'}}>
              {tab === "Accessories" ? (
                <TabClicked img={AccessoryTabClicked} text="Accessories"/>
              ) : (
                <TabNotClicked img={AccessoryTab} text="Accessories"/>
              )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {clickVouchersTab}>
          <View style = {{alignItems: 'center', justifyContent: 'center'}}>
              {tab === "Vouchers" ? (
                <TabClicked img={VoucherTabClicked} text="Vouchers"/>
              ) : (
                <TabNotClicked img={VoucherTab} text="Vouchers"/>
              )}
          </View>
        </TouchableOpacity>
      </HStack>

      <ScrollView showsVerticalScrollIndicator={false}>
        {tab === "Background" ? (
          <Fragment>
            <View style = {{flexDirection: 'column'}}>
              <View style = {style.rewardRowContainer}>
                {/*Populate Background Reward Cards*/}
                {BackgroundImages.map((bgInfo, index)=>{
                    return(
                      <RewardCard img={bgInfo.source} asset={bgInfo.name} coinsValue={bgInfo.value}/>
                    )
                  })
                }
              </View>
            </View>
          </Fragment>
        ) : tab === "Hats" ? (
          <Fragment>
            <View style = {{flexDirection: 'column'}}>
              <View style = {style.rewardRowContainer}>
                {/*Populate Hat Reward Cards*/}
                {HatImages.map((hatInfo, index)=>{
                    return(
                      <RewardCard img={hatInfo.source} asset={hatInfo.name} coinsValue={hatInfo.value}/>
                    )
                  })
                }
              </View>
            </View>
          </Fragment>
        ) : tab === "Accessories" ? (
          <Fragment>
            <View style = {{flexDirection: 'column'}}>
              <View style = {style.rewardRowContainer}>
                {/*Populate Accesory Reward Cards*/}
                {AccessoryImages.map((accInfo, index)=>{
                    return(
                      <RewardCard img={accInfo.source} asset={accInfo.name} coinsValue={accInfo.value}/>
                    )
                  })
                }
              </View>
            </View>
          </Fragment>
        ): tab === "Vouchers" ? (
          <Fragment>
            <View style={{flex:1, display: 'flex',flexDirection: 'column'}}>
                {/*Populate Voucher Reward Cards*/}
                {VoucherImages.map((voucherInfo, index)=>{
                    return(
                      <VoucherCard img={voucherInfo.source} asset={voucherInfo.name} coinsValue={voucherInfo.value}
                      redeemed={voucherInfo.redeemed}/>
                    )
                  })
                }
            </View>
          </Fragment>
        ) : (
          null
        )} 
      </ScrollView>
    </VStack>
  )
}

const TabClicked = (props) =>{ 
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

const TabNotClicked =(props) => {
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

const RewardCard = (props) => {
  return(
      <View style = {{flexDirection: 'column'}}>
        <View style = {[style.rewardCardContainer, {backgroundColor: 'white'}]}>
            <Image source={props.img} style= {style.rewardItemImage}/>
            <View style = {{flexDirection: "row"}}>
              <Text style={{marginTop: 5, marginLeft: 5,fontSize: 14, fontFamily: 'Montserrat-Bold'}}>
                  {props.asset} 
              </Text>

             <View style={{position:'absolute', right: 0, bottom: 0}}>
              <CoinsValue coinsValue = {props.coinsValue}/>
            </View> 

            {/* <View style={{position:'absolute', right: 0, bottom: 0, display: 'flex'}}>
              <View style={[style.statusContainer, {backgroundColor: '#A5A6F6'}]}>
                <Text style={style.statusText}>Owned</Text>
              </View>
            </View> */}

          </View>
        </View>
      </View>
  )
} 

const VoucherCard = (props) => {

  const redeemVoucher = () => {
    // if my coins >= reward value
  }

  return(
    <Fragment>
      {props.redeemed === false ? (
        <TouchableOpacity onPress={redeemVoucher}>
          <View style={{backgroundColor: 'white', height: 100, marginHorizontal: 20, marginBottom:16,  borderRadius: 10, flexDirection: 'row'}}>
            <Image source={props.img} style= {{ marginLeft: 14, marginVertical: 10}}/>
            <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 22}}>
              <Text style={typo.T1}>{props.asset}</Text>
              <CoinsValue coinsValue = {props.coinsValue}/>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={{backgroundColor: '#A5A6F6', height: 100, marginHorizontal: 20, marginBottom:16,  borderRadius: 10, flexDirection: 'row'}}>
          <Image source={props.img} style= {{ marginLeft: 14, marginVertical: 10}}/>
            <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 22}}>
              <Text style={typo.T1}>{props.asset}</Text>
              <View style={style.redeemButtonContainer}>
                <Text style={style.redeemButtonText}>Redeemed</Text>
               </View>   
            </View>
        </View>
      )}
    </Fragment>
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

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <RewardScreen/>
      </Center>
    </NativeBaseProvider>
  )
}