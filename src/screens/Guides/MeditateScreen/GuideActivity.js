import React, {useRef} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import typo from '../../../styles/typography';
import { layout, style } from 'styled-system';
import MedBG from '../../../assets/images/meditate-planet.png';
import MedBG1 from '../../../assets/images/meditate-planet1.png';
import SleepBG from '../../../assets/images/sleep-planet.png';
import MoveBG from '../../../assets/images/move-planet.png';
import FocusBG from '../../../assets/images/focus-planet.png';
import Bigplay from '../../../assets/icons/bigplay.png';
import { Guides } from './constants';
import { color } from '../../../styles/theme';
import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe';


const Activity = ({ navigation, route }) => {

    const detail = route.params;       // get object passed from previous activity const 


    return  (
        
        <View style={styles.container}> 
        <ImageBackground source={backgrounds[detail.type]}  resizeMode= "cover" style={{width : '100%', height: '100%'}} >
            <View style={styles.actComponent}>
            
                <View style={{flex: 1, marginTop: 150, marginBottom: 120}}>
                    <Text style={[typo.H4,{color: 'white', fontWeight: '400'}]}>
                        {/* Session Name */}
                        { detail.title }
                    </Text>
                </View>
                
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                       
                    <VideoComponent navigation={navigation} array={detail}/>
                    
                    <Text style={[typo.H2, {marginTop: 10, color: 'white', fontWeight: '400'}]}>
                        13:42
                    </Text>
                </View>
            
                <View style={{flex: 3, backgroundColor:'white'}}> 
                    {/* <Text>This is the bottom space </Text> */}
                </View>
                
                
                
            </View>
             </ImageBackground>
        </View>
      
        
    )
}

const VideoComponent = ({ array, navigation }) => {

    const playerRef = useRef();
    const detail = array;

    return(
        <View>
            <SafeAreaView>
                <YoutubePlayer 
                    ref={playerRef}
                    height={250}
                    width={400}
                    play={false}
                    videoId={'inpok4MKVLM'} // videoId to be loaded from `detail` received
                />
            </SafeAreaView>
            
            <TouchableOpacity style={{backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}} 
                onPress={() => {
                    playerRef.current?.getCurrentTime().then(
                        currentTime => console.log({currentTime})
                    )
                    playerRef.current?.getDuration().then(
                        getDuration => console.log({getDuration})
                    )
                    navigation.navigate('GuideComplete', detail)
                    }}
                    >
                <Image source={Bigplay} />
                
            </TouchableOpacity>
        </View>
        
    )
}

const backgrounds = {
    Meditate: MedBG1,
    Sleep: SleepBG,
    Move: MoveBG,
    Focus: FocusBG 
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