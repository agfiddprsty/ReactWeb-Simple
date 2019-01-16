import React, { Component } from 'react';
import potopropil from './profile.jpeg';
import './css/profile.css';
import phone from './img/phone.png';
import gps from './img/gps.png';
import mail from './img/mail.png';
import Header from './HeaderSilabus';
import {withRouter,Link} from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
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
                            <div class="col-lg-6 about-text wow fadeInDown" data-wow-delay="0.5s">
                                <div class="about-title">
                                    <h2>Introduce Myself</h2>
                                    <h5>Who I am</h5>
                                </div>
                                <p>I am <span>Agfid Danu Prasetyo</span>. I'm 16 years old. My hobby is Gamming, Watching Anime. I was born in Purwokerto and now lives in Purwokerto, Central Java.</p>
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
                                <div class="resume-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="resume-year">
                                        <h2>2018</h2>
                                    </div>
                                    <div class="resume-text">
                                        <h3>Android APP Challenge</h3>
                                        <p>Feb 2018</p>
                                    </div>
                                </div>
                                {/* <!-- Review item --> */}
                                <div class="resume-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div class="resume-year">
                                        <h2>2018</h2>
                                    </div>
                                    <div class="resume-text">
                                        <h3>Android Developer</h3>
                                        <p>Until now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Resume section end --> */}



                {/* <!-- Portfolio section start --> */}
                <section class="portfolio-section spad" id="works">
                    <div class="container kiela">
                        <div class="section-title">
                            <p className="text-center">Works</p>
                            <h2 className="text-center">Letest Projects soon updated</h2>
                        </div>
                        <div class="text-center mt-5">
                            <a href="https://aboutme-officialputuid.c9users.io/index.html" class="site-btn wow fadeInUp" data-wow-delay="0.2s">More Projects</a>
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
                                    <div class="col-sm-4 cont-info wow fadeInUp" data-wow-delay="0.4s">
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
    {/* <!-- Contact section end --> */}



            {/* <h3>Profile Page</h3>
        <div class="profile1">
        </div>
            <div className="profile-body">
                <div className="profile-data">
                    <p className="profile-field">Name</p>
                    <p className="profile-text-gray">Agfid Danu Prasetyo</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Divisi</p>
                    <p className="profile-text-gray">Android Dev</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Availability</p>
                    <p className="profile-text-gray">Full Time</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Age</p>
                    <p className="profile-text-gray">16</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Location</p>
                    <p className="profile-text-gray">Purwokerto, Indonesia</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Years Exprience</p>
                    <p className="profile-text-gray">1</p>
                </div>
                <div className="profile-data">
                    <p className="profile-field">Email</p>
                    <p className="profile-text-gray">agfid11@gmai l.com</p>
                </div>
          </div>  */}
          </div>
        );
    }
}

export default Profile;