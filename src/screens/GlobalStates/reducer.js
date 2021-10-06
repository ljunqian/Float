const AvatarReducer = (prevState, action) => {
    switch (action.type) {
      case 'CHANGE_BACKGROUND':
        return {
          ...prevState,
          background: action.payload,
        };
      case 'CHANGE_HAT':
          return {
            ...prevState,
            hat: action.payload,
          };
      case 'CHANGE_ACCESSORY':
        return {
          ...prevState,
          accessory: action.payload,
        };
      case 'UPDATE_AVATAdR':
        console.log("hello",action)
        return {
          background: "Mountain",
          hat: action.payload.hat,
          accessory: action.payload.accessory,
          ...prevState,
        }
      default:
          return {...prevState};
    }
  };

export default AvatarReducer;