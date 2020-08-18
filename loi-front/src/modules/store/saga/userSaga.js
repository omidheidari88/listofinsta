import {takeEvery, put, call} from 'redux-saga/effects';
import Axios from '../../../Ajax/Axios';
import {actions} from '../actions';

const axios = new Axios();

//TODO FETCH Worker
function* fetchUserWorker(action) {
	try {
		const users = yield call(() => axios.get('user/add').then((res) => res.data.items));
		yield put({type: actions.FETCH_USER_SUCCESS, payload: {users: users, messages: 'sentiment_satisfied_alt'}});
	} catch (error) {
		yield put({type: actions.FETCH_USER_FAILED, payload: {messages: error.message}});
	}
}
//STUB FETCH Watcher
export function* fetchUserWatcher() {
	yield takeEvery(actions.FETCH_USER, fetchUserWorker);
}

//TODO REGISTER Worker
function* registerUserWorker(action) {
	try {
		const response = yield call(() => axios.post('auth/register', action.payload).then((res) => res.data));
		if (response.success) {
			yield call(() => localStorage.setItem('token', response.token));
		}
		yield put({type: actions.REGISTER_USER_SUCCESS, payload: {user: response.item, messages: response.message}});
	} catch (error) {
		yield put({type: actions.REGISTER_USER_FAILED, payload: {messages: error.message}});
	}
}

//STUB REGISTER Watcher
export function* registerUserWatcher() {
	yield takeEvery(actions.REGISTER_USER, registerUserWorker);
}

//TODO login Worker
function* loginUserWorker(action) {
	const token = localStorage.getItem('token');
	try {
		const response = yield call(() =>
			axios
				.post('auth/login', action.payload, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => res.data),
		);
		if (response.success) {
			yield call(() => localStorage.setItem('token', response.token));
		}
		yield put({type: actions.LOGIN_USER_SUCCESS, payload: {userLogin: response.userLogin, messages: response.message}});
	} catch (error) {
		yield put({type: actions.LOGIN_USER_FAILED, payload: {messages: error.message}});
	}
}

//STUB login Watcher
export function* loginUserWatcher() {
	yield takeEvery(actions.LOGIN_USER, loginUserWorker);
}

//TODO update Worker
function* updateUserWorker(action) {
	try {
		const response = yield call(() => axios.post('user/edit', action.payload).then((res) => res.data));
		yield put({type: actions.UPDATE_USER_SUCCESS, payload: {user: response.item, messages: response.message, success: response.item.success}});
	} catch (error) {
		yield put({type: actions.UPDATE_USER_FAILED, payload: {messages: error.message}});
	}
}

//STUB update Watcher
export function* updateUserWatcher() {
	yield takeEvery(actions.UPDATE_USER, updateUserWorker);
}

//TODO DELETE Worker
function* deleteUserWorker(action) {
	try {
		const response = yield call(() => axios.post('user/delete', action.payload).then((res) => res.data));
		yield put({type: actions.DELETE_USER_SUCCESS, payload: {id: response.item.id}});
	} catch (error) {
		yield put({type: actions.DELETE_USER_FAILED, payload: {messages: error.message}});
	}
}

//STUB DELETE Watcher
export function* deleteUserWatcher() {
	yield takeEvery(actions.DELETE_USER, deleteUserWorker);
}

//TODO AUTHENTICATION Worker
function* authenticationWorker(action) {
	const token = localStorage.getItem('token');
	try {
		const response = yield call(() =>
			axios
				.post('user/', null, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => res.data),
		);
		yield put({type: actions.AUTHENTICATION_SUCCESS, payload: {userLogin: response.success, messages: response.message}});
	} catch (error) {
		console.log(error);
		yield put({type: actions.AUTHENTICATION_FAILED, payload: {messages: error.message}});
	}
}

//STUB AUTHENTICATION Watcher
export function* authenticationWatcher() {
	yield takeEvery(actions.AUTHENTICATION, authenticationWorker);
}
