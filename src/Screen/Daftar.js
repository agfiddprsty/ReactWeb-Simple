import React, { Component } from 'react';
import dwicon from './img/dwicon.png';
import './css/Daftar.css';

class Daftar extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#FFF'}}>
            <div>
                <div className="text-title" style={{padding:'100px 0 0 600px'}}>
                    <img alt='' src={dwicon} style={{margin:'0 0 0 140px'}}/>
                    <h1 style={{color:'##3B3B3B', fontWeight:'525', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.00000000em',display:'block', margin:'0 0 0 140px',
                    }}>Selamat datang di Squad </h1>
                    <p style={{color:'#666666', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.297550000em', display:'block', margin:'0 0 15px 140px'}}>
                    Screencast Pemrograman Zaman Now
                    </p>
                </div>
            </div>

            <div style={{padding:'0 0 0 630px'}}>
                <div class="container" style={{boxShadow:'0 0 7px 0 rgba(136, 136, 136, 0.4)', width:'70%', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}>
                    <div class="col-md-12" style={{padding:'0 25px 0 25px'}}>
                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="fname">Nama Lengkap</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="fullname" name="fullname" placeholder="">
                        </input>

                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="email">Email</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="email" name="email" placeholder="">
                        </input>

                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="password">Password</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em', marginBottom:'16px'}} type="password" id="password" name="password" placeholder="">
                        </input>

                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="confirmpass">Konfirmasi Password</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em', marginBottom:'16px'}} type="password" id="confirmpass" name="confirmpass" placeholder="">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                        </input>
                        
                        <div className="text-center btn-lg" style={{width:'95%', padding:'15px 0 15px 0'}}>
                            <a href="/payment"><button type="button" class="btn btn-danger btn-lg" style={{padding:'15px 125px 15px 125px', borderRadius:'0', boxShadow:'0 0 15px 0 rgba(136, 136, 136, 0.4)'}} >Daftar Sekarang</button></a>
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
