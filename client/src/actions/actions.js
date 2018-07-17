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

export function showLoaderAction() {
    return {
        type: types.SHOW_LOADRER
    };
}

export function hideLoaderAction() {
    return {
        type: types.HIDE_LOADRER
    };
}