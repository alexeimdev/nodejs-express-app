import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function counterReducer (state = initialState.counter, action) {
    const counter = state;
    switch (action.type) {
        case types.INCREASE: {
            return counter + 1;
        }
        case types.DECREASE: {
            return counter - 1;
        }
        default: return state;
    }
}