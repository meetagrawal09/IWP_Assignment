import React, {useState,useEffect} from 'react'

import './ProjectForm.css'

import {useHistory} from 'react-router-dom';

function ProjectForm() {
    
    const [tags,setTags] = useState([])

    const [project,setProject] = useState({})

    let history = useHistory()

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/tag/get-tags')
        .then((response)=>response.json())
        .then((data)=>{
            setTags(data)
        })
    }, [])

    useEffect(()=>{
        if(update === true)
        {
            setProject(instance)
        }
    },[instance,update])

    const handleChange=(e)=>{
        const {name,value} = e.target

        setProject({
            ...project,
            [name]:value
        })
    }

    const handleTag=(e)=>{
        const {value} = e.target

        var i
        for( i=0 ;i<=tags.length;i++)
        {
            if(tags[i].tag_name===value)
            {
                break
            }
        }

        setProject({
            ...project,
            tags:[i+1]
        })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()        

        var url = 'http://127.0.0.1:8000/api/project/add-project'

        if(update===true)
        {
            url = `http://127.0.0.1:8000/api/project/${identity}/`
        }

        fetch(url ,{
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                    'x-auth-token':''
                },
                body:JSON.stringify(project)
            })
            .then((response)=> {
                setProject({})
                console.log('RESPONSE IS:',response)
                console.log("added")
                history.push("/")
                if(update === true){
                    handleNoUpdate()
                }
            })
            .catch(function(error){
            console.log('ERROR:',error)
        })

    }

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
