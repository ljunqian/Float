import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//* Reducers
import RewardReducer from '../RewardScreen/Redux/RewardReducer'
import UserReducer from './UserReducer'
import GuidesReducer from '../Guides/Redux/GuidesReducer'

//create middleware
const middleware = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
    reward: RewardReducer, //calling the reducer file
    user: UserReducer,
    guide: GuidesReducer,
});

export default createStore(rootReducer, middleware);