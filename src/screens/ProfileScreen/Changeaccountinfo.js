import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, Image, TextInput } from 'react-native';
import Nav from './Nav';

import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter';
import { User } from "../../../src/models";
import { borderWidth } from 'styled-system';

DataStore.configure({
    storageAdapter: SQLiteAdapter
});


const AccountSettings = ({ navigation }) => {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        coins: '',
        meditateD: '',
        sleepD: '',
        moveD: '',
        friends: []
    });
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const getUserInfo = async () => {
        try {
            const { attributes } = await Auth.currentAuthenticatedUser();
            const post = await DataStore.query(User, attributes.sub);
            setInfo({
                name: post.name,
                email: post.email,
                coins: post.coins,
                meditateD: post.meditateD,
                sleepD: post.sleepD,
                moveD: post.moveD,
                focusD: post.focusD,
                friends: post.friends
            });
        } catch (error) {
            console.log("Error saving post", error);
        }
    }

    const updateuserattributes = async () => {
        if (username != '' && email != '') {
            let user = await Auth.currentAuthenticatedUser();
            console.log("hello");
            let result = await Auth.updateUserAttributes(user, {
                'email': email
            });
            console.log(result); // SUCCESS
        }
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <View>
            <TextInput placeholder={info.name} onChangeText={text => setUsername(text)}></TextInput>
            <TextInput placeholder={info.email} onChangeText={text => setEmail(text)}></TextInput>
            <Button
                onPress={() => { updateuserattributes() }}
                title="Update"
                style={style.buttonStyle}
            />
        </View>
    )
}
const style = StyleSheet.create({
    inputtext: {
        fontSize: 24,
        color: "#fff000",
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1
    },
    buttonStyle: {
        height: '40px'
    }
})


export default AccountSettings;