import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GuideDetail = ({ navigation }) => {
    {
        /*TODO:
        1. Apply styles to Button Text (refer to meditate page)
        2. Create Text widget for 'Title', 'Duration', 'Description'
        3. Apply styles from 'typography' to respective texts       
            - import ../styles/typography.js
            - apply correct style based on wireframe
        */
    }
    return (
        <View style={{display: 'flex'}}> 
            {/*IMAGE DIV*/}
            <View style={styles.imgContainer}>
                <Text style={styles.imgContainer}>Guide Activity</Text>
            </View>

            {/*CONTENT DIV*/}
            <View style={styles.cntContainer}>
                {/*Todo: #2*/}
                <Text>res ipsa loquitur</Text>
            </View>

            {/*BUTTON DIV*/}
            <TouchableOpacity style={styles.btnContainer}>
                {/*Todo: #1*/}
                <Text style={styles.button}>Start</Text>  
            </TouchableOpacity>
            
        </View>
    )
}

{/*Read more: https://reactnative.dev/docs/flexbox#align-items */}
const styles = StyleSheet.create({
    imgContainer : {
        height : 240,
        width : 410,
        backgroundColor : '#EEEEEE',    
    },
    cntContainer : {
        height: 300,
        width: 410,
        paddingHorizontal: 20,
        backgroundColor : 'yellow',     // for testing purposes
    },
    btnContainer : {
        display: 'flex',
        height: 90,
        width: 410,
        alignItems: 'center',
        backgroundColor : 'orange',     // for testing purposes
    },
    button : {
        height: 48,
        width: 370,
        alignItems: 'center',   
        justifyContent: 'center',
        borderRadius: 48, 
        backgroundColor: '#4263DD'
    }
})

export default GuideDetail;