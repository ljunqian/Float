export const addFriend = friendsIndex => (
    {
      type: 'ADD_FRIEND',
      payload: friendsIndex,
    }
  );

export const testAddAvatar = () => (
    { 
        type: 'UPDATE_AVATAR', 
        payload: {
            background: 'Mountain',
            hat: 'Ushanka',
            accessory: 'Santa Beard',
        }
    }
  )

const types = {
    background: 'CHANGE_BACKGROUND',
    hat: 'CHANGE_HAT',
    accessory: 'CHANGE_ACCESSORY',

}
  export const updateAvatarState = (type,payload) => (
    { 
        type: types[type], 
        payload: payload,
    }
  )