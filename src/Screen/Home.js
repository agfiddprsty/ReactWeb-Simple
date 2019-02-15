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
    const year = (currentDate.getMonth() === 3 && currentDate.getDate() > 14) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    
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
                                        <span style={{color: "#FFC900", fontSize: "30px", fontWeight: "700"}}>500.000</span>
                                    </div>
                                    <p className="text-center" style={{color: '#fafafa', marginTop:'20px', marginBottom: '-10px'}}>Penawaran Akan Berakhir Dalam:</p>
                                    <div className="timer" >
                                        <Timer date={`${year}-03-15T00:00:00`} />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="text-center" style={{padding: "20px 0 20px 0"}}>
                                                <a href="/daftar" style={{fontWeight: '600' }} class="btn btn-danger reg">Daftar Sekarang</a>
                                                <a href="/silabusnew" style={{fontWeight: '600', color: '#fff'}} class="btn btn-outline-danger text-center lengkap">Lihat Silabus</a>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-group">
                            <div className="text-center">
                                <h1 style={{fontSize:'30px', fontWeight:600, paddingTop: "70px"}}>Cara Kerja</h1>
                            </div>
                            <br/>

                            <div class="bootcamp-steps">
                                <div class="vertical-line"></div>
                                <div class="bootcamp-step-content text-center">
                                    <div class="circle-steps-bootcamp"></div>
                                    <div class="circle-steps-bootcamp1"></div>
                                    <div class="circle-steps-bootcamp2"></div>
                                    <div class="circle-steps-bootcamp3"></div>
                                    <div class="kontainer">
                                        <div class="row mb-5 d-none d-lg-flex d-xl-flex">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="bootcamp-step-list">
                                                    <img alt="" className="img-fluid pull-right" src={daftar} style={{width: "150px", height: "150px"}}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakanan text-left">
                                                    <h5 style={{color: 'red', fontWeight: '600'}}>Daftar dan Lengkapi Profile</h5>
                                                    <span>
                                                        buat akun dan lengkapi data diri serta lakukan pembayaran untuk dana awal
                                                    </span>
                                                    <div class="d-flex justify-content-end" style={{paddingTop: '10px', fontWeight: '600', color: '#d4d4d4'}}><p style={{fontSize: '30px'}}>01</p></div>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-lg-none d-xl-none">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="bootcamp-step-list">
                                                    <img alt="" className="img-fluid" src={daftar} style={{width: "250px", height: "250px"}}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakanan bootcamp-step-list">
                                                    <h5 style={{color: 'red', fontWeight: '600'}}>Daftar dan Lengkapi Profile</h5>
                                                    <span>
                                                        buat akun dan lengkapi data diri serta lakukan pembayaran untuk dana awal
                                                    </span>
                                                    <div class="d-flex justify-content-end" style={{paddingTop: '10px', fontWeight: '600', color: '#d4d4d4'}}><p style={{fontSize: '30px'}}>01</p></div>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-lg-none d-xl-none">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="bootcamp-step-list">
                                                    <img alt="" className="img-fluid" src={lengkapi} style={{width: "150px", height: "150px"}}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                                <section class="kotakiri bootcamp-step-list">
                                                    <div class="d-flex justify-content-end" style={{paddingTop: '20px', fontWeight: '600', color: '#d4d4d4', marginBottom: '-20px'}}><p style={{fontSize: '30px'}}>02</p></div>
                                                    <h5 style={{color:'red', fontWeight:'600'}}>Mulai Belajar</h5>
                                                    <span>
                                                        Dipandu oleh mentor professional, anda dapat belajar melalui media video streaming yang bisa anda akses selamanya
                                                    </span>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-none d-lg-flex d-xl-flex">
                                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakiri text-left">
                                                    <div class="d-flex justify-content-end" style={{paddingTop: '20px', fontWeight: '600', color: '#d4d4d4', marginBottom: '-20px'}}><p style={{fontSize: '30px'}}>02</p></div>
                                                    <h5 style={{color:'red', fontWeight:'600'}}>Mulai Belajar</h5>
                                                    <span>
                                                        Dipandu oleh mentor professional, anda dapat belajar melalui media video streaming yang bisa anda akses selamanya
                                                    </span>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="pull-left bootcamp-step-list">
                                                    <img alt="" className="img-fluid" src={lengkapi} style={{width: "150px", height: "150px"}}/>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-lg-none d-xl-none">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="bootcamp-step-list">
                                                    <img alt="" className="img-fluid" src={quiz} style={{width: "150px", height: "150px"}}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakanan bootcamp-step-list">
                                                    <h5 style={{color:'red', fontWeight:'600'}}>Kerjakan Quiz Mingguan</h5>
                                                    <span>
                                                        Kerjakan Mini Quiz, Weekly Quiz dan Quiz Final untuk mengasah skillmu!
                                                    </span>
                                                    <div class="d-flex justify-content-end" style={{paddingTop: '10px', fontWeight: '600', color: '#d4d4d4'}}><p style={{fontSize: '30px'}}>03</p></div>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-none d-lg-flex d-xl-flex">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                                <p class="pull-right bootcamp-step-list">
                                                    <img alt="" className="img-fluid" src={quiz} style={{width: "150px", height: "150px"}}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakanan text-left">
                                                    <h5 style={{color:'red', fontWeight:'600'}}>Kerjakan Quiz Mingguan</h5>
                                                    <span>
                                                        Kerjakan Mini Quiz, Weekly Quiz dan Quiz Final untuk mengasah skillmu!
                                                    </span>
                                                    <div class="d-flex justify-content-end" style={{paddingTop: '10px', fontWeight: '600', color: '#d4d4d4'}}><p style={{fontSize: '30px'}}>03</p></div>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-lg-none d-xl-none">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="bootcamp-step-list">
                                                    <img alt="" className="img-fluid" src={kerja} style={{width: "150px", height: "150px"}}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <section class="kotakiri bootcamp-step-list">
                                                    <div class="d-flex justify-content-end" style={{paddingTop: '20px', fontWeight: '600', color: '#d4d4d4', marginBottom: '-20px'}}><p style={{fontSize: '30px'}}>04</p></div>
                                                    <h5 style={{color: 'red', fontWeight: '600'}}>Penyaluran Kerja</h5>
                                                    <span>
                                                    Kami akan menyalurkan Anda ke perusahaan rekanan kami, Berdasarkan hasil Quiz yang anda kerjakan
                                                    </span>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-none d-lg-flex d-xl-flex">
                                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakiri text-left">
                                                    <div class="d-flex justify-content-end" style={{paddingTop: '20px', fontWeight: '600', color: '#d4d4d4', marginBottom: '-20px'}}><p style={{fontSize: '30px'}}>04</p></div>
                                                    <h5 style={{color: 'red', fontWeight: '600'}}>Penyaluran Kerja</h5>
                                                    <span>
                                                        Kami akan menyalurkan Anda ke perusahaan rekanan kami, Berdasarkan hasil Quiz yang anda kerjakan
                                                    </span>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="pull-left bootcamp-step-list">
                                                    <img alt="" className="img-fluid" src={kerja} style={{width: "150px", height: "150px"}}/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
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
                                <img alt="" className="img-fluid" src={mentor} style={{width: "150px", height: "150px"}}/>
                                <p style={{color: "black", fontSize: "15px", padding: "20px 0 10px 0"}}>Mentor Professional</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img alt="" className="img-fluid" src={kerja} style={{width: "150px", height: "150px"}}/>
                                <p style={{color: "black", fontSize: "15px", padding: "20px 0 10px 0"}}>Penyaluran Kerja</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img alt="" className="img-fluid" src={teknologi} style={{width: "150px", height: "150px"}}/>
                                <p style={{color: "black", fontSize: "15px", padding: "20px 0 10px 0"}}>Teknologi Terupdate</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img alt="" className="img-fluid" src={diskusi} style={{width: "150px", height: "150px"}}/>
                                <p style={{color: "black", fontSize: "15px", padding: "20px 0 10px 0"}}>Diskusi Online Selamanya</p>
                            </div>
                        </div>
                        <div className="row soo">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <p style={{padding: "30px 90px 20px 90px", alignItems:'center', color: "#fff", fontSize: "20px", fontWeight: '600'}}>So, Tunggu apa lagi?</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="text-center" style={{padding: "20px 90px 20px 90px"}}>
                                    <a href="/daftar" class="btn btn-warning reg" style={{color: '#fff', fontWeight: '600'}}>Daftar Sekarang</a>
                                    <a href="/silabusnew" class="btn btn-outline-light text-center lengkap" style={{fontWeight: '600'}}>Lihat Silabus</a>
                                </div> 
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="text-center" style={{color: "black", fontSize: "25px", fontWeight: '600', padding: "50px 0 50px 0"}}>Teknologi</p>
                            </div>
                            <div className="row text-center">
                                <div className="col-lg col-md col-sm col-xs">
                                    <p className="devicon-javascript-plain colored" title="Javascript" style={{fontSize: "100px", marginBottom: "50px"}}></p>
                                </div>
                                <div className="col-lg col-md col-sm col-xs">
                                    <p className="devicon-react-original-wordmark colored" title="React" style={{fontSize: "100px", marginBottom: "50px"}}></p>
                                </div>
                                <div className="col-lg col-md col-sm col-xs">
                                    <p className="devicon-nodejs-plain-wordmark colored" title="Node.Js" style={{fontSize: "100px", marginBottom: "50px"}}></p>
                                </div>
                                <div className="col-lg col-md col-sm col-xs">
                                    <p className="devicon-mysql-plain-wordmark colored" title="MySQL" style={{fontSize: "100px", marginBottom: "50px"}}></p>
                                </div>
                                <div className="col-lg col-md col-sm col-xs">
                                    <p className="devicon-git-plain-wordmark colored" title="GIT" style={{fontSize: "100px", marginBottom: "50px"}}></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <p style={{color: "black", fontSize: "25px", fontWeight: '600', padding: "50px 0"}}>Perusahaan Rekanan</p>
                            </div>
                            <div className="row text-center">
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                                <div className="col-lg col-md col-sm col-xs">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "150px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/telecreative.png"/>
                                </div>
                                <div className="col-lg col-md col-sm col-xs">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "150px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/prosehat.png"/>
                                </div>
                                <div className="col-lg col-md col-sm col-xs">
                                    <img alt="" className="img-fluid" style={{marginLeft: "20px", height: "150px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/rekeningku.png"/>
                                </div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
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
