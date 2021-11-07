import React from 'react'

import './ProjectForm.css'

function ProjectForm() {
    return (
        <div>
            <div class="container">
                <h2>Project Addition Form</h2>
                <div class="head">
                    <div class="one">
                        <textarea cols="30" rows="1">Project Name</textarea>
                    </div>
                    <div class="two">
                        Start Date
                        <input type="date"/>
                    </div>
                    <div class="three">
                        End Date
                        <input type="date"/>
                    </div>
                </div>
                <div class="body">
                    <div class ="projectDesc">
                        <textarea name="Description" id="Desc" cols="30" rows="10">Project Description</textarea>
                    </div>
                    
                    <div class="dropdown">dropdown</div> 
                </div>
                <div class="url">
                    <input type="url" id="urlid" />
                </div>
                <button class="addProject">Add Project</button>
            </div>
        </div>
    )
}

export default ProjectForm
