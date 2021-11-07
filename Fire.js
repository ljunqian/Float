import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
require('firebase/compat/auth');
import 'firebase/compat/firestore';
import 'firebase/compat/database';
require('@firebase/database');

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if(!firebase.apps.length){
            firebase.initializeApp({
              apiKey: "AIzaSyDrQM977O7YN-Ee4xZWJN0fIdUvVQYqYl0",
                authDomain: "giftedchatapp-4ac6c.firebaseapp.com",
                databaseURL: "https://giftedchatapp-4ac6c-default-rtdb.asia-southeast1.firebasedatabase.app",
                projectId: "giftedchatapp-4ac6c",
                storageBucket: "giftedchatapp-4ac6c.appspot.com",
                messagingSenderId: "161535509950",
                appId: "1:161535509950:web:2391cd3e0aa8481a9da5ef",
                measurementId: "G-DJV9RF8VSH"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text:item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };
            this.db.push(message);
        });
    };
    parse = message => {
        const {user, text, timestamp} = message.val();
        const { key:_id} = message;
        const createdAt = new Date(timestamp);
        return{
        _id,
        createdAt,
        text,
        user
        }
    }

    get = callback =>{
    this.db.on("child_added",snapshot => callback(this.parse(snapshot)));
    };

    off(){
    this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
        }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();