import React,{useState,useEffect} from 'react'

import { Link,Redirect } from "react-router-dom";

import Title from './Title';

import avatar from "./images/avatar.jpg";

import Slide from 'react-reveal/Slide';

function Profile({id,login,handleUpdate,handleLogout,user,token}) {

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
        .catch((err)=>console.log(err))
    },[])

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/project/get-projects/${id}/`)
        .then((response)=>response.json())
        .then((data)=>{
            setProjects(data)
            setFilterProjects(data)
        })
        .catch((err)=>console.log(err))
    },[id,projects])

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/internship/get-internships/${id}/`)
        .then((response)=>response.json())
        .then((data)=>{
            setInternships(data)
        })
        .catch((err)=>console.log(err))
    },[id])

    const fetchProjects=()=>{
        fetch(`http://127.0.0.1:8000/api/project/get-projects/${id}/`)
        .then((response)=>response.json())
        .then((data)=>{
            setProjects(data)
        })
        .catch((err)=>console.log(err))
    }

    const fetchInters=()=>{
        fetch(`http://127.0.0.1:8000/api/internship/get-internships/${id}/`)
        .then((response)=>response.json())
        .then((data)=>{
            setInternships(data)
        })
        .catch((err)=>console.log(err))
    }

    const handleDelete = (type,p_id)=>{

        fetch(`http://127.0.0.1:8000/api/${type}/delete-${type}/${p_id}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'x-auth-token':token
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
                return project?.tag === value
            })

            setFilterProjects(filteredSet)
        }
    }

    const mystyle={
        maxWidth: "540px",
    }

    if(!login){
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <Title />
            <div className="card mb-3 container" style={{ mystyle }}>
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={avatar} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">NAME: {user?.name}</h5>
                            <p className="card-text">DESCRIPTION: {user?.description}</p>
                            <p className="card-text"><small className="text-muted">CGPA: {user?.cgpa}</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <button type="button" className="btn stupo-btn-dark m-3 sm"> <a href={user?.email}>Email</a></button>
                <Link to="/project">
                    <button type="button" className="btn stupo-btn-dark m-3 sm" >Add Project</button>
                </Link>
                <Link to="/internship">
                    <button type="button" className="btn stupo-btn-dark m-3 sm" >Add Internship</button>
                </Link>
                <button className="btn stupo-btn-dark m-3 sm" onClick={handleLogout}>Logout</button>
            </div>


            <div className="container col-4 mx-5">
                <select className="form-select mb-3" name="t" id="tag" onChange={handleFilter}>
                    <option>All</option>
                    {
                        t.map(function(tag){
                            return <option key={tag.id} >{tag.tag_name}</option>
                        })
                    }
                            
                </select>
            </div>
            <hr/>
            {projects.length!==0 &&<h2>My Projects</h2>}
            
            {filterProjects.map(function(project){
                return <Slide left><div key={project._id}>
                            <div className="card mb-3 mt-2 container" style={{ mystyle }} >
                                <div className="row g-0">
                                    <div className="col-md-3 mt-2">
                                        <h3>{project.title}</h3>
                                        <h6>{project.date_start} - {project.date_end}</h6>
                                        <h5 className="btn btn-warning">{project.tag}</h5>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p>{project.description}</p>
                                            <button type="button" className="btn stupo-btn-dark m-3 btn-sm"> <a href={project.link}>Link</a></button>
                                            <button className="btn m-3 btn-sm stupo-btn-dark" onClick={()=>handleDelete("project",project._id)}>Delete</button>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <hr />
                        </div>
                    </Slide> 
            })}


            {internships.length!==0&&<h2>My Internships</h2>}

            {internships.map(function(intern){
                return  <Slide left><div key={intern._id}>
                            <div className="card mb-3 mt-2 container" style={{ mystyle }}>
                                <div className="row g-0">
                                    <div className="col-md-3 mt-2">
                                        <h3>{intern.company_name}</h3>
                                        <h6>{intern.date_start} - {intern.date_end}</h6>
                                        <h5>{intern.job_title}</h5>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p>{intern.description}</p>
                                            <button onClick={()=>handleDelete("internship",intern._id)} className="btn m-3 btn-sm stupo-btn-dark" >Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <hr/>
                        </div>
                    </Slide>
            })}

        </div>
    )
}

export default Profile