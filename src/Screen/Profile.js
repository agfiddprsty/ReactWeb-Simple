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
            <div>
            <div className="about">
                <div>
                    <Header/>
                </div>
                <div class="fh5co-loader"></div>
	
	<div id="page">	
    <header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" style={{backgroundImage:"url(images/cover_bg_3.jpg)"}}>
		    
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					<div class="display-t js-fullheight">
						<div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
							<div class="profile-thumb" style={{background: 'url(images/user-3.jpg)'}}></div>
							<h1><span>Louie Jie Mahusay</span></h1>
							<h3><span>Web Developer / Photographer</span></h3>
							<p>
								<ul class="fh5co-social-icons">
									<li><a href="#"><i class="icon-twitter2"></i></a></li>
									<li><a href="#"><i class="icon-facebook2"></i></a></li>
									<li><a href="#"><i class="icon-linkedin2"></i></a></li>
									<li><a href="#"><i class="icon-dribbble2"></i></a></li>
								</ul>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

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
                                <div class="container kiri-left">
                                <div class="row">
                                <div class="col-md-9">
                                <ul class="info">
                                <p><li><span class="first-block">Full Name:</span><span></span></li></p>
                                <p><li><span class="first-block">Phone:</span><span></span></li></p>
                                <p><li><span class="first-block">Email:</span><span></span></li></p>
                                <p><li><span class="first-block">Website:</span><span></span></li></p>
                                <p><li><span class="first-block">Address:</span><span></span></li></p>
                                </ul>

                                <div class="container kanan-right">
                                <div class="row">
                                <div class="col-md-9">
                                <ul class="info">
                                <p><li><span class="first-block">Agfid Danu Prasetyo</span><span></span></li></p>
                                <p><li><span class="first-block">081228154479</span><span></span></li></p>
                                <p><li><span class="first-block">agfidpraz@gmail.com</span><span></span></li></p>
                                <p><li><span class="first-block">www.fiid.com</span><span></span></li></p>
                                <p><li><span class="first-block">Purwokerto</span><span></span></li></p>
                                </ul>

                                 <div class="row">
                        {/* <div class="col-md-4">
                            <ul class="info">
                                <li><span class="first-block">Full Name:</span><span class="second-block">Louie Jie Mahusay</span></li>
                                <li><span class="first-block">Phone:</span><span class="second-block">+ 1235 2355 98</span></li>
                                <li><span class="first-block">Email:</span><span class="second-block">info@yoursite.com</span></li>
                                <li><span class="first-block">Website:</span><span class="second-block">www.yoursite.com</span></li>
                                <li><span class="first-block">Address:</span><span class="second-block">198 West 21th Street, Suite 721 New York NY 10016</span></li>
                            </ul>
                        </div> */}
                            </div>
                            </div>
                            </div>

                        
                </div> 
                </div>
                </div>
                </div>
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
    
          </div>
          </div>
          </div>
        );
    }
}

export default Profile;