import React, { Component } from 'react';
import Header from './HeaderPage'
import './css/Silabusnew.css';

class Silabusnew extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#FFF', overflow: 'hidden'}}>
            <div>
                <Header/>
            </div>
            <body style={{backgroundColor:'#FFF'}}>
                <div className="mb-12 d-none d-lg-block d-xl-block">
                    <div className="jumbotron jumbotron-fluid silabus" style={{height: "600px"}}>
                        <h4 className="card-title text-center tengah">Menjadi Fullstack Mobile Developer <br/>Professional dan Disalurkan Kerja</h4>
                    </div>
                
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                        <div className="text-center" style={{padding:'90px 0 0 0', backgroundColor:'#FFF'}}>
                            <h1 className="tertarik">Tertarik dengan pembelajaran kami? </h1>
                            <p className="isiform">Isi Form dibawah ini untuk mendapatkan silabus melalui email</p>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div class="daftar">
                                <div class="col-md-12">
                                    <div class="persegi" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                        <form>
                                            <div>
                                                <input type="text" name="" required="" pattern="[A-Za-z}" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nama Lengkap</label>
                                            </div>
                                            <div>
                                                <input type="email" name="" required pattern="[^@]+@[^@]+.[a-zA-z]{2,6}" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Email</label>
                                            </div>
                                            <div className="btn-block" style={{width:'', padding:'10px 0 15px 0', margin:'0'}}>
                                                <a href="/payment"><button type="button" class="btn btn-danger btn-block" style={{marginBottom:'10px', padding:'10px 0 10px 0', borderRadius:'0'}}>Kirim Silabus</button></a>
                                            </div>
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
                        <div className="text-center" style={{padding:'90px 0 0 0', backgroundColor:'#FFF'}}>
                            <h1 className="tertarik">Tertarik dengan pembelajaran kami? </h1>
                            <p className="isiform">Isi Form dibawah ini untuk mendapatkan silabus melalui email</p>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div class="daftar">
                                <div class="col-md-12">
                                    <div class="persegi" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                        <form>
                                            <div>
                                                <input type="text" name="" required="" pattern="[A-Za-z}" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nama Lengkap</label>
                                            </div>
                                            <div>
                                                <input type="email" name="" required pattern="[^@]+@[^@]+.[a-zA-z]{2,6}" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Email</label>
                                            </div>
                                            <div className="btn-block" style={{width:'', padding:'10px 0 15px 0', margin:'0'}}>
                                                <a href="/payment"><button type="button" class="btn btn-danger btn-block" style={{marginBottom:'10px', padding:'10px 0 10px 0', borderRadius:'0'}}>Kirim Silabus</button></a>
                                            </div>
                                        </form>
                                    </div>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
        );
    }
  }
  export default Silabusnew;
    