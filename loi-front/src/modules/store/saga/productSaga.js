import {takeEvery, put, call} from 'redux-saga/effects';
import Axios from '../../../Ajax/Axios';
import {actions} from '../../actions';
const axios = new Axios();

//TODO FETCH Worker
function* fetchProductWorker(action) {
	try {
		const products = yield call(() => axios.get('product/add').then((res) => res.data.items));
		yield put({type: actions.FETCH_PRODUCT_SUCCESS, payload: {items: products}});
	} catch (error) {
		yield put({type: actions.FETCH_PRODUCT_FAILED, payload: {messages: error.message}});
	}
}
//STUB FETCH Watcher
export function* fetchProductWatcher() {
	yield takeEvery(actions.FETCH_PRODUCT, fetchProductWorker);
}

//TODO add Worker
function* addProductWorker(action) {
	try {
		const products = yield call(() => axios.post('product/add', action.payload).then((res) => res.data.items));
		yield put({type: actions.ADD_PRODUCT_SUCCESS, payload: {items: products}});
	} catch (error) {
		yield put({type: actions.ADD_PRODUCT_FAILED, payload: {messages: error.message}});
	}
}
//STUB add Watcher
export function* addProductWatcher() {
	yield takeEvery(actions.ADD_PRODUCT, addProductWorker);
}

//TODO update Worker
function* updateProductWorker(action) {
	try {
		const response = yield call(() => axios.post('product/edit', action.payload).then((res) => res.data));
		yield put({type: actions.UPDATE_PRODUCT_SUCCESS, payload: {Product: response.item, messages: response.message, success: response.item.success}});
	} catch (error) {
		yield put({type: actions.UPDATE_PRODUCT_FAILED, payload: {messages: error.message}});
	}
}

//STUB update Watcher
export function* updateProductWatcher() {
	yield takeEvery(actions.UPDATE_PRODUCT, updateProductWorker);
}

//TODO DELETE Worker
function* deleteProductWorker(action) {
	try {
		const response = yield call(() => axios.post('product/delete', action.payload).then((res) => res.data));
		yield put({type: actions.DELETE_PRODUCT_SUCCESS, payload: {id: response.item.id}});
	} catch (error) {
		yield put({type: actions.DELETE_PRODUCT_FAILED, payload: {messages: error.message}});
	}
}

//STUB DELETE Watcher
export function* deleteProductWatcher() {
	yield takeEvery(actions.DELETE_PRODUCT, deleteProductWorker);
}
