import { SET_USER_DATA, SIGN_IN, UPDATE_COINS, UPDATE_LEVEL } from "./type";

const INITIAL_STATE = {
    userData: {
        name: '',
        username: '',
        email: '',
        coins: 3000,
        meditateD: 4000,
        sleepD: 1000,
        moveD: '',
        focusD: 6000,
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
      case UPDATE_LEVEL: {
        
        const medtime = prevState.userData.meditateD;
        const medexp = medtime/10;
        const medlevelup = Math.max(Math.floor(medexp/180), 1) ;

        const sleeptime = prevState.userData.sleepD;
        const sleepexp = sleeptime/10;
        const sleeplevelup = Math.max(Math.floor(sleepexp/180), 1) ;

        const movetime = prevState.userData.moveD;
        const moveexp = movetime/10;
        const movelevelup = Math.max(Math.floor(moveexp/180), 1) ;
        
        const focustime = prevState.userData.focusD;
        const focusexp = focustime/10;
        const focuslevelup = Math.max(Math.floor(focusexp/180), 1) ;
        
        

        return {
          ...prevState,
          exp:{
            meditateexp: medexp,
            sleepexp: sleepexp,
            moveexp: moveexp,
            focusexp: focusexp,
          },
          levels:{
            levelMeditate: medlevelup,
            levelsleep: sleeplevelup,
            levelfocus: focuslevelup,
            levelmove: movelevelup,
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
  