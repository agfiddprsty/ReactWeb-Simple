import React, { Component } from 'react';
import './css/Header.css';
import boy from './img/man1.png';

class Header extends Component {
  render() {
    return (
      <div className="headsilab fixed-top bg-light">
        <header className="Hom-header bg-light">
            <nav className="container navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light" style={{height: '80px'}}>
              <a class="brand" href="#">
              <img alt="" className="imgbran" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8"/>
              </a> 
              <ul class="navbar-nav ml-auto">
                <li className="nav-item" style={{width: '50px'}}>
                  <img src={boy} alt="" className="rounded-circle img-fluid ml-auto" style={{backgroundColor: '#fff', width: '50px', maxWidth: '100%', marginLeft:"40px"}}/>
                </li>
              </ul>
            </nav>
        </header>
      </div>
    );
  }
}
export default Header;
