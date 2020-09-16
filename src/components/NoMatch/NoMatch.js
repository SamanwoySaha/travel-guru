import React from 'react';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className="text-center" style={{paddingTop: '150px'}}>
            <h1>404 Error!!!</h1>
            <h1>Route not found.</h1>
        </div>
    );
};

export default NoMatch;