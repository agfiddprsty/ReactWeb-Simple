import React, { Component } from 'react';
import './css/Header.css';
import {Badge} from 'reactstrap';
import {withRouter,Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="Hom-header bg-light">
            <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light">
              <a class="brand" href="#">DumbWays.id Online Bootcamp</a>

              {/* <!-- Toggler/collapsibe Button --> */}
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              
              <div class="collapse navbar-collapse bg-light colap" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                    <li className="nav-item ml-auto" style={{marginRight:"10px"}}>
                        <a href="home" className="nav-link">Home</a>
                    </li>
                    <li style={{marginRight:"10px"}} className="nav-item ml-auto">
                        {/* <NavItem className="d-md-down-none"> */}
                        {/* <NavLink href="#"><i className="fa fa-bell"></i><Badge pill color="danger">9</Badge></NavLink> */}
                        {/* </NavItem> */}
                        <i className="fa fa-bell" style={{fontsize:"24px"}}></i><Badge pill color="danger">9</Badge>
                    </li>
                                
                    <li className="nav-item ml-auto" style={{marginRight:"10px"}}>
                        {/* <i className="fa fa-user"> */}
                            <a href="profile" className="nav-link">Samudra Gawang</a>
                        {/* </i> */}
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
