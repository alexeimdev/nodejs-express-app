export function fetchUsers() {
    debugger;
    return function (dispatch) {
        fetch('http://localhost:3000/users/getall')
            .then(res => res.json())
            .then(users => dispatch(users))
            .catch(err => dispatch(err))
    }
}