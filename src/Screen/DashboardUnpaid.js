import React, { Component } from 'react';
import './css/DashboardUnpaid.css';

class DashboardUnpaid extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#FFF'}}>
              <div class="text-title" style={{backgroundColor:'#FFF', padding:'178px 0 100px 275px'}}>
              
                <div class="agreement" style={{boxShadow:'0 0 7px 0 rgba(136, 136, 136, 0.4)', width:'55%', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}>
                  
                    <div class="agreement" style={{width:'95%', color:'#f8f9fa', backgroundColor:'#FFF', border:'1px solid #FFF', marginBottom:'16px'}}>
                      <div id="container" class="agreement" style={{paddingTop:'10px', height:'250px', color:'#000', backgroundColor:'#FFF'}}>
                        <p style={{color:'#666666', fontWeight:'150', fontSize:'1.15000000em', fontFamily:'Open Sans, helvetica, Arial, sans serif'
                        }}>
                        Dengan mengikuti program ini, Saya setuju jika data saya digunakan oleh pihak DumbWays.id sepenuhnya. Materi ini hanya boleh diakses oleh 1 orang, yaitu orang yang terdaftar saja. Selanjutnya Saya setuju bila ingin disalurkan kerja , maka akan diadakan kesepakatan lanjutan berupa kontrak kerja selama 1 tahun dengan pihak DumbWays.id dan hanya bekerja di perusahaan rekanan Dumbways.id. Jika kesepakatan isi saya langgar, maka pihak DumbWays.id berhak menutup akses materi ini, dan melakukan blacklist terhadap saya. 
                        </p>
                      </div>
                    </div>

                      <div className="btn" style={{width:'95%', margin:'0 0 0 275px'}}>
                        <a href="/silabusnew" ><button type="button" class="btn btn-outline-danger" style={{borderRadius:'0', padding:'', marginRight:'15px'}}>Tolak</button></a>
                        <a href="/payment"><button type="button" class="btn btn-danger" style={{borderRadius:'0', padding:''}}>Setuju</button></a>  
                      </div>
                  </div>
              </div>
        </div>
      );
    }
  }
  export default DashboardUnpaid;
