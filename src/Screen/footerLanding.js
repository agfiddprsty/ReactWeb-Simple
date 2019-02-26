import React, { Component } from 'react';
import './css/footerLanding.css';
import dwhite from './img/dwhite.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="landingage">
          <div>
            <div className="row" style={{borderBottom: '1px solid #ebebeb', paddingBottom: '50px'}}>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{paddingBottom: '20px'}}>
                    <img alt="" src={dwhite} className="dwhite"/>
                    <div className="contact">
                        <p className="addrs">Permata Bintaro, South Tangerang</p>
                        <p className="nope">+62 8564 1278 479</p>
                        <p className="email">radiegtya@dumbways.id</p>
                    </div>
                </div>
                <div className="col-lg col-md col-sm col-xs" style={{paddingBottom: '20px'}}>
                    <strong className="titlefoot">LEARN</strong>
                    <p className="pertama">About</p>
                    <p className="duaaa">Browse</p>
                    <p className="duaaa">Sign In</p>
                </div>
                <div className="col-lg col-md col-sm col-xs" style={{paddingBottom: '20px'}}>
                    <strong className="titlefoot">DISCUSS</strong>
                    <p className="pertama">Forum</p>
                    <p className="duaaa">Podcast</p>
                    <p className="duaaa">Sign In</p>
                </div>
                <div className="col-lg col-md col-sm col-xs" style={{paddingBottom: '20px'}}>
                    <strong className="titlefoot">EXTRAS</strong>
                    <p className="pertama">Testimonials</p>
                    <p className="duaaa">FAQ</p>
                    <p className="duaaa">Privacy & Terms</p>
                </div>
            </div>
            <div className="text-center copiret">
                <p className="txtcpy">&copy; DumbWays 2019 - All rights Reserved. Yes, all of them. That means you. Ega.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
