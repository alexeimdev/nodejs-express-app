import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function counterReducer (state = initialState.counter, action) {
    const prevState = state;
    switch (action.type) {
        case types.INCREASE: {
            return prevState + 1;
        }
        case types.DECREASE: {
            return prevState - 1;
        }
        default: return prevState;
    }
}