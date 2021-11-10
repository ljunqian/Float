import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter';
import { User } from "../../models";
import { SET_USER_DATA, SIGN_IN, UPDATE_COINS , UPDATE_LEVEL} from './type';
import { getUserAPI, updateUserAPI } from './api';

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

export const initiateLevel = () => async (dispatch) => {
    const userData = await getUserAPI();

    const updateData = await updateUserAPI({updatedUser: {
        meditateD: 355,
        sleepD: 3452,
        moveD: 1284,
        focusD: 2105,
    }})
    return dispatch ({
        type: UPDATE_LEVEL,
        payload: updateData,
    })
} 