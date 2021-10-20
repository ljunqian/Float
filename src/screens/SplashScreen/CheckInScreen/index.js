import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable, Image, ImageBackground} from 'react-native';
import modalstyle from '../../RewardScreen/style';
import styles from './style';
import textStyle from '../../../styles/typography';

import BG from '../../../assets/images/journeybg-1.gif';
import calIcon from '../../../assets/icons/calendar.png';
import {moods} from './moodConstants'
import { marginTop } from 'styled-system';

import moment from 'moment';

const CheckIn = ({navigation}) =>{
    let date = moment().format("DD YYYY, h.mm"),  month = moment().format("MMM"), time = moment().format("a");
    const [modalVisible, setModalVisible] = useState(false);
    const [moodSelected, setmoodSelected] = useState(null);

    console.log(date)

    return(
        <View>
            {modalVisible && <CheckInPopUp navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} moodSelected={moodSelected}/>}

            <ImageBackground source={BG} style={{width: '100%', height: '100%', alignItems: 'center'}}>
                <Text style={[textStyle.H4, {color: '#FFF', marginTop: 65}]}>How are you feeling?</Text>
                <View style={styles.dateContainer}>
                    <Image source={calIcon}/>
                    <Text style={[textStyle.T1, {color: '#FFF', marginLeft: 10}]}>Today, {month.toString().toUpperCase()} {date} {time.toString().toUpperCase()}</Text>
                </View>
                
                <View style={{flexDirection: 'row', marginHorizontal: 25, flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {moods.map((mood)=>{
                    return(
                        <MoodCard 
                            key={mood.name}
                            source={mood.source}
                            name={mood.name}
                            setmoodSelected={()=>setmoodSelected(mood)}
                            moodSelected={moodSelected}
                        />
                        )
                    })}
                </View>

                <TouchableOpacity onPress={()=> setModalVisible(true)}>
                {moodSelected !=null && !modalVisible &&
                <View style={[styles.continueButtonContainer, {marginTop: 30}]}>
                    <Text style={textStyle.T4}>Continue</Text>
                </View>}
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const MoodCard = (props) =>{
    let bg = '#FFF';
    if(props.moodSelected != null && props.moodSelected.name === props.name){
        bg = '#B2E5D7';
    }

    return(
        <TouchableOpacity style = {[styles.moodCard, {marginTop: 30, backgroundColor: bg}]} onPress={()=> props.setmoodSelected()}>
            <Image source={props.source} style={{marginTop: 12}}/>
            <Text style={[textStyle.T3, {marginTop: 10}]}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const CheckInPopUp = ({navigation, setModalVisible, modalVisible, moodSelected}) =>{

    return(
        <View style={modalstyle.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
            <View style={modalstyle.centeredView}>
                <View style={modalstyle.modalView}>
                    <Text style={[textStyle.H2, {marginBottom: 10}]}>You're feeling</Text>
                    <Text style={textStyle.T1}>{moodSelected.name}</Text>
                    <Image source={moodSelected.source} style={{marginTop: 2}}/>
                    <Text style={[textStyle.T1, {marginTop: 10}]}>"Don't forget to SMILE today!"</Text>
                    <Pressable
                    style={[modalstyle.button, {width: 200, alignSelf: 'center', backgroundColor: '#B2E5D7'}]}
                    onPress={() => {setModalVisible(!modalVisible); navigation.replace('Guides')}}
                    >
                        <Text style={[textStyle.T1, {textAlign: 'center'}]}>Check In</Text>
                    </Pressable>
                </View>
            </View>
            </Modal>
        </View>
    )
}

export default CheckIn;