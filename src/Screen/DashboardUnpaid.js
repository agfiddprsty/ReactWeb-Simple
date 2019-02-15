import React, { Component } from 'react';
import Header from './HeaderPage'
import './css/DashboardUnpaid.css';

class DashboardUnpaid extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#FFF'}}>
        <Header/>
                <body style={{backgroundColor:'#FFF'}}>
              <div style={{padding:'0 0 20px 0', backgroundColor:'#FFF'}}>
                    <div class="agreement" style={{boxShadow:'0 0 7px 0 rgba(136, 136, 136, 0.4)', width:'59.7%', padding:'95px 40px 33px 30px', backgroundColor:'#FFF', position:'center', margin:'80px 0 80px 275px', border:'1px solid #ececec'}}> 
                    <h1 style={{color:'red', fontWeight:'510', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.9700000em',display:'block'}}>
                        Persetujuan</h1>
                          <div class="col-md-12" style={{margin:'0 25px 0 25px'}}>
                          <p style={{color:'#000', fontWeight:'150', fontSize:'1.22000000em', fontFamily:'Open Sans, helvetica, Arial, sans serif'
                          }}>
                          Dengan mengikuti program ini, Saya setuju jika data saya digunakan oleh pihak DumbWays.id sepenuhnya. Materi ini hanya boleh diakses oleh 1 orang, yaitu orang yang terdaftar saja. Selanjutnya Saya setuju bila ingin disalurkan kerja , maka akan diadakan kesepakatan lanjutan berupa kontrak kerja selama 1 tahun dengan pihak DumbWays.id dan hanya bekerja di perusahaan rekanan Dumbways.id. Jika kesepakatan isi saya langgar, maka pihak DumbWays.id berhak menutup akses materi ini, dan melakukan blacklist terhadap saya. 
                          </p>
                          </div>
                          
                          <div className="btn" style={{width:'95%', margin:'100px 0 0 240px'}}>
                            <a href="/silabusnew" ><button type="button" class="btn btn-outline-danger" style={{borderRadius:'0', padding:'15px 42px 15px 42px', marginRight:'25px'}}>Tolak</button></a>
                            <a href="/payment"><button type="button" class="btn btn-danger" style={{borderRadius:'0', padding:'15px 42px 15px 42px'}}>Setuju</button></a>  
                          </div>
                    </div>
              </div>
              </body>
        </div>
      );
    }
  }
  export default DashboardUnpaid;
