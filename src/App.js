import React,{useState} from 'react'
import InternshipForm from './InternshipForm'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


import ProjectForm from "./ProjectForm";
import Profile from './Profile';
import Register from './Register';
import Login from './Login';
import Cover from './Cover';

function App() {
  

  const [isLogin,setIsLogin] = useState(false)

  const [update,setUpdate] = useState(false)

  const [identity,setId] = useState(0)

  const [obj,setObj] = useState({})

  const [user,setUser]=useState({})

  const [token,setToken] = useState()
 

  const handleLogin=(data)=>{ 
    if (data.token !== "")
    {
        setIsLogin(true)
        setUser(data.user)
        setToken(data.token)
    }

    console.log(data)

  }

  const handleUpdate = (i,instance)=>{
    setUpdate(true)
    setId(i)
    setObj(instance)
  }
  
  const handleNoUpdate=()=>{
    setUpdate(false)
    setId(0)
    setObj({})
  }

  const handleLogout=()=>{
    setIsLogin(false)
    setUser({})

  }

  return (
    
  <Router>   
    <div className="app">
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/internship">
          <InternshipForm token={token} id={user?.id} login={isLogin} update={update} identity={identity} instance = {obj} handleNoUpdate={handleNoUpdate}/>
        </Route>
        <Route path="/project">
          <ProjectForm token={token} id={user?.id} login={isLogin} update={update} identity={identity} instance = {obj} handleNoUpdate={handleNoUpdate}/>
        </Route>
        <Route path="/profile">
          <Profile token={token} user={user} id={user?.id} login={isLogin} handleUpdate={handleUpdate} handleLogout={handleLogout}/>
        </Route>
        <Route path="/">
          <Cover/>
        </Route>
      </Switch>
    </div>
  </Router>
    
  )
}

export default App
