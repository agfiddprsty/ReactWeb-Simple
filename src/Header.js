import React, { Component } from 'react';
import './Home.css';

class Header extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="Hom-header">
            <nav>
              <ul>
                <li><a href="#">HOME</a></li>
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
