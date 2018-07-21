import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function userReducer (state = initialState.user, action) {
    const prevState = state;
    switch (action.type) {
        // case types.FETCHING_USER: {
        //     return {};
        // }
        case types.FETCHING_USER_SUCCEDED: {
            return action.payload;
        }
        case types.FETCHING_USER_ERROR: {
            return {};
        }
        case types.SET_USER: {
            return action.payload
        }
        case types.GET_USER: {
            return state
        }
        default: return prevState;
    }
}