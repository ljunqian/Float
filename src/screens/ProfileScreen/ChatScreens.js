import React from "react";
import { Platform, KeybaordAvoidingView, SafeAreaView} from 'react-native';
import {Gifted Chat} from "react-native-gifted-chat";
import Fire from "../../Fire";

export default class ChatScreens extends React.Component {
    state = {
        message: []
    }

    get user(){
        return{
            _id:Fire.uid,
            name: this.props.navigation.state.params.name
        }
    }

    componentDidMount(){
        Fire.get(message =>
            this.setState(previous => ({
                message: GiftedChat.append(previous.messages, message)
            }))
        )
    }

    componentWillUnmount(){
        Fire.off();
    }
    render() {
        const chat = <GiftedChat messages ={this.state.messages} onSend={Fire.send} user={this.user}/>;

        if (Platform.OS === 'android'){
            return (
                <KeyboardAvoidingView style={{flex:1}} behaviour="padding" keyboardVerticalOffset{30} enabled>
                {chat}
                </KeyboardAvoidingView>
            );
        }
        return<SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        justifyContent: "center",
        alignItems: "center",
    }
})

export default ChatScreens