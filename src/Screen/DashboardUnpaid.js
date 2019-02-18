import React, { Component } from 'react';
import Header from './HeaderPage'
import './css/DashboardUnpaid.css';

class DashboardUnpaid extends Component {
    render() {
      return (
        <div className="hir" style={{backgroundColor:'#FFF'}}>
          <div>
            <Header/>
          </div>
          <body style={{backgroundColor:'#FFF'}}>
            <div className="tengah" style={{backgroundColor:'#FFF'}}>
              <div class="agreement"> 
                <div className="persetujuan">
                  <h1 className="text-center" style={{color:'red', fontWeight:'510', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.9700000em',display:'block'}}>
                      Persetujuan</h1>
                </div>
                <div class="col-md-12" id="style-1" style={{height: '200px', overflowY: 'scroll'}}>
                  <p style={{height: '500px', color:'#000', fontWeight:'150', fontSize:'1.22000000em', fontFamily:'Open Sans, helvetica, Arial, sans serif'
                  }}>Dengan mengikuti program ini, Saya setuju jika data saya digunakan oleh pihak DumbWays.id sepenuhnya. Materi ini hanya boleh diakses oleh 1 orang, yaitu orang yang terdaftar saja. Selanjutnya Saya setuju bila ingin disalurkan kerja , maka akan diadakan kesepakatan lanjutan berupa kontrak kerja selama 1 tahun dengan pihak DumbWays.id dan hanya bekerja di perusahaan rekanan Dumbways.id. Jika kesepakatan isi saya langgar, maka pihak DumbWays.id berhak menutup akses materi ini, dan melakukan blacklist terhadap saya. 
                  </p>
                </div>

                <div class="d-flex justify-content-end" style={{paddingTop: '50px'}}>
                  <a href="/silabusnew" ><span className="btn btn-outline-danger tolak">Tolak</span></a>
                  <a href="/payment"><span class="btn btn-danger setuju">Setuju</span></a>  
                </div>
              </div>
            </div>
          </body>
        </div>
      );
    }
  }
  export default DashboardUnpaid;
