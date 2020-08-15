import {all} from 'redux-saga/effects';
import {fetchUserWatcher, registerUserWatcher, updateUserWatcher, deleteUserWatcher} from './userSaga';
import {fetchProductWatcher, updateProductWatcher, deleteProductWatcher} from './productSaga';
import {fetchCourseWatcher, updateCourseWatcher, deleteCourseWatcher} from './courseSaga';
export default function* middlewares() {
	yield all([fetchUserWatcher(), registerUserWatcher(), updateUserWatcher(), deleteUserWatcher(), fetchProductWatcher(), updateProductWatcher(), deleteProductWatcher(), fetchCourseWatcher(), updateCourseWatcher(), deleteCourseWatcher()]);
}
