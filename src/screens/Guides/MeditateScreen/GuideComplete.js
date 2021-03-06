import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Animated } from 'react-native';
import typo from '../../../styles/typography';
import MedBG1 from '../../../assets/images/meditate-planet1.png';
import SleepBG from '../../../assets/images/sleep-planet.png';
import MoveBG from '../../../assets/images/move-planet.png';
import FocusBG from '../../../assets/images/focus-planet.png';

import coins from '../../../assets/icons/coins.png';
import { color } from '../../../styles/theme';
import avatarsmall from '../../../assets/images/avatarsmall.png';
import redheart from '../../../assets/icons/redheart.png';
import heart from '../../../assets/icons/heart.png';

import { addFavourite, deleteFavourite } from '../Redux/GuidesAction';
import { useSelector, useDispatch } from 'react-redux';

const ActDetailComponent = ({ detail }) => {
    return(
        <View style={styles.title}>
            <Text style={[typo.H2,{color: 'white', fontWeight:'400', textAlign: 'center'}]}>
                {detail.title}
            </Text>
            <Text style={[typo.T1,{ color: 'white', fontWeight:'400'}]}>
                {detail.duration} mins
            </Text>
        </View>
    )
}

const ExpCoinsComponent = ({ styles, isTotal }) => {
    const userCoins = useSelector((state) => state.user.userData.coins);
    return(
        <View style={[styles, {alignItems: 'center'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[typo.H2,{ color: 'white', fontWeight:'400'}]}>
                    {isTotal? userCoins+10 :'+ 10'} 
                </Text>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={coins} style={{left: 5, zIndex: 0}} />
                </View>
            </View>
            
            <Text style={[typo.H2,{color: 'white', fontWeight:'400'}]}>
                {isTotal?'250 EXP':'+ 150 exp'}
            </Text>
        </View>
    )
}

const MidComponent = ({style, navigation, detail}) => {
    
    const [isCombined, setIsCombined] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const fadeAnim2 = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        let isMounted = true; 
        if(isMounted) {Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }
            ).start()};
        return () => { isMounted = false };        
    }, [fadeAnim])   

    useEffect(() => {
        let isMounted = true;
        if(isMounted) {setTimeout(() => {
            setIsCombined(true);
            Animated.timing(
            fadeAnim2,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }
            ).start();
        }, 2000)}  
    }, [fadeAnim2]) 

    if(isCombined == false){
        return(
            // end screen 1
            <Animated.View style={[styles.actComponent, style, {opacity: fadeAnim}]}>
                <ExpCoinsComponent styles={{flex: 1}} isTotal={false} />
                <View style={{flex: 2}}></View>
            </Animated.View>
        )
    }
    return(
        // end screen 2
        <Animated.View style={[styles.actComponent, style, {opacity: fadeAnim2}]}>
            <ExpCoinsComponent styles={{flex: 1}} isTotal={true} />
                
            <View style={{flex: 1, marginTop: 20}}>
                <Image source={avatarsmall} />
            </View>            

            <View style={{flex: 3, marginTop: 55}}>
                <TouchableOpacity style={[styles.button, {backgroundColor: buttoncolour[detail.type] }]} onPress={() => navigation.popToTop()}>
                    <Text style={[typo.H3, {color: 'white'}]}>Done</Text> 
                </TouchableOpacity>    
            </View>
        </Animated.View>
    )
}

const Complete = ({ navigation, route }) => {
    const detail = route.params;
    const {favourites} = useSelector((state) => state.guide);
    const [isFavourite, setFav] = useState(favourites.some((guide)=>guide.title == detail.title));
    const dispatch = useDispatch();

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
                
                <MidComponent style={{flex: 6, marginTop: 70, alignItems: 'center'}} navigation={navigation} detail={detail}/>

                <View style={{flex: 4, marginTop: 50, alignItems: 'center'}}>
                    <TouchableOpacity onPress={ () => {
                        if (isFavourite == true){
                            setFav(false);
                            dispatch(deleteFavourite({title: detail}));
                        } else {
                            setFav(true);
                            dispatch(addFavourite({guide: detail}));
                        }
                        console.log(favourites);
                    } }>
                        <FavComponent isFav = {isFavourite} />                       
                    </TouchableOpacity>
                </View>
              
            </View>

        </ImageBackground>

        </View>
      
        
    )
}

const FavComponent = ({ isFav }) => {
    let icon = heart;
    let text = 'Add to favourites'
    if(isFav){
        icon = redheart;
        text = 'Added to favourites!';
    }
 
    return(
        <View style={{alignItems: 'center'}}>
            <Text style={[typo.H2, {color: 'white'}]}>
                {text}
            </Text>
            <Image source={icon} style ={{marginTop: 14}} />
        </View>
    )
}

const types = {
    meditate: 'Meditate',
    sleep: 'Sleep',
    move: 'Move',
    focus: 'Focus'
}

const backgrounds = {
    meditate: MedBG1,
    sleep: SleepBG,
    move: MoveBG,
    focus: FocusBG
}

const buttoncolour = {
    meditate: color.Med1,
    sleep: color.Sleep2,
    move: color.Move1,
    focus: color.Focus1
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
    },
    title: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    food: {
        width: 80,
        height: 80,
        borderRadius: 40,
        // flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    }
})

export default Complete;