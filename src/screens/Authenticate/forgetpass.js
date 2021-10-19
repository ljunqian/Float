import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, Image, TextInputField, TouchableOpacity } from 'react-native';
import { Context } from '../Authenticate/store';
import { Auth } from 'aws-amplify';
import { color } from '../../styles/theme';
import { Input, NativeBaseProvider } from "native-base"

const forgetPass = ({ navigation, route }) => {
    const [state, dispatch] = React.useContext(Context);
    const [username, setUsername] = useState('');
    const [errorstate, seterrorState] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');

    async function handleforget() {
        Auth.forgotPassword(username)
            .then(data => console.log(data))
            .catch(err => {
                console.log(err.toString())
                seterrorState(true);
                seterrorMessage(err.toString());
              });
        navigation.navigate('confirm password', username)
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
                        value={username}
                        onChangeText={setUsername}
                        variant="underlined"
                        placeholder="Username"
                        type="normal"
                        color='white'
                    />
                    <TouchableOpacity onPress={() => { handleforget() }}>
                        <View style={{
                            marginTop: 10,
                            marginRight: 46,
                            height: 40,
                            backgroundColor: '#4263DD',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 35
                        }}>
                            <Text style={{ color: 'white' }}>Reset Password</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </NativeBaseProvider>
    )
}


export default forgetPass;

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
        marginLeft: 20,
        fontSize: 10,
        fontWeight: '500',
        color: 'red',
        fontFamily: 'Lato-Regular',
    },
})