import React, { Component } from 'react';
import './css/Home.css';
import daftar from './img/daftar.png';
import Header from './headerlanding';
import Footer from './Footer.js';
import Contact from './Contact';
import rnredux from './rnredux.jpg';
import profile from './profile.jpeg';
import Batch from './batch.js';
import covbg from './img/covbg.jpg';
import lengkapi from './img/lengkapi.png';
import diskusi from './img/diskusi.png';
import mulai from './img/mulai.png';
import quiz from './img/quis.png';
import kerja from './img/kerja.png';
import mentor from './img/mentor.png';
import teknologi from './img/teknologi.png';
import {withRouter,Link} from 'react-router-dom';
import Timer from './timer';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import Popout from 'react-popout';
import { Uri } from 'monaco-editor';
import HomeVideo from './HomeVideo';

class Home extends Component {
  render() {

    const currentDate = new Date();
    const year = (currentDate.getMonth() === 3 && currentDate.getDate() > 15) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    
    return (
            <div className="Hom-b">
                <div>
                    <Header />
                </div> 
                <body className="Hom-a" style={{backgroundColor: "#fff", overflowX: 'hidden'}}>
                    <div>
                        <div>    
                            <div className="jumbotron jumbotron-fluid gmbrlanding" style={{height: "600px"}}>
                                <div>
                                    <h4 className="card-title text-center title">Menjadi Fullstack Mobile Developer Professional dan Disalurkan Kerja</h4>
                                    <div style={{textAlign: "center", marginTop: "50px"}}>
                                        <span className="card-text text-center isi" style={{color:'#fff', fontSize: "30px", fontWeight: "700", display: "inline-block", paddingRight: "20px"}}>IDR</span>
                                        <span className="text-center" style={{color: '#fafafa', textDecorationLine: "line-through", textDecorationStyle: "solid", textDecorationColor: "red", fontSize: "30px", fontWeight: "700", paddingRight: "20px"}}>2.000.000</span>
                                        <span style={{color: "#3a9104", fontSize: "30px", fontWeight: "700"}}>500.000</span>
                                    </div>
                                    <p className="text-center" style={{color: '#fafafa'}}>Penawaran Akan Berakhir Dalam:</p>
                                    <div className="timer" >
                                        <Timer date={`${year}-03-16T00:00:00`} />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="text-center" style={{padding: "20px 0 20px 0"}}>
                                                <a href="/daftar" style={{fontWeight: '600' }} class="btn btn-danger reg">Daftar Sekarang</a>
                                                <a href="/silabusnew" style={{fontWeight: '600' }} class="btn btn-outline-danger text-center lengkap">Lihat Silabus</a>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-group">
                            <div className="text-center">
                                <h1 style={{fontSize:'30px', fontWeight:600, paddingBottom: "50px"}}>Cara Kerja</h1>
                            </div>
                            <br/>
                            <div className="row text-center">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "black", fontSize: "20px", paddingBottom: "20px"}}>Daftar</p>
                                    <img alt="" className="img-fluid" src={daftar} style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 30px 90px"}}>Buat akunmu dan lakukan pembayaran awal sebesar 500rb rupiah</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "black", fontSize: "20px", paddingBottom: "20px"}}>Lengkapi Profile</p>
                                    <img alt="" className="img-fluid" src={lengkapi} style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 30px 90px"}}>Lengkapi data dirimu untuk kebutuhan administrasi</p>                             
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "black", fontSize: "20px", paddingBottom: "20px"}}>Mulai Belajar</p>
                                    <img alt="" className="img-fluid" src={mulai} style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 30px 90px"}}>Dipandu oleh mentor professional, Anda dapat belajar melalui media Video streaming yang bisa Anda akses selamanya!</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "black", fontSize: "20px", paddingBottom: "20px"}}>Diskusi Online</p>
                                    <img alt="" className="img-fluid" src={diskusi} style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 30px 90px"}}>Kami menyediakan diskusi online untuk tanya jawab,selamanya!</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "black", fontSize: "20px", paddingBottom: "20px"}}>Kerjakan Quiz</p>
                                    <img alt="" className="img-fluid" src={quiz} style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 30px 90px"}}>Kerjakan Mini Quiz, Weekly Quiz dan Quiz Final untuk mengasah skillmu!</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "black", fontSize: "20px", paddingBottom: "20px"}}>Penyaluran Kerja</p>
                                        <img alt="" className="img-fluid" src={kerja} style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 30px 90px"}}>Kami akan menyalurkan Anda ke perusahaan rekanan kami, Berdasarkan hasil Quiz yang anda kerjakan</p>
                                </div>
                            <br/><br/>
                            </div>
                            <div style={{backgroundColor: '#fafafa', borderTop: '1px solid #ebebeb', borderBottom: '1px solid #ebebeb' }}>
                                <div className="penjelasan text-center">
                                    <p style={{color: "black", fontSize: "20px", fontWeight: '600'}}>Masih Belum Paham Cara Kerjanya? Lihat Video Berikut...</p>
                                </div>
                                <div className="homevideo ">    
                                    <HomeVideo/>
                                </div>
                            </div>
                        </div>
                        <div className="text-center" ><br/>
                            <h1 style={{fontSize:'30px',color:'black', marginTop: "50px", fontWeight: '600', marginBottom: "50px"}}>Mengapa Memilih Kami?</h1>
                        </div>
                        <div className="row text-center" style={{marginBottom: "50px"}}>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <p style={{color: "black", fontSize: "15px", paddingBottom: "10px"}}>Mentor Professional</p>
                                <img alt="" className="img-fluid" src={mentor} style={{width: "250px", height: "250px"}}/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <p style={{color: "black", fontSize: "15px", paddingBottom: "10px"}}>Penyaluran Kerja</p>
                                <img alt="" className="img-fluid" src={kerja} style={{width: "250px", height: "250px"}}/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <p style={{color: "black", fontSize: "15px", paddingBottom: "10px"}}>Teknologi Terupdate</p>
                                <img alt="" className="img-fluid" src={teknologi} style={{width: "250px", height: "250px"}}/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <p style={{color: "black", fontSize: "15px", paddingBottom: "10px"}}>Diskusi Online Selamanya</p>
                                <img alt="" className="img-fluid" src={diskusi} style={{width: "250px", height: "250px"}}/>
                            </div>
                        </div>
                        <div className="row soo" style={{borderTop: '1px solid #ebebeb', borderBottom: '1px solid #ebebeb'}}>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <p style={{padding: "30px 90px 20px 90px", alignItems:'center', color: "black", fontSize: "20px"}}>So, Tunggu apa lagi? Daftar sekarang</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="text-center" style={{padding: "20px 90px 20px 90px"}}>
                                    <a href="/daftar" class="btn btn-danger reg">Daftar Sekarang</a>
                                    <a href="/silabusnew" class="btn btn-outline-danger text-center lengkap">Lihat Silabus</a>
                                </div> 
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <p style={{color: "black", fontSize: "20px", fontWeight: '600', padding: "50px 0"}}>Perusahaan Rekanan</p>
                                <p style={{fontWeight: '400', color: '#808080', fontSize: '1.1em', lineHeight: '1.68421053em', padding: "0 100px 50px 100px"}}>Kami bekerja sama dengan berbagai perusahaan untuk menciptakan peluang bersama dalam mengedepankan produk dengan teknologi berkualitas.</p>
                            </div>
                            <div className="row text-center">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/tokopedia.png"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/true-money.png"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/telecreative.png"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/telkom-indonesia.png"/>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/kofera.png"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/sirclo.png"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/schema.png"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/prosehat.png"/>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/rekeningku.png"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/emago.png"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/ketitik.png"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "100px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/clap.png"/>
                                </div>
                            </div>
                        </div>
                        <div style={{borderTop: '1px solid #ebebeb', backgroundColor: '#fafafa'}}>
                            <div>
                                <p className="text-center" style={{color: "black", fontSize: "20px", fontWeight: '600', padding: "50px 0 50px 0"}}>Teknologi</p>
                            </div>
                            <div className="row text-center">
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                    <p className="devicon-javascript-plain colored" title="Javascript" style={{fontSize: "100px", marginBottom: "50px"}}></p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                    <p className="devicon-react-original-wordmark colored" title="React" style={{fontSize: "100px", marginBottom: "50px"}}></p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                    <p className="devicon-nodejs-plain-wordmark colored" title="Node.Js" style={{fontSize: "100px", marginBottom: "50px"}}></p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                    <p className="devicon-mysql-plain-wordmark colored" title="MySQL" style={{fontSize: "100px", marginBottom: "50px"}}></p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                    <p className="devicon-git-plain-wordmark colored" title="GIT" style={{fontSize: "100px", marginBottom: "50px"}}></p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                    <p className="fas fa-server" title="VPS" style={{fontSize: "100px", color: '#4ED8FE', marginBottom: "50px"}}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
                <div>
                    <Footer />
                </div>                  
            </div>
        );
    }
}

export default Home;
