import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import typo from '../../../styles/typography';
import { Guides } from './constants';
import layout from '../../../styles/componentLayout';
import { color } from '../../../styles/theme';
import heart from '../../../assets/icons/heart.png';
import clock from '../../../assets/icons/clock.png';
import Med from '../../../assets/images/med-1.png';


const GuideDetail = ({ navigation, props, route }) => {
    {
        /*TODO:
        1. Import heart (white) icon and replace loveyellow icon
        2. Import clock icon and replace play icon
        */
    }

    const source = route.params.text;

    return (
        <View style={{display: 'flex'}}> 
            {/*IMAGE DIV*/}
            <View style={styles.imgContainer}>
                <Image source={Med} style={{position: 'absolute', zIndex: 0, left: 0, width:412, height:252 }} />
            </View>

            {/*CONTENT DIV*/}
            <View style={styles.cntContainer}>
                {/*Todo: #2*/}
                <View style={{flexDirection: 'row'}}>
                    <Text style={[typo.H4, {color: 'white'}]}>
                        Title of the activity
                    </Text>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={heart} style={{ top: 10, left: 40, zIndex: 0, position: 'absolute'}} />
                    </View>
                </View>
                <View style={{ marginBottom: 20, flexDirection: 'row'}}>
                    <Text style={[typo.T3, {color: 'white', marginTop: 3}]}>
                        Meditation
                    </Text>
                    <Image source={clock} style={{ top: 3, left: 80, zIndex: 0, position: 'absolute'}} />
                    <Text style={[typo.T3, {color: 'white', marginLeft: 35, marginTop: 3}]}>1 min</Text>
                </View>
                <Text style={[typo.T3, {color: 'white'}]}>                   
                    { source
                    /* {Guides[0].description */
                    /*Guides.map(({description})=>
                        {
                            console.log(description);
                            return (Guides[0].description)
                        }
                    )*/
                    }
                </Text>
            </View>

            {/*BUTTON DIV*/}
            <TouchableOpacity style={styles.btnContainer}>
                {/*Todo: #1*/}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Meditate GuideActivity')}>
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