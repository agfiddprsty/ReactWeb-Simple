import React, { Component } from 'react';
import './css/Header.css';
import {withRouter,Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="Hom-header bg-light">
            <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light">
            <p class="navbar-brand"> </p>

              {/* <!-- Toggler/collapsibe Button --> */}
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse bg-light colap" id="collapsibleNavbar">
              <ul class="navbar-nav ml-auto">
                <li className="nav-item ml-auto">
                  <Link to='/home' className="nav-link">HOME</Link>
                  </li>
                  <li className="nav-item ml-auto"><a href="/silabus/list" className="nav-link">SILABUS</a></li>
                  <li className="nav-item ml-auto"><a href="/batch" className="nav-link">BOOTCAMP BATCH</a></li>
                  <li className="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">ACCOUNT
                  </a>
                  <div class="dropdown-menu drpdn bg-light">
                  <Link to='/profile' className="dropdown-item">PROFILE</Link>
                  <Link to='/reg' className="dropdown-item">LOGOUT</Link>
                  </div>
                  </li>
              </ul>
            </div> 
            </nav>
        </header>
      </div>
    );
  }
}
export default Header;
