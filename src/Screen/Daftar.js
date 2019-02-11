import React, { Component } from 'react';
import Footer from './Footer.js';
import './css/Daftar.css';

class Daftar extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#fafafa'}}>
            <div>
                <div className="text-center">
                    <h1 style={{fontSize:'30px', fontStyle:'vertical-align: inherit;', color:'black',fontWeight:300, padding:'50px 0 25px 0',
                    }}>Daftar Sekarang</h1>

                    <p style={{color:'#808080', fontWeight:'150', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.25000000em', lineHeight:'1.68421053em', display:'block', marginBlockStart:'1em', marginBlockEnd:'1em', marginInlineStart:'0px', marginInlineEnd:'0px', margin:'0 225px 50px 225px'}}>
                    Bergabunglah bersama kami, website Pemrograman Fullstack Mobile dan Web Developer. Mempelajari bahasa Pemrograman JavaScript, NodeJs., Laravel, React, Redux, django, MySQL, express.
                    </p>
                </div>
            </div>

            <div>
                <div class="container" style={{width:'62%', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}>
                    <div class="col-md-12" style={{padding:'0 25px 0 25px'}}>
                        <p style={{color:'black'}} for="fname">Nama Depan</p>
                        <input class="form-control input-sm" type="text" id="fname" name="firstname" placeholder="">
                        </input>

                        <p style={{color:'black'}} for="lname">Nama Belakang</p>
                        <input class="form-control input-sm" type="text" id="lname" name="lastname" placeholder="">
                        </input>

                        <p style={{color:'black'}} for="email">Email</p>
                        <input class="form-control input-sm" type="text" id="email" name="email" placeholder="">
                        </input>

                        <p style={{color:'black'}} for="adress">Alamat</p>
                        <input class="form-control input-sm" type="text" id="adress" name="adress" placeholder="">
                        </input>

                        <p style={{color:'black'}} for="password">Password</p>
                        <input class="form-control input-sm" type="text" id="password" name="password" placeholder="">
                        </input>

                        <p style={{color:'black'}} for="email">Konfirmasi Password</p>
                        <input class="form-control input-sm" type="text" id="confirmpass" name="confirmpass" placeholder="">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                        </input>
                        
                        <div className="btn-block" style={{width:'100%', padding:'15px 0 15px 0'}}>
                            <a href="/silabusnew"><button stype="button" class="btn btn-success btn-block" data-disable="Saving...">Daftar dan Kirim Silabus</button></a>
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
