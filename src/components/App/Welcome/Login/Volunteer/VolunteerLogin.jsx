import React, { Component } from 'react';
import style from '../Login.css';

export default class VolunteerLogin extends Component {

  render() {
    return (
      <div className= "login-container">

        <h1 className='login-title'>VOLUNTEER LOGIN</h1>

        <br />
        <div className='login-input-container'>
          <input
            className="user"
            type="text"
            placeholder="Username"
            value={this.props.volunteerUsername}
            onChange={this.props.updateVolunteerUsername}
          />

          <br />
          <br />

          <input
            className="pass"
            type="password"
            placeholder="Password"
            value={this.props.volunteerPassword}
            onChange={this.props.updateVolunteerPassword}
          />


          <br />
          <br />
          <button className="login-button" onClick={this.props.simpleVolunteerAuth}> Log In </button>

          <br />

          <p className="or">-or-</p>

          <button className="register-button" onClick={this.props.ShowModal}>Register</button>

        </div>
      </div>

    );
  }
}
