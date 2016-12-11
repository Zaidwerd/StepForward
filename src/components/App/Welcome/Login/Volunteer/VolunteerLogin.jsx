import React, { Component } from 'react';
// import style from './Login.css';

export default class VolunteerLogin extends Component {
  constructor(props) {
    super();

    this.state = {
    }
  }

render() {
  return (
    <div className= "test">
        <div className='userBox'>

          <div className='hOne'>
            <h1>VOLUNTEER LOGIN</h1>
          </div>
          <br/>
          <div className='inputContainer'>
            <input className='user'
            type="text"
            placeholder="Username"
            value={this.props.volunteerUsername}
            onChange={this.props.updateVolunteerUsername}
            />

            <input className='pass'
            type="text"
            placeholder="Password"
            value={this.props.volunteerPassword}
            onChange={this.props.updateVolunteerPassword}
            />


            <br/>
            <button onClick={this.props.simpleVolunteerAuth}> Log In </button>

            <br/>

            <p className="or">-or-</p>

            <button onClick={this.props.ShowModal}>Register</button>

          </div>

        </div>
    </div>

    );
  }
};
