import {
  BackgroundImages,
  HatImages,
  AccessoryImages,
  VoucherImages,
} from '../assetConstants';

import {
  CHANGE_ACCESSORY,
  CHANGE_BACKGROUND,
  CHANGE_HAT,
  UPDATE_AVATAR,
  PURCHASE_HAT,
  PURCHASE_ACCESSORY,
  PURCHASE_BACKGROUND,
  PURCHASE_VOUCHER,
  INITIALISE_STATE
} from './type'

const INITIAL_STATE = {
  background: 'Mountain',
  hat: '',
  accessory: '',
  purchased_background: [],
  purchased_hat: [],
  purchased_accessory: [],
  purchased_voucher:  [],
  backgroundList: BackgroundImages,
  hatList: HatImages,
  accessoryList: AccessoryImages,
  voucherList: VoucherImages,
};


const updateAssetList = (assetArray, assetName) => {
  return assetArray.map((asset) => {
    if (asset.name === assetName) {
      return {
        ...asset,
        purchased: true,
      }
    }
    return { ...asset, }
  });
}

const RewardReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIALISE_STATE: {
      const data = action.payload;
      return {
        ...prevState,
        background: data.equippedBackground,
        hat: data.equippedHat,
        accessory: data.equippedAccesory,
        purchased_background: data.purchasedBackground,
        purchased_hat: data.purchasedHat,
        purchased_accessory: data.purchasedAccessory,
        purchased_voucher: data.purchasedVoucher,
      }
    }
    case CHANGE_BACKGROUND: {
      return {
        ...prevState,
        background: action.payload,
      };
    }
    case CHANGE_HAT: {
      return {
        ...prevState,
        hat: action.payload,
      };
    }
    case CHANGE_ACCESSORY: {
      return {
        ...prevState,
        accessory: action.payload,
      };
    }
    case UPDATE_AVATAR: {
      return {
        ...prevState,
        background: action.payload.background,
        hat: action.payload.hat,
        accessory: action.payload.accessory,
      }
    }
    case PURCHASE_BACKGROUND: {
      return {
        ...prevState,
        purchased_background: action.payload.content,
        background: action.payload.asset,
      }
    }
    case PURCHASE_HAT: {
      return {
        ...prevState,
        purchased_hat: action.payload.content,
        hat: action.payload.asset,
      }
    }
    case PURCHASE_ACCESSORY: {
      return {
        ...prevState,
        purchased_accessory: action.payload.content,
        accessory: action.payload.asset,
      }
    }
    case PURCHASE_VOUCHER: {
      return {
        ...prevState,
        purchased_voucher: action.payload.content,
      }
    }
    default:
      return { ...prevState };
  }
};


export default RewardReducer;
