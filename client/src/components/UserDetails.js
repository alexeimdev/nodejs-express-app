import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserAction, getUserAction } from '../actions/actions';

import './UserDetails.css';

class UsersDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        debugger;
        this.props.getUser(),
        this.props.fetchUser();
    }

    render() {
        const { user } = this.props;
        if (Object.keys(user).length == 0) return null;

        return (
            <div className="user-details">
                <div className="user-wrapper">
                    <div className="user-pic" style={{ backgroundImage: `url(${user.picture.large})` }}></div>
                    <div className="user-details">{user.name.title} {user.name.first} {user.name.last}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
        //query: ownProps.location.query
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUser: () => dispatch(fetchUserAction()), // from url or router render
        getUser: () => dispatch(getUserAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersDetails);
