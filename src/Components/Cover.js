import React from 'react'

import {useHistory,Link} from 'react-router-dom';

import './Cover.css'

function Cover() {
    return (
        <div>
            <h2>Portfolio Builder</h2>
            <div className ="button">
                <Link to="login" className="buttonclass btn btn-primary">Login</Link>
                <Link to="register" className="buttonclass btn btn-primary">Register</Link>
            </div>
        </div>
    )
}

export default Cover
