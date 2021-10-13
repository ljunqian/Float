import {
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  ADD_RECENT,
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