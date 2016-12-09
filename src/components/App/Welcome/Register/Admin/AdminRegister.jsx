import React, { Component } from 'react';
// import style from './Login.css';

export default class AdminRegister extends Component {
  constructor(props) {
    super();

    this.state = {
      form_admin_username: '',
      form_admin_password: '',
      form_admin_first_name: '',
      form_admin_last_name: '',
      form_admin_age: '',
      form_admin_email: '',
      form_admin_gender: '',
      form_admin_state: '',
      form_admin_user_type: '',
  }
}

// ADMIN SIGN UP PAGE

  updateAdminUsername(e) {
    this.setState({
      form_admin_username: e.target.value,
    });
  }

  updateAdminPassword(e) {
    this.setState({
      form_admin_password: e.target.value,
    });
  }

  updateAdminFirstName(e) {
    this.setState({
      form_admin_first_name: e.target.value,
    });
  }

  updateAdminLastName(e) {
    this.setState({
      form_admin_last_name: e.target.value,
    });
  }

  updateAdminAge(e) {
    this.setState({
      form_admin_age: e.target.value,
    });
  }

  updateAdminGender(e) {
    this.setState({
      form_admin_gender: e.target.value,
    });
  }

  updateAdminState(e) {
    this.setState({
      form_admin_state: e.target.value,
    });
  }

  updateAdminEmail(e) {
    this.setState({
      form_admin_email: e.target.value,
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
        username: this.state.form_admin_username,
        password: this.state.form_admin_password,
        first_name: this.state.form_admin_first_name,
        last_name: this.state.form_admin_last_name,
        age: this.state.form_admin_age,
        gender: this.state.form_admin_gender,
        state: this.state.form_admin_state,
        email: this.state.form_admin_email,
      })
    })
    .then(this.setState({
      form_admin_username: '',
      form_admin_password: '',
      form_admin_first_name: '',
      form_admin_last_name: '',
      form_admin_age: '',
      form_admin_gender: '',
      form_admin_state: '',
      form_admin_email: '',
    }))
    .catch(err => console.log(err));
  }

render() {
  return (
    <div>
        <div className='hOne'>
            <h1>SIGN UP</h1>
            <button onClick={this.props.HideModal}>X</button>
        </div>

        <div className="signup-inputContainer">
          <input
            className="user"
            type="text"
            placeholder="Create Username"
            value={this.state.form_admin_username}
            onChange={event => this.updateAdminUsername(event)}
          />
          <br/>
          <input
            className="pass"
            type="text"
            placeholder="Create Password"
            value={this.state.form_admin_password}
            onChange={event => this.updateAdminPassword(event)}
          />
          <br/>
          <input
            className="first"
            type="text"
            placeholder="First Name"
            value={this.state.form_admin_first_name}
            onChange={event => this.updateAdminFirstName(event)}
          />
          <br/>
          <input
            className="last"
            type="text"
            placeholder="Last Name"
            value={this.state.form_admin_last_name}
            onChange={event => this.updateAdminLastName(event)}
          />
          <br/>
          <input
            className="age"
            type="text"
            placeholder="Age"
            value={this.state.form_admin_age}
            onChange={event => this.updateAdminAge(event)}
          />
          <br/>
          <input
            className="gender"
            type="text"
            placeholder="Gender"
            value={this.state.form_admin_gender}
            onChange={event => this.updateAdminGender(event)}
          />
          <br/>
          <input
            className="state"
            type="text"
            placeholder="State"
            value={this.state.form_admin_state}
            onChange={event => this.updateAdminState(event)}
          />
          <br/>
          <input
            className="email"
            type="text"
            placeholder="Email"
            value={this.state.form_admin_email}
            onChange={event => this.updateAdminEmail(event)}
          />
          <br/>

          <button onClick={() => this.handleAdminFormSubmit()}>Sign Up</button>

        </div>
    </div>

    );
  }
};
