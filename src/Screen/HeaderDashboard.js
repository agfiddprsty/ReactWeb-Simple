// import React, { Component } from 'react';
// import './css/Header.css';
// import boy from './img/man1.png';

// class Header extends Component {
//   render() {
//     return (
//       <div style={{overflowY: 'hidden'}}>
//         <header className="Hom-header bg-light">
//             <nav style={{height:"80px",boxShadow: '0 0 20px 3px rgba(136, 136, 136, 0.4)'}}className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light">
//               <a class="brand" href="/home" style={{marginLeft: '72px'}}>
//               <img style={{paddingTop:"40px",paddingBottom:"50px",width:"85px"}} alt="" src={dwlogo}/>
//               <br/>
//               </a> 
//               <ul class="navbar-nav ml-auto">
//                 <li className="nav-item" style={{width: '50px'}}>
//                   <img src={boy} alt="" className="rounded-circle img-fluid" style={{marginLeft:"48px",backgroundColor: '#fff', width: '50px', maxWidth: '100%'}}/>
//                 </li>
//               </ul>
//             </nav>
//         </header>
//       </div>
//     );
//   }
// }
import React, { Component } from 'react';
import './css/Header.css';
import  dwicon from './img/Logodw.png'
import boy from './img/man1.png';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
          <div className="headdash fixed-top bg-light">
            <header className="Hom-header bg-light">
                <nav className="container navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light" style={{height: '75px'}}>
                  <a class="brand" href="/home">
                    <img alt="" className="imgbran" src={dwicon}/>
                  </a> 
                  <ul class="navbar-nav ml-auto">
                    <li className="nav-item dropdown" style={{marginLeft: '200px', width: '75px'}}>
                      <a class="nav-link togldrpdn" href="#" id="navbardrop" data-toggle="dropdown">
                        <img src={boy} alt="" className="rounded-circle img-fluid imgman"/>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="/profilefilled">Profile</a>
                        <a class="dropdown-item" href="/register">Logout</a>
                      </div>
                    </li>
                  </ul>
                </nav>
            </header>
          </div>
        </div>
        <div className="d-sm-none d-md-none d-lg-none d-xl-none">

          <div className="headland fixed-top bg-light">
            <header className="Hom-header bg-light">
                <nav className="container navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light" style={{height:"80px"}}>
                  <a class="brand" href="/home">
                  <img alt="" className="img-fluid imgbran" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8"/>
                  </a>

                  {/* <!-- Toggler/collapsibe Button --> */}
                  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse bg-light colap" id="collapsibleNavbar" >
                  <ul class="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a href='/profilefilled' className="nav-link">Profile</a>
                    </li>
                    <li className="nav-item">
                      <a href="/register" className="nav-link active">Logout</a>
                    </li>
                  </ul>
                </div> 
                </nav>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
