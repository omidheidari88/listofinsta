import {all} from 'redux-saga/effects';
import {fetchUserWatcher, registerUserWatcher, updateUserWatcher, deleteUserWatcher} from './userSaga';
import {fetchProductWatcher, addProductWatcher, updateProductWatcher, deleteProductWatcher} from './productSaga';
import {fetchCourseWatcher, addCourseWatcher, updateCourseWatcher, deleteCourseWatcher} from './courseSaga';
export default function* middlewares() {
	yield all([fetchUserWatcher(), registerUserWatcher(), updateUserWatcher(), deleteUserWatcher(), addCourseWatcher(), fetchProductWatcher(), addProductWatcher(), updateProductWatcher(), deleteProductWatcher(), fetchCourseWatcher(), updateCourseWatcher(), deleteCourseWatcher()]);
}
