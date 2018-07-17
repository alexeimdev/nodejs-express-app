import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function loaderReducer (state = initialState.loader, action) {
    const prevState = state;
    switch (action.type) {
        case types.SHOW_LOADRER: {
            return true;
        }
        case types.HIDE_LOADRER: {
            return false;
        }
        default: return prevState;
    }
}