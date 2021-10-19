import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, Image, TextInputField, TouchableOpacity } from 'react-native';
import { Context } from '../Authenticate/store';
import { Auth } from 'aws-amplify';
import { color } from '../../styles/theme';
import { Input, NativeBaseProvider } from "native-base"

const confirmpass = ({ navigation, route }) => {
    const username = route.params;
    const [state, dispatch] = React.useContext(Context);
    const [newpassword, setNewPassword] = useState('');
    const [confirmcode, setConfirmCode] = useState('');
    const [errorstate, seterrorState] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');

    async function handlesubmit() {
        Auth.forgotPasswordSubmit(username, confirmcode, newpassword)
            .then(data => {
                console.log(data);
                navigation.navigate('Login');
            })
            .catch(err => {
                console.log(err.toString())
                seterrorState(true);
                seterrorMessage(err.toString());
            });
    }

    useEffect(() => {
        console.log('context', state);
    }, [])

    return (
        <NativeBaseProvider>
            <View style={{ backgroundColor: color.bg, minHeight: '100%' }}>
                <View style={{ marginLeft: 50 }}>
                    {errorstate && (<Text style={style.errorText}>{errorMessage}</Text>)}
                    <Input
                        style={{ width: 331, height: 40 }}
                        value={newpassword}
                        onChangeText={setNewPassword}
                        variant="underlined"
                        placeholder="New Password"
                        type="password"
                        color='white'
                    />
                    <Input
                        style={{ width: 331, height: 40 }}
                        value={confirmcode}
                        onChangeText={setConfirmCode}
                        variant="underlined"
                        placeholder="Confirmation code"
                        type="normal"
                        color='white'
                        keyboardType="numeric"
                        maxLength={6}
                    />
                    <TouchableOpacity onPress={() => { handlesubmit() }}>
                        <View style={{
                            marginTop: 10,
                            marginRight: 46,
                            height: 40,
                            backgroundColor: '#4263DD',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 35
                        }}>
                            <Text style={{ color: 'white' }}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </NativeBaseProvider>
    )
}

export default confirmpass;

const style = StyleSheet.create({
    buttonStyle: {
        color: 'green',
        height: '40px',
    },
    warnStyle: {
        height: '40px'
    },
    errorText: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: '500',
        color: 'red',
        fontFamily: 'Lato-Regular',
    },
})