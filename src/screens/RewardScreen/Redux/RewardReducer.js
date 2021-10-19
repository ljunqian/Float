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
} from './type'

import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from "../../../graphql/queries"
import { updateUser } from "../../../graphql/mutations"

import React, { useEffect } from 'react';

const INITIAL_STATE = {
  background: 'Mountain',
  hat: '',
  accessory: '',
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
      const newBackground = updateAssetList(prevState.backgroundList, action.payload);
      return {
        ...prevState,
        backgroundList: newBackground,
        background: action.payload,
      }
    }
    case PURCHASE_HAT: {
      const newHat = updateAssetList(prevState.hatList, action.payload);
      return {
        ...prevState,
        hatList: newHat,
        hat: action.payload,
      }
    }
    case PURCHASE_ACCESSORY: {
      const newAccessory = updateAssetList(prevState.accessoryList, action.payload);
      return {
        ...prevState,
        accessoryList: newAccessory,
        accessory: action.payload,
      }
    }
    case PURCHASE_VOUCHER: {
      const newVoucher = updateAssetList(prevState.voucherList, action.payload);
      return {
        ...prevState,
        voucherList: newVoucher,
      }
    }
    default:
      return { ...prevState };
  }
};


export default RewardReducer;
