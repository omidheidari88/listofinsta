import courseReducer from './courseReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';

export const initialState = {
	users: {items: [], messages: '', hasError: false, errorMessages: '', successUpdate: false},
	products: {items: [], messages: '', hasError: false, errorMessages: ''},
	courses: {items: [], messages: '', hasError: false, errorMessages: ''},
};

export const reducer = (state = initialState, action) => {
	return {
		users: userReducer(state.users, action),
		products: productReducer(state.products, action),
		courses: courseReducer(state.courses, action),
	};
};
