import React, { Component } from 'react';
import Footer from './Footer.js';

class Silabusnew extends Component {
    render() {
      return (
        <div>
            <body>
            <div className="text-center">
            <h1 style={{
                fontSize:'30px',color:'#ececed',fontWeight:300, margin:'25px 0 25px 0'
            }}>Blank</h1>
            </div>

            <div>
              <div class="container">
                <h5 style={{color:'#FF0000', margin:'0 0 0 50px'}}>Tertarik dengan Materi Pembelajaran kami?</h5>
                      <p style={{color:'#696969', margin:'0 0 0 50px'}}>Silahkan download di sini</p>    
                    <br/>
                        <div class="row">
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <label for="fullname">Nama Lengkap</label>
                                <input type="text" id="fullname" name="fullname" placeholder="">
                                </input>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="">
                                </input>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
                                <br/>
                                <br/>
                                <a href="/dashboardunpaid"/*silabus*/ 
                                    style={{marginTop:'50px'}}
                                ><button type="button" class="btn btn-danger" data-dismiss="modal">Kirim Silabus</button></a>
                            </div>

                        </div >
                        
                </div>
              </div>
              </body>
              <div>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
              <Footer />
              </div>
        </div>      
        );
    }
  }
  export default Silabusnew;