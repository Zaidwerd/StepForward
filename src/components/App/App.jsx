import React, { Component } from 'react';
import AdminLogin from './Welcome/Login/Admin/AdminLogin.jsx';
import VolunteerLogin from './Welcome/Login/Volunteer/VolunteerLogin.jsx';
import AdminRegister from './Welcome/Register/Admin/AdminRegister.jsx';
import VolunteerRegister from './Welcome/Register/Volunteer/VolunteerRegister.jsx';
import Admin from './Admin/Admin.jsx';
import Volunteer from './Volunteer/Volunteer.jsx';
import style from './App.css';

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      admin_id: '',
      admin_username: '',
      admin_password: '',
      admin_first_name: '',
      admin_last_name: '',
      admin_age: '',
      admin_email: '',
      admin_gender: '',
      admin_state: '',
      admin_user_type: '',
      admin_phone: '',
      volunteer_id: '',
      volunteer_username: '',
      volunteer_password: '',
      volunteer_first_name: '',
      volunteer_last_name: '',
      volunteer_age: '',
      volunteer_email: '',
      volunteer_phone: '',
      volunteer_gender: '',
      volunteer_state: '',
      volunteer_user_type: '',
      volunteer_qr: '',
      admin_login: {
        username: '',
        password: '',
        loggedIn: false,
      },
      volunteer_login: {
        username: '',
        password: '',
        loggedIn: false,
      },
      currentUser: null,
      currentEvent: null,
    };
  }

  // ADMIN LOGIN

  adminLogIn(a) {
    // console.log(a);
    this.setState({
      currentUser: a.id,
      admin_login: {
        username: a.username,
        password: a.password,
        loggedIn: true,
      },
      admin_id: a.id,
      admin_username: a.username,
      admin_password: a.password,
      admin_first_name: a.first_name,
      admin_last_name: a.last_name,
      admin_age: a.age,
      admin_email: a.email,
      admin_phone: a.phone,
      admin_gender: a.gender,
      admin_state: a.state,
      admin_user_type: a.user_type,
    });
    document.querySelector('#admin').style.display = "block";
    document.querySelector('#admin-login').style.display = "none";
    document.querySelector('#volunteer-login').style.display = "none";
  }

  // grabs the password from the admin login form
  updateAdminPassword(e) {
    this.setState({
      admin_login: {
        username: this.state.admin_login.username,
        password: e.target.value,
        loggedIn: false,
      },
    });
  }
  // grabs the username from the admin login form
  updateAdminUsername(e) {
    this.setState({
      admin_login: {
        username: e.target.value,
        password: this.state.admin_login.password,
        loggedIn: false,
      },
    });
  }

  // user admin authorization
  simpleAdminAuth() {
    console.log("got here");
    fetch('/auth/admin', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.admin_login.username,
        password: this.state.admin_login.password,
      }),
    })
    .then(r => r.json())
    .then(this.setState({
      admin_login: {
        username: '',
        password: '',
        loggedIn: false,
      },
    }))
    .then(this.adminLogIn.bind(this))
    .catch(err => console.log(err));
  }

  // VOLUNTEER LOGIN

  volunteerLogIn(a) {
    // console.log(a);
    this.setState({
      currentUser: a.id,
      volunteer_login: {
        username: a.username,
        password: a.password,
        loggedIn: true,
      },
      volunteer_id: a.id,
      volunteer_username: a.username,
      volunteer_password: a.password,
      volunteer_first_name: a.first_name,
      volunteer_last_name: a.last_name,
      volunteer_age: a.age,
      volunteer_email: a.email,
      volunteer_phone: a.phone,
      volunteer_gender: a.gender,
      volunteer_state: a.state,
      volunteer_user_type: a.user_type,
      volunteer_qr: a.qr,
    });
    document.querySelector('#volunteer').style.display = "block";
    document.querySelector('#admin-login').style.display = "none";
    document.querySelector('#volunteer-login').style.display = "none";
  }

  // grabs the password from the volunteer login form
  updateVolunteerPassword(e) {
    this.setState({
      volunteer_login: {
        username: this.state.volunteer_login.username,
        password: e.target.value,
        loggedIn: false,
      },
    });
  }
  // grabs the username from the volunteer login form
  updateVolunteerUsername(e) {
    this.setState({
      volunteer_login: {
        username: e.target.value,
        password: this.state.volunteer_login.password,
        loggedIn: false,
      },
    });
  }

  // user volunteer authorization
  simpleVolunteerAuth() {
    // console.log("got here");
    fetch('/auth/volunteer', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.volunteer_login.username,
        password: this.state.volunteer_login.password,
      }),
    })
    .then(r => r.json())
    .then(this.setState({
      volunteer_login: {
        username: '',
        password: '',
        loggedIn: false,
      },
    }))
    .then(this.volunteerLogIn.bind(this))
    .catch(err => console.log(err));
  }

// Hides modals
  adminRegisterShowModal(e){
    // console.log("here")
    document.querySelector('#admin-register').style.display = "block";
    document.querySelector('#admin-login').style.display = "none";
    document.querySelector('#volunteer-login').style.display = "none";
  }

  adminRegisterHideModal(e){
    // console.log("here")
    document.querySelector('#admin-register').style.display = "none";
    document.querySelector('#admin-login').style.display = "block";
    document.querySelector('#volunteer-login').style.display = "block";
  }

  volunteerRegisterShowModal(e){
    // console.log("here")
    document.querySelector('#volunteer-register').style.display = "block";
    document.querySelector('#admin-login').style.display = "none";
    document.querySelector('#volunteer-login').style.display = "none";
  }

  volunteerRegisterHideModal(e){
    // console.log("here")
    document.querySelector('#volunteer-register').style.display = "none";
    document.querySelector('#admin-login').style.display = "inline-block";
    document.querySelector('#volunteer-login').style.display = "inline-block";
  }

  logoutLink(e){
    document.querySelector('#admin-login').style.display = "inline-block";
    document.querySelector('#volunteer-login').style.display = "inline-block";
    document.querySelector('#volunteer-register').style.display = "none";
    document.querySelector('#admin-register').style.display = "none";
    document.querySelector('#volunteer').style.display = "none";
    document.querySelector('#admin').style.display = "none";
    this.setState({
      currentUser: null,
      admin_id: '',
      admin_username: '',
      admin_password: '',
      admin_first_name: '',
      admin_last_name: '',
      admin_age: '',
      admin_email: '',
      admin_gender: '',
      admin_state: '',
      admin_user_type: '',
      admin_phone: '',
      volunteer_id: '',
      volunteer_username: '',
      volunteer_password: '',
      volunteer_first_name: '',
      volunteer_last_name: '',
      volunteer_age: '',
      volunteer_email: '',
      volunteer_phone: '',
      volunteer_gender: '',
      volunteer_state: '',
      volunteer_user_type: '',
      volunteer_qr: '',
    });
  }

  enterSite(e) {
    document.querySelector('#landing-container').style.display = "none";
    document.querySelector('#admin-login').style.display = "inline-block";
    document.querySelector('#volunteer-login').style.display = "inline-block";
  }

  render() {
    return (
      <container id="main">
      <link href="https://fonts.googleapis.com/css?family=Aref+Ruqaa|Roboto+Condensed" rel="stylesheet" />
        <div>
          <header className="nav-container">
            <h1 className="nav-title">Step Forward</h1>
            <button className="nav-button" onClick={event => this.logoutLink(event)}>Logout</button>
          </header>

          <div id="landing-container">
            <div className="landing">
              <h1 className="landing-title">One Volunteer At A Time</h1>
              <button className="landing-button" onClick={event => this.enterSite(event)}>Enter</button>
            </div>
          </div>

          <div id="admin-login">
            <AdminLogin
              adminUsername={this.state.admin_login.username}
              adminPassword={this.state.admin_login.password}
              adminLogIn={event => this.adminLogIn(event)}
              updateAdminPassword={event => this.updateAdminPassword(event)}
              updateAdminUsername={event => this.updateAdminUsername(event)}
              simpleAdminAuth={() => this.simpleAdminAuth()}
              ShowModal={event => this.adminRegisterShowModal(event)}
            />
          </div>

          <div id="volunteer-login">
            <VolunteerLogin
              volunteerUsername={this.state.volunteer_login.username}
              volunteerPassword={this.state.volunteer_login.password}
              volunteerLogIn={event => this.volunteerLogIn(event)}
              updateVolunteerPassword={event => this.updateVolunteerPassword(event)}
              updateVolunteerUsername={event => this.updateVolunteerUsername(event)}
              simpleVolunteerAuth={event => this.simpleVolunteerAuth(event)}
              ShowModal={event => this.volunteerRegisterShowModal(event)}
            />

          </div>

          <div id="admin-register">
            <AdminRegister
              HideModal={event => this.adminRegisterHideModal(event)}
            />

          </div>

          <div id="volunteer-register">
            <VolunteerRegister
              HideModal={event => this.volunteerRegisterHideModal(event)}
            />
          </div>

        </div>

        <div id="admin">
          <Admin
            adminFirstName={this.state.admin_first_name}
          />
        </div>

        <div id="volunteer">
          <Volunteer
            volunteerUsername={this.state.volunteer_username}
            volunteerFirstName={this.state.volunteer_first_name}
            volunteerQR={this.state.volunteer_qr}
          />

        </div>

      </container>
    );
  }
}

