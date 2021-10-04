const Reducer = (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
           // userToken: action.token,
           isSignout: false,
          };
        case 'SIGN_IN':
          console.log('in reducer',action);
          return {
            ...prevState,
            isSignout: false,
          //  userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
          //  userToken: null,
          };
      }
    };

export default Reducer;