import React, { Component } from 'react';
import style from './VolunteerChat.css';

// Code was help impliment with https://github.com/ga-diamonds-project3/project-3
export default class VolunteerChat extends Component {
  componentWillMount() {
    this.socketFn();
  }

  socketFn() {
    const socket = io();
    socket.on('chatroom', msg => {
      console.log('data on frontend', msg);
      const ul = document.getElementById('volunteer-message');
      const li = document.createElement('li');
      li.innerHTML = msg.msg;
      ul.appendChild(li);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const socket = io();
    const i = document.getElementById('volunteer-m');
    socket.emit('server-chat', i.value);
    i.value = '';
  }

  handleInputChange(e) {
    this.setState({
      msg: e.target.value,
    });
  }

  render() {
    return(
      <div className="volunteer-chat">
        <div className="volunteer-chat-screen">
          <ul id="volunteer-message"></ul>
        </div>
        <div className="volunteer-chat-form">
          <form onSubmit={event => this.handleSubmit(event)}>
            <input id="volunteer-m" onChange={event => this.handleInputChange(event)}/>
            <button className="volunteer-button">Send</button>
          </form>
        </div>
      </div>
    );
  }
}
