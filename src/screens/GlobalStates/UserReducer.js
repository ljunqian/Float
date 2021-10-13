import { SET_USER_DATA } from "./type";

const INITIAL_STATE = {
    userData: {
        name: '',
        username: '',
        email: '',
        coins: '',
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
        return {
          ...prevState,
          userData: action.payload,
        };
      }
      default:
          return {...prevState};
    }
  };


  export default UserReducer;
  