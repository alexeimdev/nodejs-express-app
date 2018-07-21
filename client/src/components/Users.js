import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchUsersAction, setUserAction, getUserAction } from '../actions/actions';

import './Users.css';

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { users, setUserAction } = this.props;
        return (
            <div className="users-list">
                {users.map(user =>
                    <Link to="/user" onClick={(user) => { setUserAction(user) }}>
                        <div className="user-wrapper">
                            <div className="user-pic" style={{ backgroundImage: `url(${user.picture.large})` }}></div>
                            <div className="user-details">{user.name.title} {user.name.first} {user.name.last}</div>
                        </div>
                    </Link>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => dispatch(fetchUsersAction()),
        setUserAction: (user) => dispatch(setUserAction(user)),
        getUserAction: () => dispatch(getUserAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
