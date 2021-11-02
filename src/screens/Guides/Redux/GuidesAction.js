import {
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  ADD_RECENT,
  GET_GUIDES,
  UPDATE_DONE,
} from './type'


export const addFavourite = ({guide}) => (
  { 
    type: ADD_FAVOURITE, 
    payload: guide,
  }
)

export const deleteFavourite = ({title}) => {
  return ({
    type: DELETE_FAVOURITE, 
    payload: title,
  })
}


export const addRecent = ({guide}) => {
  if (guide){
    return ({ 
      type: ADD_RECENT, 
      payload: guide,
    })
  }
}

export const getGuidesInfo = ({guides}) => {
  return({
    type: GET_GUIDES,
    payload: guides,
  })
}

export const updateDone = ({guide}) => {
  return({
    type: UPDATE_DONE,
    payload: guide,
  })
}