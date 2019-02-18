import React, { Component } from 'react';
import Header from './HeaderPage'
import './css/Silabusnew.css';

class Silabusnew extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#FFF', paddingBottom:'250px'}}>
            <Header/>
            <body style={{backgroundColor:'#FFF'}}>
            <div className="jumbotron jumbotron-fluid gmbrlanding" style={{height: "660px"}}>
                <h4 className="card-title text-center title">Menjadi Fullstack Mobile Developer <br/>Professional dan Disalurkan Kerja</h4>
            </div>
              
                <div className="text-title">
                    <div className="text-center" style={{padding:'90px 0 0 0', backgroundColor:'#FFF'}}>
                        <h1 style={{color:'##3B3B3B', fontWeight:'510', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.9700000em',display:'block', margin:'0 0 30px 0'}}>
                        Tertarik dengan pembelajaran kami? </h1>
                        <p style={{color:'#666666', fontWeight:'325', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.48500000em', display:'block', margin:'33px 0 39px 0'}}>
                        Isi Form dibawah ini untuk mendapatkan silabus melalui email
                        </p>
                    </div>
                </div>
            
                <div style={{padding:'0 0 140px 425px', }}>
                    <div class="daftar" >
                        <div class="col-md-12" style={{padding:'16px 10px 0 30px', boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                            <div class="box" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                <form>
                                    <div>
                                        <input type="text" name="" required=""/>
                                        <label>Nama Lengkap</label>
                                    </div>
                                    <div>
                                        <input type="email" name="" required=""/>
                                        <label>Email</label>
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
                </body>
        </div>
        );
    }
  }
  export default Silabusnew;
    