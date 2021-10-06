import { combineReducers } from 'redux';

const INITIAL_STATE = {
    background: 'Mountain',
    hat: '',
    accessory: '',
    //  userToken: null,
};

const RewardReducer = (prevState = INITIAL_STATE, action) => {
    console.log('in reducer', action);
    switch (action.type) {
      case 'CHANGE_BACKGROUND': {
        return {
          ...prevState,
          background: action.payload,
        };
      }
      case 'CHANGE_HAT':{
          return {
            ...prevState,
            hat: action.payload,
          };
        }
      case 'CHANGE_ACCESSORY':{
        return {
          ...prevState,
          accessory: action.payload,
        };
    }
      case 'UPDATE_AVATAR': {
        console.log("inreducerts",action.payload);
        return {
          ...prevState,
          background: action.payload.background,
          hat: action.payload.hat,
          accessory: action.payload.accessory,
        }
      }
      default:
          return {...prevState};
    }
  };


  export default RewardReducer;
  