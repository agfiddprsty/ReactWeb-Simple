import React, { Component } from 'react';
import Reduxilus from './img/Reduxilus.png';
import dwicon from './img/dwicon.png';
import './css/Daftar.css';

class Daftar extends Component {
    render() {
      return (
        <div class="row" style={{backgroundColor:'#FFF'}}>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <img alt='' src={Reduxilus} style={{margin:'175px 0 0 85px'}}/>
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div>
                    <div className="text-title" style={{padding:'55px 0 0 52px'}}>
                        <img alt='' src={dwicon} style={{margin:'0 0 0 -8px', width:'14%'}}/>
                        <h1 style={{color:'##3B3B3B', fontWeight:'515', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.15000000em',display:'block', margin:'0 0 0 -7px',
                        }}>Selamat datang di Squad </h1>
                        <p style={{color:'#666666', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.500000000em', display:'block', margin:'0 0 20px -7px'}}>
                        Online Bootcamp Zaman Now
                        </p>
                    </div>
                </div>

                <div style={{padding:'0 0 140px 45px'}}>
                    <div class="daftar" style={{position:'relative', width:'81%', boxShadow:'0 0 7px 0 rgba(136, 136, 136, 0.4)', backgroundColor:'#FFF', position:'center', padding:'', border:'1px solid #ececec'}}>
                        <div class="col-md-12" style={{padding:'16px 25px 0 25px'}}>
                        <form class="login-form validate-form" style={{margin:'50px 25px 0 77px'}}>

                            <div class="wrap-input validate-input" data-validate = "">
                                <input class="input" type="email" name="email" placeholder="Email"/>
                                <span class="focus-input"></span>
                                <span class="symbol-input">
                                    <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input validate-input" data-validate = "">
                                <input class="input" type="password" name="password" placeholder="Password"/>
                                <span class="focus-input"></span>
                                <span class="symbol-input">
                                    <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
                                </span>
                            </div>

                        </form>

                            <div className="text-center btn-lg" style={{width:'100%', padding:'15px 0 15px 3px'}}>
                                <a href="/silabusnew"><button type="button" class="btn btn-danger btn-lg" style={{padding:'15px 180px 15px 180px', borderRadius:'0', boxShadow:'0 0 15px 0 rgba(136, 136, 136, 0.4)'}} >Masuk</button></a>
                            </div>

                            <p class="text-center" style={{color:'#666666', fontWeight:'400', fontSize:'.97514286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}}>Lupa Password?</p>
                            <p class="text-center" style={{color:'#666666', fontWeight:'400', fontSize:'.97514286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}}>Belum punya akun? <span style={{color:'red'}}> Daftar</span></p>
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
  export default Daftar;
