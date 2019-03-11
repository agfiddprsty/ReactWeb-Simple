import React, { Component } from 'react';
import './css/Header.css';
import  dwicon from './img/Logodw.png'

class Header extends Component {
  render() {
    return (
      <div className="headland fixed-top bg-light">
        <header className="Hom-header bg-light">
            <nav className="container navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light" style={{height:"65px"}}>
              <a className="brand" href="/">
              <img alt="" className="img-fluid imgbran" src={dwicon}/>
              </a>

              {/* <!-- Toggler/collapsibe Button --> */}
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse bg-light colap" id="collapsibleNavbar" >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" style={{width: '100px'}}>
                  <a href='/login' className="nav-link ahead"><span className="btn btn-outline-danger btnhead">Masuk</span></a>
                </li>
                <li className="nav-item" style={{width: '100px'}}>
                  <a href="/register" className="nav-link active ahead"><span className="btn btn-danger btnhead">Daftar</span></a>
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
