import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCounterAction, decreaseCounterAction } from '../actions/actions';
//import './Counter.css';

class Counter extends Component {
    render() {
        const { doIncrease, doDecrease, counter } = this.props;

        return (
            <div className="counter-wrapper">
                <div className="counter-display-wrapper">
                    <div className="counter-display">
                        {counter}
                    </div>
                </div>
                <div className="counter-buttons">
                    <div className="btn-wrapper">
                        <a className="btn btn-inc" onClick={() => doIncrease()}>+</a>
                    </div>
                    <div className="btn-wrapper">
                        <a className="btn btn-dec" onClick={() => doDecrease()}>-</a>
                    </div>
                </div>
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
        doIncrease: () => dispatch(increaseCounterAction()),
        doDecrease: () => dispatch(decreaseCounterAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); 