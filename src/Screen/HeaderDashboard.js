import React, { Component } from 'react';
import './css/Header.css';
import boy from './img/man1.png';

class Header extends Component {
  render() {
    return (
      <div style={{overflowY: 'hidden'}}>
        <header className="Hom-header bg-light">
            <nav style={{height:"80px",boxShadow: '0 0 20px 3px rgba(136, 136, 136, 0.4)'}}className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light">
              <a class="brand" href="#" style={{marginLeft: '92px'}}>
              <img style={{paddingTop:"40px",paddingBottom:"50px",width:"85px"}} alt="" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8"/>
              <br/>
              </a> 
              <ul class="navbar-nav ml-auto">
                <li className="nav-item" style={{width: '50px'}}>
                  <img src={boy} alt="" className="rounded-circle img-fluid" style={{marginLeft:"40px",backgroundColor: '#fff', width: '50px', maxWidth: '100%'}}/>
                </li>
              </ul>
            </nav>
        </header>
      </div>
    );
  }
}
export default Header;