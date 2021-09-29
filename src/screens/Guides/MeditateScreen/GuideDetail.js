import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import typo from '../../../styles/typography';
import { Guides } from './constants';
import layout from '../../../styles/componentLayout';
import { color } from '../../../styles/theme';
import heart from '../../../assets/icons/heart.png';
import clock from '../../../assets/icons/clock.png';
import Med from '../../../assets/images/med-1.png';


const GuideDetail = ({ navigation, props, route }) => {

    const detail = route.params;       // get object passed from previous activity 

    return (
        <View style={{display: 'flex'}}> 
            {/*IMAGE DIV*/}
            <View style={styles.imgContainer}>
                <Image source={detail.thumbnail} style={{position: 'absolute', zIndex: 0, top: -7, left: -7, width:427, height:255 }} />
            </View>

            {/*CONTENT DIV*/}
            <View style={styles.cntContainer}>
                {/* Title */}
                <View style={{flexDirection: 'row'}}>
                    <Text style={[typo.H4, {color: 'white'}]}>
                        {/* Title of the activity */}
                        { detail.title }
                    </Text>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={heart} style={{ top: 10, left: 40, zIndex: 0, position: 'absolute'}} />
                    </View>
                </View>
                {/* Type/Duration */}
                <View style={{ marginBottom: 20, flexDirection: 'row'}}>
                    <Text style={[typo.T3, {color: 'white', marginTop: 3}]}>
                        { detail.type }
                    </Text>
                    <Image source={clock} style={{ top: 3, marginLeft: 10}} />
                    <Text style={[typo.T3, {color: 'white', marginLeft: 10, marginTop: 3}]}>
                        { detail.duration } min
                    </Text>
                </View>
                {/* Description */}
                <Text style={[typo.T3, {color: 'white'}]}>                   
                    { detail.description }
                </Text>
            </View>

            {/*BUTTON DIV*/}
            <TouchableOpacity style={styles.btnContainer}>
                {/* Begin */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Meditate GuideActivity', detail)}>
                    <Text style={[typo.H3, {color: 'white'}]}>Begin</Text> 
                </TouchableOpacity>    
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer : {
        height : 240,
        width : 412,
        backgroundColor : '#EEEEEE',    
    },
    cntContainer : {
        height: 330,
        width: 412,
        paddingHorizontal: 20,
        backgroundColor : '#272727',     
    },
    btnContainer : {
        display: 'flex',
        height: 100,
        width: 412,
        alignItems: 'center',
        backgroundColor : '#272727',     
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

export default GuideDetail;