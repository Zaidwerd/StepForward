import React, { Component } from 'react';
import style from './Volunteer.css';

export default class Volunteer extends Component {

render() {
  return (
    <div className= "test">

      <h1>Volunteer</h1>

    <div id= "volunteer-data">
      <h1>Data</h1>
        <h2>{this.props.volunteerUsername}</h2>
        <img src={this.props.volunteerQR}/>
    </div>

    <div id= "volunteer-chat">
      <h1>Announcements</h1>
    </div>

    </div>

    );
  }
};
