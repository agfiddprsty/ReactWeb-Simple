import React, { Component } from 'react';
import Header from './HeaderPage'
import './css/Agreement.css';

class Agreement extends Component {
    render() {
      return (
        <div className="hir">
          <div>
            <Header/>
          </div>
          <body style={{backgroundColor:'#FFF'}}>
            <div className="tengahagre" style={{backgroundColor:'#FFF'}}>
              <div class="agreement"> 
                <div className="persetujuan">
                  <h1 className="text-center agremnt">
                      Persetujuan</h1>
                </div>
                <div class="col-md-12" id="style-1" style={{height: '210px', overflowY: 'scroll'}}>
                  <p className="program">Dengan mengikuti progam ini, saya setuju jika data saya digunakan oleh pihak DumbWays.id sepenuhnya. Materi ini hanya boleh diakses oleh 1 orang, yaitu orang yang terdaftar saja. Selanjutnya Saya bila ingin disalurkan kerja, maka akan diadakan kesepakatan lanjutan berupa kontrak kerja selama 1 tahun dengan pihak DumbWays.id dan hanya bekerja di perusahaan rekanan DumbWays.id. Jika kesepakatan ini saya langgar, maka pihak DumbWays.id berhak menutup akses materi ini dan melakukan blacklist terhadap saya.
                  </p>
                </div>

                <div class="d-flex justify-content-end" style={{paddingTop: '50px', marginRight: '25px'}}>
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
  export default Agreement;
