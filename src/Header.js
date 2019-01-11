import React, { Component } from 'react';
import './css/Header.css';
import {withRouter,Link} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="Hom-header bg-light">
            <nav className="fixed-top bg-light">
              <ul>
                <li className="nav-item">
                <Link to='#' className="nav-link">HOME</Link>
                </li>
                <li className="nav-item"><a href="#silabus" className="nav-link">SILABUS</a></li>
                <li className="nav-item"><a href="#bootcamp" className="nav-link">BOOTCAMP BATCH</a></li>
                <li className="nav-item"><a href="/About" className="nav-link">ABOUT</a></li>
                <li className="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">ACCOUNT
                 </a>
                 <div class="dropdown-menu">
                 <Link to='/Silabus/List' className="dropdown-item">SILABUS</Link>
                 <Link to='/Dashboard' className="dropdown-item">PROFILE</Link>
                 <Link to='/Reg' className="dropdown-item">LOGOUT</Link>
                </div>
                </li>
              </ul>
            </nav>
        </header>
      </div>
    );
  }
}
export default Header;
