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
        phone: '',
        gender: '',
        date: ''
    });


    const getUserInfo = async () => {
        try {
            const { attributes } = await Auth.currentAuthenticatedUser();
            console.log(attributes);
            setInfo({
                name: attributes.name,
                email: attributes.email,
                phone: attributes.email,
                gender: attributes.email,
                date: attributes.email
            });
        } catch (error) {
            console.log("Error saving post", error);
        }
    }

    async function handleupdate() {
        try {
            let user = await Auth.currentAuthenticatedUser();
            console.log(user);

 // SUCCESS
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            <TextInput placeholder={info.name} onChangeText={text => setUsername(text)}></TextInput>
            <TextInput placeholder={info.email} onChangeText={text => setEmail(text)}></TextInput>
            <TextInput placeholder={info.email} onChangeText={text => setEmail(text)}></TextInput>
            <TextInput placeholder={info.email} onChangeText={text => setEmail(text)}></TextInput>
            <TextInput placeholder={info.email} onChangeText={text => setEmail(text)}></TextInput>
            <Button
                onPress={() => { handleupdate() }}
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