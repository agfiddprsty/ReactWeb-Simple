import React, { Component } from 'react';
import Reduxilus from './img/Reduxilus.png';
import dwicon from './img/dwicon.png';
import './css/Masuk.css';

class Masuk extends Component {
    render() {
      return (
            <div className="registe">
                <div class="row mb-5 d-none d-lg-flex d-xl-flex">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <span className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mx-auto">
                            <img alt='' src={Reduxilus} style={{margin:'175px 0 200px 85px'}}/>
                        </span>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div>
                            <div className="text-title" style={{padding:'55px 0 0 52px'}}>
                                <img alt='' src={dwicon} style={{margin:'0 0 0 -8px', width:'14%'}}/>
                                <h1 style={{color:'##3B3B3B', fontWeight:'515', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.15000000em',display:'block', margin:'0 0 0 -7px',
                                }}>Selamat datang di Squad </h1>
                                <p style={{color:'grey', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.500000000em', display:'block', margin:'0 0 20px -7px'}}>
                                Online Bootcamp Zaman Now
                                </p>
                            </div>
                        </div>

                        <div style={{padding:'0 0 140px 45px'}}>
                            <div class="daftar">
                                <div class="col-md-12" style={{padding:'16px 10px 0 30px', }}>
                                    <div class="box" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                        <form>
                                            <div>
                                                <input type="email" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Email</label>
                                            </div>
                                            <div>
                                                <input type="password" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Password</label>
                                            </div>
                                            <div className="text-center btn-lg" style={{width:'', padding:'10px 0 10px 0', margin:'0'}}>
                                                <a href="/silabusnew"><button type="button" class="btn btn-danger btn-lg" style={{padding:'15px 170px 15px 170px', borderRadius:'0', boxShadow:'0 0 15px 0 rgba(136, 136, 136, 0.4)', fontFamily:'helvetica, Arial, sans serif'
                                            }} >Masuk</button></a>
                                            </div>
                                            <p class="text-center" style={{color:'#666666', fontWeight:'400', fontSize:'.97514286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}}>Lupa Password?</p>
                                            <p class="text-center" style={{color:'#666666', fontWeight:'400', fontSize:'.97514286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}}>Belum punya akun? <a href="/register"><span style={{color:'red'}}> Daftar</span></a></p>
                                        </form>
                                    </div>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-10 d-lg-none d-xl-none" style={{height: '100%'}}>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                        <div>
                            <div className="text-title" style={{padding:'55px 0 0 20px'}}>
                                <img alt='' src={dwicon} style={{margin:'0 0 0 -8px', width:'14%'}}/>
                                <h1 style={{color:'##3B3B3B', fontWeight:'515', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.15000000em',display:'block', margin:'0 0 0 -7px',
                                }}>Selamat datang di Squad </h1>
                                <p style={{color:'grey', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.500000000em', display:'block', margin:'0 0 20px -7px'}}>
                                Online Bootcamp Zaman Now
                                </p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div class="daftar">
                                <div class="col-md-12">
                                    <div class="persegi" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                        <form>
                                            <div>
                                                <input type="email" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Email</label>
                                            </div>
                                            <div>
                                                <input type="password" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Password</label>
                                            </div>
                                            <div className="text-center btn-lg" style={{width:'', padding:'10px 0 10px 0', margin:'0'}}>
                                                <a href="/silabusnew"><button type="button" class="btn btn-danger btn-lg btnmsk">Masuk</button></a>
                                            </div>
                                            <p class="text-center" style={{color:'#666666', fontWeight:'400', fontSize:'.97514286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}}>Lupa Password?</p>
                                            <p class="text-center" style={{color:'#666666', fontWeight:'400', fontSize:'.97514286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}}>Belum punya akun? <a href="/register"><span style={{color:'red'}}> Daftar</span></a></p>
                                        </form>
                                    </div>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        );
    }
}
  export default Masuk;