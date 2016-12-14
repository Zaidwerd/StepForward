import React, { Component } from 'react';
import style from './Admin.css';
import QR from './QR/QR.jsx';
import Search from './Search/Search.jsx';
import AdminChat from '../Socket/Admin/AdminChat.jsx'

export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: 'No result',
    };
  }

  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }

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
    const previewStyle = {
      height: 240,
      width: 320,
    }

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
            previewStyle={previewStyle}
            handleError={this.handleError}
            handleScan={this.handleScan.bind(this)}
            hideQR={event => this.adminQRHideModal(event)}
          />
            <p>Volunteer: {this.state.result}</p>
        </div>
      </div>

    );
  }
}
