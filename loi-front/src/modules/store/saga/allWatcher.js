import {all} from 'redux-saga/effects';
import {fetchUserWatcher, registerUserWatcher, updateUserWatcher, deleteUserWatcher} from './saga';
export default function* middlewares() {
	yield all([fetchUserWatcher(), registerUserWatcher(), updateUserWatcher(), deleteUserWatcher()]);
}
