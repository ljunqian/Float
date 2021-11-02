import React, { useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import typo from '../../../styles/typography';

import MedBG1 from '../../../assets/images/meditate-planet1.png';
import SleepBG from '../../../assets/images/sleep-planet.png';
import MoveBG from '../../../assets/images/move-planet.png';
import FocusBG from '../../../assets/images/focus-planet.png';
import YoutubePlayer from 'react-native-youtube-iframe';

import { updateDone } from '../Redux/GuidesAction';
import { useDispatch } from 'react-redux';

import { API, Auth, graphqlOperation } from 'aws-amplify'

import { updateUser } from "../../../graphql/mutations"
import { getUser } from "../../../graphql/queries"

const Activity = ({ navigation, route }) => {

    const detail = route.params;       // get object passed from previous activity const 

    // Adjust layout based on title length
    let isLong = false;
    if (detail.title.length > 20)
        isLong = true;

    return (

        <View style={styles.container}>
            <ImageBackground source={backgrounds[detail.type]} resizeMode="cover" style={{ width: '100%', height: '100%' }} >
                <View style={styles.actComponent}>

                    <View style={styles.title}>
                        <Text style={[typo.H4, { color: 'white', fontWeight: '400', textAlign: 'center', fontSize: isLong ? 30 : 32 }]}>
                            {detail.title}
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <VideoComponent navigation={navigation} array={detail} />
                        {/* <Text style={[typo.H2, {marginTop: 10, color: 'white', fontWeight: '400'}]}>
                        13:42
                    </Text> */}
                    </View>
                    <View style={{ flex: 5, backgroundColor: 'white' }}>
                        {/* This is the bottom space  */}
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

/* async function handleDuration(time, type) {
    try {
        const user = await Auth.currentAuthenticatedUser();
        const { data } = await API.graphql(graphqlOperation(getUser, { id: user.attributes.sub }));
        console.log(data)
        data.getUser[type + "D"] = data.getUser[type + "D"] + time;
        delete data.getUser._deleted;
        delete data.getUser._lastChangedAt
        delete data.getUser.createdAt;
        delete data.getUser.updatedAt;
        const Userupdate = await API.graphql(graphqlOperation(updateUser, { input: data.getUser }));
        console.log(Userupdate)
    } catch (error) {
        console.log(error);
    }
} */

const VideoComponent = ({ array, navigation }) => {

    const dispatch = useDispatch();
    const playerRef = useRef();
    const detail = array;
    const getTime = function () {
        playerRef.current?.getCurrentTime().then(
            // currentTime => handleDuration(parseInt(currentTime), detail.type)
            currentTime => console.log({ currentTime })
        )
        playerRef.current?.getDuration().then(
            getDuration => console.log({ getDuration })
        )
    }

    return (
        <View>
            <SafeAreaView>
                <YoutubePlayer
                    ref={playerRef}
                    height={231}
                    width={410}
                    play={false}
                    videoId={detail.source} 
                    onChangeState={event => {
                        if (event === 'ended') {
                            // auto navigate upon completion
                            detail.done = true
                            dispatch(updateDone({guide: detail})) //update done property
                            console.log(detail)
                            getTime()
                            navigation.navigate('GuideComplete', detail)

                        } else if (event === 'playing')
                            console.log("Video playing. To skip, end the video")
                    }}
                    onError={err => { console.log(err) }}
                />
            </SafeAreaView>
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


const styles = StyleSheet.create({

    container: {
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
    btnContainer: {
        display: 'flex',
        height: 100,
        width: 412,
        alignItems: 'center',
        backgroundColor: '#272727',
    },
    button: {
        height: 48,
        width: 240,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 48,
        backgroundColor: '#272727'
    },
    title: {
        flex: 2,
        marginVertical: 110,
        marginHorizontal: 10,
        justifyContent: 'flex-end'
    }
})

export default Activity;