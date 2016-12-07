import React, { Component } from 'react';
import style from './App.css';

export default class App extends Component {

render() {
  return (
    <div className= "test">
      <h1>HELLO</h1>

      {this.props.children}

    </div>
    );
  }
};

