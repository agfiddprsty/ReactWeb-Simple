import React, { Component } from 'react';
import './css/Header.css';
import {withRouter,Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Hom" style={{height:'110px', backgroundColor:'#FFF'}}>
        <header className="Hom-header bg-light" style={{backgroundColor:'#FFF'}}>
            <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm bg-light" style={{margin:'20px 0 0 54px', backgroundColor:'#FFF'}}>
              <a class="brand" href="#">
              <img alt="" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8"/>
              </a> 
            </nav>
        </header>
      </div>
    );
  }
}
export default Header;
