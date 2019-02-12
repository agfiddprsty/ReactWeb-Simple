import React, { Component } from 'react';
import HeaderPage from './HeaderPage'
import Footer from './Footer.js';
import './css/DashboardPaidProfile.css';

class DashboardPaidProfile extends Component {
    render() {
      return (
        <div>
            <HeaderPage/>
                <body style={{backgroundColor:'#fafafa'}}>
                    <div style={{backgroundColor:'#fafafa'}}>
                        <div className="text-center" style={{backgroundColor:'#fafafa'}}>
                        <h1 style={{
                            fontSize:'30px', backgroundColor:'#fafafa', color:'#fafafa',fontWeight:300, padding:'25px 0 0 0'
                        }}>Blank</h1>
                        </div>
                    </div>

                    <div style={{backgroundColor:'#fafafa'}}>
                    <div class="container" style={{width:'62%', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}>
                        <div class="col-md-12" style={{padding:'0 25px 0 25px'}}>
                            <p style={{color:'#000', fontWeight:'200', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', padding:'10px 0 0 -15px'}}>Terimakasih telah Mengikuti Online Bootcamp ini</p>
                            <p style={{color:'#808080', fontWeight:'200', fontSize:'1.00000000em', margin:'10px 0 0 0'}}>Silahkan melengkapi profile Anda demi kemudahan kami dalam menyalurkan kerja dan administrasi</p>
                            <br/>

                            <p style={{color:'black'}} for="notelp">No. Telp*</p>
                            <input class="form-control input-sm" type="text" minlength="10" maxlength="15" id="notelp" name="notelp" placeholder="+62">
                            </input>

                            <p style={{color:'black'}} for="alamat">Alamat*</p>
                            <input class="form-control input-sm" type="text" minlength="10" maxlength="50" id="alamat" name="alamat" placeholder="">
                            </input>

                            <p style={{color:'black'}} for="pendidikan">Nama Institusi Pendidikan Terakhir*</p>
                            <input class="form-control input-sm" class="form-control input-sm" type="text" minlength="10" maxlength="20" id="pendidikan" name="pendidikan" placeholder="">
                            </input>

                            <p style={{color:'black'}} for="tempat">Tempat, Tanggal Lahir*</p>
                            <input class="form-control input-sm" type="text" minlength="10" maxlength="30" id="tempat" name="tempat" placeholder="">
                            </input>
                            
                            <p style={{color:'black'}} for="jeniskelamin">Jenis Kelamin*</p>
                            <input class="form-control input-sm" type="text" minlength="9" maxlength="9" id="jeniskelamin" name="jeniskelamin" placeholder="Laki-laki / Perempuan">
                            </input>

                        <div class="modal-footer">
                            <a href="/dashboard"><button type="button" class="btn btn-success" >Selesai</button></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                        <div className="text-center" style={{backgroundColor:'#fafafa'}}>
                        <h1 style={{
                            fontSize:'30px',color:'#fafafa',fontWeight:300, padding:'10px 0 0 0'
                        }}>Blank</h1>
                        </div>
                    </div>

                </body>
                <Footer />
        </div>
      );
    }
  }
  export default DashboardPaidProfile;