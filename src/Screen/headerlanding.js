import React, { Component } from 'react';
import './css/Header.css';
import {withRouter,Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="Hom-header bg-light">
            <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light">
              <a class="brand" href="#">DumbWays.id Online Bootcamp</a>

              {/* <!-- Toggler/collapsibe Button --> */}
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse bg-light colap" id="collapsibleNavbar">
              <ul class="navbar-nav ml-auto">
                <li className="nav-item ml-auto">
                  <a href='/home#home' className="nav-link">Sign In</a>
                  </li>
                  <li className="nav-item ml-auto"><a href="#silabus" className="nav-link">Sign Up</a></li>
              </ul>
            </div> 
            </nav>
        </header>
      </div>
    );
  }
}
export default Header;
