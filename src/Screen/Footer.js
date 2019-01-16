import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Hom">
        <footer class="footer-section bg-dark">
          <div class="container bg-dark">
            {/* <!-- copyright --> */}
            <p class="copyright">Copyright &copy; 2018 - All rights Reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
