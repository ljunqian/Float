import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RewardReducer from './RewardReducer'

//create middleware
const middleware = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
    reward: RewardReducer //calling the reducer file
    });

export default createStore(rootReducer, middleware);