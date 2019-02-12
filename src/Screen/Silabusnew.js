import React, { Component } from 'react';
import Footer from './Footer.js';

class Silabusnew extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#fafafa'}}>
            
            <div className="jumbotron jumbotron-fluid imagelanding" style={{height: "150px"}}>
            </div>

              <body style={{backgroundColor:'#fafafa'}}>
                <div className="text-center" style={{backgroundColor:'#fafafa'}}>
                  <h1 style={{
                      fontSize:'30px', backgroundColor:'#fafafa', color:'#fafafa',fontWeight:300, padding:'25px 0 0 0'
                  }}>Blank</h1>
                </div>

                <div style={{backgroundColor:'#fafafa'}}>
                    <div class="container" style={{width:'62%', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}>
                        <div class="col-md-12" style={{padding:'0 25px 0 25px', backgroundColor:'#FFF'}}>
                        <p style={{color:'#000', fontWeight:'200', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', padding:'10px 0 0 -15px'}}>
                        Tertarik dengan Materi Pembelajaran kami?
                        </p>
                        <p style={{color:'#808080', fontWeight:'200', fontSize:'1.00000000em', margin:'-10px 0 0 0'}}>Silahkan download di sini</p>    
                          <br/>
                            <div class="row">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                    <p style={{color:'black'}} for="fullname">Nama Lengkap</p>
                                    <input class="form-control input-sm" type="text" id="fullname" name="fullname" placeholder="">
                                    </input>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color:'black'}} for="email">Email</p>
                                    <input class="form-control input-sm" type="text" id="email" name="email" placeholder="">
                                    </input>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
                                <p style={{color:'#FFF'}} for="">sdv</p>
                                    <a href="/dashboardunpaid"/*silabus*/ 
                                        style={{marginTop:'50px'}}
                                    ><button type="button" class="btn btn-success" data-dismiss="modal">Kirim Silabus</button></a>
                                </div>
                            </div>
                        </div >        
                    </div>
                </div>

                <div className="text-center" style={{backgroundColor:'#fafafa'}}>
                  <h1 style={{
                      fontSize:'30px', backgroundColor:'#fafafa', color:'#fafafa',fontWeight:300, padding:'25px 0 0 0'
                  }}>Blank</h1>
                </div>

              </body> 
              <div style={{marginTop:'50px'}}>
                <Footer />
              </div>     
        </div>
        );
    }
  }
  export default Silabusnew;