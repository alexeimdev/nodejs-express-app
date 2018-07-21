import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import axios from 'axios';

function* fetchUser(action) {
    const id = action.payload;
    if(id === undefined) return;

    try {
        yield put({ type: types.SHOW_LOADRER });
        const user = yield call(() => {
            return axios.get('http://localhost:3000/users/getuser/' + id)
                .then(res => res.data);
        });
        yield put({ type: types.FETCHING_USER_SUCCEDED, payload: user });
    } catch (e) {
        yield put({ type: types.FETCHING_USER_ERROR, payload: e.message });
    } finally {
        yield put({ type: types.HIDE_LOADRER });
    }
}

function* fetchUserSaga() {
    yield takeLatest(types.FETCHING_USER, fetchUser);
}

export default fetchUserSaga;