import React, { Component } from 'react';

class Silabusnew extends Component {
    render() {
      return (
        <div>

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
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <label for="fullname">Nama Lengkap</label>
                                <input type="text" id="fullname" name="fullname" placeholder="">
                                </input>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="">
                                </input>
                            </div>

                        </div>
                      <a href="/dashboardunpaid"/*silabus*/ 
                      style={{margin:'0 10px 0 900px'}}
                      ><button type="button" class="btn btn-danger" data-dismiss="modal">Kirim Silabus</button></a>  
                </div>
              </div>
        </div>      
        );
    }
  }
  export default Silabusnew;