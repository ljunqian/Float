import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import typo from '../../../styles/typography';
import { layout, style } from 'styled-system';
import MedBG from '../../../assets/images/meditate-planet.png';
import Bigplay from '../../../assets/icons/bigplay.png';
import { Guides } from './constants';
import { color } from '../../../styles/theme';

const Activity = ({navigation, route}) => {

    const detail = route.params;       // get object passed from previous activity 

    return  (
        
        <View style={styles.container}> 
        <ImageBackground source={MedBG}  resizeMode= "cover" style={{width : '100%', height: '100%'}} >
            <View style={styles.actComponent}>
            
                <View style={{flex: 1, marginTop: 150}}>
                    <Text style={[typo.H4,{color: 'white', fontWeight: '400'}]}>
                        {/* Session Name */}
                        { detail.title }
                    </Text>
                </View>
                
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'} } onPress={() => navigation.navigate('Meditate GuideComplete', detail)} >
                        <Image source={Bigplay} />
                    </TouchableOpacity>
                    <Text style={[typo.H2, {marginTop: 10, color: 'white', fontWeight: '400'}]}>
                        13:42
                    </Text>
                </View>
            
                <View style={{flex: 1, backgroundColor:'white'}}> 
                    {/* <Text>This is the bottom space </Text> */}
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
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#272727'
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
        width: 240,
        alignItems: 'center',   
        justifyContent: 'center',
        borderRadius: 48, 
        backgroundColor : '#272727' 
    }
})

export default Activity;