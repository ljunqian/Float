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
        email: '',
        phone: '',
        gender: '',
        date: ''
    });


    const getUserInfo = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setInfo({
                email: user.attributes.email,
                phone: user.attributes["custom:phone"],
                gender: user.attributes["custom:gender"],
                date: user.attributes["custom:birthday"]
            });
        } catch (error) {
            console.log("Error saving post", error);
        }
    }

    async function handleupdate() {
        try {
            let user = await Auth.currentAuthenticatedUser();

            let result = await Auth.updateUserAttributes(user, {
                'email': email,
                'custom:birthday': date,
                'custom:gender': gender,
                'custom:phone': phone
            });
            console.log(result); // SUCCESS
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <View>
            <TextInput
                onChangeText={setInfo({})}
                value={info.email}
                keyboardType="email-address"
            />
            <TextInput
                onChangeText={setInfo({})}
                value={info.phone}
                keyboardType="phone-pad"
            />
            <TextInput
                onChangeText={setInfo({})}
                value={info.gender}

                keyboardType="default"
            />
            <TextInput
                onChangeText={setInfo({})}
                value={info.date}
                keyboardType="default"
            />
            <TextInput value={info.name} onChangeText={text => setInfo(text)}></TextInput>
            <TextInput value={info.email} onChangeText={text => setInfo(text)}></TextInput>
            <TextInput value={info.phone} onChangeText={text => setInfo(text)}></TextInput>
            <TextInput value={info.gender} onChangeText={text => setInfo(text)}></TextInput>
            <TextInput value={info.date} onChangeText={text => setInfo(text)}></TextInput>
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