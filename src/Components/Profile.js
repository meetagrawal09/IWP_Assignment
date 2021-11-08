import React from 'react'

import profileimg from './images/def_profile.jpg'
import './Profile.css'

function Profile() {
    return (
        <div>
            <div className="container">
                <div className="head">
                    <div id="head1">
                        <img src={profileimg} alt="dp" id="image"/>
                    </div>
                    <div id="head2">
                        <span>Name</span><br/>
                        <span>Branch</span><br/>
                        <span>Year of Study</span><br/>
                        <span>College</span><br/>
                        <p id="information">Info</p>
                    </div>
                </div>
                <div class="body">
                    <div id="body1">
                        <div id="body11">
                            <span>Sharable Link</span><br/>
                            <span>Email ID</span><br/>
                        </div>
                        <div id="body12">
                            <input className="btn btn-success" type="button" value="Github Link"/>
                            <input className="btn btn-primary" type="button" value="LinkedIn Link"/>
                        </div>  
                    </div>
                    <div id="body2">
                        <div id="body21">
                            <input type="button" value="Add Project" id="AddProject"/><br/>
                            <input type="button" value="Browse" id="Browse"/>
                        </div>
                        <div id="body22">
                            <input type="button" value="Resume" id="Resume"/>
                        </div>
                    </div>
                </div>
                <div className="tail">
                </div>
            </div>
        </div>
    )
}

export default Profile