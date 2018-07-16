import initialState from './initialState';
import * as types from '../actions/actionTypes';
import * as actions from '../actions/actions';

export default function counterReducer (state = initialState.users, action) {
    const prevState = state;
    switch (action.type) {
        case types.FETCHING: {
            return actions.fetchUsers();
        }
        case types.FETCHING_SUCCEDED: {
            return action.payload;
        }
        case types.FETCHING_ERROR: {
            return [];
        }
        default: return prevState;
    }
}