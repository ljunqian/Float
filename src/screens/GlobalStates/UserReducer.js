import { SET_USER_DATA, SIGN_IN, UPDATE_COINS, UPDATE_MEDLEVEL } from "./type";

const INITIAL_STATE = {
    userData: {
        name: '',
        username: '',
        email: '',
        coins: 3000,
        meditateD: 5000,
        sleepD: '',
        moveD: '',
        friends: []
    },
    levels:{
      levelMeditate: 1,
      levelsleep: 1,
      levelfocus: 1,
      levelmove: 1,
    },
  
    exp:{
      meditateexp:0 ,
      sleepexp:0 ,
      focusexp:0 ,
      moveexp:0 ,
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
      case UPDATE_MEDLEVEL: {
        
        const medtime = prevState.userData.meditateD;
        console.log("in reduce", medtime);
        
        const exp = medtime/10;
        console.log("in reduce", exp);
        const levelup = Math.floor(exp/180) ;
        
        console.log("in reduce", levelup);
        // const currentlevel = [action.payload.levels[0] + levelup ,,,];

        return {
          ...prevState,
          exp:{
            meditateexp: exp,
          },
          levels:{
            levelMeditate: levelup,
          },
          
          
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
  