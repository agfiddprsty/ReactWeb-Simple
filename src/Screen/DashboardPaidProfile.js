import React, { Component } from 'react';
import HeaderPage from './HeaderPage'
import Footer from './Footer.js';
import './css/DashboardPaidProfile.css';

class DashboardPaidProfile extends Component {
    render() {
      return (
        <div>
            <HeaderPage/>
                <body>
                    <div>
                        <div className="text-center">
                        <h1 style={{
                            fontSize:'30px',color:'#ececed',fontWeight:300, margin:'25px 0 25px 0'
                        }}>Blank</h1>
                        </div>
                    </div>

                    <div>
                        <div class="container" style={{margin:'0 0 25px 120px', border:'1px solid black'}}>

                            <h5 style={{color:'#FF0000', margin:'15px 0 0 15px'}}>Terimakasih telah Mengikuti Online Bootcamp ini</h5>
                            <p style={{color:'#000', margin:'15px 0 0 15px'}}>Silahkan melengkapi profile Anda demi kemudahan kami dalam menyalurkan kerja dan administrasi</p>
                            <br/>

                            <label for="notelp">No. Telp*</label>
                            <input type="text" minlength="10" maxlength="15" id="notelp" name="notelp" placeholder="+62">
                            </input>

                            <label for="alamat">Alamat*</label>
                            <input type="text" minlength="10" maxlength="50" id="alamat" name="alamat" placeholder="">
                            </input>

                            <label for="pendidikan">Nama Institusi Pendidikan Terakhir*</label>
                            <input type="text" minlength="10" maxlength="20" id="pendidikan" name="pendidikan" placeholder="">
                            </input>

                            <label for="tempat">Tempat, Tanggal Lahir*</label>
                            <input type="text" minlength="10" maxlength="30" id="tempat" name="tempat" placeholder="">
                            </input>
                            
                            <label for="jeniskelamin">Jenis Kelamin*</label>
                            <input type="text" minlength="9" maxlength="9" id="jeniskelamin" name="jeniskelamin" placeholder="Laki-laki / Perempuan">
                            </input>

                        <div class="modal-footer">
                            <a href="/dashboard"><button type="button" class="btn btn-success">Selesai</button></a>
                        </div>

                    </div>
                </div>
                <div>
                        <div className="text-center">
                        <h1 style={{
                            fontSize:'30px',color:'#ececed',fontWeight:300, margin:'25px 0 25px 0'
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