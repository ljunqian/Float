import { SET_USER_DATA, SIGN_IN, UPDATE_COINS } from "./type";

const INITIAL_STATE = {
    userData: {
        name: '',
        username: '',
        email: '',
        coins: 3000,
        meditateD: '',
        sleepD: '',
        moveD: '',
        friends: []
    },
    isLoggedIn: false,
};

const UserReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_USER_DATA: {
        console.log("in reduce", action);
        return {
          ...prevState,
          userData: action.payload,
        };
      }
      case UPDATE_COINS: {
        console.log("in reduce", action);
        return {
          ...prevState,
          userData: {
            //...prevState.userData,
            coins: action.payload,
          }
        };
      }
      /*
      case SIGN_IN: {
        return {
          ...prevState,
          isLoggedIn: true,
        }
      }
      case SIGN_OUT: {
        return {
          ...prevState,
          isLoggedIn: false,
        }
      }*/
      default:
          return {...prevState};
    }
  };


  export default UserReducer;
  