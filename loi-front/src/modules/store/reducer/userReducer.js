import {actions} from '../../actions';
import {takeLatest} from 'redux-saga/effects';

// users: {items: [], messages: 'sentiment_very_dissatisfied', hasError: false, errorMessages: '',successUpdate:false},

const reducer = (userState, action) => {
	let result = userState;
	switch (action.type) {
		// case actions.FETCH_USER:
		// 	result = {...userState, items: [...userState.items, ...action.payload]};
		// 	break;
		case actions.FETCH_USER_SUCCESS:
			result = {...userState, items: action.payload.users, messages: action.payload.messages};
			break;
		case actions.FETCH_USER_FAILED:
			result = {...userState, hasError: true, errorMessages: action.payload.messages};
			break;
		case actions.REGISTER_USER_SUCCESS:
			result = {...userState, items: [...userState.items, action.payload.user], messages: action.payload.messages};
			break;
		case actions.REGISTER_USER_FAILED:
			result = {...userState, hasError: true, errorMessages: action.payload.messages};
			break;
		case actions.UPDATE_USER_SUCCESS:
			result = {
				...userState,
				items: userState.items.map((item) => (item._id === action.payload.user.id ? item.name === action.payload.user.newName : item)),
				messages: action.payload.messages,
				successUpdate: action.payload.success,
			};
			break;
		case actions.UPDATE_USER_FAILED:
			result = {...userState, hasError: true, errorMessages: action.payload.messages};
			break;
		case actions.DELETE_USER_SUCCESS:
			result = {...userState, items: userState.items.filter((item) => item._id !== action.payload.id)};
			break;
		case actions.DELETE_USER_FAILED:
			result = {...userState, hasError: true, errorMessages: action.payload.messages};
			break;
		default:
			result = userState;
			break;
	}
	return result;
};

export default reducer;
