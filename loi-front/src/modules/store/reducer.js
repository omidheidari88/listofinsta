// const products = localStorage.getItem('product');
// const product = JSON.parse(products);
export const initialState = {items: []};
export const reducer = (state, action) => {
	let result = null;
	switch (action.type) {
		case 'add':
			result = addHandler(state, action);
			break;
		default:
			break;
	}
	return result;
};

const addHandler = (state, action) => {
	return {...state, items: [...state.items, action.payload]};
};
