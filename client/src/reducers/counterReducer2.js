import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function counterReducer2 (state = initialState.counter2, action) {
    const prevState = state;
    switch (action.type) {
        case types.INCREASE2: {
            return prevState + 1;
        }
        case types.DECREASE2: {
            return prevState - 1;
        }
        default: return prevState;
    }
}