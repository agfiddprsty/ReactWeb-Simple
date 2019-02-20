import React, { Component } from 'react';
import Header from './HeaderPage'

import './css/DashboardPaidProfile.css';

class DashboardPaidProfile extends Component {
    render() {
      return (
    <div>
        <Header/>
        <body>
    
        <div style={{backgroundColor:'#FFF', paddingBottom:'1250px'}}>
            <div className="text-title">
                <div className="text-center" style={{padding:'75px 0 0 0'}}>
                    <h1 style={{color:'##3B3B3B', fontWeight:'510', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.17000000em',display:'block', margin:'-5px 0 0 0',}}>
                    Terimakasih telah mengikuti bootcamp online ini </h1>
                    <p style={{color:'grey', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', margin:'15px 0 75px 0'}}>
                    Silahkan melengkapi profile anda demi kemudahan kami dalam menyalurkan kerja dan administrasi
                    </p>
                </div>
            </div>

                <div class="text-center" style={{padding:'0 0 350px 158px', }}>
                    <div class="daftar" style={{width:'86.5%'}}>
                        <div class="col-md-12" style={{padding:'15px 10px 0 30px'}}>
                            <div class="box" style={{width:'100%'}}>
                                <div class="row">
                                    <p class="col-1" style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', textAlign:'left', marginLeft:''}}>
                                        Profil
                                    </p>
                                    <p class="col-12" style={{color:'blue', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontWeight:'600', fontSize:'1.00500000em', textAlign:'right', marginTop:'-39px'}}><span style={{color:'blue'}}>*</span>required</p>
                                </div>
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
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nomor Ponsel</label>
                                        </div>
                                        <div>
                                            <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Alamat</label>
                                        </div>
                                        <div>
                                            <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Summary</label>
                                        </div>
                                    </form>
                                        
                                        <div class="row">
                                            <p class="col-3" style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', textAlign:'left', marginLeft:''}}>
                                                Riwayat Pendidikan
                                            </p>
                                            <p class="col-12" style={{color:'blue', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontWeight:'600', fontSize:'1.00500000em', textAlign:'right', marginTop:'-39px'}}><span style={{color:'blue'}}>*</span>required</p>
                                        </div>
                                        <div>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                            >+ Tambah Pendidikan</button>
                                        </div>
                                        <br/>
                                        <div>
                                            <p style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', textAlign:'left'}}>
                                                Pengalaman Kerja
                                            </p>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                            >+ Tambah Pengalaman Kerja</button>
                                        </div>
                                        <br/>
                                        <div>
                                            <p style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', textAlign:'left', marginBottom:'5px'}}>
                                                Portofolio
                                            </p>
                                            <p style={{color:'grey', textAlign:'left', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.10000000em', marginTop:'-5px'}}>
                                                Upload atau link ke portofolio yang kamu punya.
                                            </p>
                                            <br/>
                                            <div class="row">
                                                <div class="col-6">
                                                    <button type="button" class="btn btn-outline-danger btn-lg btn-block" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                                    >
                                                    <i class="fa fa-">  </i>
                                                    Upload
                                                    </button>
                                                </div>
                                                <div class="col-6">
                                                    <button type="button" class="btn btn-outline-danger btn-lg btn-block" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                                    >
                                                    <i class="fa fa-"></i>
                                                    +  Link
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div>
                                            <p style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', textAlign:'left'}}>
                                                Sertifikat
                                            </p>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                            >+ Upload</button>
                                        </div>
                                        <br/>
                                        <div>
                                            <p style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', textAlign:'left'}}>
                                                Skills
                                            </p>
                                        </div>
                                        <br/>
                                        <div>
                                            <p style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', textAlign:'left'}}>
                                                Projects
                                            </p>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                            >+ Tambah Project</button>
                                        </div>
                                        <div class="d-flex justify-content-end" style={{paddingTop: '35px'}}>
                                            <a href="#"><span class="btn btn-danger btn-lg setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'2px'}}>Finish</span></a>  
                                        </div>
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