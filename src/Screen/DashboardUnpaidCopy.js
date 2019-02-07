import React, { Component } from 'react';

class DashboardUnpaid extends Component {
    render() {
      return (
        <div class="Dashboard">
          
        {/* <!-- Modal Header --> */}
        <div class="modal-header">
          <h4 class="modal-title">. . . . .</h4>
        </div>

        <div>
          <div class="border">
            <h3>Agreement</h3>
            <br/>
            <p>Dengan mengikuti program ini, Saya setuju jika data saya digunakan oleh pihak DumbWays.id sepenuhnya. Materi ini hanya boleh diakses oleh 1 orang, yaitu orang yang terdaftar saja. Selanjutnya Saya setuju bila ingin disalurkan kerja, maka akan diadakan kesepakatan lanjutan berupa kontrak kerja selama 1 tahun dengan pihak DumbWays.id dan hanya bekerja di perusahaan rekanan DumbWays.id. Jika kesepakatan ini saya langgar, maka pihak DumbWays.id berhak menutup akses materi ini, dan melakukan blacklist terhadap Saya. </p>
          </div>
        </div>

        <div class="modal-footer">
          <a href="/profile"><button type="button" class="btn btn-secondary" data-dismiss="modal">Saya Tidak Setuju</button></a>
          <a href="/DashboardUnpaidCopy"><button type="button" class="btn btn-success">Ya, Saya Setuju</button></a>
        </div>
      </div>
      );
    }
  }
  export default DashboardUnpaid;