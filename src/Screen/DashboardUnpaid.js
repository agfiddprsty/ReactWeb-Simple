import React, { Component } from 'react';
import HeaderDashboar from './HeaderDashboard'
import './css/DashboardUnpaid.css';

class DashboardUnpaid extends Component {
    render() {
      return (
        <div>
          <HeaderDashboar/>
            <body>
              <div>
                  <div className="text-center">
                  <h1 style={{
                      fontSize:'30px',color:'#ececed',fontWeight:300, margin:'25px 0 25px 0'
                  }}>Blank</h1>
              </div>

              <div>
                <div class="container" style={{color:'#f2f1f2', border:'1px solid #A9A9A9'}}>
                  <p style={{color:'#000000', margin:'0 0 0 20px'}}>Agreement</p>
                    <div class="container" style={{color:'#f2f1f2', border:'1px solid #A9A9A9'}}>
                        <p style={{color:'#000000',}}>Dengan mengikuti program ini, Saya setuju jika data saya digunakan oleh pihak DumbWays.id sepenuhnya. Materi ini hanya boleh diakses oleh 1 orang, yaitu orang yang terdaftar saja. Selanjutnya Saya setuju bila ingin disalurkan kerja, maka akan diadakan kesepakatan lanjutan berupa kontrak kerja selama 1 tahun dengan pihak DumbWays.id dan hanya bekerja di perusahaan rekanan DumbWays.id. Jika kesepakatan ini saya langgar, maka pihak DumbWays.id berhak menutup akses materi ini, dan melakukan blacklist terhadap Saya.</p>    
                    </div>
                        <br/>
                        <a href="/silabusnew" 
                        style={{margin:'10px 10px 0 720px'}}
                        ><button type="button" class="btn btn-secondary" data-dismiss="modal">Saya Tidak Setuju</button></a>
                        <a href="/payment"
                        style={{margin:'10px 10px 0 px'}}><button type="button" class="btn btn-success">Ya, Saya Setuju</button></a>  
                    
                  </div>
                </div>
              </div>
            </body>
        </div>
      );
    }
  }
  export default DashboardUnpaid;
