import React, { Component } from 'react';
import './css/Header.css';
import boy from './img/man1.png';

class Header extends Component {
  render() {
    return (
      <div style={{overflowY: 'hidden'}}>
        <header className="Hom-header bg-light">
            <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light" style={{boxShadow: '0 0 20px 3px rgba(136, 136, 136, 0.4)'}}>
              <a class="brand" href="#" style={{marginLeft: '50px'}}>
              <img alt="" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8"/>
              </a> 
              <ul class="navbar-nav ml-auto">
                <li className="nav-item" style={{width: '50px'}}>
                  <img src={boy} alt="" className="rounded-circle img-fluid" style={{backgroundColor: '#fff', width: '50px', maxWidth: '100%'}}/>
                </li>
              </ul>
            </nav>
        </header>
      </div>
    );
  }
}
export default Header;
