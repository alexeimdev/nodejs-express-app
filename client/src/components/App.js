import React, { Component } from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import Counter from './Counter';
import Counter2 from './Counter2';
import Loader from './Loader';

class App extends Component {
    render() {
        const { isDisplayLoader } = this.props;
        return (
            <div className="App">
                {/* <Counter/> */}
                {/* <Counter2/> */}
                <Loader isDisplay={isDisplayLoader} />
                <Users />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isDisplayLoader: state.loader
    };
}

export default connect(mapStateToProps)(App);