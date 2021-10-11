
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Center, NativeBaseProvider, HStack, Box, VStack, usePropsResolution, Flex } from 'native-base';
import { Button, Text, View, ScrollView, TouchableOpacity, Image, Modal, Alert, Pressable } from 'react-native';

import typo from '../../styles/typography';
import { color } from '../../styles/theme';
import style from './style';

import ProfileScreen from '../ProfileScreen/profile'
import CoinIcon from '../../assets/icons/coins.png';

import { TabClicked, TabNotClicked, RewardPopup } from './component';

import {connect, useSelector, useDispatch} from 'react-redux';
import {updateAvatarState, purchaseAsset} from './Redux/RewardAction';


import {
  BackgroundImages,
  HatImages,
  AccessoryImages,
  VoucherImages,
  rewardTabs,
} from './assetConstants';

const RewardScreen = ({ navigation }) => {
  const [isTab, setIsTab] = useState("Background");
  const [selected, setSelected] = useState(null);

  const userData = useSelector((state) => state.reward);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [modalEnoughCoins, setModalEnoughCoins] = useState();

  const [voucherArrayState, setVoucherArrayState] = useState(VoucherImages);

  const dispatch = useDispatch();
  
  const AssetChoices = ({assetArray, type}) => {
    return (
      <Fragment>
        <View style={style.rewardRowContainer}>
          {/*Populate Asset Reward Cards*/}
          {assetArray.map((asset) => {
            return (
              <RewardCard
                key={asset.id}
                img={asset.source}
                asset={asset.name}
                coinsValue={asset.value}
                purchased={asset.purchased}
                equipped={asset.name === userData[type]}
                buyAsset={() => dispatch(purchaseAsset(type, asset.name))}
                updateUser={(name) => updateAvatar(type, name)}
                value={selected}
                showModal={(enough) => showModal(asset, enough)}
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

  const updateVoucherArrayState = (name, redeemed, voucherArrayState) => {
    const newVoucherArray = voucherArrayState.map((voucher) => {
      if (voucher.name === name) {
        return {
          ...voucher,
          redeemed: redeemed
        }
      }
      return voucher;
    });
    setVoucherArrayState(newVoucherArray);
  }

  
  const updateAvatar = (type, name) => {
    dispatch(updateAvatarState(type, name));
  }

  return (
      <VStack style={{backgroundColor: color.bg}}>
        { modalVisible && 
          <RewardPopup 
            enoughCoins={modalEnoughCoins} navigation={navigation} 
            setModalVisible={setModalVisible}
            modalVisible={modalVisible} modalContent={modalContent}
        />}
        <ProfileScreen style={{position: 'absolute', zIndex: 1}}/>
      
        <HStack style={style.tabBar}>
          {rewardTabs.map((tab)=>(
            <TouchableOpacity onPress= { () => {setIsTab(tab.title)}} key={tab.title}>
              <View style = {{alignItems: 'center', justifyContent: 'center'}}>
              { isTab === tab.title ?
                <TabClicked img={tab.imgClicked} text={tab.title}/>
                : <TabNotClicked img={tab.imgNotCLicked} text={tab.title}/>
              }
              </View>
            </TouchableOpacity>
          ))}
        </HStack>

        <ScrollView showsVerticalScrollIndicator={false}>
          {isTab === "Background" ? (
            <AssetChoices assetArray={userData.backgroundList} type={"background"} />
          ) 
          : isTab === "Hats" ? (
            <AssetChoices assetArray={userData.hatList} type={"hat"}/>
            
          ) : isTab === "Accessories" ? (
            <AssetChoices assetArray= {userData.accessoryList} type={"accessory"}/>

          ) : isTab === "Vouchers" ? (
            <Fragment>
              <View style={{ flex: 1, display: 'flex' }}>
                {voucherArrayState.map((voucherInfo) => {
                  return (
                    <VoucherCard key={voucherInfo.id} img={voucherInfo.source} asset={voucherInfo.name} coinsValue={voucherInfo.value}
                      redeemed={voucherInfo.redeemed} showModal={(enough) => showModal(voucherInfo, enough)}
                      updateVoucherState={(redeemed) => updateVoucherArrayState(voucherInfo.name, redeemed, voucherArrayState)} />
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
  //const [purchasestatus, setIsPurchaseStatus] = useState(props.purchased);
  //const [equippedstatus, setIsEquippedStatus] = useState(props.equipped);
  const purchasestatus = props.purchased;
  const equippedstatus = props.equipped;
  let bgColour = 'white';

  if (equippedstatus === true) {
    bgColour = '#A5A6F6'
  }

  const purchaseOrEquip = () => {
    // if my coins >= asset value
    if (!purchasestatus && !equippedstatus) {
      props.buyAsset();
      props.showModal(true);
    } else
    if (purchasestatus && !equippedstatus) {
      props.updateUser(props.asset);
    } else
    if (purchasestatus && equippedstatus) {
      props.updateUser("Remove Asset");
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={() => { purchaseOrEquip(); }}>
        <VStack>
          <View style={[style.rewardCardContainer, { backgroundColor: bgColour }]}>
            <Image source={props.img} style={style.rewardItemImage} />
            <HStack>
              <Text style={{ marginTop: 5, marginLeft: 5, fontSize: 14, fontFamily: 'Montserrat-Bold' }}>
                {props.asset}
              </Text>

              <View style={{ position: 'absolute', right: 0, bottom: 0, display: 'flex' }}>
                {purchasestatus === false && equippedstatus === false ? (
                  <CoinsValue coinsValue={props.coinsValue} />
                ) : purchasestatus === true && equippedstatus === false ? (
                  <View style={[style.statusContainer, { backgroundColor: '#A5A6F6' }]}>
                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular', color: '#FFF', marginHorizontal: 5 }}>Owned</Text>
                  </View>
                ) : (
                  <View style={[style.statusContainer, { backgroundColor: 'white' }]}>
                    <Text style={{ fontSize: 12, color: 'black', marginHorizontal: 5, fontFamily: 'Montserrat-Regular' }}>Equipped</Text>
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
    if (redeemStatus === false) {
      setIsRedeemStatus(true);
      props.showModal(true);
      props.updateVoucherState(true);
    }
  }

  return (
    <Fragment>
      <TouchableOpacity onPress={redeemVoucher} disabled={redeemStatus == true ? true : false} >
        <View style={{ backgroundColor: bgColour, height: 100, marginHorizontal: 20, marginBottom: 16, borderRadius: 10, flexDirection: 'row' }}>
          <Image source={props.img} style={{ marginLeft: 14, marginVertical: 10 }} />
          <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 22 }}>
            <Text style={typo.T1}>{props.asset}</Text>

            {redeemStatus === false ? (
              <CoinsValue coinsValue={props.coinsValue} />
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
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={[typo.T1, { marginRight: 3 }]}>{props.coinsValue}</Text>
      <Image source={CoinIcon} style={{ width: 16, height: 16 }} />
    </View>
  )
}

export default ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <RewardScreen navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  )
}