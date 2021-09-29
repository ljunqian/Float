import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import typo from '../../../styles/typography';
import { style } from 'styled-system';
import MedBG from '../../../assets/images/meditate-planet.png';
import MedBG1 from '../../../assets/images/meditate-planet1.png';
import coins from '../../../assets/icons/coins.png';
import avatar from '../../../assets/images/avatar.png';
import { Guides } from './constants';

const Complete = ({navigation}) => {
    return  (

        <View style={styles.container}> 
            <ImageBackground source={MedBG1}  resizeMode="cover" style={{width : '100%', height: '100%'}} >
                <View style={styles.actComponent, {justifyContent: 'center', alignItems: 'center'}}>
                
                    <View>
                    <Text style={[typo.H2,{top: 75, color: 'white', fontWeight:'400', marginLeft: 15}]}>
                        Title of the activity 
                    </Text>
                    <Text style={[typo.T1,{top: 85, color: 'white', fontWeight:'400', marginLeft: 95}]}>
                        1 min 
                    </Text>
                    <Text style={[typo.H0,{top: 100, color: 'white', fontWeight:'400'}]}>
                        Complete! 
                    </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={[typo.H2,{top: 130, left: 22 , color: 'white', fontWeight:'400'}]}>
                        4510 
                    </Text>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={coins} style={{ top: 131, left: 27, zIndex: 0, position: 'absolute'}} />
                    </View>

                    <Text style={[typo.H2,{top: 165, right: 22 , color: 'white', fontWeight:'400'}]}>
                        250 EXP
                    </Text>

                </View>
                
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

export default Complete;