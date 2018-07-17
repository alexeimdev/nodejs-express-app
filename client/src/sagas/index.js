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
        yield put({ type: types.FETCHING_SUCCEDED, payload: users });
        yield put({ type: types.HIDE_LOADRER });
    } catch (e) {
        yield put({ type: types.FETCHING_ERROR, payload: e.message });
        yield put({ type: types.HIDE_LOADRER });
    }
}

function* fetchUsersSaga() {
    yield takeLatest(types.FETCHING, fetchUsers);
}

export default fetchUsersSaga;