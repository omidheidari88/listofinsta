export const initialState = {users: []};
export const reducer = (state = initialState, action) => {
	let result = state;
	switch (action.type) {
		case 'add':
			result = {...state, users: [...state.users, action.payload]};
			break;
		default:
			result = state;
			break;
	}
	return result;
};

//NOTE multi state & multi reducer
// export const initialState = {
// 	users: {items: []},
// 	products: {items: []},
// 	courses: {items: []},
// };

// export const reducer = ({users, products, courses}, action) => {
// 	return {
// 		users: userReducer(users, action),
// 		products: productReducer(products, action),
// 		courses: courseReducer(courses, action),
// 	};
// };
