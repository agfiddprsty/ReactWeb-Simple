import React, { Component } from 'react';
import HeaderDashboard from './HeaderDashboard'
import Footer from './Footer.js';
import './css/DashboardUnpaid.css';

class DashboardUnpaid extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#fafafa'}}>
          <HeaderDashboard/>
            <body style={{backgroundColor:'#fafafa'}}>
              <div>
                  <div className="text-center">
                  <h1 style={{
                      fontSize:'30px',color:'#fafafa',fontWeight:300, margin:'25px 0 25px 0'
                  }}>Blank</h1>
              </div>

              <div>
                <div class="container" style={{width:'55%', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}>
                  <legend>
                  <h6 style={{color:'#000', fontWeight:'200', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'.90000000em', display:'block', margin:'0 0 -17px 280px',}}>Agreements</h6>
                  </legend>
                  
                    <div class="container" style={{width:'95%', color:'#f8f9fa', backgroundColor:'#FFF', border:'1px solid #ececec', marginBottom:'16px'}}>
                      <div id="container" class="container" style={{paddingTop:'10px', height:'250px', color:'#000', backgroundColor:'#FFF'}}>
                        <p style={{color:'#666666', fontWeight:'150', fontSize:'1.15000000em', fontFamily:'Open Sans, helvetica, Arial, sans serif'
                        }}>
                        Dengan mengikuti program ini, Saya setuju jika data saya digunakan oleh pihak DumbWays.id sepenuhnya. Materi ini hanya boleh diakses oleh 1 orang, yaitu orang yang terdaftar saja. Selanjutnya Saya setuju bila ingin disalurkan kerja , maka akan diadakan kesepakatan lanjutan berupa kontrak kerja selama 1 tahun dengan pihak DumbWays.id dan hanya bekerja di perusahaan rekanan Dumbways.id. Jika kesepakatan isi saya langgar, maka pihak DumbWays.id berhak menutup akses materi ini, dan melakukan blacklist terhadap saya. 
                        </p>
                      </div>
                    </div>

                      <div className="btn-block" style={{width:'95%', padding:'15px 0 15px 35px'}}>
                        <a href="/payment"><button type="button" class="btn btn-danger btn-block" style={{marginBottom:'10px'}}>Ya, Saya Setuju</button></a>  
                        <a href="/silabusnew" ><button type="button" class="btn btn-secondary btn-block" >Saya Tidak Setuju</button></a>
                      </div>
                  </div>
                </div>
              </div>
            </body>
              <div className="text-center">
                  <h1 style={{
                      fontSize:'30px',color:'#fafafa',fontWeight:300, margin:'25px 0 25px 0'
                  }}>Blank</h1>
              </div>
            <Footer />
        </div>
      );
    }
  }
  export default DashboardUnpaid;
