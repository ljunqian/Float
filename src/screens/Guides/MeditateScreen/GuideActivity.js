import React from 'react';
import { View, StyleSheet } from 'react-native';

const Activity = ({navigate}) => {
    return  (
        <View style={styles.container}>
            <View style={styles.actComponent}>
                <Text>
                    (this is the video)
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    actComponent: {
        backgroundColor: '#'
    }
})

export default Activity;