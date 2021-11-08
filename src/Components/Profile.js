import React,{useState,useEffect} from 'react'

import { Link,Redirect } from "react-router-dom";
import profileimg from './images/def_profile.jpg'
import './Profile.css'

function Profile({id,login,handleUpdate,handleLogout,user}) {
   
    const [t,setTags] = useState([])

    const [projects,setProjects] = useState([])

    const [filterProjects,setFilterProjects] = useState([])

    const [internships,setInternships] = useState([])


    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/tag/get-tags/')
        .then((response)=>response.json())
        .then((data)=>{
            setTags(data)
        })

    },[])

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/project/get-projects/`)
        .then((response)=>response.json())
        .then((data)=>{
            setProjects(data)
            setFilterProjects(data)
        })
    },[id])

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/internship/get-internship/${id}/`)
        .then((response)=>response.json())
        .then((data)=>{
            setInternships(data)
        })
    },[id])

    const fetchProjects=()=>{
        fetch(`http://127.0.0.1:8000/api/project-list/${id}/`)
        .then((response)=>response.json())
        .then((data)=>{
            setProjects(data)
        })
    }

    const fetchInters=()=>{
        fetch(`http://127.0.0.1:8000/api/internship-list/${id}/`)
        .then((response)=>response.json())
        .then((data)=>{
            setInternships(data)
        })
    }

    const handleDelete = (type,id)=>{

        fetch(`http://127.0.0.1:8000/api/delete-${type}/${id}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'x-auth-token':''
            },
        })
        .then((response)=>{
            console.log("DELETE SUCCESS")
            if(type === "project")
            {
                fetchProjects()
            }
            else
            {
                fetchInters()
            }

        })
        .catch(function(error){
            console.log('ERROR:',error)
        })
    }


    const handleFilter=(e)=>{

        const {value} = e.target

        if(value==="All")
        {
            setFilterProjects(projects)
        }
        else{
            var filteredSet = projects.filter((project)=>{
                return t[(project.tags[0])-1]?.tag_name === value
            })

            setFilterProjects(filteredSet)
        }
        
    }
    
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