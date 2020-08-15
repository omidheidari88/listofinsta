import courseReducer from './courseReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducer';

export const initialState = {
	users: {items: [], messages: '', hasError: false, errorMessages: '', successUpdate: false},
	products: {items: [], messages: '', hasError: false, errorMessages: ''},
	courses: {items: [], messages: '', hasError: false, errorMessages: ''},
	modal: {items: {path: '/', component: 'Login', status: false}},
};

export const reducer = (state = initialState, action) => {
	return {
		users: userReducer(state.users, action),
		products: productReducer(state.products, action),
		courses: courseReducer(state.courses, action),
		modal: modalReducer(state.modal, action),
	};
};
