import React, { Component } from 'react';
import './css/Home.css';
import bghead from './img/image.svg';
import man from './img/boy.png';
import man2 from './img/man2.png';
import fb from './img/fb.png';
import tw from './img/twitter.png';
import gh from './img/github.png';
import li from './img/linkedin.png';
import pt from './img/pinterest.png';
import daftar from './img/daftar.png';
import Header from './headerlanding';
import Footer from './Footer.js';
import Contact from './Contact';
import rnredux from './rnredux.jpg';
import profile from './profile.jpeg';
import Batch from './batch.js';
import lengkapi from './img/lengkapi.png';
import diskusi from './img/diskusi.png';
import mulai from './img/mulai.png';
import quiz from './img/quiz.png';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import {withRouter,Link} from 'react-router-dom';
import Timer from './timer';
import {Input, InputGroupAddon, Button } from 'reactstrap';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import Popout from 'react-popout';
import { Uri } from 'monaco-editor';

class Home extends Component {
  render() {

    const currentDate = new Date();
    const year = (currentDate.getMonth() === 3 && currentDate.getDate() > 15) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    
    return (
            <div className="Hom-b">
                <div>
                    <Header />
                </div> 
                <body className="Hom-a" style={{backgroundColor: "#fff"}}>
                    <div>
                        <div className="jumbotron jumbotron-fluid gmbrlanding" style={{height: "600px"}}>
                            <div>
                                <h4 className="card-title text-center title">Menjadi Fullstack Mobile Developer Professional</h4>
                                <h4 className="card-title text-center titleb">dan Disalurkan Kerja</h4>
                                <div style={{textAlign: "center", marginTop: "50px"}}>
                                    <span className="card-text text-center isi" style={{color: "red", fontSize: "30px", fontWeight: "700", display: "inline-block", paddingRight: "20px"}}>IDR</span>
                                    <span className="text-center" style={{textDecorationLine: "line-through", textDecorationStyle: "solid", textDecorationColor: "red", fontSize: "30px", fontWeight: "700", paddingRight: "20px"}}>2.000.000</span>
                                    <span style={{color: "green", fontSize: "30px", fontWeight: "700"}}>500.000</span>
                                </div>
                                <p className="text-center">Penawaran Akan Berakhir Dalam:</p>
                                <div className="timer" >
                                    <Timer date={`${year}-03-16T00:00:00`} />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
                                        <a href="#" class="btn btn-danger reg">Daftar Sekarang</a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left">
                                        <a href="#" class="btn btn-outline-danger text-center lengkap">Lihat Silabus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-group">
                            <div className="text-center">
                                <h1 id="silabus" style={{fontSize:'30px', color:'red', fontWeight:400, paddingBottom: "50px"}}>Cara Kerja</h1>
                            </div>
                            <br/>
                            <div className="row text-center">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "red", fontSize: "15px", paddingBottom: "10px"}}>Daftar</p>
                                    <img alt="" src={daftar} style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 10px 90px"}}>Buat akunmu dan lakukan pembayaran awal sebesar 500rb rupiah</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "red", fontSize: "15px", paddingBottom: "10px"}}>Lengkapi Profile</p>
                                    <img alt="" src={lengkapi} style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 10px 90px"}}>Lengkapi data dirimu untuk kebutuhan administrasi</p>                             
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "red", fontSize: "15px", paddingBottom: "10px"}}>Mulai Belajar</p>
                                    <img alt="" src={mulai} style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 10px 90px"}}>Dipandu oleh mentor professional, Anda dapat belajar melalui media Video streaming yang bisa Anda akses selamanya!</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "red", fontSize: "15px", paddingBottom: "10px"}}>Diskusi Online</p>
                                    <img alt="" src={diskusi} style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 10px 90px"}}>Kami menyediakan diskusi online untuk tanya jawab,selamanya!</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "red", fontSize: "15px", paddingBottom: "10px"}}>Kerjakan Quiz</p>
                                    <img alt="" src={quiz} style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 10px 90px"}}>Kerjakan Mini Quiz, Weekly Quiz dan Quiz Final untuk mengasah skillmu!</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <p style={{color: "red", fontSize: "15px", paddingBottom: "10px"}}>Penyaluran Kerja</p>
                                        <img alt="" src="https://ayokitakerja.kemnaker.go.id/assets/images-new/icon/company_verified.png" style={{width: "250px", height: "250px"}}/>
                                    <p className="text-left" style={{padding: "10px 90px 10px 90px"}}>Kami akan menyalurkan Anda ke perusahaan rekanan kami, Berdasarkan hasil Quiz yang anda kerjakan</p>
                                </div>
                            <br/><br/>
                            </div>
                            <div className="penjelasan">
                                <p style={{color: "red", fontSize: "20px"}}>Masih Belum Paham Cara Kerjanya? Lihat Video Berikut...</p>
                            </div>
                        </div>
                        <div className="text-center"><br/>
                            <h1 style={{fontSize:'30px',color:'red', marginTop: "50px", marginBottom: "50px"}}>Mengapa Memilih Kami?</h1>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <p style={{color: "red", fontSize: "15px", paddingBottom: "10px"}}>Mentor Professional</p>
                                <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjjWiJTx7OYmN23E34nzYtmbWWI5SVDtiivsS0BvUuoRB35biZA" style={{width: "250px", height: "250px"}}/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <p style={{color: "red", fontSize: "15px", paddingBottom: "10px"}}>Penyaluran Kerja</p>
                                <img alt="" src="https://ayokitakerja.kemnaker.go.id/assets/images-new/icon/company_verified.png" style={{width: "250px", height: "250px"}}/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <p style={{color: "red", fontSize: "15px", paddingBottom: "10px"}}>Teknologi Terupdate</p>
                                <img alt="" src="https://sourceonetech.com/wp-content/uploads/2014/12/Social-Media-Marketing.png" style={{width: "250px", height: "250px"}}/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <p style={{color: "red", fontSize: "15px", paddingBottom: "10px"}}>Diskusi Online Selamanya</p>
                                <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvD4-xHErrzKWXiifAUp6JmJOQATy4x6e03wAJec5wCdmaIH6" style={{width: "250px", height: "250px"}}/>
                            </div>
                        </div>
                        <div className="row soo">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <p style={{padding: "20px 90px 20px 90px", color: "red", fontSize: "20px"}}>So, Tunggu apa lagi? Daftar sekarang</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <a href="#" class="btn btn-danger float-right reg-b">Daftar Sekarang</a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <a href="#" class="btn btn-outline-danger reg-b">Lihat Silabus</a>
                            </div>
                        </div>
                        <div className="text-center">
                            <p style={{color: "red", fontSize: "20px", padding: "50px 0 50px 0"}}>Perusahaan Rekanan</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img alt="" style={{marginLeft: "20px", height: "150px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/tokopedia.png"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img alt="" style={{marginLeft: "20px", height: "150px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/true-money.png"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img alt="" style={{marginLeft: "20px", height: "150px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/telecreative.png"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img alt="" style={{marginLeft: "20px", height: "150px", marginBottom: "50px"}} src="https://www.arkademy.com/asset/v3/img/hiring/telkom-indonesia.png"/>
                            </div>
                        </div>
                        <div>
                            <p className="text-center" style={{color: "red", fontSize: "20px", padding: "50px 0 50px 0"}}>Teknologi</p>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <p style={{color: "red", fontSize: "15px", marginBottom: "50px"}}>Javascript</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <p style={{color: "red", fontSize: "15px", marginBottom: "50px"}}>React Native</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <p style={{color: "red", fontSize: "15px", marginBottom: "50px"}}>Node.Js</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <p style={{color: "red", fontSize: "15px", marginBottom: "50px"}}>MySQL</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <p style={{color: "red", fontSize: "15px", marginBottom: "50px"}}>GIT</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <p style={{color: "red", fontSize: "15px", marginBottom: "50px"}}>VPS</p>
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
