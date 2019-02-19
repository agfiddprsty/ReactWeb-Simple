import React, { Component } from 'react';
import Reduxilus from './img/Reduxilus.png';
import dwicon from './img/dwicon.png';
import './css/Registerpage.css';

class Register extends Component {
    render() {
      return (
        <div class="row" style={{backgroundColor:'#FFF'}}>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <img alt='' src={Reduxilus} style={{margin:'175px 0 200px 85px'}}/>
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
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
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nama Lengkap</label>
                                    </div>
                                    <div>
                                        <input type="email" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Email</label>
                                    </div>
                                    <div>
                                        <input type="password" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Password</label>
                                    </div>
                                    <div>
                                        <input type="password" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Konfirmasi Password</label>
                                    </div>
                                    <div className="text-center btn-lg" style={{width:'', padding:'5px 0 5px 0', margin:'0'}}>
                                        <a href="/silabusnew"><button type="button" class="btn btn-danger btn-lg" style={{padding:'15px 130px 15px 130px', borderRadius:'0', boxShadow:'0 0 15px 0 rgba(136, 136, 136, 0.4)',}} >Daftar Sekarang</button></a>
                                    </div>
                                </form>
                            </div>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
        
      );
    }
  }
  export default Register;