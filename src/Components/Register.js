import React,{useState} from 'react'

import {useHistory,Link} from 'react-router-dom';

import './Register.css'

function Register() {

    const [student,setStudent] = useState({})

    const handleChange=(e)=>{
        const {name,value} = e.target

        setStudent({
            ...student,
            [name]:value
        })

    }

    const handleSubmit=(e)=>{
        const url = 'http://127.0.0.1:8000/api/user/'

        e.preventDefault()

        fetch(url ,{
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                    'x-auth-token':''
                },
                body:JSON.stringify(student)
            })
            .then((response)=> {
                history.push("/login")
                setStudent({})
            })
            .catch(function(error){
                console.log('ERROR:',error)
        })
    }


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
