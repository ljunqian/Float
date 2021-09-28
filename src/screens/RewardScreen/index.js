
import React, {Fragment, useEffect, useState} from 'react';
import { Center, NativeBaseProvider, HStack, Box, VStack, usePropsResolution, Flex } from 'native-base';
import { Button, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import typo from '../../styles/typography';
import { color } from '../../styles/theme';
import style from './style';

import ProfileScreen from '../ProfileScreen/profile'
import CoinIcon from '../../assets/icons/coins.png';

import BackGroundTab from '../../assets/icons/Tab_Background.png';
import HatsTab from '../../assets/icons/Tab_Hat.png';
import AccessoriesTab from '../../assets/icons/Tab_Accessory.png';
import VouchersTab from '../../assets/icons/Tab_Voucher.png';

import BackGroundTabClicked from '../../assets/icons/Tab_Background_Clicked.png';
import HatsTabClicked from '../../assets/icons/Tab_Hat_Clicked.png';
import AccessoriesTabClicked from '../../assets/icons/Tab_Accessory_Clicked.png';
import VouchersTabClicked from '../../assets/icons/Tab_Voucher_Clicked.png';

import { TabClicked } from './component';
import { TabNotClicked } from './component';

import AvatarMountain from '../../assets/images/Background-Mountain.png'
import AvatarHat1 from '../../assets/images/Hat-Cowboy.png'
import AvatarHat2 from '../../assets/images/Hat-Santa.png'
import { Card } from 'react-native-elements/dist/card/Card';
import { display, zIndex } from 'styled-system';

import { BackgroundImages } from './assetConstants';
import { HatImages } from './assetConstants';
import { AccessoryImages } from './assetConstants';
import { VoucherImages } from './assetConstants';
import { emptyStatement } from '@babel/types';

const RewardScreen = ({ navigation }) => {
  const [tab, setIsTab] = useState("Background");

  const TabView = (props) => {
    return(
      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
              {tab === props.reward ? (
                <TabClicked img={props.imgClicked} text={props.reward}/>
              ) : (
                <TabNotClicked img={props.imgNotCLicked} text={props.reward}/>
              )}
      </View>
    )
  }

  return (
    <VStack style={{backgroundColor: color.bg}}>
      <Asset background="initial bg" hat="initial hat" accessory="initial accessory"/>
      <ProfileScreen style={{position: 'absolute', zIndex: 1}}/>
     
      <HStack style={style.tabBar}>
        <TouchableOpacity onPress= { () => {setIsTab("Background")}}>
          <TabView reward = "Background" imgClicked={BackGroundTabClicked} imgNotCLicked={BackGroundTab}/>
        </TouchableOpacity>
        <TouchableOpacity onPress= { () => {setIsTab("Hats")}}>
          <TabView reward = "Hats" imgClicked={HatsTabClicked} imgNotCLicked={HatsTab}/>
        </TouchableOpacity>
        <TouchableOpacity onPress= { () => {setIsTab("Accessories")}}>
          <TabView reward = "Accessories" imgClicked={AccessoriesTabClicked} imgNotCLicked={AccessoriesTab}/>
        </TouchableOpacity>
        <TouchableOpacity onPress= { () => {setIsTab("Vouchers")}}>
          <TabView reward = "Vouchers" imgClicked={VouchersTabClicked} imgNotCLicked={VouchersTab}/>
        </TouchableOpacity>
      </HStack>

      <ScrollView showsVerticalScrollIndicator={false}>
        {tab === "Background" ? (
          <Fragment>
              <View style = {style.rewardRowContainer}>
                {/*Populate Background Reward Cards*/}
                {BackgroundImages.map((bgInfo)=>{
                    return(
                      <RewardCard key = {bgInfo.id} img={bgInfo.source} asset={bgInfo.name} coinsValue={bgInfo.value} purchased={bgInfo.purchased} equipped={bgInfo.equipped}/>
                    )
                  })
                }
            </View>
          </Fragment>
        ) : tab === "Hats" ? (
          <Fragment>
              <View style = {style.rewardRowContainer}>
                {HatImages.map((hatInfo)=>{
                    return(
                      <RewardCard key = {hatInfo.id} img={hatInfo.source} asset={hatInfo.name} coinsValue={hatInfo.value} purchased={hatInfo.purchased} equipped={hatInfo.equipped}/>
                    )
                  })
                }
            </View>
          </Fragment>
        ) : tab === "Accessories" ? (
          <Fragment>
              <View style = {style.rewardRowContainer}>
                {AccessoryImages.map((accInfo)=>{
                    return(
                      <RewardCard key = {accInfo.id} img={accInfo.source} asset={accInfo.name} coinsValue={accInfo.value} purchased={accInfo.purchased} equipped={accInfo.equipped}/>
                    )
                  })
                }
            </View>
          </Fragment>
        ) : tab === "Vouchers" ? (
          <Fragment>
            <View style={{flex:1, display: 'flex'}}>
                {VoucherImages.map((voucherInfo)=>{
                    return(
                      <VoucherCard key = {voucherInfo.id} img={voucherInfo.source} asset={voucherInfo.name} coinsValue={voucherInfo.value}
                      redeemed={voucherInfo.redeemed}/>
                    )
                  })
                }
            </View>
          </Fragment>
        ) : (
          console.log("Failed to load reward cards")
        )} 
      </ScrollView>
    </VStack>
  )
}

const Asset = (props) =>{
  const [background, setIsbackground] = useState(props.background != emptyStatement ? props.background : console.log("No background"));

  console.log(background)
  return(
    <View>
      {background === 'Mountain' ? (
        <Image source={AvatarMountain} style={{width: 100, height: 100, zIndex: -1, position:'absolute'}}/>
      ):(
        null
      )}
    </View>
  )
}

const RewardCard = (props) => {
  const [purchasestatus, setIsPurchaseStatus] = useState(props.purchased);
  const [equippedstatus, setIsEquippedStatus] = useState(props.equipped);

  let bgColour = 'white';

  if (equippedstatus === true) {
    bgColour = '#A5A6F6'
  }

  const purchaseOrEquip = () =>{
      // if my coins >= asset value
      if(purchasestatus === false && equippedstatus === false){
        //buy asset
        setIsPurchaseStatus(true);
      }else if (purchasestatus === true && equippedstatus === false){
        //add asset onto avatar
        setIsEquippedStatus(true);
        
      }else if (purchasestatus === true && equippedstatus === true){
        //remove asset from avatar
        setIsEquippedStatus(false);
      }else{
        //if my coins < asset value
        null
      }
  }

  return(
    <View>
      <TouchableOpacity onPress={purchaseOrEquip}>
        <VStack>
          <View style = {[style.rewardCardContainer, {backgroundColor: bgColour}]}>
              <Image source={props.img} style= {style.rewardItemImage}/>
              <HStack>
                <Text style={{marginTop: 5, marginLeft: 5,fontSize: 14, fontFamily: 'Montserrat-Bold'}}>
                    {props.asset} 
                </Text>
                
                <View style={{position:'absolute', right: 0, bottom: 0, display: 'flex'}}>
                  {purchasestatus === false && equippedstatus === false ? (
                      <CoinsValue coinsValue = {props.coinsValue}/>
                  ) : purchasestatus === true && equippedstatus === false ? (
                        <View style={[style.statusContainer, {backgroundColor: '#A5A6F6'}]}>
                          <Text style={{fontSize: 12, fontFamily: 'Montserrat-Regular', color: '#FFF', marginHorizontal: 5}}>Owned</Text>
                        </View>
                  ) : (
                      <View style={[style.statusContainer, {backgroundColor: 'white'}]}>
                        <Text style={{fontSize: 12, color: 'black', marginHorizontal: 5, fontFamily: 'Montserrat-Regular'}}>Equipped</Text>
                      </View>
                    
                  )}
                </View>
            </HStack>
          </View>
        </VStack>
      </TouchableOpacity>
    </View>
  )
} 

const VoucherCard = (props) => {
  const [redeemStatus, setIsRedeemStatus] = useState(props.redeemed);

  let bgColour = 'white';

  if (redeemStatus === true) {
    bgColour = '#A5A6F6'
  }

  const redeemVoucher = () => {
    // if my coins >= reward value
    if(redeemStatus === false){
      setIsRedeemStatus(true);
    }
  }

  return(
    <Fragment>
        <TouchableOpacity onPress={redeemVoucher} disabled={redeemStatus == true ? true : false} >
          <View style={{backgroundColor: bgColour, height: 100, marginHorizontal: 20, marginBottom:16,  borderRadius: 10, flexDirection: 'row'}}>
            <Image source={props.img} style= {{ marginLeft: 14, marginVertical: 10}}/>
            <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 22}}>
              <Text style={typo.T1}>{props.asset}</Text>

              {redeemStatus === false ? (
                  <CoinsValue coinsValue = {props.coinsValue}/>
              ) : (
                <View style={style.redeemButtonContainer}>
                  <Text style={style.redeemButtonText}>Redeemed</Text>
                </View>   
              )}
            </View>
          </View>
        </TouchableOpacity>
    </Fragment>
  )
}

const CoinsValue = (props) => {
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