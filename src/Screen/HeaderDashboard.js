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
                    <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light navbar-default">
                        {/* <a style={{textAlign:"left"}}class="brand" href="/dashboard">DumbWays.id</a> */}
                        <a href="/dashboard">
                            <img alt="" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8"/>
                        </a>
                        {/* <!-- Toggler/collapsibe Button --> */}
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse bg-light colap" id="collapsibleNavbar">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item ml-auto" style={{marginRight:"10px"}}>
                                    <a href="/dashboard" className="nav-link">Home</a>
                                </li>
                                <li style={{marginRight:"10px"}} className="nav-item ml-auto ">
                                    <ul class="nav navbar-nav navbar-right">
                                        <li class="dropdown">
                                            <div className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="fa fa-bell " style={{fontsize:"24px"}}></i><Badge pill color="danger">9</Badge>                                        
                                            </div>
                                            <ul class="dropdown-menu notify-drop">
                                                <div class="notify-drop-title">
            	                                    <div class="row">
            		                                    <div class="col-md-auto">
                                                            {/* <div class="col-md-2 col-sm-2 col-xs-2">Unread (<b>9</b>)</div> */}
                                                            Unread (<b>2</b>)
                                                        </div>
            		                                    <div class="col-md-6 col-sm-6 col-xs-6 text-right"><a href="" class="rIcon allRead" data-tooltip="tooltip" data-placement="bottom" title="Read All"><i class="fa fa-dot-circle-o"></i></a></div>
            	                                    </div>
                                                </div>
                                                {/* <!-- end notify title -->
                                                <!-- notify content --> */}
                                                <div class="drop-content">
                                                    <li>
            		                                    {/* <div class="col-md-auto">
                                                            <div class="notify-img">
                                                                <img src="http://placehold.it/45x45" alt=""/>
                                                            </div>
                                                        </div> */}
            		                                    <div class="col-md-auto">
                                                        <a href="">Admin</a> 
                                                        {/* <a href="">Çicek bahçeleri...</a> */}
                                                        <a href="" class="rIcon">
                                                            <i class="fa fa-dot-circle-o"></i>
                                                        </a>
                                                        <p>Terima Kasih Pembayaran Sudah Disetujui</p>
                                                        {/* <p class="time">2 Hafta önce</p> */}
            		                                    </div>
            	                                    </li>
                                                    <li>
            		                                    {/* <div class="col-md-auto">
                                                            <div class="notify-img">
                                                                <img src="http://placehold.it/45x45" alt=""/>
                                                            </div>
                                                        </div> */}
            		                                    <div class="col-md-auto">
                                                        <a href="">Admin</a> 
                                                        <a href="" class="rIcon">
                                                            <i class="fa fa-dot-circle-o"></i>
                                                        </a>
                                                        <p>Selamat Anda Diterima di Bootcamps</p>
                                                        {/* <p class="time">2 Hafta önce</p> */}
            		                                    </div>
            	                                    </li>
                                                </div>
                                                <div class="notify-drop-footer text-center">
            	                                    <a href=""><i class="fa fa-eye"></i> Read All</a>
                                                </div>
                                            </ul>
                                        </li>
                                    </ul>
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