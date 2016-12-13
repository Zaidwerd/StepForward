import React, { Component } from 'react';
import VolunteerChat from '../Socket/VolunteerChat.jsx';
import './Volunteer.css';

export default class Volunteer extends Component {

  render() {
    return (
      <div className="test">
        <div id="volunteer-data">
          <h1>Welcome {this.props.volunteerFirstName}</h1>
          <img src={this.props.volunteerQR} alt="volunteer qr code" />
        </div>

        <div id="volunteer-chat">
          <h1>Announcements</h1>
          <VolunteerChat />
        </div>

      </div>

    );
  }
};
