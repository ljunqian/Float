
import React, {Fragment, useContext, useEffect, useState} from 'react';
import { Center, NativeBaseProvider, HStack, Box, VStack, usePropsResolution, Flex } from 'native-base';
import { Button, Text, View, ScrollView, TouchableOpacity, Image, Modal, Alert, Pressable } from 'react-native';

import typo from '../../styles/typography';
import { color } from '../../styles/theme';
import style from './style';

import ProfileScreen from '../ProfileScreen/profile'
import CoinIcon from '../../assets/icons/coins.png';

import { TabClicked } from './component';
import { TabNotClicked } from './component';

import {connect, useSelector, useDispatch} from 'react-redux';
import {updateAvatarState} from '../GlobalStates/RewardAction';

import { 
  BackgroundImages,
  HatImages,
  AccessoryImages,
  VoucherImages,
  rewardTabs,
} from './assetConstants';

const RewardScreen = ({ navigation }) => {
  
  const [tab, setIsTab] = useState("Background");
  const [selected, setSelected] = useState(null);

  const userData = useSelector((state)=> state.reward);
  const [userState, setUserState] = useState(userData);

  const [modalVisible, setModalVisible] = useState(false); 
  const [modalContent, setModalContent] = useState();
  const [modalEnoughCoins, setModalEnoughCoins] = useState();

  const [backgroundState, setBackgroundState] = useState(BackgroundImages);
  const [hatState, setHatState] = useState(HatImages);
  const [accessoryState, setAccessoryState] = useState(AccessoryImages);
  const [voucherArrayState, setVoucherArrayState] = useState(VoucherImages);

  const dispatch = useDispatch();
  const AssetChoices = ({assetArray, type}) => {
    return (
      <Fragment>
        <View style = {style.rewardRowContainer}>
          {/*Populate Asset Reward Cards*/}
          {assetArray.map((asset)=>{
              return(
                <RewardCard 
                  key={asset.id} 
                  img={asset.source} 
                  asset={asset.name} 
                  coinsValue={asset.value} 
                  purchased={asset.purchased} 
                  equipped={asset.equipped}
                  updateAssetState ={(purchased,equipped)=>updateAssetState(type,asset.name,purchased,equipped,assetArray)} 
                  updateUser={(name)=>updateAvatar(type,name)}
                  value={selected}
                  showModal={(enough)=>showModal(asset, enough)}
                />
              )
            })
          }
      </View>
    </Fragment>
    )
  }

  const showModal = (asset, enough) => {
    setModalContent(asset);
    setModalVisible(true);
    setModalEnoughCoins(enough);
  }


  const RewardPopup = ({enoughCoins, navigation}) => {
    let text = "";
    if(enoughCoins){
      text = "You have successfully redeemed"
    }else{
      text = "Insufficient coins to redeem"
    }

    return (
          <View style={style.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={style.centeredView}>
                <View style={style.modalView}>
                  <Text style={style.modalText}>{text}</Text>
                  <Image source={modalContent.source} style={{marginTop:70, position: 'absolute', zIndex: -1, alignSelf: 'center', width: 164, height: 140}}/>
                  <Text style={{marginTop:210, fontWeight: "bold",position: 'absolute',alignSelf: 'center'}}>{modalContent.name}</Text>
                  {enoughCoins ? (
                    <View>
                      <Text style={style.text}>“The strongest people are those who win battles we know nothing about.”</Text>
                      <Pressable
                      style={[style.button, style.buttonClose, {width: 200}]}
                      onPress={() => setModalVisible(!modalVisible)}
                      >
                      <Text style={style.btntext}>Continue</Text>
                    </Pressable>
                  </View>
                  ):(
                    <View>
                    <Text style={style.text}>Earn more coins by doing more activities</Text>
                    <HStack>
                        <Pressable
                          style={[style.button, style.buttonClose, {marginRight: 6, width: 125}]}
                          onPress={() => { navigation.navigate('Meditate'); }}
                          >
                          <Text style={style.btntext}>Earn Coins</Text>
                        </Pressable>
                        <Pressable
                          style={[style.button, style.buttonClose, {marginLeft: 6, width: 125}]}
                          onPress={() => setModalVisible(!modalVisible)}
                          >
                          <Text style={style.btntext}>Cancel </Text>
                        </Pressable>
                      </HStack>
                    </View>
                  )}
                </View>
              </View>
            </Modal>
            <Pressable
              onPress={() => setModalVisible(true)}
            >
            </Pressable>
          </View>
    )
  }
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

  const updateVoucherArrayState = (name, redeemed, voucherArrayState) => {
    const newVoucherArray = voucherArrayState.map((voucher)=>{
      if(voucher.name === name){
        return{
          ...voucher,
          redeemed: redeemed
        }
      }
        return voucher;
    });
    setVoucherArrayState(newVoucherArray);
  }

  const updateAssetState = (type, name, purchased, equipped, assetArray) => {
    const newAssets = assetArray.map((asset)=>{
      if (asset.name === name) {
        return {
          ...asset,
          purchased: purchased,
          equipped: equipped,
        }
      } else {
        if (equipped) {
          return {
            ...asset,
            equipped: false
          }
        }
        return asset;
      }
    });

    if (type === "background") {
      setBackgroundState(newAssets);
    } else 
    if (type === "hat") {
      setHatState(newAssets);
    }else{
      setAccessoryState(newAssets);
    }
  }

  const updateAvatar = (type, name) =>{
    dispatch(updateAvatarState(type,name));
    setUserState({
      ...userState,
      [type]: name,
    })
  }

  return (
      <VStack style={{backgroundColor: color.bg}}>
        { modalVisible && <RewardPopup enoughCoins={modalEnoughCoins} navigation={navigation}/>}
        <ProfileScreen style={{position: 'absolute', zIndex: 1}}/>
      
        <HStack style={style.tabBar}>
          {rewardTabs.map((tab)=>(
            <TouchableOpacity onPress= { () => {setIsTab(tab.title)}} key={tab.title}>
              <TabView reward={tab.title} imgClicked={tab.imgClicked} imgNotCLicked={tab.imgNotCLicked}/>
            </TouchableOpacity>
          ))}
        </HStack>

        <ScrollView showsVerticalScrollIndicator={false}>
          {tab === "Background" ? (
            <AssetChoices assetArray={backgroundState} type={"background"} />
          ) 
          : tab === "Hats" ? (
            <AssetChoices assetArray={hatState} type={"hat"}/>
            
          ) : tab === "Accessories" ? (
            <AssetChoices assetArray= {accessoryState} type={"accessory"}/>

          ) : tab === "Vouchers" ? (
            <Fragment>
              <View style={{flex:1, display: 'flex'}}>
                  {voucherArrayState.map((voucherInfo)=>{
                      return(
                        <VoucherCard key = {voucherInfo.id} img={voucherInfo.source} asset={voucherInfo.name} coinsValue={voucherInfo.value}
                        redeemed={voucherInfo.redeemed} showModal={(enough)=>showModal(voucherInfo, enough)}
                        updateVoucherState ={(redeemed)=>updateVoucherArrayState(voucherInfo.name,redeemed,voucherArrayState)} />
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



const RewardCard = (props) => {
  const [purchasestatus, setIsPurchaseStatus] = useState(props.purchased);
  const [equippedstatus, setIsEquippedStatus] = useState(props.equipped);

  let bgColour = 'white';

  if (equippedstatus === true) {
    bgColour = '#A5A6F6'
  }

  const purchaseOrEquip = () =>{
      // if my coins >= asset value
      if(!purchasestatus && !equippedstatus){
        //buy asset
        setIsPurchaseStatus(true);
        setIsEquippedStatus(true);
        props.showModal(true);
        props.updateUser(props.asset);
        props.updateAssetState(true, true);
      }else 
      if (purchasestatus && !equippedstatus){
        //add asset onto avatar
        setIsEquippedStatus(true);
        props.updateUser(props.asset);
        props.updateAssetState(purchasestatus, true);
      }else 
      if (purchasestatus && equippedstatus){
        //remove asset from avatar
        setIsEquippedStatus(false);
        props.updateUser("Remove Asset");
        props.updateAssetState(purchasestatus, false);
      }
  }

  return(
    <View>
      <TouchableOpacity onPress={()=>{purchaseOrEquip();}}>
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
      props.showModal(true);
      props.updateVoucherState(true);
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

export default ({navigation}) => {
  return (
      <NativeBaseProvider>
        <Center flex={1}>
          <RewardScreen navigation={navigation}/>
        </Center>
      </NativeBaseProvider>
  )
}