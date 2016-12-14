import React, { Component } from 'react';
import style from './AdminChat.css';

export default class VolunteerChat extends Component {
  componentWillMount() {
    this.socketFn();
  }

  socketFn() {
    // receive data from server through socket 'chatroom'
    const socket = io();
    socket.on('chatroom', msg => {
      console.log('data on frontend', msg);
      const ul = document.getElementById('admin-message');
      const li = document.createElement('li');
      li.innerHTML = msg.msg;
      ul.appendChild(li);
    });
  }

  handleSubmit(e) {
    // console.log('submit event', e.target);
    e.preventDefault();
    const socket = io();
    const i = document.getElementById('admin-m');
    // send data to server through socket 'server-chat'
    socket.emit('server-chat', i.value);
    i.value = '';
  }

  handleInputChange(e) {
    // console.log(e.target.value)
    this.setState({
      msg: e.target.value,
    });
  }

  render() {
    return(
      <div className="volunteer-chat">
        <div className="volunteer-chat-screen">
          <ul id="admin-message"></ul>
        </div>
        <div className="socket-form">
          <form onSubmit={event => this.handleSubmit(event)}>
            <input id="admin-m" onChange={event => this.handleInputChange(event)}/>
            <button className="volunteer-button">Send</button>
          </form>
        </div>
      </div>
    );
  }
}
