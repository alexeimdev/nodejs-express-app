import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function usersReducer (state = initialState.users, action) {
    const prevState = state;
    switch (action.type) {
        // case types.FETCHING_USERS: {
        //     return [];
        // }
        case types.FETCHING_USERS_SUCCEDED: {
            return action.payload;
        }
        case types.FETCHING_USERS_ERROR: {
            return [];
        }
        default: return prevState;
    }
}