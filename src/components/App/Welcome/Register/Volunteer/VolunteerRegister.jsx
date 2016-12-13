import React, { Component } from 'react';
// import style from './Login.css';

export default class VolunteerRegister extends Component {
  constructor(props) {
    super();

    this.state = {
      form_volunteer_username: '',
      form_volunteer_password: '',
      form_volunteer_first_name: '',
      form_volunteer_last_name: '',
      form_volunteer_age: '',
      form_volunteer_email: '',
      form_volunteer_phone: '',
      form_volunteer_gender: '',
      form_volunteer_state: '',
      form_volunteer_user_type: '',
      form_volunteer_qr: '',
    };
  }

//eVolunteer SIGN UP PAGE

  updateVolunteerUsername(e) {
    this.setState({
      form_volunteer_username: e.target.value,
      form_volunteer_qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + e.target.value,
    });
  }

  updateVolunteerPassword(e) {
    this.setState({
      form_volunteer_password: e.target.value,
    });
  }

  updateVolunteerFirstName(e) {
    this.setState({
      form_volunteer_first_name: e.target.value,
    });
  }

  updateVolunteerLastName(e) {
    this.setState({
      form_volunteer_last_name: e.target.value,
    });
  }

  updateVolunteerAge(e) {
    this.setState({
      form_volunteer_age: e.target.value,
    });
  }

  updateVolunteerGender(e) {
    this.setState({
      form_volunteer_gender: e.target.value,
    });
  }

  updateVolunteerState(e) {
    this.setState({
      form_volunteer_state: e.target.value,
    });
  }

  updateVolunteerEmail(e) {
    this.setState({
      form_volunteer_email: e.target.value,
    });
  }

  updateVolunteerPhone(e) {
    this.setState({
      form_volunteer_phone: e.target.value,
    });
  }


  // submits the registration form
  handleVolunteerFormSubmit() {
    fetch('/volunteer', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.form_volunteer_username,
        password: this.state.form_volunteer_password,
        first_name: this.state.form_volunteer_first_name,
        last_name: this.state.form_volunteer_last_name,
        age: this.state.form_volunteer_age,
        gender: this.state.form_volunteer_gender,
        state: this.state.form_volunteer_state,
        email: this.state.form_volunteer_email,
        phone: this.state.form_volunteer_phone,
        qr: this.state.form_volunteer_qr,
      })
    })
    .then(this.setState({
      form_volunteer_username: '',
      form_volunteer_password: '',
      form_volunteer_first_name: '',
      form_volunteer_last_name: '',
      form_volunteer_age: '',
      form_volunteer_gender: '',
      form_volunteer_state: '',
      form_volunteer_email: '',
      form_volunteer_phone: '',
      form_volunteer_qr: '',
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
          value={this.state.form_volunteer_username}
          onChange={event => this.updateVolunteerUsername(event)}
        />
        <br />
        <input
          className="pass"
          type="text"
          placeholder="Create Password"
          value={this.state.form_volunteer_password}
          onChange={event => this.updateVolunteerPassword(event)}
        />
        <br />
        <input
          className="first"
          type="text"
          placeholder="First Name"
          value={this.state.form_volunteer_first_name}
          onChange={event => this.updateVolunteerFirstName(event)}
        />
        <br />
        <input
          className="last"
          type="text"
          placeholder="Last Name"
          value={this.state.form_volunteer_last_name}
          onChange={event => this.updateVolunteerLastName(event)}
        />
        <br />
        <input
          className="age"
          type="text"
          placeholder="Age"
          value={this.state.form_volunteer_age}
          onChange={event => this.updateVolunteerAge(event)}
        />
        <br />
        <input
          className="gender"
          type="text"
          placeholder="Gender"
          value={this.state.form_volunteer_gender}
          onChange={event => this.updateVolunteerGender(event)}
        />
        <br />
        <input
          className="state"
          type="text"
          placeholder="State"
          value={this.state.form_volunteer_state}
          onChange={event => this.updateVolunteerState(event)}
        />
        <br />
        <input
          className="email"
          type="text"
          placeholder="Email"
          value={this.state.form_volunteer_email}
          onChange={event => this.updateVolunteerEmail(event)}
        />
        <br />
        <input
          className="phone"
          type="text"
          placeholder="Phone"
          value={this.state.form_volunteer_phone}
          onChange={event => this.updateVolunteerPhone(event)}
        />
        <br />

        <button onClick={() => this.handleVolunteerFormSubmit()}>Sign Up</button>

      </div>
    </div>

  );
}
};
