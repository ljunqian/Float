import {
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  ADD_RECENT,
  GET_GUIDES,
  UPDATE_DONE,
  UPDATE_DONE_WITH_API,
} from './type'
import { getUserAPI, updateUserAPI } from '../../GlobalStates/api';

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

export const updateDoneWithAPI =  ({guide, type}) => async () => {
  // get the data
  const userData = await getUserAPI();
  const {completedFocus} = userData;
  const updatedFocus =  [...completedFocus, guide.id];

  // update the data
  const updatedGuideUser = await updateUserAPI({
    updatedUser: {
      completedFocus: updatedFocus,
    }
  });
  
  // send the data to reducer
  return({
    type: UPDATE_DONE_WITH_API,
    payload: {
      completed: updatedGuideUser.completedFocus, 
      type: type
    },
  })
}


export const updateDone = ({guide}) => {
  return({
    type: UPDATE_DONE,
    payload: guide,
  })
}