import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter';
import { User } from "../../models";
import { SET_USER_DATA, SIGN_IN, UPDATE_COINS , UPDATE_MEDLEVEL} from './type';

DataStore.configure({
  storageAdapter: SQLiteAdapter
});

export const signIn = () => ({
    type: SIGN_IN,
})
export const getUserInfo = async () => {
    try {
        const { attributes, username } = await Auth.currentAuthenticatedUser();
        const post = await DataStore.query(User, attributes.sub);
        return ({
            type: SET_USER_DATA,
            payload: {
                name: post.name,
                username: username,
                email: post.email,
                coins: post.coins,
                meditateD: post.meditateD,
                sleepD: post.sleepD,
                moveD: post.moveD,
                focusD: post.focusD,
                friends: post.friends
            }
        });
    } catch (error) {
        console.log("Error saving post", error);
    }
}

export const updateCoins = ({coins}) => ({
    type: UPDATE_COINS,
    payload: coins
})
export const updateLevel = ({exp,levelup}) => ({
     
    
        type: UPDATE_MEDLEVEL,
        payload: {
            exp,
            levelup
        } 
   
    
})