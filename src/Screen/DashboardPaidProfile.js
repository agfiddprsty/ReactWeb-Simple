import React, { Component } from 'react';
import './css/DashboardPaidProfile.css';

class DashboardPaidProfile extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#FFF'}}>
            <div className="text-title">
                <div className="text-center" style={{padding:'145px 0 0 0'}}>
                    <h1 style={{color:'##3B3B3B', fontWeight:'510', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.07550000em',display:'block', margin:'0 0 0 0',}}>
                    Terimakasih telah mengikuti bootcamp online ini </h1>
                    <p style={{color:'#666666', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.297550000em', display:'block', margin:'15px 0 25px 0'}}>
                    Silahkan melengkapi profile anda demi kemudahan kami dalam menyalurkan kerja dan administrasi
                    </p>
                </div>
            </div>
            
            <div>
                <div class="container" style={{boxShadow:'0 0 7px 0 rgba(136, 136, 136, 0.4)', width:'37%', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}> 
                    <div class="col-md-12" style={{padding:'0 25px 0 25px'}}>
                        <p class="input-prefix" style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="notelp">Nomor Telepon</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" minlength="10" maxlength="15" id="notelp" name="notelp" placeholder="+62 &nbsp;">
                        </input>

                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="addres">Alamat Rumah</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="addres" name="addres" placeholder="">
                        </input>
                            
                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="name-last-education">Nama Institusi Pendidikan Terakhir</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="name-last-education" name="name-last-education" placeholder="">
                        </input>
                    
                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="confirmpass">Konfirmasi Password</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em', marginBottom:'16px'}} type="password" id="confirmpass" name="confirmpass" placeholder="">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                        </input>

                            <div className="text-center btn-lg" style={{width:'95%', padding:'15px 0 15px 283px'}}>
                                <a href="/dashboard">
                                    <button type="button text-center" class="btn btn-danger btn-lg" style={{padding:'15px 34px 20px 34px', borderRadius:'0', boxShadow:'0 0 15px 0 rgba(136, 136, 136, 0.4)'}}>Selesai</button>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
      );
    }
  }
  export default DashboardPaidProfile;