import React, { Component } from 'react';
import HeaderDashboard from './HeaderDashboard'
import Footer from './Footer.js';
import './css/DashboardPaidProfile.css';

class DashboardPaidProfile extends Component {
    render() {
      return (
        <div>
            <HeaderDashboard/>
                <body style={{backgroundColor:'#fafafa'}}>
                    <div style={{backgroundColor:'#fafafa'}}>
                        <div className="text-center" style={{backgroundColor:'#fafafa'}}>
                        <h1 style={{
                            fontSize:'30px', backgroundColor:'#fafafa', color:'#fafafa',fontWeight:300, padding:'25px 0 0 0'
                        }}>Blank</h1>
                        </div>
                    </div>

                    <div style={{backgroundColor:'#fafafa'}}>
                    <div class="container" style={{width:'55%', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}>
                        <div class="col-md-12" style={{padding:'0 25px 0 25px'}}>
                            <p style={{color:'#000', fontWeight:'150', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', padding:'10px 0 0 -15px'}}>Terimakasih telah Mengikuti Online Bootcamp ini</p>
                            <p style={{color:'#666666', fontWeight:'150', fontSize:'1.00000000em', margin:'10px 0 0 0'}}>Silahkan melengkapi profile Anda demi kemudahan kami dalam menyalurkan kerja dan administrasi</p>
                            <br/>

                            <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="fullname">Nama Lengkap<span style={{color:'red'}}>*</span></p>
                            <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="fullname" name="fullname" placeholder="">
                            </input>
                            
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="email">Email<span style={{color:'red'}}>*</span></p>
                                    <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="email" name="email" placeholder="">
                                </input>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="date-birth">Tanggal Lahir<span style={{color:'red'}}>*</span></p>
                                    <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="date" id="date-birth" name="date-birth" placeholder="">
                                </input>
                                </div>
                                
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="jeniskelamin">Jenis Kelamin<span style={{color:'red'}}>*</span></p>
                                        <select class="form-control" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}}>
                                            <option>Laki-laki</option>
                                            <option>Perempuan</option>
                                        </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="province">Provinsi<span style={{color:'red'}}>*</span></p>
                                    <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="province" name="province" placeholder="">
                                </input>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="district">Kabupaten<span style={{color:'red'}}>*</span></p>
                                    <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="district" name="district" placeholder="">
                                </input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="sub-district">Kecamatan<span style={{color:'red'}}>*</span></p>
                                    <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="sub-district" name="sub-district" placeholder="">
                                </input>
                                </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="zip-code">Kode Pos<span style={{color:'red'}}>*</span></p>
                                    <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="number" id="zip-code" name="zip-code" placeholder="">
                                </input>
                                </div>
                            </div>
                            
                            <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="alamat">Alamat Lengkap<span style={{color:'red'}}>*</span></p>
                            <textarea class="form-control imput-sm" id="FormControlTextarea" rows="12" type="text" id="adress" name="adress" placeholder="" style={{height:'75px', paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}}>
                            </textarea>

                            <p class="input-prefix" style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="notelp">Nomor Telepon<span style={{color:'red'}}>*</span></p>
                            <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" minlength="10" maxlength="15" id="notelp" name="notelp" placeholder="+62 &nbsp;">
                            </input>    

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="last-education">Pendidikan Terakhir<span style={{color:'red'}}>*</span></p>
                                    <select class="form-control" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}}>
                                            <option>SD</option>
                                            <option>SMP</option>
                                            <option>SMA</option>
                                            <option>SMK</option>
                                            <option>Diploma</option>
                                            <option>Sarjana</option>
                                        </select>
                                </div>
                                
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="name-last-education">Nama Institusi Pendidikan Terakhir<span style={{color:'red'}}>*</span></p>
                                    <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} class="form-control input-sm" type="text" minlength="10" maxlength="20" id="pendidikan" name="pendidikan" placeholder="">
                                    </input>
                                </div>
                            </div>

                        <div className="btn-block" style={{width:'100%', padding:'15px 0 15px 0'}}>
                            <a href="/dashboard"><button type="button" class="btn btn-danger btn-block" >Selesai</button></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                        <div className="text-center" style={{backgroundColor:'#fafafa'}}>
                        <h1 style={{
                            fontSize:'30px',color:'#fafafa',fontWeight:300, padding:'10px 0 0 0'
                        }}>Blank</h1>
                        </div>
                    </div>

                </body>
                <Footer />
        </div>
      );
    }
  }
  export default DashboardPaidProfile;