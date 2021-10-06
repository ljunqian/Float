import React, {createContext, useReducer} from "react";
import AvatarReducer from './reducer'


const initialState = {
    background: '',
    hat: '',
    accessory: '',
    //  userToken: null,
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(AvatarReducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export const RewardContext = createContext([{}, function(){}]);
export default Store;