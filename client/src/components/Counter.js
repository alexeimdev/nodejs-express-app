import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';

class Counter extends Component {
    render() {
        return (
            <div>
                <div>{this.props.counter}</div>
                <div onClick={() => this.props.onIncrease()}>+</div>
                <div onClick={() => this.props.onDecrease()}>-</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrease: () => {
            dispatch({ type: types.INCREASE })
        },
        onDecrease: () => {
            dispatch({ type: types.DECREASE })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); 