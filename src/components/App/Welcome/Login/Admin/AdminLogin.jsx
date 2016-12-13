import React, { Component } from 'react';
// import style from './Login.css';

export default class AdminLogin extends Component {

render() {
  return (
    <div className= "test">
        <div className='userBox'>

          <div className='hOne'>
            <h1 className='header-title'>ADMIN LOG IN</h1>
          </div>
          <br/>
          <div className='inputContainer'>
            <input className='user'
            type="text"
            placeholder="Username"
            value={this.props.adminUsername}
            onChange={this.props.updateAdminUsername}
            />

            <br/>
            <br/>

            <input className='pass'
            type="password"
            placeholder="Password"
            value={this.props.adminPassword}
            onChange={this.props.updateAdminPassword}
            />


            <br/>
            <br/>
            <button onClick={this.props.simpleAdminAuth}> Log In </button>

            <br/>

            <p className="or">-or-</p>

            <button onClick={this.props.ShowModal}>Register</button>

          </div>

        </div>
    </div>

    );
  }
};
