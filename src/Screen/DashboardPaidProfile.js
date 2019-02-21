import React, { Component } from 'react';
import LabelFloatInput from 'label-float-input';
import Header from './HeaderPage'
import './css/DashboardPaidProfile.css';

class DashboardPaidProfile extends Component {
    render() {
      return (
    <div>
        <Header/>
        <body>
    
        <div style={{backgroundColor:'#FFF', paddingBottom:'1250px'}}>
            <div className="text-title">
                <div className="text-center" style={{padding:'75px 0 0 0'}}>
                    <h1 style={{color:'##3B3B3B', fontWeight:'510', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.17000000em',display:'block', margin:'-5px 0 0 0',}}>
                    Terimakasih telah mengikuti bootcamp online ini </h1>
                    <p style={{color:'grey', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', margin:'15px 0 75px 0'}}>
                    Silahkan melengkapi profile anda demi kemudahan kami dalam menyalurkan kerja dan administrasi
                    </p>
                </div>
            </div>

                <div class="text-center" style={{padding:'0 0 350px 158px', }}>
                    <div class="daftar" style={{width:'86.5%'}}>
                        <div class="col-md-12" style={{padding:'15px 10px 0 30px'}}>
                            <div class="box" style={{width:'100%', boxShadow: '0 0 20px 1px rgba(136, 136, 136, 0.4)'}}>
                                <div class="row">
                                    <p class="col-1" style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left', marginLeft:''}}>
                                        Profil
                                    </p>
                                    <p class="col-12" style={{color:'blue', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontWeight:'600', fontSize:'1.00500000em', textAlign:'right', marginTop:'-41px'}}><span style={{color:'blue'}}>*</span>required</p>
                                </div>
                                    <form>
                                        <div>
                                            <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nama Lengkap</label>
                                        </div>
                                        <div>
                                            <input type="email" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Email</label>
                                        </div>
                                        <div>
                                            <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nomor Ponsel</label>
                                        </div>
                                        <div>
                                            <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Alamat</label>
                                        </div>
                                        <br/>
                                        <div>
                                            <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Summary</label>
                                        </div>
                                    </form>
                                        
                                        <br/>
                                        <div class="row">
                                            <p class="col-5" style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left', marginLeft:''}}>
                                                Riwayat Pendidikan
                                            </p>
                                            <p class="col-12" style={{color:'blue', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontWeight:'600', fontSize:'1.00500000em', textAlign:'right', marginTop:'-41px'}}><span style={{color:'blue'}}>*</span>required</p>
                                        </div>
                                        <div>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block" data-toggle="collapse" data-target="#tambahpendidikan" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                            >+ Tambah Pendidikan</button>
                                                </div>
                                                    <div>
                                                    <form>
                                                        <div id="tambahpendidikan" class="collapse">
                                                            <p style={{color:'red', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', margin:'25px 0 15px 0', textAlign:'left'}}>
                                                                Tambah Pendidikan
                                                            </p>
                                                            <div>
                                                                <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Sekolah</label>
                                                            </div>
                                                            <div>
                                                                <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Bidang Study</label>
                                                            </div>
                                                            <div>
                                                                <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Jurusan</label>
                                                            </div>
                                                            <div>
                                                                <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Degree</label>
                                                            </div>
                                                            <br/>
                                                            <div class="d-flex justify-content-end" style={{paddingTop:'-25px'}}>
                                                                <a href="#"><span class="btn btn-outline-danger btn-lg setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0', marginRight:'15px'}}>Batal</span></a>  
                                                                <a href="#"><span class="btn btn-danger btn-lg setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0'}}>Selesai</span></a>  
                                                            </div>
                                                        </div>
                                                    </form>
                                        </div>
                                        <br/>
                                        <div>
                                        <br/>
                                            <p style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left'}}>
                                                Pengalaman Kerja
                                            </p>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block" data-toggle="collapse" data-target="#tambahpengalamankerja" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                            >+ Tambah Pengalaman Kerja</button>
                                                </div>
                                                    <div>
                                                        <form>
                                                            <div id="tambahpengalamankerja" class="collapse">
                                                                <p style={{color:'red', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', margin:'25px 0 15px 0', textAlign:'left'}}>
                                                                    Tambah Pengalaman
                                                                </p>
                                                                <div>
                                                                    <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Perusahaan</label>
                                                                </div>
                                                                <div>
                                                                    <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Industri</label>
                                                                </div>
                                                                <div>
                                                                    <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Title</label>
                                                                </div>
                                                                <div>
                                                                    <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Description</label>
                                                                </div>
                                                                <br/>
                                                                <div class="d-flex justify-content-end" style={{paddingTop:'-25px'}}>
                                                                    <a href="#"><span class="btn btn-outline-danger btn-lg setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0', marginRight:'15px'}}>Batal</span></a>  
                                                                    <a href="#"><span class="btn btn-danger btn-lg setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0'}}>Selesai</span></a>  
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                        <br/>
                                        <div>
                                            <br/>
                                            <p style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'2.00000000em', display:'block', textAlign:'left', marginBottom:'5px'}}>
                                                Portofolio
                                            </p>
                                            <p style={{color:'grey', textAlign:'left', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.10000000em', marginTop:'-5px'}}>
                                                Upload atau link ke portofolio yang kamu punya.
                                            </p>
                                            <br/>
                                            <div class="row">
                                                <div class="col-6">
                                                    <button type="button" class="btn btn-outline-danger btn-lg btn-block" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                                    >
                                                    <i class="fa fa-cloud-upload"></i> Upload</button>
                                                </div>
                                                <div class="col-6">
                                                    <button type="button" class="btn btn-outline-danger btn-lg btn-block" data-toggle="collapse" data-target="#link" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                                    >
                                                    <i class="fas fa-link"></i> Link</button>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div>
                                        <br/>
                                            <p style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left'}}>
                                                Sertifikat
                                            </p>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                            >
                                            <i class="fa fa-cloud-upload"></i> Upload</button>
                                        </div>
                                        <br/>
                                        <div>
                                            <br/>
                                            <div class="row">
                                                <p class="col-3" style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left'}}>
                                                    Skills
                                                </p>
                                                <button type="button" class="btn " style={{backgroundColor:'lightgrey', color:'#000', marginLeft:'625px', borderRadius:'0', fontFamily:'helvetica, Arial, sans serif'}}>Add Skill</button>
                                            </div>
                                        </div>
                                        <br/>
                                        <div>
                                            <p style={{color:'black', fontWeight:'501', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left'}}>
                                                Projects
                                            </p>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block" data-toggle="collapse" data-target="#tambahproject" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                            >+ Tambah Project</button>
                                                </div>
                                                    <div>
                                                        <form>
                                                            <div id="tambahproject" class="collapse">
                                                                <p style={{color:'red', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', margin:'25px 0 15px 0', textAlign:'left'}}>
                                                                    Tambah Project
                                                                </p>
                                                                <div>
                                                                    <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nama Project</label>
                                                                </div>
                                                                <div>
                                                                    <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Project URL</label>
                                                                </div>
                                                                <div>
                                                                    <input type="text" name="" required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Description</label>
                                                                </div>
                                                                <br/>
                                                                <div class="d-flex justify-content-end" style={{paddingTop:'-25px'}}>
                                                                    <a href="#"><span class="btn btn-outline-danger btn-lg setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0', marginRight:'15px'}}>Batal</span></a>  
                                                                    <a href="#"><span class="btn btn-danger btn-lg setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0'}}>Selesai</span></a>  
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                        <div class="d-flex justify-content-end" style={{paddingTop: '35px'}}>
                                            <a href="#"><span class="btn btn-danger btn-lg setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'5px'}}>Finish</span></a>  
                                        </div>
                                </div>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
        </div>
        </body>
                
                
        </div>
      );
    }
  }
  export default DashboardPaidProfile;