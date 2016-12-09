import React, { Component } from 'react';
// import style from './Login.css';

export default class AdminLogin extends Component {

render() {
  return (
    <div className= "test">
        <h1>Admin Login Change</h1>
        <button onClick={this.props.ShowModal}>Register</button>
    </div>

    );
  }
};
