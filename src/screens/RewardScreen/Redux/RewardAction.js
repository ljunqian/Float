import {
  CHANGE_ACCESSORY,
  CHANGE_BACKGROUND,
  CHANGE_HAT,

  PURCHASE_HAT,
  PURCHASE_ACCESSORY,
  PURCHASE_BACKGROUND,
  PURCHASE_VOUCHER,
} from './type'

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

export const updateAvatarState = (type,payload) => (
  { 
    type: changeTypes[type], 
    payload: payload,
  }
)

export const purchaseAsset = (type, payload) => {
  return ({
    type: purchaseTypes[type], 
    payload: payload,
  })
}