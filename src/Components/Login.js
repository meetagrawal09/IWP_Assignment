import React,{useState} from 'react'

import {useHistory,Link} from 'react-router-dom'

import './Login.css'

function login({handleLogin}) {

    const [msgs,setMsgs] = useState("")
    
    const [login,setLogin] = useState({})

    const [token,setToken] = useState({})

    const handleChange = (e)=>{
        const {name,value} = e.target

        setLogin({
            ...login,
            [name]:value
        })

    }

    const handleSubmit = (e)=>{

        e.preventDefault()
        console.log(login)

        const url = 'http://127.0.0.1:8000/api/auth/'
        fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'x-auth-token':''
            },
            body:JSON.stringify(login)
        })
        .then((response)=>response.json())
        .then((data)=>{
            setToken(data)
            console.log(data)
            if(token.token!=="")
            {
                handleLogin(data)
                history.push("/")
            }
            else
            {
                setMsgs(data.msg)
                console.log("HERE")
            }
        })
        .catch(function(error){
            console.log('ERROR:',error)
        })

        localStorage.setItem("token", {token});
    }


    return (
        <div>
            <h2>Login Page</h2>
            <div className="container">
                <label>Email id:</label><br/>
                <input type="text" className="username"/><br/>
                <label>Password:</label><br/>
                <input type="password" className = "passowrd"/>
                <br/>
            
            </div>
            <button className="buttonclass">Login</button> 
            <button className="buttonclass">Register</button>
        </div>
    )
}

export default login
