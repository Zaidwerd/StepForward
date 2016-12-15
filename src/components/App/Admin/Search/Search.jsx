import React, { Component } from 'react';
import '../Admin.css';

// search component not used

export default class List extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     searchUsername: '',
  //     volunteer: {
  //       volunteer_first_name: '',
  //       volunteer_last_name: '',
  //       volunteer_phone: '',
  //       volunteer_email: '',
  //     },
  //     volunteer_list: [],
  //   };
  // }

  // handleUpdateSearch(e) {
  //   this.setState({
  //     searchUsername: e.target.value,
  //   });
  //   console.log(e.target.value)
  // }

  // handleVolunteerSearch(e) {
  //   console.log("here");
  //   fetch(`/volunteer/${this.state.searchUsername}`)
  //     .then(r => r.json())
  //     .then((x) => {
  //       this.setState({
  //         volunteer: {
  //           volunteer_first_name: x.first_name,
  //           volunteer_last_name: x.last_name,
  //           volunteer_phone: x.phone,
  //           volunteer_email: x.email,
  //         }
  //       });
  //     })
  //     .catch(err => console.log('Error: ',err));
  // }

  // AddVolunteer(){
  //   this.setState({

  //   })
  // }

  render() {
    return (
      <div className="test">
        <div id="search">
          <div id="search-container">
            <input
              type="text"
              placeholder="Search Username"
              value={this.state.searchVolunteer}
              onChange={event => this.handleUpdateSearch(event)}
            />
            <button onClick={event => this.handleVolunteerSearch(event)}>Search</button>
            <button onClick={this.props.showQR}> Scan </button>
            <div className="search-results">
              <h4>Name: {this.state.volunteer.volunteer_first_name} {this.state.volunteer.volunteer_last_name}</h4>
              <h5>Phone: {this.state.volunteer.volunteer_phone}</h5>
              <h5>Email: {this.state.volunteer.volunteer_email}</h5>
              <button onClick={event => this.addVolunteer(event)}>Add</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
