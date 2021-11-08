import './App.css';
import React,{useState,useEffect} from 'react';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ProjectForm from './Components/ProjectForm'
import InternshipForm from './Components/InternshipForm'
import Register from './Components/Register'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Cover from './Components/Cover'

function App() {

  return (
    <Router>   
      <div className="app">
        <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/internship">
            <InternshipForm/>
          </Route>
          <Route path="/project">
            <ProjectForm/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/">
            <Cover/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
