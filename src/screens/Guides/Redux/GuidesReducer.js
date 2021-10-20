import _ from 'lodash';
import {
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  ADD_RECENT
} from './type'

const INITIAL_STATE = {
    favourites: [],
    recents: [],
};

const GuidesReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_FAVOURITE: {
        const prevFav = prevState.favourites;
        prevFav.push(action.payload);
        return {
          ...prevState,
          favourites: prevFav,
        }
      }
      case DELETE_FAVOURITE: {
        const newFav = prevState.favourites.filter(
          (guide) => guide.title !== action.payload);
        return {
          ...prevState,
          favourites: newFav,
        }
      }
      case ADD_RECENT: {
        const newGuide = action.payload;
        const prevRecent = prevState.recents;
        const added = _.filter(prevRecent, (guide) => guide.title !== newGuide.title);
        added.unshift(newGuide);
        if (added.length > 10) {added.splice(0,10)}
        return {
          ...prevState,
          recents: added,
        }
      }
      default:
          return {...prevState};
    }
  };


  export default GuidesReducer;
  