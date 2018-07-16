import * as types from './actionTypes';

export function fetchUsersAction() {
    return {
        type: types.FETCHING
    }
}

export function increaseCounterAction() {
    return {
        type: types.INCREASE
    };
}

export function decreaseCounterAction() {
    return {
        type: types.DECREASE
    };
}