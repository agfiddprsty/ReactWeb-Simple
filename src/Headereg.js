import React, { Component } from 'react';
import './css/Header.css';
import {withRouter,Link} from 'react-router-dom';
class Headereg extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="Hom-header">
            <nav>
              <ul>
                <li><Link to='/Reg' className="nav-link">REGISTER</Link></li>
                <li><a href="#" className="nav-link">ABOUT</a></li>
              </ul>
            </nav>
        </header>
      </div>
    );
  }
}
export default Headereg;
