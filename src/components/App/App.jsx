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

// ADMIN SIGN UP PAGE

  updateAdminUsername(e) {
    this.setState({
      admin_username: e.target.value,
    });
  }

  updateAdminPassword(e) {
    this.setState({
      admin_password: e.target.value,
    });
  }

  updateAdminFirstName(e) {
    this.setState({
      admin_first_name: e.target.value,
    });
  }

  updateAdminLastName(e) {
    this.setState({
      admin_last_name: e.target.value,
    });
  }

  updateAdminAge(e) {
    this.setState({
      admin_age: e.target.value,
    });
  }

  updateAdminGender(e) {
    this.setState({
      admin_gender: e.target.value,
    });
  }

  updateAdminState(e) {
    this.setState({
      admin_state: e.target.value,
    });
  }

  updateAdminEmail(e) {
    this.setState({
      admin_email: e.target.value,
    });
  }

  // submits the registration form
  handleAdminFormSubmit() {
    fetch('/admin', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.admin_username,
        password: this.state.admin_password,
        first_name: this.state.admin_first_name,
        last_name: this.state.admin_last_name,
        age: this.state.admin_age,
        gender: this.state.admin_gender,
        state: this.state.admin_state,
        email: this.state.admin_email,
      })
    })
    .then(this.setState({
      admin_username: '',
      admin_password: '',
      admin_first_name: '',
      admin_last_name: '',
      admin_age: '',
      admin_gender: '',
      admin_state: '',
      admin_email: '',
    }))
    .catch(err => console.log(err));
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
          <AdminRegister
            admin_username= {this.state.admin_username}
            admin_password= {this.state.admin_password}
            admin_first_name= {this.state.admin_first_name}
            admin_last_name= {this.state.admin_last_name}
            admin_age= {this.state.admin_age}
            admin_email= {this.state.admin_email}
            admin_gender= {this.state.admin_gender}
            admin_state= {this.state.admin_state}
            admin_user_type= {this.state.admin_user_type}
            updateFormUsername={event => this.updateAdminUsername(event)}
            updateFormPassword= {event => this.updateAdminPassword(event)}
            updateFormFirstName= {event => this.updateAdminFirstName(event)}
            updateFormLastName= {event => this.updateAdminLastName(event)}
            updateFormAge= {event => this.updateAdminAge(event)}
            updateFormGender= {event => this.updateAdminGender(event)}
            updateFormState= {event => this.updateAdminState(event)}
            updateFormEmail= {event => this.updateAdminEmail(event)}
            handleFormSubmit= {event => this.handleAdminFormSubmit(event)}/>
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

