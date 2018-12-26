import React, { Component } from 'react';
import './Home.css';
import {withRouter,Link} from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
            <div className="about">
            <h3>Profile Page</h3>
        <div class="profile1">
        </div>
            <div className="profile-body">
                <div className="profile-data">
                    <p className="profile-field">Name</p>
                    <p className="profile-text-gray">Agfid Danu Prasetyo</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Divisi</p>
                    <p className="profile-text-gray">Android Dev</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Availability</p>
                    <p className="profile-text-gray">Full Time</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Age</p>
                    <p className="profile-text-gray">16</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Location</p>
                    <p className="profile-text-gray">Purwokerto, Indonesia</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Years Exprience</p>
                    <p className="profile-text-gray">1</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Email</p>
                    <p className="profile-text-gray">agfid11@gmai l.com</p>
                </div>
          </div> 
          </div>
        );
    }
}

export default Profile;