import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Users from './Users';
import UserDetails from './UserDetails'

const App = () => (
    <div className="App">
        <Link to={`/a`}>Users</Link>
        <Switch>
            <Route path='/a' component={Users}/>
            <Route path='/users/getuser' component={UserDetails}/>
        </Switch>
    </div>
)

export default App;
