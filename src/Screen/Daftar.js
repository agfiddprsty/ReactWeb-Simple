import React, { Component } from 'react';
import Footer from './Footer.js';
import './css/Daftar.css';

class Daftar extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#fafafa'}}>
            <div>
                <div className="text-center">
                    <h1 style={{color:'#000', fontWeight:'300', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'2.25000000em', lineHeight:'1.68421053em', display:'block', padding:'50px 0 25px 0',
                    }}>Daftar Sekarang</h1>

                    <p style={{color:'#666666', fontWeight:'150', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.25000000em', lineHeight:'1.68421053em', display:'block', marginBlockStart:'1em', marginBlockEnd:'1em', marginInlineStart:'0px', marginInlineEnd:'0px', margin:'0 300px 50px 300px'}}>
                    Bergabunglah bersama kami, website Pemrograman Fullstack Mobile dan Web Developer. Mempelajari bahasa Pemrograman JavaScript, NodeJs., Laravel, React, Redux, django, MySQL, express.
                    </p>
                </div>
            </div>

            <div>
                <div class="container" style={{width:'55%', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}>
                    <div class="col-md-12" style={{padding:'0 25px 0 25px'}}>
                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="fname">Nama Depan</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="fname" name="firstname" placeholder="">
                        </input>

                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="lname">Nama Belakang</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="lname" name="lastname" placeholder="">
                        </input>

                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="email">Email</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="email" name="email" placeholder="">
                        </input>

                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="adress">Alamat</p>
                        <textarea class="form-control imput-sm" id="FormControlTextarea" rows="12" type="text" id="adress" name="adress" placeholder="" style={{height:'75px', paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}}>
                        </textarea>

                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="password">Password</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="password" name="password" placeholder="">
                        </input>

                        <p style={{color:'#666666', fontSize:'.85714286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}} for="email">Konfirmasi Password</p>
                        <input class="form-control input-sm" style={{paddingLeft:'0.92857143em', color:'#000', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.000000em'}} type="text" id="confirmpass" name="confirmpass" placeholder="">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                        </input>
                        
                        <div className="btn-block" style={{width:'100%', padding:'15px 0 15px 0'}}>
                            <a href="/silabusnew"><button stype="button" class="btn btn-danger btn-block" >Daftar dan Kirim Silabus</button></a>
                        </div>
                    </div>
                </div>
            <br/>
            <br/>
            </div>
        <Footer />
        </div>
        
      );
    }
  }
  export default Daftar;
