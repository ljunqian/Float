
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Center, NativeBaseProvider, HStack, Box, VStack,} from 'native-base';
import { Button, Text, View, ScrollView, TouchableOpacity, Image, } from 'react-native';

import typo from '../../styles/typography';
import { color } from '../../styles/theme';
import style from './style';

import ProfileScreen from '../ProfileScreen/profile'
import CoinIcon from '../../assets/icons/coins.png';

import { TabClicked, TabNotClicked, RewardPopup } from './component';

import {connect, useSelector, useDispatch} from 'react-redux';
import {updateAvatarState, purchaseAsset} from './Redux/RewardAction';
import { rewardTabs } from './assetConstants';

import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from "../../graphql/queries"

const RewardScreen = ({ navigation }) => {
  const [isTab, setIsTab] = useState("Background");

  const userData = useSelector((state) => state.reward);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [modalEnoughCoins, setModalEnoughCoins] = useState();

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
                {userData.voucherList.map((voucherInfo) => {
                  return (
                    <VoucherCard key={voucherInfo.id} img={voucherInfo.source} asset={voucherInfo.name} coinsValue={voucherInfo.value}
                      redeemed={voucherInfo.purchased} showModal={(enough) => showModal(voucherInfo, enough)}
                      buyVoucher={()=>dispatch(purchaseAsset('voucher', voucherInfo.name))} />
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
  const purchasestatus = props.purchased;
  const equippedstatus = props.equipped;

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
          <View style={[style.rewardCardContainer, { backgroundColor: equippedstatus? '#A5A6F6' : 'white' }]}>
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
  const redeemStatus = props.redeemed;

  const redeemVoucher = () => {
    // if my coins >= reward value
    if (redeemStatus === false) {
      props.showModal(true);
      props.buyVoucher();
    }
  }

  return (
    <Fragment>
      <TouchableOpacity onPress={redeemVoucher} disabled={redeemStatus} >
        <View style={{ backgroundColor: redeemStatus ? '#A5A6F6': 'white', height: 100, marginHorizontal: 20, marginBottom: 16, borderRadius: 10, flexDirection: 'row' }}>
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