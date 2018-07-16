import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import axios from 'axios';

function* fetchUsers() {
    try {
        const users = yield call(() => {
            return axios.get('http://localhost:3000/users/getall')
                   .then(res => res.data);
        });
        yield put({ type: types.FETCHING_SUCCEDED, payload: users });
    } catch (e) {
        yield put({ type: types.FETCHING_ERROR, payload: e.message });
    }
}

function* fetchUsersSaga() {
    yield takeLatest(types.FETCHING, fetchUsers);
}

export default fetchUsersSaga;