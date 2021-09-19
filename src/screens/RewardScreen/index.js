
import React, {Fragment, useState} from 'react';
import { Center, NativeBaseProvider, HStack, Box, VStack } from 'native-base';
import { Button, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import typo from '../../styles/typography';
import { color } from '../../styles/theme';
import style from './style';
import ProfileScreen from '../ProfileScreen/profile'
import CoinIcon from '../../assets/icons/coin.png';

import StarrySpace from '../../assets/images/starry-space.png';
import Mountain from '../../assets/images/mountain1.png';
import Beach from '../../assets/images/beach.png';

import Hat1 from '../../assets/images/hat1.png';
import Hat2 from '../../assets/images/hat2.png';
import Hat3 from '../../assets/images/hat3.png';
import Hat4 from '../../assets/images/hat4.png';

const RewardScreen = ({ navigation }) => {
  const [tab, setIsTab] = useState("Colours");

  const clickColoursTab = () =>{
    setIsTab("Colours");
  }
  
  const clickAccessoryTab = () =>{
    setIsTab("Accessories");
  }

  const clickHatsTab = () =>{
    setIsTab("Hats");
  }

  const clickVouchersTab = () =>{
    setIsTab("Vouchers");
  }

  return (

<VStack style={{backgroundColor: color.bg}}>
  <ProfileScreen/>

  <HStack style={style.tabBar}>
  <TouchableOpacity onPress= {clickColoursTab}>
    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        {tab === "Colours" ? (
          <View style={{backgroundColor: 'black', height: 2, width: 56, marginBottom: 8}}/>
        ) : (
          <View style={{height: 2, width: 56, marginBottom: 8}}/>
        )}
        <View style = {style.tabIcon}/>
        <Text style ={{fontSize: 16, fontFamily: 'Montserrat-Bold', color: 'white'}}>Background</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress= {clickHatsTab}>
    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        {tab === "Hats" ? (
          <View style={{backgroundColor: 'black', height: 2, width: 56, marginBottom: 8}}/>
        ) : (
          <View style={{height: 2, width: 56, marginBottom: 8}}/>
        )}
        <View style = {style.tabIcon}/>
        <Text style ={{fontSize: 16, fontFamily: 'Montserrat-Bold', color: 'white'}}>Hats</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress= {clickAccessoryTab}>
    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        {tab === "Accessories" ? (
          <View style={{backgroundColor: 'black', height: 2, width: 56, marginBottom: 8}}/>
        ) : (
          <View style={{height: 2, width: 56, marginBottom: 8}}/>
        )}
        <View style = {style.tabIcon}/>
        <Text style ={{fontSize: 16, fontFamily: 'Montserrat-Bold', color: 'white'}}>Accessories</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress= {clickVouchersTab}>
    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        {tab === "Vouchers" ? (
          <View style={{backgroundColor: 'black', height: 2, width: 56, marginBottom: 8}}/>
        ) : (
          <View style={{height: 2, width: 56, marginBottom: 8}}/>
        )}
        <View style = {style.tabIcon}/>
        <Text style ={{fontSize: 16, fontFamily: 'Montserrat-Bold', color: 'white'}}>Voucher</Text>
    </View>
  </TouchableOpacity>
  </HStack>

  <ScrollView showsVerticalScrollIndicator={false}>
  {tab === "Colours" ? (
    <Fragment>
      <View style = {{flexDirection: 'column'}}>
        <View style = {style.rewardRowContainer}>
          <RewardCard asset="Mountain" id="1" coinsValue="200" img={Mountain}/>
          <RewardCard asset="Starry Space" id="2" coinsValue="300" img={StarrySpace}/>
        </View>
        <View style = {style.rewardRowContainer}>
          <RewardCard asset="Beach" id="3" coinsValue="400" img={Beach}/>
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
          <RewardCard asset="Accessory" id="1" coinsValue="250"/>
          <RewardCard asset="Accessory" id="2" coinsValue="350"/>
        </View>
        <View style = {style.rewardRowContainer}>
          <RewardCard asset="Accessory" id="3" coinsValue="400"/>
          <RewardCard asset="Accessory" id="4" coinsValue="500"/>
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
          <RewardCard asset="Cowboy" id="1" coinsValue="100" img={Hat1}/>
          <RewardCard asset="Santa" id="2" coinsValue="200" img={Hat2}/>
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

  {tab === "Vouchers" ? (
    <Fragment>
      <View style={{flex:1, display: 'flex',flexDirection: 'column'}}>
          <VoucherCard asset="Voucher" coinsValue="200"/>
          <VoucherCard asset="Voucher" coinsValue="200"/>
      </View>
    </Fragment>
  ) : (
    null
  )}
  </ScrollView>
</VStack>
  )
}

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

const RedeemButton = ({onPress, title}) => {
  return(
    <TouchableOpacity onPress={onPress} style={style.redeemButtonContainer}>
      <Text style={style.redeemButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const VoucherCard = (props) => {
  return(
    <View style={{backgroundColor: '#EBEBEB', height: 100, marginHorizontal: 20, marginBottom:16,  borderRadius: 10, flexDirection: 'row'}}>
      <View style={{backgroundColor: '#C4C4C4', height: 80, width: 132, marginLeft: 14, marginVertical: 10}}/>
      <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 22}}>
        <Text style={typo.T1}>{props.asset} name</Text>
        <CoinsValue coinsValue = {props.coinsValue}/>
        <RedeemButton title="Redeem"/>
      </View>
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