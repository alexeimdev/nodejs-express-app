import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';

class Counter extends Component {
    doIncrease = () => {
        this.props.onIncrease();
    }

    doDecrease = () => {
        this.props.onDecrease();
    }

    render() {
        return (
            <div>
                <div>{this.props.counter}</div>
                <div onClick={this.doIncrease}>+</div>
                <div onClick={this.doDecrease}>-</div>
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