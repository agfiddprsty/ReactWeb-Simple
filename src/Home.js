import React, { Component } from 'react';
import './Home.css';
import Header from './Header.js';
import Footer from './Footer.js';
//import Batch from './ListBatch';
import profile from './profile.jpeg'
import {withRouter,Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Hom">
        <Header />
        <body className="Hom-body">
          <section id="box-profile">
          <div className="img-profile">
              <div>
                <img src={profile} className="img-profile" alt="profile" />
              </div>
          </div>
          <div class="description">
              <h1>Agfid Danu Prasetyo</h1>
              <p>Android Dev</p>
              <a href="#" className="btn btn-primary" role="button">Edit</a>
              <a href="#" className="btn btn-outline-primary">Resume</a>
              <Link to='/Hack' className="btn btn-outline-primary">Start Test</Link>
          </div>
          <div className="information">
              <div className="data">
                  <p className="field">Availability</p>
                  <p className="text-gray">Full Time</p>
              </div>
              <div className="data">
                  <p className="field">Age</p>
                  <p className="text-gray">16</p>
              </div>
              <div className="data">
                  <p className="field">Location</p>
                  <p className="text-gray">Purwokerto, Indonesia</p>
              </div>
              <div className="data">
                  <p className="field">Years Exprience</p>
                  <p className="text-gray">1</p>
              </div>
              <div className="data">
                  <p className="field">Email</p>
                  <p className="text-gray">agfid11@gmail.com</p>
              </div>
          </div>
        </section>
        <section id="silabus">
            <div> silabus </div>
        </section>
        <section id="batch">
            <div> Batch </div>
        </section>
        </body>
        <Footer />
      </div>
    );
  }
}

export default Home;
