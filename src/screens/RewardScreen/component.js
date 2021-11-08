import React, {Fragment} from 'react';
import { Button, Text, View, ScrollView, TouchableOpacity, Image, Modal, Alert, Pressable } from 'react-native';
import style from './style';

export const TabClicked = (props) =>{ 
    return(
      <View style={{display: 'flex', alignItems: 'center', width: 60}}>
            <View style={{backgroundColor: '#A5A6F6', height: 2, width: 30, marginBottom: 8, }}/>
              <View style = {style.tabIcon}>
                <Image source={props.img} style={{left: props.left}}/>
              </View>
            <Text style ={{fontSize: 8, fontFamily: 'Montserrat-Bold', color: '#A5A6F6'}}>{props.text}</Text>
      </View>
    )
  }
  
export const TabNotClicked =(props) => {
    return(
      <View style={{display: 'flex', alignItems: 'center', width: 60}}>
        <View style={{height: 2, width: 40, marginBottom: 8,}}/>
          <View style = {style.tabIcon}>
          <Image source={props.img} style={{left: props.left}}/>
        </View>
        <Text style ={{fontSize: 8, fontFamily: 'Montserrat-Bold', textAlign: 'center', color:'white'}}>{props.text}</Text>
      </View>
    )
  }

export const RewardPopup = ({enoughCoins, navigation, modalVisible, setModalVisible, modalContent}) => {
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
                    style={[style.button, style.buttonClose, {width: 200, alignSelf: 'center'}]}
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
        </View>
  )
}