import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import typo from '../../../styles/typography';
import { color } from '../../../styles/theme';
import { style } from 'styled-system';
import layout from '../../../styles/componentLayout';
import { Guides } from './constants';

const GuideCardComponent = (props)  => {
    return (
      <TouchableOpacity style={[layout.guideCard, props.style, {overflow: 'hidden'}]} onPress={props.click}>
        <Image source={props.img} style={{position: 'absolute', zIndex: 0, top: -6, left: -5, width:props.width, height:props.height }}/>
        <Text style={[typo.T3, {marginBottom: 5}]}>
          {props.title}
        </Text>
        <MinuteView duration={props.dur}/>
      </TouchableOpacity>
    )
  }
const Recents = ({navigation}) => {
    return(
    <View style={styles.container}>
        {/* Search box */}
        <View style={{flex: 1} }>
            <Text style={[typo.H4, {color: 'white'}]}> 
                Recents 
            </Text>
        </View>

        {/* contents */}
        <View>
            <View style={{flex: 3, marginTop: 55}}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
                        <Text style={[typo.H3, {color: 'white'}]}>Search</Text> 
                    </TouchableOpacity>    
                </View>
        </View>
        <View>
            <GuideCardComponent style={{height: 130}} title={Guides.title} dur={Guides.duration} img={Guides.thumbnail} height={140} width={200} click={() => navigation.navigate('GuideDetail', one)}/>
        </View>

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

export default Recents;