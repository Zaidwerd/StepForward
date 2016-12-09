import React, { Component } from 'react';
import AdminLogin from './Welcome/Login/Admin/AdminLogin.jsx';
import VolunteerLogin from './Welcome/Login/Volunteer/VolunteerLogin.jsx';
import AdminRegister from './Welcome/Register/Admin/AdminRegister.jsx'
import VolunteerRegister from './Welcome/Register/Volunteer/VolunteerRegister.jsx'
import Admin from './Admin/Admin.jsx'
import Volunteer from './Volunteer/Volunteer.jsx'
import './../../normalize.css';
import style from './App.css';

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      admin_username: '',
      admin_password: '',
      admin_first_name: '',
      admin_last_name: '',
      admin_age: '',
      admin_email: '',
      admin_gender: '',
      admin_state: '',
      admin_user_type: '',
      volunteer_username: '',
      volunteer_password: '',
      volunteer_first_name: '',
      volunteer_last_name: '',
      volunteer_age: '',
      volunteer_email: '',
      volunteer_gender: '',
      volunteer_state: '',
      volunteer_user_type: '',
      volunteer_qr: '',
    login: {
      username: '',
      password: '',
      loggedIn: false,
      user_type: '',
    },
    currentUser: null,
    }
  }

  adminRegisterShowModal(e){
    // console.log("here")
    document.querySelector('#admin-register').style.display = "block";
    document.querySelector('#admin-login').style.display = "none";
    document.querySelector('#volunteer-login').style.display = "none";
  }


render() {
  return (
    <container className= "test">
      <div>
        <h1>HELLO</h1>

        <div id = "admin-login">
          <AdminLogin
          ShowModal= {event => this.adminRegisterShowModal(event)}
          />
        </div>

        <div id = "volunteer-login">
          <VolunteerLogin />
        </div>

        <div id = "admin-register">
          <AdminRegister />
        </div>

        <div id = "volunteer-register">
          <AdminRegister />
        </div>

      </div>

      <div id = "admin">
        <Admin />
      </div>

      <div id = "volunteer">
        <Volunteer />
      </div>

    </container>
    );
  }
};

