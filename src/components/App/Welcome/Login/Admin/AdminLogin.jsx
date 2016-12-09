import React, { Component } from 'react';
// import style from './Login.css';

export default class AdminLogin extends Component {
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
            <h1>ADMIN LOG IN</h1>
          </div>
          <br/>
          <div className='inputContainer'>
            <input className='user'
            type="text"
            placeholder="Username"
            value={this.props.state.login.username}
            onChange={this.props.updateUsername}
            />

            <input className='pass'
            type="text"
            placeholder="Password"
            value={this.props.state.login.password}
            onChange={this.props.updatePassword}
            />


            <br/>
            <button onClick={this.props.simpleAuth}> Log In </button>

            <br/>

            <p className="or">-or-</p>

            <button onClick={this.props.ShowModal}>Register</button>

          </div>

        </div>
    </div>

    );
  }
};
