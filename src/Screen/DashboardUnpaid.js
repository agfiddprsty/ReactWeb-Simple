import React, { Component } from 'react';
import './css/DashboardUnpaid.css';

class DashboardUnpaid extends Component {
    render() {
      return (
        <div>
            <div>
                <div className="text-center">
                <h1 style={{
                    fontSize:'30px',color:'#ececed',fontWeight:300, margin:'25px 0 25px 0'
                }}>Blank</h1>
            </div>

            <div>
              <div class="container" style={{border:'1px solid'}}>
                <p style={{color:'#000000', margin:'0 0 0 20px'}}>Agreement</p>
                  <div class="container">
                      <p style={{color:'#000000',}}>Dengan mengikuti program ini, Saya setuju jika data saya digunakan oleh pihak DumbWays.id sepenuhnya. Materi ini hanya boleh diakses oleh 1 orang, yaitu orang yang terdaftar saja. Selanjutnya Saya setuju bila ingin disalurkan kerja, maka akan diadakan kesepakatan lanjutan berupa kontrak kerja selama 1 tahun dengan pihak DumbWays.id dan hanya bekerja di perusahaan rekanan DumbWays.id. Jika kesepakatan ini saya langgar, maka pihak DumbWays.id berhak menutup akses materi ini, dan melakukan blacklist terhadap Saya.</p>    
                    <br/>

                      <a href=""/*silabus*/ 
                      style={{margin:'0 10px 0 720px'}}
                      ><button type="button" class="btn btn-secondary" data-dismiss="modal">Saya Tidak Setuju</button></a>
                      <a href="/payment"><button type="button" class="btn btn-success">Ya, Saya Setuju</button></a>  
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
    }
  }
  export default DashboardUnpaid;

      
//    <div class="card" style={{width:'100%', margin:'25px 0 0 25px'}}>
//    <div class="card-body">
//      <div>
//        <div class="border" >
//          <h3 style={{margin:'5px 15px 15px 5px'}}>Agreement</h3>
//          <br/>
//          <p>Dengan mengikuti program ini, Saya setuju jika data saya digunakan oleh pihak DumbWays.id sepenuhnya. Materi ini hanya boleh diakses oleh 1 orang, yaitu orang yang terdaftar saja. Selanjutnya Saya setuju bila ingin disalurkan kerja, maka akan diadakan kesepakatan lanjutan berupa kontrak kerja selama 1 tahun dengan pihak DumbWays.id dan hanya bekerja di perusahaan rekanan DumbWays.id. Jika kesepakatan ini saya langgar, maka pihak DumbWays.id berhak menutup akses materi ini, dan melakukan blacklist terhadap Saya. </p>
//        </div>
//      </div>

//      <div class="modal-footer">
//        <a href=""/*silabus*/><button type="button" class="btn btn-secondary" data-dismiss="modal">Saya Tidak Setuju</button></a>
//        <a href="/payment"><button type="button" class="btn btn-success">Ya, Saya Setuju</button></a>
//      </div>
//      </div>
// </div>
