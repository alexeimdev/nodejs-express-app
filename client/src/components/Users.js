import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import * as types from '../actions/actionTypes';
import './Users.css';

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        debugger;
        this.props.fetchUsers();
    }

    render() {
        const { users } = this.state.users;
        return (
            <div className="users-list">
                {this.state.users.map(user =>
                    <div className="user-wrapper"> 
                         <div className="user-pic" style={{backgroundImage: `url(${user.picture.large})`}}></div>
                         <div className="user-details">{user.name.title} {user.name.first} {user.name.last}</div>                   
                    </div>
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
        fetchUsers: () => {
            dispatch({ type: types.FETCHING })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
