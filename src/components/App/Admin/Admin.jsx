import React, { Component } from 'react';
import style from './Admin.css';
import QR from './QR/QR.jsx';
// import Search from './Search/Search.jsx';
import AdminChat from '../Socket/Admin/AdminChat.jsx';

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      result: 'No result',
      volunteer: {
        volunteer_first_name: '',
        volunteer_last_name: '',
        volunteer_phone: '',
        volunteer_email: '',
      },
      volunteer_list: [],
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

   handleUpdateSearch(e) {
    this.setState({
      searchUsername: e.target.value,
    });
    console.log(e.target.value)
  }

  handleInputSearch(e) {
    console.log("here");
    fetch(`/volunteer/${this.state.searchUsername}`)
      .then(r => r.json())
      .then((x) => {
        this.setState({
          volunteer: {
            volunteer_first_name: x.first_name,
            volunteer_last_name: x.last_name,
            volunteer_phone: x.phone,
            volunteer_email: x.email,
          },
        });
      })
      .catch(err => console.log('Error: ',err));
  }

  handleScanSearch(e) {
    console.log("here");
    fetch(`/volunteer/${this.state.result}`)
      .then(r => r.json())
      .then((x) => {
        this.setState({
          volunteer: {
            volunteer_first_name: x.first_name,
            volunteer_last_name: x.last_name,
            volunteer_phone: x.phone,
            volunteer_email: x.email,
          },
        });
      })
      .catch(err => console.log('Error: ',err));
  }

  AddVolunteer(){
    this.setState({

    })
  }

  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <div className="test">
        <br />
        <div id="admin-list">
          <div id="volunteer-list">
            <h1>Welcome {this.props.adminFirstName}</h1>
            <div id="search">
              <div id="search-container">
                <input
                  type="text"
                  placeholder="Search Username"
                  value={this.state.searchVolunteer}
                  onChange={event => this.handleUpdateSearch(event)}
                />
                <button onClick={event => this.handleInputSearch(event)}>Search</button>
                <button onClick={event => this.adminQRShowModal(event)}> Scan </button>
                <div className="search-results">
                  <h4>Name: {this.state.volunteer.volunteer_first_name} {this.state.volunteer.volunteer_last_name}</h4>
                  <h5>Phone: {this.state.volunteer.volunteer_phone}</h5>
                  <h5>Email: {this.state.volunteer.volunteer_email}</h5>
                  <button onClick={event => this.addVolunteer(event)}>Add</button>
                </div>
              </div>
            </div>
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
            handleScan={(data) => this.handleScan(data)}
            hideQR={event => this.adminQRHideModal(event)}
          />
          <p>Volunteer: {this.state.result}</p>
          <button onClick={event => this.handleScanSearch(event)}>Search</button>
        </div>
      </div>

    );
  }
}
