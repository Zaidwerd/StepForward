import React, { Component } from 'react';
import style from './Admin.css';
import QR from './QR.jsx';
import Search from './Search.jsx';
import AdminChat from '../Socket/AdminChat.jsx'

export default class Admin extends Component {

  adminQRShowModal(e) {
    // console.log("here")
    document.querySelector('#admin-qr').style.display = 'inline-block';
    document.querySelector('#admin-chat').style.display = 'none';
  }

  adminQRHideModal(e) {
    // console.log("here")
    document.querySelector('#admin-qr').style.display = 'none';
    document.querySelector('#admin-chat').style.display = 'inline-block';
  }

  render() {
    return (
      <div className="test">
        <br />
        <div id="admin-list">
          <div id="volunteer-list">
            <h1>Welcome {this.props.adminFirstName}</h1>
            <Search
              showQR={event => this.adminQRShowModal(event)}
            />
          </div>
        </div>

        <div id="admin-chat">
          <h1>Announcements</h1>
          <AdminChat />
        </div>

        <div id="admin-qr">
          <QR
            hideQR={event => this.adminQRHideModal(event)}
          />
        </div>
      </div>

    );
  }
}
