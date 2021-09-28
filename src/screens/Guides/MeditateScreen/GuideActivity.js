import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Activity = ({navigate}) => {
    return  (
        <View style={styles.container}>
            <View style={styles.actComponent}>
                <Text style={{color: 'white'}}>
                    (this is the video)
                </Text>
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
        backgroundColor: '#272727'
    },
    actComponent: {
        backgroundColor: '#272727'
    }
})

export default Activity;