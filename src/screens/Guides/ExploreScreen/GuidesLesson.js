import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import typo from '../../../styles/typography';
import theme, {color} from '../../../styles/theme';
import { Icon } from 'react-native-elements';

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

const GuideImage = () => {
    return(
        <ImageBackground source={Meditate1} style={{height: 200, backgroundColor: 'yellow', }}>
        
        </ImageBackground >
    )
}

const GuideLessons = () => {
    
    const MyRadioButton = ({isDone}) =>{
        return(isDone?
        <View style={style.MyRadioButton}>
        <Image source={Tick} />
        </View>
        :
        <Icon name="radio-button-unchecked" size={30} color="white"/>)
    }

    const CardComponent = ({img, type, duration}) => {
        
        const [isDone, setIsDone] = useState(false);

        return (
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: 15}}>
            <MyRadioButton isDone={isDone}/>
            <TouchableOpacity onPress={()=>{setIsDone(!isDone)}}>
                <View style={style.card}>
                    <View>
                        <Text style={typo.H2}>Title of Session</Text>
                        <View style={{flexDirection: 'row', left: 15, top: 5}}>
                            <Image source={Video} right={5}/>
                            <Text style={[typo.T6, {color: colours[type]}]}>{type} Activity</Text>
                        </View>
                        <View style={{flexDirection: 'row', left: 16, top: 12}}>
                            <Image source={Time} right={5}/>
                            <Text style={typo.T6}>{duration}</Text>
                        </View>
                    </View>
                    <Image source={img} style={{backgroundColor: '#EEEEEE', width: 70, height: 70}} />
                </View>
            </TouchableOpacity>
        </View>
        )
    }

    const LineBG = ({ src, top, left }) => {
      return <Image source={src} style={{position: 'absolute', top: top, left: left}}/>
    }

    return(
        <View style={{height: 800, backgroundColor: '#272727'}}>
            <View style={{marginHorizontal: 15}}>
           
                <CardComponent img={Explore1} type={"Meditate"} duration={'3-5 mins'}/>
                    <LineBG src={Line32} top={'9.25%'} left={'7.5%'}/>
                <CardComponent img={Explore3} type={"Move"} duration={'40-45 mins'}/>
                    <LineBG src={Line32} top={'23.25%'} left={'7.5%'}/>
                <CardComponent img={Explore2} type={"Focus"} duration={'15-20 mins'}/>

                <CardComponent img={Explore1} type={"Meditate"} duration={'10-15 mins'}/>
                    <LineBG src={Line32} top={'51.5%'} left={'7.5%'}/>
                <CardComponent img={Explore2} type={"Focus"} duration={'35-40 mins'}/>

                <CardComponent img={Explore4} type={"Sleep"} duration={'3-7 mins'}/>
                    <LineBG src={Line32} top={'80.25%'} left={'7.5%'}/>
                <CardComponent img={Explore4} type={"Sleep"} duration={'1-3 mins'}/>
            </View>
        </View>
    )
}

const GuideLesson = ({navigation}) => {
    return(
        <ScrollView contentContainerStyle={[{backgroundColor: '#272727'}]}>
            <GuideImage />
            <GuideLessons style={style.container}/>
        </ScrollView>
    )
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
        height: 90,
        width: '85%',
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