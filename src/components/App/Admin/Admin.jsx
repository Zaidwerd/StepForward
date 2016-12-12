import React, { Component } from 'react';
import style from './Admin.css';
import QR from './QR.jsx';

export default class Admin extends Component {

  adminQRShowModal(e){
    // console.log("here")
    document.querySelector('#admin-qr').style.display = "inline-block";
    document.querySelector('#admin-chat').style.display = "none";
  }

  adminQRHideModal(e){
    // console.log("here")
    document.querySelector('#admin-qr').style.display = "none";
    document.querySelector('#admin-chat').style.display = "inline-block";
  }

render() {
  return (
    <div className= "test">
      <br/>
      <div id="admin-list">
        <h1>Volunteers</h1>
        <button onClick={event => this.adminQRShowModal(event)}> Scan </button>
      </div>

      <div id="admin-chat">
        <h1>Announcements</h1>
      </div>

      <div id="admin-qr">
        <QR
         hideQR= {event => this.adminQRHideModal(event)}
        />
      </div>
    </div>

    );
  }
};
