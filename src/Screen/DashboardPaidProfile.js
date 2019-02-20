import React, { Component } from 'react';
import Header from './HeaderPage'

import './css/DashboardPaidProfile.css';

class DashboardPaidProfile extends Component {
    render() {
      return (
    <div>
        <Header/>
        <body>
    
        <div style={{backgroundColor:'#FFF', paddingBottom:'320px'}}>
            <div className="text-title">
                <div className="text-center" style={{padding:'75px 0 0 0'}}>
                    <h1 style={{color:'##3B3B3B', fontWeight:'510', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.17000000em',display:'block', margin:'-5px 0 0 0',}}>
                    Terimakasih telah mengikuti bootcamp online ini </h1>
                    <p style={{color:'grey', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', margin:'15px 0 75px 0'}}>
                    Silahkan melengkapi profile anda demi kemudahan kami dalam menyalurkan kerja dan administrasi
                    </p>
                </div>
            </div>

                <div class="text-center" style={{padding:'0 0 350px 375px', }}>
                    <div class="daftar" style={{width:'90%'}}>
                        <div class="col-md-12" style={{padding:'15px 10px 0 30px'}}>
                            <div class="box" style={{width:'70%'}}>
                                <p style={{color:'black', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', textAlign:'left'}}>
                                    Profil
                                </p>
                                <form>
                                    <div>
                                        <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nama Lengkap</label>
                                    </div>
                                    <div>
                                        <input type="email" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Email</label>
                                    </div>
                                    <div>
                                        <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nama Institusi Pendidikan</label>
                                    </div>
                                    <div>
                                        <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nomor Ponsel</label>
                                    </div>
                                    <div>
                                        <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Alamat</label>
                                    </div>
                                    <div>
                                        <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Link Portofolio</label>
                                    </div>
                                    <div class="d-flex justify-content-end" style={{paddingTop: '35px'}}>
                                        <a href="/#" ><span className="btn btn-outline-danger tolak" style={{fontFamily:'helvetica, Arial, sans serif'}}>Cancel</span></a>
                                        <a href="/#"><span class="btn btn-danger setuju" style={{fontFamily:'helvetica, Arial, sans serif'}}>Finish</span></a>  
                                    </div>
                                </form>
                            </div>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            
            {/* <div>
                <div class="bootcamp" style={{boxShadow:'0 0 7px 0 rgba(136, 136, 136, 0.4)', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}> 
                    <div class="col-md-12" style={{padding:'0 25px 0 25px'}}>
                        <form class="login-form validate-form">

                            <div class="wrap-input validate-input" data-validate = "">
                                <input class="input" type="email" name="notelp" placeholder="Nomor Telepon"/>
                                <span class="focus-input"></span>
                                <span class="symbol-input">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input validate-input" data-validate = "">
                                <input class="input" type="email" name="email" placeholder="Email"/>
                                <span class="focus-input"></span>
                                <span class="symbol-input">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input validate-input" data-validate = "">
                                <input class="input" type="email" name="last-education" placeholder="Nama Institusi Pendidikan Terakhir"/>
                                <span class="focus-input"></span>
                                <span class="symbol-input">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input validate-input" data-validate = "">
                                <input class="input" type="password" name="confirmpass" placeholder="Konfirmasi Password"/>
                                <span class="focus-input"></span>
                                <span class="symbol-input">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                        </form>

                            <div className="text-center btn-lg" style={{width:'95%', padding:'50px 0 15px 230px'}}>
                                <a href="/dashboard">
                                    <button type="button text-center" class="btn btn-danger btn-lg" style={{padding:'15px 34px 20px 34px', borderRadius:'0', boxShadow:'0 0 15px 0 rgba(136, 136, 136, 0.4)'}}>Selesai</button>
                                </a>
                            </div>

                    </div>
                </div>
            </div> */}
        </div>
        </body>
        </div>
      );
    }
  }
  export default DashboardPaidProfile;

//   <div style={{paddingBottom:'13px'}}>
//                 <div class="daftar" style={{boxShadow:'0 0 20px 1px rgba(136, 136, 136, 0.4)', width:'37%', backgroundColor:'#FFF', position:'center', margin:'25px 0 100px 430px', border:'1px solid #ececec'}}> 
//                     <div class="col-md-12" style={{margin:'0 25px 0 10px'}}>
//                     <form class="login-form validate-form" style={{width:'91%', margin:'25px 15px 0 15px'}}>

//                         <div class="wrap-input validate-input" data-validate = "">
//                             <input class="input" type="email" name="notelp" placeholder="Nomor Telepon"/>
//                             <span class="focus-input"></span>
//                             <span class="symbol-input">
//                                 <i class="fa fa-user fa-lg" aria-hidden="true"></i>
//                             </span>
//                         </div>

//                         <div class="wrap-input validate-input" data-validate = "">
//                             <input class="input" type="email" name="adress" placeholder="Alamat Rumah"/>
//                             <span class="focus-input"></span>
//                             <span class="symbol-input">
//                                 <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
//                             </span>
//                         </div>

//                         <div class="wrap-input validate-input" data-validate = "">
//                             <input class="input" type="email" name="last-education" placeholder="Nama Institusi Pendidikan Terakhir"/>
//                             <span class="focus-input"></span>
//                             <span class="symbol-input">
//                                 <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
//                             </span>
//                         </div>

//                         <div class="wrap-input validate-input" data-validate = "">
//                             <input class="input" type="password" name="confirmpass" placeholder="Konfirmasi Password"/>
//                             <span class="focus-input"></span>
//                             <span class="symbol-input">
//                                 <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
//                             </span>
//                         </div>
                    
//                     </form>

//                             <div className="d-flex justify-content-end text-center btn-lg" style={{width:'95%', padding:'15px 0 15px 167px'}}>
//                                 <a href="/dashboard">
//                                     <button type="button text-center" class="btn btn-danger btn-lg" style={{padding:'15px 34px 20px 34px', borderRadius:'0', boxShadow:'0 0 15px 0 rgba(136, 136, 136, 0.4)'}}>Selesai</button>
//                                 </a>
//                             </div>

//                         </div>
//                 </div>
//             </div>