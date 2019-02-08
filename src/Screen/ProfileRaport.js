import React, { Component } from 'react';
import potopropil from './profile.jpeg';
import './css/profile.css';
import phone from './img/phone.png';
import gps from './img/gps.png';
import mail from './img/mail.png';
import Header from './HeaderSilabus';
import Footer from './Footer';
import ModalProfile from './ModalProfile';
import Raport from './raport';
import {withRouter,Link} from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    <div>
                        <Header/>
                    </div>

                {/* <!-- About section start --> */}
                    <section class="about-section spad" id="about">
                        <div class="container kiela">
                            <div class="row">
                                <div class="col-lg-6">
                                    <figure>
                                        <img className="rounded" src={potopropil} alt=""/>
                                    </figure>
                                </div>
                                <div class="col-lg-6 about-text">
                                    <div class="about-title">
                                        <h2 className="txthead">Introduce Myself</h2>
                                        <h5 className="txthead">Who I am</h5>
                                    </div>
                                
                                    <p>I am <span>Agfid Danu Prasetyo</span>. I'm 16 years old. My hobby is Gamming, Watching Anime. I was born in Purwokerto and now lives in Purwokerto, Central Java.</p>
                                    <div class="container-fluid kiri">
                                        <div class="row this">
                                            <div class="col">
                                                <ul class="info">
                                                    <p><li><span class="first-block">Name</span><span></span></li></p>
                                                    <p><li><span class="first-block">Phone</span><span></span></li></p>
                                                    <p><li><span class="first-block">Email</span><span></span></li></p>
                                                    <p><li><span class="first-block">Website</span><span></span></li></p>
                                                    <p><li><span class="first-block">Address</span><span></span></li></p>
                                                </ul>
                                            </div>

                                            <div class="col">
                                                <ul class="info">
                                                    <p><li><span class="first-block">:</span><span></span></li></p>
                                                    <p><li><span class="first-block">:</span><span></span></li></p>
                                                    <p><li><span class="first-block">:</span><span></span></li></p>
                                                    <p><li><span class="first-block">:</span><span></span></li></p>
                                                    <p><li><span class="first-block">:</span><span></span></li></p>
                                                </ul>
                                            </div>

                                            <div class="col">
                                                <ul class="info">
                                                    <p><li><span class="first-block">Agfid Danu Prasetyo</span><span></span></li></p>
                                                    <p><li><span class="first-block">081228154479</span><span></span></li></p>
                                                    <p><li><span class="first-block">agfidpraz@gmail.com</span><span></span></li></p>
                                                    <p><li><span class="first-block">www.fiid.com</span><span></span></li></p>
                                                    <p><li><span class="first-block">Purwokerto</span><span></span></li></p>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <a href='#'  data-toggle="modal" data-target="#myModal">
                                    <button className="btn btn-outline-primary edit">Edit Profile</button></a>
                                    <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81izf14qdfojgt&redirect_uri=https://expressjss.herokuapp.com/auth&state=aRandomString&scope=r_basicprofile">
                                    <button className="btn btn-primary">Connect to LinkedIn</button></a>
                                </div>
                            </div>
                        </div>
                    </section>
                {/* <!-- About section end --> */}



                {/* <!-- Resume section start --> */}
                    <section class="resume-section spad" id="resume">
                        <div class="container resum">
                            <div class="section-title">
                                <p className="text-center">Resume</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-10 col-xl-9 offset-lg-2 offset-xl-2">
                                    {/* <!-- Review item --> */}
                                    <div class="resume-item">
                                        <div class="resume-year">
                                            <h2 className="txthead">2018</h2>
                                        </div>
                                        <div class="resume-text">
                                            <h3 className="txthead">Android APP Challenge</h3>
                                            <p>Feb 2018</p>
                                        </div>
                                    </div>
                                    {/* <!-- Review item --> */}
                                    <div class="resume-item">
                                        <div class="resume-year">
                                            <h2 className="txthead">2018</h2>
                                        </div>
                                        <div class="resume-text">
                                            <h3 className="txthead">Android Developer</h3>
                                            <p>Until now</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                {/* <!-- Resume section end --> */}



                {/* <!-- Raport section start --> */}
                    <div className="raport spad">
                        <Raport />
                    </div>
                {/* <!-- Raport section start --> */}


                {/* <!-- Portfolio section start --> */}
                    <section class="portfolio-section spad" id="works">
                        <div class="container kiela">
                            <div class="section-title">
                                <p className="text-center">Works</p>
                                <h2 className="text-center txthead">Letest Projects soon updated</h2>
                            </div>
                            <div class="text-center mt-5">
                                <a href="#" class="site-btn">More Projects</a>
                            </div>
                        </div>
                    </section>
                {/* <!-- Portfolio section end --> */}


                {/* <!-- Contact section start --> */}
                    <section class="contact-section spad" id="contact">
                        <div class="container kiela">
                            <div class="section-title">
                                <p className="text-center">Contact</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-8 offset-lg-2">
                                    <div class="row">
                                        {/* <!-- contact info --> */}
                                        <div class="col-sm-4 cont-info">
                                            <img src={mail} alt="mail" class="ti-email"></img><br/>
                                            <a href="mailto:fiid17@ewstudio.tech">fiid17@ewstudio.tech</a>
                                            <p>email</p>
                                        </div>
                                        {/* <!-- contact info --> */}
                                        <div class="col-sm-4 cont-info">
                                            <img src={gps} alt="alamat" class="ti-location-pin"></img><br/>
                                            <span>Purwokerto, Central Java, Indonesia</span>
                                            <p>Address</p>
                                        </div>
                                        {/* <!-- contact info --> */}
                                        <div class="col-sm-4 cont-info">
                                            <img src={phone} alt="phone" class="ti-mobile"></img><br/>
                                            <span>+6283844300712</span>
                                            <p>Phone</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            <div>
                <Footer/>
            </div>
            <div>
                <div>
                    <div class="modal fade" id="myModal">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">

                            {/* <!-- Modal Header --> */}
                                <div class="modal-header">
                                    <h4 class="modal-title">Confirm</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>

                            {/* <!-- Modal body --> */}
                                <div class="modal-body">  
                                    <div>
                                        <ModalProfile />
                                    </div>
                                </div>

                        {/* <!-- Modal footer --> */}
                                <div class="modal-footer">
                                    <a href="/profile"><button type="button" class="btn btn-success">Submit</button></a>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Profile;