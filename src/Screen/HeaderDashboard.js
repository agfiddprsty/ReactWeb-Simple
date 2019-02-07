import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import Header from './headerlanding';
import './css/Header.css';
import listvideo from './ListVideo'
import payment from './Payment'
import image from '../Screen/img/man2.png'
const propTypes = {
    children: PropTypes.node,
  };
  
  const defaultProps = {};

class HeaderDashboard extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    render(){
        const { children, ...attributes } = this.props;
        return(
            <div className="Hom">
                <header className="Hom-header bg-light">
                    <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light">
                        <a style={{textAlign:"left"}}class="brand" href="https://dumbways.id/">DumbWays.id</a>

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
        )
    }
}
HeaderDashboard.propTypes = propTypes;
HeaderDashboard.defaultProps = defaultProps;
export default HeaderDashboard;