import React from 'react'

import './InternshipForm.css'
function InternshipForm() {
    return (
        <div>
            <div className="container">
                <h2>Internship Addition Form</h2>
                <div className="head">
                    <div className="one">
                        <textarea cols="30" rows="1">Employer Name</textarea>
                        <textarea cols="30" rows="1">Position Name</textarea>
                    </div>
                    <div className="two">
                        Start Date
                        <input type="date"/>
                    </div>
                    <div className="three">
                        End Date
                        <input type="date"/>
                    </div>
                </div>
                <div className="body">
                    <div className ="projectDesc">
                        <textarea name="Description" id="Desc" cols="30" rows="10">Job Description</textarea>
                    </div>
                    <div className="dropdown">dropdown</div>                    
                </div>
                <div className="url">
                    link
                    <input type="url" id="urlid"/>
                </div>
                <button className="addProject">Add Internship</button>
            </div>
        </div>
    )
}

export default InternshipForm
