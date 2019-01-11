import React, { Component } from 'react';
import './css/Header.css';
import {withRouter,Link} from 'react-router-dom';
class Headereg extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="fixed-top Hom-header">
            <nav className="bg-light">
              <ul>
                <li><Link to='/Home' className="nav-link">HOME</Link></li>
                <li><Link to='/Reg' className="nav-link">REGISTER</Link></li>
              </ul>
            </nav>
        </header>
      </div>
    );
  }
}
export default Headereg;
