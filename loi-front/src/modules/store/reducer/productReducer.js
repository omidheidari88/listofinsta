import {actions} from '../../actions';

const reducer = (productState, action) => {
	let result = productState;
	switch (action.type) {
		// case actions.FETCH_USER:
		// 	result = {...productState, items: [...productState.items, ...action.payload]};
		// 	break;
		case actions.FETCH_PRODUCT_SUCCESS:
			result = {...productState, items: action.payload.products, messages: action.payload.messages};
			break;
		case actions.FETCH_PRODUCT_FAILED:
			result = {...productState, items: [...productState.items, action.payload.messages]};
			break;
		default:
			result = productState;
			break;
	}
	return result;
};

export default reducer;
