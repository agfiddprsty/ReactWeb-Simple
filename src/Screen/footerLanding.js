import React, { Component } from 'react';
import './css/footerLanding.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="landingage">
          <div>
            <div className="row" style={{borderBottom: '1px solid #ebebeb', paddingBottom: '50px'}}>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{paddingBottom: '20px'}}>
                    <img alt="" src="https://image.ibb.co/eBLRvU/logo_footer.png"/>
                    <div>
                        <p className="pertama">Permata Bintaro, South Tangerang</p>
                        <p className="duaaa">+62 8564 1278 479</p>
                        <p className="duaaa">radiegtya@dumbways.id</p>
                    </div>
                </div>
                <div className="col-lg col-md col-sm col-xs" style={{paddingBottom: '20px'}}>
                    <strong>LEARN</strong>
                    <p className="pertama">About</p>
                    <p className="duaaa">Browse</p>
                    <p className="duaaa">Sign In</p>
                </div>
                <div className="col-lg col-md col-sm col-xs" style={{paddingBottom: '20px'}}>
                    <strong>DISCUSS</strong>
                    <p className="pertama">Forum</p>
                    <p className="duaaa">Podcast</p>
                    <p className="duaaa">Sign In</p>
                </div>
                <div className="col-lg col-md col-sm col-xs" style={{paddingBottom: '20px'}}>
                    <strong>EXTRAS</strong>
                    <p className="pertama">Testimonials</p>
                    <p className="duaaa">FAQ</p>
                    <p className="duaaa">Privacy & Terms</p>
                </div>
            </div>
            <div className="text-center copiret">
                <p>&copy; DumbWays 2019 - All rights Reserved. Yes, all of them. That means you. Ega.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
