import React from 'react'
import './Cover.css'

import {Link} from 'react-router-dom';
function Cover() {

    

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                        <Link to="/" className="navbar-brand">Portfolio Maker</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse ms-auto" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="login" className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="register" className="nav-link">Register</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
            </nav>
            <header>
                <h1 className="heading head">Portfolio Maker</h1>
                <h3>The Nature of a Portfolio is that it's always a Work in Progress</h3>
            </header>
            
        </div>
    )
}

export default Cover
