import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';

class Counter2 extends Component {
    render() {
        return (
            <div>
                <div>{this.props.counter2}</div>
                <div onClick={() => this.props.onIncrease()}>+</div>
                <div onClick={() => this.props.onDecrease()}>-</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter2: state.counter2
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrease: () => {
            dispatch({ type: types.INCREASE2 })
        },
        onDecrease: () => {
            dispatch({ type: types.DECREASE2 })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2); 