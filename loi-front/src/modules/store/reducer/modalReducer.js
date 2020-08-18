import {actions} from '../actions';

// items: {path:'/',component:'Login',status:false}

const reducer = (modalState, action) => {
	let result = modalState;
	switch (action.type) {
		case actions.UPDATE_MODAL:
			result = {...modalState, items: {...modalState.items, ...action.payload}};

			break;
		case actions.LOGIN_USER_SUCCESS:
			result = {...modalState, items: {...modalState.items, status: false}};
			break;
		default:
			break;
	}
	return result;
};

export default reducer;
