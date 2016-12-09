import React, { Component } from 'react';
// import style from './Login.css';

export default class AdminRegister extends Component {

render() {
  return (
    <div>
        <div className='hOne'>
            <h1>SIGN UP</h1>
          </div>

        <div className="signup-inputContainer">
          <input
            className="user"
            type="text"
            placeholder="Create Username"
            value={this.props.admin_username}
            onChange={this.props.updateFormUsername}
          />
          <br/>
          <input
            className="pass"
            type="text"
            placeholder="Create Password"
            value={this.props.admin_password}
            onChange={this.props.updateFormPassword}
          />
          <br/>
          <input
            className="first"
            type="text"
            placeholder="First Name"
            value={this.props.admin_first_name}
            onChange={this.props.updateFormFirstName}
          />
          <br/>
          <input
            className="last"
            type="text"
            placeholder="Last Name"
            value={this.props.admin_last_name}
            onChange={this.props.updateFormLastName}
          />
          <br/>
          <input
            className="age"
            type="text"
            placeholder="Age"
            value={this.props.admin_age}
            onChange={this.props.updateFormAge}
          />
          <br/>
          <input
            className="gender"
            type="text"
            placeholder="Gender"
            value={this.props.admin_gender}
            onChange={this.props.updateFormGender}
          />
          <br/>
          <input
            className="state"
            type="text"
            placeholder="State"
            value={this.props.admin_state}
            onChange={this.props.updateFormState}
          />
          <br/>
          <input
            className="email"
            type="text"
            placeholder="Email"
            value={this.props.admin_email}
            onChange={this.props.updateFormEmail}
          />
          <br/>

          <a href='/#/login'><button onClick={this.props.handleFormSubmit}>Sign Up</button></a>


        </div>
    </div>

    );
  }
};
