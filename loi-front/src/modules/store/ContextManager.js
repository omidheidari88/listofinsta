import React, {useReducer, useContext} from 'react';
import {reducer, initialState} from './reducer';
export const UserContext = React.createContext();
export const StateContext = React.createContext();
export const StateManager = ({children}) => {
	const defaultValue = useReducer(reducer, initialState);
	return <StateContext.Provider value={defaultValue}>{children}</StateContext.Provider>;
};
