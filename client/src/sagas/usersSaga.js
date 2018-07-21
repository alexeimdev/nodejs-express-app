import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import axios from 'axios';

function* fetchUsers() {
    try {
        yield put({ type: types.SHOW_LOADRER });
        const users = yield call(() => {
            return axios.get('http://localhost:3000/users/getall')
                .then(res => res.data);
        });
        yield put({ type: types.FETCHING_USERS_SUCCEDED, payload: users });
    } catch (e) {
        yield put({ type: types.FETCHING_USERS_ERROR, payload: e.message });
    } finally {
        yield put({ type: types.HIDE_LOADRER });
    }
}

function* fetchUsersSaga() {
    yield takeLatest(types.FETCHING_USERS, fetchUsers);
}

export default fetchUsersSaga;