import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import typo from '../../../styles/typography';
import { Guides } from './constants';
import layout from '../../../styles/componentLayout';
import { color } from '../../../styles/theme';
import heart from '../../../assets/icons/heart.png';
import redheart from '../../../assets/icons/redheart.png';
import clock from '../../../assets/icons/clock.png';
import Med from '../../../assets/images/med-1.png';
import { addRecent, addFavourite, deleteFavourite } from '../Redux/GuidesAction';
import { useSelector, useDispatch } from 'react-redux';

const types = {
    meditate: 'Meditate',
    sleep: 'Sleep',
    move: 'Move',
    focus: 'Focus'
}

const buttoncolour = {
    meditate: color.Med1,
    sleep: color.Sleep2,
    move: color.Move1,
    focus: color.Focus1
}

const FavComponent = ({ isFav }) => {
    let icon = isFav? redheart : heart;
 
    return(
        <View style={{flex: 1}}>
            <Image source={icon} style={{width: 27, height: 27,  top: 10, left:0, zIndex: 0}} />
        </View>
    )
}

const GuideDetail = ({ navigation, props, route }) => {

    const detail = route.params;       // get object passed from previous activity
    const {favourites} = useSelector((state) => state.guide);
    const [isFavourite, setFav] = useState(favourites.some((guide)=>guide.title == detail.title));
    const dispatch = useDispatch(); 

    useEffect(()=>{
        console.log('in detail', detail)
        dispatch(addRecent({guide: detail}));
    }, [detail]);

    return (
        <View style={{display: 'flex'}}> 
            {/*IMAGE DIV*/}
            <View style={styles.imgContainer}>
                <Image source={detail.thumbnail} style={{position: 'absolute', zIndex: 0, top: -7, left: -8, width:427, height:260 }} />
            </View>

            {/*CONTENT DIV*/}
            <View style={styles.cntContainer}>
                {/* Title */}
                <View style={{flexDirection: 'row', display: 'flex', justifyContent:'space-between'}}>
                    <Text style={[typo.H4, {color: 'white', flex: 10}]}>
                        {/* Title of the activity */}
                        { detail.title }
                    </Text>
                    <TouchableOpacity onPress={ () => {
                        if (isFavourite == true){
                            setFav(false);
                            dispatch(deleteFavourite({title: detail}));
                        } else {
                            setFav(true);
                            dispatch(addFavourite({guide: detail}));
                        }
                        // console.log(favourites);
                    } }>
                        <FavComponent isFav = {isFavourite} />                       
                    </TouchableOpacity>
                </View>
                {/* Type/Duration */}
                <View style={{ marginBottom: 20, flexDirection: 'row'}}>
                    <Text style={[typo.T3, {color: 'white', marginTop: 3}]}>
                        { types[detail.type]
                         }
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
                <TouchableOpacity style={[styles.button, {backgroundColor: buttoncolour[detail.type] }]} onPress={() => navigation.navigate('GuideActivity', detail)}>
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
        
    }
})

export default GuideDetail;