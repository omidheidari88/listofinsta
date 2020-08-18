import {all} from 'redux-saga/effects';
import {fetchUserWatcher, registerUserWatcher, loginUserWatcher, updateUserWatcher, deleteUserWatcher, authenticationWatcher} from './userSaga';
import {fetchProductWatcher, addProductWatcher, updateProductWatcher, deleteProductWatcher} from './productSaga';
import {fetchCourseWatcher, addCourseWatcher, updateCourseWatcher, deleteCourseWatcher} from './courseSaga';
export default function* middlewares() {
	yield all([fetchUserWatcher(), registerUserWatcher(), updateUserWatcher(), deleteUserWatcher(), authenticationWatcher(), loginUserWatcher(), addCourseWatcher(), fetchProductWatcher(), addProductWatcher(), updateProductWatcher(), deleteProductWatcher(), fetchCourseWatcher(), updateCourseWatcher(), deleteCourseWatcher()]);
}
