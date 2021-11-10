import { SET_USER_DATA, SIGN_IN, UPDATE_COINS, UPDATE_LEVEL, CHAT_NAME } from "./type";

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
      levelmeditate: 1,
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
    chatName: '',
    isLoggedIn: false,
};

const UserReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
      case CHAT_NAME: {
        console.log('in chatname', action.payload)
        return {
          ...prevState,
          chatName: action.payload,
        }
      }
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
        const userData = action.payload;
        const medtime = userData.meditateD;
        const medexp = medtime/10;
        const medlevelup = Math.max(Math.ceil(medexp/180), 1) ;

        const sleeptime = userData.sleepD;
        const sleepexp = sleeptime/10;
        const sleeplevelup = Math.max(Math.ceil(sleepexp/180), 1) ;

        const movetime = userData.moveD;
        const moveexp = movetime/10;
        const movelevelup = Math.max(Math.ceil(moveexp/180), 1) ;
        
        const focustime = userData.focusD;
        const focusexp = focustime/10;
        const focuslevelup = Math.max(Math.ceil(focusexp/180), 1) ;
        
        

        return {
          ...prevState,
          exp:{
            meditateexp: medexp,
            sleepexp: sleepexp,
            moveexp: moveexp,
            focusexp: focusexp,
          },
          levels:{
            levelmeditate: medlevelup,
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
  