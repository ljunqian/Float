import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import typo from '../../../styles/typography';
import { style } from 'styled-system';
import MedBG from '../../../assets/images/meditate-planet.png';
import MedBG1 from '../../../assets/images/meditate-planet1.png';
import SleepBG from '../../../assets/images/sleep-planet.png';
import MoveBG from '../../../assets/images/move-planet.png';
import FocusBG from '../../../assets/images/focus-planet.png';

import coins from '../../../assets/icons/coins.png';
import { color } from '../../../styles/theme';
import avatarsmall from '../../../assets/images/avatarsmall.png';
import redheart from '../../../assets/icons/redheart.png';
import { Guides } from './constants';

const ExpCoinsComponent = ({ styles }) => {
    return(
        <View style={styles}>
            <View style={{flexDirection: 'row', marginLeft: 5 }}>
                <Text style={[typo.H2,{ color: 'white', fontWeight:'400'}]}>
                    4510 
                </Text>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={coins} style={{left: 5, zIndex: 0, position: 'absolute'}} />
                </View>
            </View>
            
            <Text style={[typo.H2,{color: 'white', fontWeight:'400'}]}>
                250 EXP
            </Text>
        </View>
    )
}

const ActDetailComponent = ({ detail }) => {
    return(
        <View style={{alignItems: 'center'}}>
            <Text style={[typo.H2,{color: 'white', fontWeight:'400'}]}>
                {/* Title of the activity */}
                {detail.title}
            </Text>
            <Text style={[typo.T1,{ color: 'white', fontWeight:'400'}]}>
                1 min {/* Get time from currentTime */}
            </Text>
        </View>
    )
}

const Complete = ({ navigation, route }) => {
    const detail = route.params;

    return  (


        <View style={styles.container}> 

        <ImageBackground source={backgrounds[detail.type]} resizeMode="cover" style={{width : '100%', height: '100%', top:0}} >
            
            <View style={styles.actComponent}>
            
                <View style={{flex: 2, marginTop: 60, alignItems: 'center'}}>
                    <ActDetailComponent detail={detail}/>
                    <View style={{marginTop: 20, alignItems: 'center'}}>
                        <Text style={[typo.H0,{ color: 'white', fontWeight:'400'}]}>
                            Complete! 
                        </Text>
                    </View>
                </View>
                
                <ExpCoinsComponent styles={{flex: 1, marginTop: 70}} />
                
                <View style={{flex: 1, marginTop: 20}}>
                   <Image source={avatarsmall} />
                </View>
                 

                <View style={{flex: 3, marginTop: 55}}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
                        <Text style={[typo.H3, {color: 'white'}]}>Done</Text> 
                    </TouchableOpacity>    
                </View>

                <View style={{flex: 4, marginTop: 50, alignItems: 'center'}}>
                    <Text style={[typo.H2, {color: 'white'}]}>
                        Added to favourites!
                    </Text>
                    <Image source={redheart} style ={{marginTop: 14}} />
                </View>

              
              
            </View>
            </ImageBackground>
        </View>
      
        
    )
}

const backgrounds = {
    Meditate: MedBG1,
    Sleep: SleepBG,
    Move: MoveBG,
    Focus: FocusBG 
}

const styles = StyleSheet.create({

    container : {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272727',

    },
    actComponent: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'white',
    },
    button : {
        height: 48,
        width: 370,
        alignItems: 'center',   
        justifyContent: 'center',
        borderRadius: 48, 
        backgroundColor: color.Med3,
    }
})

export default Complete;