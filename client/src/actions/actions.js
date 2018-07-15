import * as types from './actionTypes';

export function fetchUsers() {
    debugger;
    return (dispatch) => {
        fetch('http://localhost:3000/users/getall')
            .then(res => res.json())
            .then(users => dispatch({ type: types.FETCHING_SUCCEDED, payload: users }))
            .catch(err => dispatch({ type: types.FETCHING_SUCCEDED, payload: err }))
    }
}