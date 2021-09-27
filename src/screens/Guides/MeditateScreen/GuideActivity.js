import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import typo from '../../../styles/typography';
import { style } from 'styled-system';
import MedBG from '../../../assets/images/meditate-planet.png';
import Bigplay from '../../../assets/icons/bigplay.png';
import { Guides } from './constants';

const Activity = ({navigate}) => {
    return  (
        
       
        <View style={styles.container}> 
        <ImageBackground source={MedBG}  resizeMode="cover" style={{width : '100%', height: '100%'}} >
            <View style={styles.actComponent, {justifyContent: 'center', alignItems: 'center'}}>
            
                <View>
                <Text style={[typo.H4,{top: 150, color: 'white', fontWeight:'400'}]}>
                    Session Name
                </Text>
                </View>
            
                <TouchableOpacity >
                <Image source={Bigplay} style={{top: 240 }} />
                <Text style={[typo.H2, {top: 280, color: 'white', fontWeight: '400', marginLeft: 18 }]}>
                  13:42
                </Text>
                </TouchableOpacity>
            </View>
             </ImageBackground>
        </View>
      
        
    )
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
        backgroundColor: '#272727'
    }
})

export default Activity;