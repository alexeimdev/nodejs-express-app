import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function loaderReducer (state = initialState.loaded, action) {
    const prevState = state;
    switch (action.type) {
        case types.SHOW_LOADRER: {
            return false;
        }
        case types.HIDE_LOADRER: {
            return true;
        }
        default: return prevState;
    }
}