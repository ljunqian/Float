import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import typo from '../../../styles/typography';
import theme, {color} from '../../../styles/theme';
import { Icon } from 'react-native-elements';
import {lessons, icons} from './constants';

import Time from '../../../assets/icons/time.png';
import Video from '../../../assets/icons/video.png';
import Tick from '../../../assets/icons/tick.png';
import Line32 from '../../../assets/images/Line32.png';
import Explore1 from '../../../assets/images/explore1.png';
import Explore2 from '../../../assets/images/explore2.png';
import Explore3 from '../../../assets/images/explore3.png';
import Explore4 from '../../../assets/images/explore4.png';
import Meditate1 from '../../../assets/images/med-1.png';
import Sleep1 from '../../../assets/images/sleep1.png';
import Move1 from '../../../assets/images/mov-1.png';
import Focus1 from '../../../assets/images/focus-1.png';

const GuideImage = ({type}) => {
    return(
        <ImageBackground source={image[type]} style={{width: 415, height: 200,}}>
            <View style={{flex: 1, justifyContent: 'flex-end', margin: 20}}>
                <Text style={[typo.H4, {color: 'white'}]}>
                    {title[type]}
                </Text>
            </View>
        </ImageBackground >
    )
}

const GuideLessons = ({type, navigation}) => {

    const MyRadioButton = ({isDone}) =>{
        return(isDone?
        <View style={style.MyRadioButton}>
        <Image source={icons[type].tick} />
        </View>
        :
        <Icon name="radio-button-unchecked" size={30} color="white"/>)
    }

    const CardComponent = ({img, duration, title, description}) => {
        
        const [isDone, setIsDone] = useState(false);

        return (
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, right: 10}}>
            <MyRadioButton isDone={isDone} />
            <TouchableOpacity onPress={()=>{setIsDone(!isDone)}}>
                <View style={style.card}>
                    <View style={{width: 225, justifyContent: 'center', bottom: 5}}>
                        <Text style={typo.H3}>{title}</Text>
                        <View style={{justifyContent: 'flex-end'}}>
                            <View style={{flexDirection: 'row', left: 15, top: 5}}>
                                <Image source={icons[type].video} right={5}/>
                                <Text style={[typo.T6, {color: colours[type]}]}>{description}</Text>
                            </View>
                            <View style={{flexDirection: 'row', left: 16, top: 12}}>
                                <Image source={icons[type].time} right={5}/>
                                <Text style={[typo.T6, {color: colours[type]}]}>{duration}</Text>
                            </View>
                        </View>
                        
                    </View>
                    <Image source={img} style={{width: 70, height: 70, borderRadius: 13, right: 5}} top={5} />
                </View>
            </TouchableOpacity>
        </View>
        )
    }
    
    const LineBG = ({ src, top, left }) => {
      return <Image source={src} style={{position: 'absolute', top: top, left: left}}/>
    }

    const DCardComponent = () => {

        return(
            lessons[type].map(item =>{
                return(
                    <>
                    <CardComponent key={item.id} title={item.title} img={item.thumbnail} duration={item.duration} description={item.description}/>
                    <LineBG src={Line32} top={item.line} left={'6%'}/>
                    </>
                )
            })
        )
    }

    return(
        <View style={{marginVertical: 10, backgroundColor: '#272727', height: height[type]}}>
            <View style={{marginHorizontal: 15}}>
                <DCardComponent />
            </View>
        </View>
    )
}

const GuideLesson = ({navigation, route}) => {
    
    const type = route.params;
    console.log(type);

    return(
        <ScrollView contentContainerStyle={[{backgroundColor: '#272727'}]}>
            <GuideImage type={type}/>
            <GuideLessons style={style.container} type={type} navigation={navigation}/>
        </ScrollView>
    )
}

const height = {
    "Meditate": 600,
    "Move": 480,
    "Focus": 600,
    "Sleep": 440,
}

const image = {
    "Meditate": Meditate1,
    "Move": Move1,
    "Focus": Focus1,
    "Sleep": Sleep1,
}

const title = {
    "Meditate": "Meditation Lesson",
    "Move": "Move Lesson",
    "Focus": "Focus Lesson",
    "Sleep": "Sleep Lesson",
}

const colours = {
    "Meditate": color.Med1,
    "Move": color.Move1,
    "Focus": color.Focus3,
    "Sleep": color.Sleep2,
}

const style=StyleSheet.create({
    header: {
        marginTop: 10,
        color: 'white'
    },
    container: {
        padding: 15,
        backgroundColor: 'white',
        paddingBottom: 40
    },
    card: {
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: 'white',
        height: 100,
        width: 320,
        borderRadius: 20,
        margin: 10,
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    MyRadioButton: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: 'white',
        left: -2,
        marginLeft: 4
    }   
})

export default GuideLesson;