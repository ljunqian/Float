
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

import RewardCardTest from './components';

import Background_StarrySpace from '../../assets/images/starry-space.png';
import Background_Mountain from '../../assets/images/mountain1.png';
import Background_Beach from '../../assets/images/beach.png';

import Hat1 from '../../assets/images/Hat-Cowboy-Center.png';
import Hat2 from '../../assets/images/Hat-Santa-Center.png';
import Hat3 from '../../assets/images/Hat-Ushanka-Center.png';
import Hat4 from '../../assets/images/Hat-Wizard-Center.png';

import Accessory1 from '../../assets/images/Accessories-Band-Aid-Center.png';
import Accessory2 from '../../assets/images/Accessories-Eyepatch-Center.png';
import Accessory3 from '../../assets/images/Accessories-Mustache-Center.png';
import Accessory4 from '../../assets/images/Accessories-Santa-Beard-Center.png';

import Voucher1 from '../../assets/images/Voucher1.png';
import Voucher2 from '../../assets/images/Voucher2.png';
import Voucher3 from '../../assets/images/Voucher3.png';

import AvatarMountain from '../../assets/images/Background-Mountain.png'
import AvatarHat1 from '../../assets/images/Hat-Cowboy.png'
import AvatarHat2 from '../../assets/images/Hat-Santa.png'
import { Card } from 'react-native-elements/dist/card/Card';
import { display } from 'styled-system';


const RewardScreen = ({ navigation }) => {
  const [tab, setIsTab] = useState("Background");

  const [CardBGStatus, setIsCardBGStatus] = useState("");
  const [BGEquipped, setIsBGEquipped] = useState(CardBGStatus == "" ? "No" : "Yes");

  const [CardHatStatus, setIsCardHatStatus] = useState("");
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

  const Activate_MountainBG = () =>{
    if (BGEquipped == "Yes") {
      setIsCardBGStatus("Empty");
      setIsBGEquipped("No");
    } else {
      setIsCardBGStatus("Activate_MountainBG");
      setIsBGEquipped("Yes");
    }
  }

  const Activate_CowboyHat = () =>{
    if (HatEquipped == "Yes" && CardHatStatus == "Activate_CowboyHat") {
      setIsCardHatStatus("Empty");
      setIsHatEquipped("No");
    } else {
      setIsCardHatStatus("Activate_CowboyHat");
      setIsHatEquipped("Yes");
    }
  }

  const Activate_SantaHat = () =>{
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

              <TouchableOpacity onPress={Activate_MountainBG}>
                <RewardCard asset="Mountain" id="1" coinsValue="200" img={Background_Mountain}/>
              </TouchableOpacity>

                <RewardCard asset="Starry Space" id="2" coinsValue="300" img={Background_StarrySpace}/>
              </View>
              <View style = {style.rewardRowContainer}>
                <RewardCard asset="Beach" id="3" coinsValue="400" img={Background_Beach}/>
              </View>
            </View>
          </Fragment>
        ) : (
          null
        )}

        {tab === "Hats" ? (
          <Fragment>
            <View style = {{flexDirection: 'column'}}>
              <View style = {style.rewardRowContainer}>

                {CardHatStatus != "Activate_CowboyHat"? (
                    <TouchableOpacity onPress={Activate_CowboyHat}>
                     <RewardCard asset="Cowboy" id="1" coinsValue="100" img={Hat1}/>
                    </TouchableOpacity>
                ):(
                  <TouchableOpacity onPress={Activate_CowboyHat}>
                     <RewardCardEquipped asset="Cowboy" id="1" coinsValue="100" img={Hat1}/>
                  </TouchableOpacity>
                )}
               
                <TouchableOpacity onPress={Activate_SantaHat}>
                  <RewardCard asset="Santa" id="2" coinsValue="200" img={Hat2}/>
                </TouchableOpacity>

              </View>
              <View style = {style.rewardRowContainer}>
                <RewardCard asset="Ushanka" id="3" coinsValue="300" img={Hat3}/>
                <RewardCard asset="Wizard" id="4" coinsValue="400" img={Hat4}/>
              </View>
            </View>
          </Fragment>
        ) : (
          null
        )}

        {tab === "Accessories" ? (
          <Fragment>
            <View style = {{flexDirection: 'column'}}>
              <View style = {style.rewardRowContainer}>
                <RewardCard asset="Band Aid" id="1" coinsValue="250" img={Accessory1}/>
                <RewardCard asset="Eyepatch" id="2" coinsValue="350" img={Accessory2}/>
              </View>
              <View style = {style.rewardRowContainer}>
                <RewardCard asset="Mustache" id="3" coinsValue="400" img={Accessory3}/>
                <RewardCard asset="Santa Beard" id="4" coinsValue="500" img={Accessory4}/>
              </View>
            </View>
          </Fragment>
        ) : (
          null
        )}

        {tab === "Vouchers" ? (
          <Fragment>
            <View style={{flex:1, display: 'flex',flexDirection: 'column'}}>
                <VoucherCard asset="1-for-1 Korean BBQ" coinsValue="200" img={Voucher1}/>
                <VoucherCard asset="Weekday Lunch Deals" coinsValue="200" img={Voucher2}/>
                <VoucherCard asset="50% off 2nd admission" coinsValue="200" img={Voucher3}/>
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
            {/* <View style={{position:'absolute', right: 0, bottom: 0}}>
              <CoinsValue coinsValue = {props.coinsValue}/>
            </View> */}

            <View style={{position:'absolute', right: 0, bottom: 0, display: 'flex'}}>
              <View style={[style.statusContainer, {backgroundColor: '#A5A6F6'}]}>
                <Text style={style.statusText}>Owned</Text>
              </View>
            </View>

          </View>
        </View>
      </View>
  )
} 

const RewardCardEquipped = (props) => {

  return(
      <View style = {{flexDirection: 'column'}}>
        <View style = {[style.rewardCardContainer, {backgroundColor: '#A5A6F6'}]}>
            <Image source={props.img} style= {style.rewardItemImage}/>
            <View style = {{flexDirection: "row"}}>
              <Text style={{marginTop: 5, marginLeft: 5,fontSize: 14, fontFamily: 'Montserrat-Bold'}}>
                  {props.asset} 
              </Text>
            <View style={{position:'absolute', right: 0, bottom: 0}}>
              <View style={[style.statusContainer, {backgroundColor: 'white'}]}>
                  <Text style={[style.statusText, {color: 'black'}]}>Redeemed</Text>
              </View>
            </View> 
          </View>
        </View>
      </View>
  )
}

const VoucherCard = (props) => {
  const [VoucherStatus, setIsVoucherStatus] = useState("Not_Redeemed");

  const redeemVoucher = () => {
      setIsVoucherStatus("Redeemed");
  }

  const RedeemedStatus = ({title}) => {
    return(
      <View style={style.redeemButtonContainer}>
        <Text style={style.redeemButtonText}>{title}</Text>
      </View>   
    )
  }

  return(
    <Fragment>
      {VoucherStatus === "Not_Redeemed" ? (
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
              <RedeemedStatus title="Redeemed"/>   
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