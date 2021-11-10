import _ from 'lodash'
import {
  CHANGE_ACCESSORY,
  CHANGE_BACKGROUND,
  CHANGE_HAT,
  INITIALISE_STATE,
  PURCHASE_HAT,
  PURCHASE_ACCESSORY,
  PURCHASE_BACKGROUND,
  PURCHASE_VOUCHER,
} from './type'
import { getUserAPI, updateUserAPI } from '../../GlobalStates/api';

const changeTypes = {
  background: CHANGE_BACKGROUND,
  hat: CHANGE_HAT,
  accessory: CHANGE_ACCESSORY,
}

const purchaseTypes = {
  background: PURCHASE_BACKGROUND,
  hat: PURCHASE_HAT,
  accessory: PURCHASE_ACCESSORY,
  voucher: PURCHASE_VOUCHER,
}

const purchasedArray = {
  background: 'purchasedBackground',
  hat: 'purchasedHat',
  accessory: 'purchasedAccessory',
  voucher: 'purchasedVoucher',
}

const equippedArray = {
  background: 'equippedBackground',
  hat: 'equippedHat',
  accessory: 'equippedAccesory',
}

export const initialiseState = () => async (dispatch) => {
  const userData = await getUserAPI();
  return dispatch({
    type: INITIALISE_STATE, 
    payload: userData,
  })
};


export const resetData = () => async (dispatch) => {
  // const userData = await getUserAPI();

  // update the data
  const updatedUser = await updateUserAPI({
    updatedUser: {
      equippedBackground: 'Mountain',
      equippedHat: '',
      equippedAccesory: '',
      purchasedBackground: ['Mountain'],
      purchasedHat: ['Santa'],
      purchasedAccessory: [],
      purchasedVoucher:  [],
      coins: 2500,
    }
  })
  console.log('in reset', updatedUser);

  return dispatch({
    type: INITIALISE_STATE, 
    payload: updatedUser,
  })
};

export const updateAvatarState = (type,payload) => async (dispatch) => {
  // update the data
  const updatedUser = await updateUserAPI({
    updatedUser: {
      [equippedArray[type]]: payload,
    }
  })

  return dispatch(
    { 
      type: changeTypes[type], 
      payload: payload,
    }
  )
}

export const purchaseAsset =  (type, payload) => async (dispatch) => {
  // get the data
  const userData = await getUserAPI();
  const arrayName = purchasedArray[type];
  const purchasedAssetArray = userData[arrayName];
  const updatedAssetArray =  _.uniq([...purchasedAssetArray, payload]);
  let user = {};
  if (type === 'voucher') {
     user = {
      [arrayName]: updatedAssetArray,
    }
  } else {
    user = {
      [arrayName]: updatedAssetArray,
      [equippedArray[type]]: payload,
    }
  }
  // update the data
  const updatedGuideUser = await updateUserAPI({
    updatedUser: user
  })

  return dispatch({
    type: purchaseTypes[type], 
    payload: {
      arrayName: arrayName,
      content: updatedGuideUser[arrayName],
      asset: payload,
    },
  })
}