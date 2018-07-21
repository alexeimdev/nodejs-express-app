import * as types from './actionTypes';

export function fetchUsersAction() {
    return {
        type: types.FETCHING_USERS
    }
}

export function fetchUserAction(id) {
    return {
        type: types.FETCHING_USER,
        payload: id
    }
}

export function setUserAction(user) {
    return {
        type: types.SET_USER,
        payload: user
    }
}

export function getUserAction() {
    return {
        type: types.GET_USER
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