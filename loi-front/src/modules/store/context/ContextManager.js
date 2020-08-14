import React, {useReducer, useContext} from 'react';
import {reducer, initialState} from '../reducer/reducer';
export const UserContext = React.createContext();
export const StateContext = React.createContext();
export const StateManager = ({children}) => {
	const {products} = initialState;
	const defaultValue = useReducer(reducer, products);
	return <StateContext.Provider value={defaultValue}>{children}</StateContext.Provider>;
};
