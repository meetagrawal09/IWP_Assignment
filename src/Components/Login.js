import React from 'react'

import './Login.css'

function login() {
    return (
        <div>
            <h2>Login Page</h2>
            <div className="container">
                <label>Email id:</label><br/>
                <input type="text" className="username"/><br/>
                <label>Password:</label><br/>
                <input type="password" className = "passowrd"/>
                <br/>
            
            </div>
            <button className="buttonclass">Login</button> 
            <button className="buttonclass">Register</button>
        </div>
    )
}

export default login
