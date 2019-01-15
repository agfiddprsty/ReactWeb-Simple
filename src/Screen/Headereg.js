import React, { Component } from 'react';
import './css/Header.css';
import {withRouter,Link} from 'react-router-dom';
class Headereg extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="fixed-top Hom-header">
            <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm bg-light">
            <p class="navbar-brand"> </p>
              {/* <!-- Toggler/collapsibe Button --> */}
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse bg-light colap" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li><Link to='/home' className="nav-link">HOME</Link></li>
                <li><Link to='/' className="nav-link">LOGIN</Link></li>
                <li><Link to='/reg' className="nav-link">REGISTER</Link></li>
              </ul>
              </div>
            </nav>
        </header>
      </div>
    );
  }
}
export default Headereg;
