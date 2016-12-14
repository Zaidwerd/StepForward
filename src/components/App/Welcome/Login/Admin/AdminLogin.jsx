import React, { Component } from 'react';
import style from '../Login.css';

export default class AdminLogin extends Component {

render() {
  return (
    <div id="login-container">

      <h1 className="login-title">ADMIN LOGIN</h1>

      <br />
      <div className="login-input-container">
        <input
          className="user"
          type="text"
          placeholder="Username"
          value={this.props.adminUsername}
          onChange={this.props.updateAdminUsername}
        />

        <br />
        <br />

        <input
          className="pass"
          type="password"
          placeholder="Password"
          value={this.props.adminPassword}
          onChange={this.props.updateAdminPassword}
        />


        <br />
        <br />
        <button className="login-button" onClick={this.props.simpleAdminAuth}> Log In </button>

        <br />

        <p className="or">-or-</p>

        <button className="register-button" onClick={this.props.ShowModal}>Register</button>

      </div>
    </div>

  );
}
}
