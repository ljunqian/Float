import API, { graphqlOperation } from '@aws-amplify/api';
import { Auth } from 'aws-amplify';
import { getUser } from '../../graphql/queries';
import { updateUser } from '../../graphql/mutations';

// for all properties passed to updateUser, it will be sent to the backend 
// and return the updated user
// to use, refer to updateDoneWithAPI
export const updateUserAPI = async ({updatedUser}) => {
    const user = await Auth.currentAuthenticatedUser();
    const getUserData = await API.graphql(graphqlOperation(getUser, { id: user.attributes.sub }));
    const updatedUserData = {
      id: user.attributes.sub,
      _version: getUserData.data.getUser._version,
      ...updatedUser
    }
    const currentUserData = await API.graphql(graphqlOperation(updateUser, { input: updatedUserData }));
    
    return currentUserData.data.updateUser;
  }

// return the user data from backend
export const getUserAPI = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const getUserData = await API.graphql(graphqlOperation(getUser, { id: user.attributes.sub }));
    return getUserData.data.getUser;
  }
   
  