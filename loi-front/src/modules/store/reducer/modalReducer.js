import {actions} from '../../actions';

// items: {path:'/',component:'Login',status:false}

const reducer = (modalState, action) => {
	let result = modalState;
	if (action.type === actions.UPDATE_MODAL) {
		result = {...modalState, items: {...modalState.items, ...action.payload}};
	}
	return result;
};

export default reducer;
