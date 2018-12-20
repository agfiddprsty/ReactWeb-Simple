import React, { Component } from 'react';
import './Home.css';
import {withRouter,Link} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="Hom-header">
            <nav>
              <ul>
                <li><Link to='/Reg'>Register</Link></li>
                <li><a href="#">PROFILE</a></li>
                <li><a href="#">ABOUT</a></li>
              </ul>
            </nav>
        </header>
      </div>
    );
  }
}
export default Header;
