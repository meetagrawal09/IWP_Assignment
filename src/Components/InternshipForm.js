import React,{useState,useEffect} from 'react'

import './InternshipForm.css'

import {useHistory} from 'react-router-dom';

function InternshipForm({id,identity,update,instance,handleNoUpdate}) {

    const [internship,setInternship] = useState({})
   
    let history = useHistory()
    
    useEffect(()=>{
        if(update === true)
        {
            setInternship(instance)
        }
    },[instance,update])


    const handleChange = (e)=>{
        const {name,value} = e.target

        setInternship({
            ...internship,
            [name]:value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()        

        var url = 'http://127.0.0.1:8000/api/internship/add-internship'

        if(update === true)
        {
            url = `http://127.0.0.1:8000/api/internship/${identity}/`
        }

        fetch(url ,{
                method:'POST',
                headers:{ 
                    'Content-type':'application/json',
                    'x-auth-token':''
                },
                body:JSON.stringify(internship)
            })
            .then((response)=>{
                setInternship({})
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
