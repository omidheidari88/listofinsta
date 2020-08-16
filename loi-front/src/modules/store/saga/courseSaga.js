import {takeEvery, put, call} from 'redux-saga/effects';
import Axios from '../../../Ajax/Axios';
import {actions} from '../../actions';
const axios = new Axios();

//TODO FETCH Worker
function* fetchCourseWorker(action) {
	try {
		const courses = yield call(() => axios.get('course/add').then((res) => res.data.items));

		yield put({type: actions.FETCH_COURSE_SUCCESS, payload: {items: courses}});
	} catch (error) {
		yield put({type: actions.FETCH_COURSE_FAILED, payload: {messages: error.message}});
	}
}
//STUB FETCH Watcher
export function* fetchCourseWatcher() {
	yield takeEvery(actions.FETCH_COURSE, fetchCourseWorker);
}

//TODO add Worker
function* addCourseWorker(action) {
	try {
		const courses = yield call(() => axios.post('course/add', action.payload).then((res) => res.data.items));
		yield put({type: actions.ADD_COURSE_SUCCESS, payload: {items: courses}});
	} catch (error) {
		yield put({type: actions.ADD_COURSE_FAILED, payload: {messages: error.message}});
	}
}
//STUB add Watcher
export function* addCourseWatcher() {
	yield takeEvery(actions.ADD_COURSE, addCourseWorker);
}

//TODO update Worker
function* updateCourseWorker(action) {
	try {
		const response = yield call(() => axios.post('course/edit', action.payload).then((res) => res.data));
		yield put({type: actions.UPDATE_COURSE_SUCCESS, payload: {Course: response.item, messages: response.message, success: response.item.success}});
	} catch (error) {
		yield put({type: actions.UPDATE_COURSE_FAILED, payload: {messages: error.message}});
	}
}

//STUB update Watcher
export function* updateCourseWatcher() {
	yield takeEvery(actions.UPDATE_COURSE, updateCourseWorker);
}

//TODO DELETE Worker
function* deleteCourseWorker(action) {
	try {
		const response = yield call(() => axios.post('course/delete', action.payload).then((res) => res.data));
		yield put({type: actions.DELETE_COURSE_SUCCESS, payload: {id: response.item.id}});
	} catch (error) {
		yield put({type: actions.DELETE_COURSE_FAILED, payload: {messages: error.message}});
	}
}

//STUB DELETE Watcher
export function* deleteCourseWatcher() {
	yield takeEvery(actions.DELETE_COURSE, deleteCourseWorker);
}
