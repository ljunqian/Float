import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import typo from '../../../styles/typography';
import { style } from 'styled-system';
import MedBG from '../../../assets/images/meditate-planet.png';
import MedBG1 from '../../../assets/images/meditate-planet1.png';
import coins from '../../../assets/icons/coins.png';
import { color } from '../../../styles/theme';
import avatarsmall from '../../../assets/images/avatarsmall.png';
import redheart from '../../../assets/icons/redheart.png';
import { Guides } from './constants';

const Complete = ({navigation}) => {
    return  (

        <View style={styles.container}> 
        <ImageBackground source={MedBG1}  resizeMode="cover" style={{width : '100%', height: '100%'}} >
            <View style={[styles.actComponent, {justifyContent: 'center', alignItems: 'center'}]}>
            
                <View style={{flex: 2, marginTop: 60, alignItems: 'center'}}>
                   <Text style={[typo.H2,{color: 'white', fontWeight:'400'}]}>
                    Title of the activity 
                   </Text>
                   <Text style={[typo.T1,{ color: 'white', fontWeight:'400'}]}>
                    1 min 
                   </Text>
                   <View style={{marginTop: 20, alignItems: 'center'}}>
                    <Text style={[typo.H0,{ color: 'white', fontWeight:'400'}]}>
                    Complete! 
                   </Text>
                   </View>
                </View>


                <View  style={{flex: 1, marginTop: 70}}>
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