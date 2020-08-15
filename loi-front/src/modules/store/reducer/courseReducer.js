import {actions} from '../../actions';

const reducer = (courseState, action) => {
	let result = courseState;
	switch (action.type) {
		// case actions.FETCH_USER:
		// 	result = {...courseState, items: [...courseState.items, ...action.payload]};
		// 	break;
		case actions.FETCH_COURSE_SUCCESS:
			result = {...courseState, items: action.payload.courses, messages: action.payload.messages};
			break;
		case actions.FETCH_COURSE_FAILED:
			result = {...courseState, items: [...courseState.items, action.payload.messages]};
			break;
		default:
			result = courseState;
			break;
	}
	return result;
};

export default reducer;