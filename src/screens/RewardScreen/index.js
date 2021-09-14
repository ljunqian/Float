
import React, {Fragment, useState} from 'react';
import { Center, NativeBaseProvider, HStack, Box, VStack } from 'native-base';
import { Button, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import typo from '../../styles/typography';
import style from './style';
import ProfileScreen from './ProfileScreen';
import CoinIcon from '../../assets/icons/coin.png';

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

<VStack style={{backgroundColor: 'white'}}>
  <ProfileScreen />

  <HStack style={style.tabBar}>
  <TouchableOpacity onPress= {clickColoursTab}>
    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        {tab === "Colours" ? (
          <View style={{backgroundColor: 'black', height: 2, width: 56, marginBottom: 8}}/>
        ) : (
          <View style={{height: 2, width: 56, marginBottom: 8}}/>
        )}
        <View style = {style.tabIcon}/>
        <Text style ={{fontSize: 18, fontFamily: 'FredokaOne-Regular', color: 'black'}}>Colour</Text>
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
        <Text style ={{fontSize: 18, fontFamily: 'FredokaOne-Regular', color: 'black'}}>Accessory</Text>
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
        <Text style ={{fontSize: 18, fontFamily: 'FredokaOne-Regular', color: 'black'}}>Hat</Text>
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
        <Text style ={{fontSize: 18, fontFamily: 'FredokaOne-Regular', color: 'black'}}>Voucher</Text>
    </View>
  </TouchableOpacity>
  </HStack>

  <ScrollView showsVerticalScrollIndicator={false}>
  {tab === "Colours" ? (
    <Fragment>
      <View style = {{flexDirection: 'column'}}>
        <View style = {style.rewardRowContainer}>
          <RewardCard asset="Colour" id="1" coinsValue="200"/>
          <RewardCard asset="Colour" id="2" coinsValue="300"/>
        </View>
        <View style = {style.rewardRowContainer}>
          <RewardCard asset="Colour" id="3" coinsValue="400"/>
          <RewardCard asset="Colour" id="4" coinsValue="500"/>
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
          <RewardCard asset="Hat" id="1" coinsValue="100"/>
          <RewardCard asset="Hat" id="2" coinsValue="200"/>
        </View>
        <View style = {style.rewardRowContainer}>
          <RewardCard asset="Hat" id="3" coinsValue="300"/>
          <RewardCard asset="Hat" id="4" coinsValue="400"/>
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

      <>
        <View style = {{flexDirection: 'column'}}>
          <View style = {style.rewardCardContainer}>
            <View style= {style.rewardItemImage}/>

            <View style = {{flexDirection: "row"}}>
              <Text style={{marginTop: 5, marginLeft: 5,fontSize: 14, fontFamily: 'Montserrat-Bold'}}>
                {props.asset} {props.id}
              </Text>
              <View style={{position:'absolute', right: 0, bottom: 0}}>
                <CoinsValue coinsValue = {props.coinsValue}/>
              </View>
            </View>

          </View>
          <View style={{marginLeft: 110}}>
            <RedeemButton title="Redeem"/>
          </View>
        </View>
    </>

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