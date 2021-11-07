import React from 'react'

import './Register.css'
function Register() {
    return (
        <div>
            <h2 id="rp">Register Page</h2>
            <div className= "register">
                <label>First Name:</label><br/>
                <input type="text" className="fname"/><br/>
                <label>Last Name:</label><br/>
                <input type="text" className="fname"/><br/>
                <label>Email id:</label><br/>
                <input type="email" className="fname"/><br/>
                <label>College Name:</label><br/>
                <input type="text" className="fname"/><br/>
                <label>Branch:</label><br/>
                <input type="text" className="fname"/><br/>
                <form>
                    <div class="c2">
                        <label >Year of Study:</label><br/>
                        <div className="yos">
                            <input type="radio" name="yos" value="1st"/>
                            <label>1st</label><br/>
                            <input type="radio" name="yos" value="2nd"/>
                            <label>2nd</label><br/>
                            <input type="radio" name="yos" value="3rd"/>
                            <label>3rd</label><br/>
                            <input type="radio" name="yos" value="4th"/>
                            <label>4th</label><br/>
                        </div>
                    </div>
                </form>
                <button id="reg">Register</button>
            </div>
        </div>
    )
}

export default Register
