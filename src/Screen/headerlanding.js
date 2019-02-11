import React, { Component } from 'react';
import './css/Header.css';
import {withRouter,Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="Hom-header bg-light">
            <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light">
              <a class="brand" href="#">
              <img alt="" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8"/>
              </a>

              {/* <!-- Toggler/collapsibe Button --> */}
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse bg-light colap" id="collapsibleNavbar">
              <ul class="navbar-nav ml-auto">
                <li className="nav-item ml-auto">
                  <a href='/' className="nav-link" style={{fontWeight: '600'}}>Sign In</a>
                </li>
                <li className="nav-item ml-auto">
                  <a href="/daftar" className="nav-link active" style={{fontWeight: '600'}}>Sign Up</a>
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
