import React, { Component } from 'react';
import style from './App.css';
import Login from './Welcome/Login.jsx';
import Register from './Welcome/Register.jsx'
import Admin from './Admin/Admin.jsx'
import Volunteer from './Volunteer/Volunteer.jsx'

export default class App extends Component {

render() {
  return (
    <container className= "test">
      <div>
        <h1>HELLO</h1>
        <Login />
        <Register />
      </div>

      <div className = "admin">
        <Admin />
      </div>

      <div className = "volunteer">
        <Volunteer />
      </div>

    </container>
    );
  }
};

