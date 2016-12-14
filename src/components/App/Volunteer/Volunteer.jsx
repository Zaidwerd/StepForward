import React, { Component } from 'react';
import VolunteerChat from '../Socket/Volunteer/VolunteerChat.jsx';
import './Volunteer.css';

export default class Volunteer extends Component {

  render() {
    return (
      <div id="volunteer-container">
        <div className="volunteer-data">
          <h1 className="volunteer-title">Welcome {this.props.volunteerFirstName}</h1>
          <img className="volunteer-qr" src={this.props.volunteerQR} alt="volunteer qr code" />
        </div>

        <div id="volunteer-chat">
          <h1 className="volunteer-chat-title">Announcements</h1>
          <VolunteerChat />
        </div>

      </div>

    );
  }
}
