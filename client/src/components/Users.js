import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/users/getall')
            .then(res => res.json())
            .then(users => {
                this.setState({
                    users: users
                })
            })
            .catch(err => console.log(err))
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

export default Users;
