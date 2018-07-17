import React from 'react';
import './Loader.css';

const Loader = ({ isDisplay }) => {
    if (isDisplay) {
        return (
            <div className="loader"></div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Loader;