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

    // Adjust layout based on title length
    let isLong = false;
    if(detail.title.length > 20)
        isLong = true;
        
    return  (
        
        <View style={styles.container}> 
        <ImageBackground source={backgrounds[detail.type]}  resizeMode= "cover" style={{width : '100%', height: '100%'}} >
            <View style={styles.actComponent}>
            
                <View style={styles.title}>
                    <Text style={[typo.H4,{color: 'white', fontWeight: '400', textAlign: 'center', fontSize: isLong? 30 : 32}]}>
                        { detail.title }
                    </Text>
                </View>
                
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                       
                    <VideoComponent navigation={navigation} array={detail}/>
                    
                    {/* <Text style={[typo.H2, {marginTop: 10, color: 'white', fontWeight: '400'}]}>
                        13:42
                    </Text> */}
                </View>
            
                <View style={{flex: 5, backgroundColor:'white'}}> 
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
    const getTime = function(){
        playerRef.current?.getCurrentTime().then(
            currentTime => console.log({currentTime})
        )
        playerRef.current?.getDuration().then(
            getDuration => console.log({getDuration})
        )
    }
    
    return(
        <View>
            <SafeAreaView>
                <YoutubePlayer 
                    ref={playerRef}
                    height={231}
                    width={410}
                    play={false}
                    videoId={detail.source} // videoId to be loaded from `detail` received
                    onChangeState={ event => {
                        if(event === 'ended'){
                            // auto navigate upon completion
                            detail.done = true
                            console.log(detail)
                            getTime()
                            navigation.navigate('GuideComplete', detail)
                        }else if(event === 'playing')
                            console.log("Video playing. To skip, end the video")
                    }}
                    onError={err => {console.log(err)}}
                />
            </SafeAreaView>
            
            {/* <TouchableOpacity style={{backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}} 
                onPress={() => {
                    getTime()
                    navigation.navigate('GuideComplete', detail)
                    }}
                    >
                <Image source={Bigplay} />
                
            </TouchableOpacity> */}
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
    },
    title : {
        flex: 2, 
        marginVertical: 110, 
        marginHorizontal: 10,
        justifyContent: 'flex-end'
    }
})

export default Activity;