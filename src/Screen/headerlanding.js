import React, { Component } from 'react';
import './css/Header.css';
import {withRouter,Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="headland fixed-top bg-light">
        <header className="Hom-header bg-light">
            <nav className="container navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light" style={{height:"80px"}}>
              <a class="brand" href="#">
              <img alt="" className="img-fluid imgbran" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8"/>
              </a>

              {/* <!-- Toggler/collapsibe Button --> */}
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse bg-light colap" id="collapsibleNavbar" >
              <ul class="navbar-nav ml-auto">
                <li className="nav-item" style={{width: '100px'}}>
                  <a href='/masuk' className="nav-link"><span className="btn btn-outline-danger" style={{width:'100px', fontWeight: '600'}}>Masuk</span></a>
                </li>
                <li className="nav-item" style={{width: '100px'}}>
                  <a href="/register" className="nav-link active"><span className="btn btn-danger" style={{width:'100px', fontWeight: '600'}}>Daftar</span></a>
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
