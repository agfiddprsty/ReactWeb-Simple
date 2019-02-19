import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom';
import { red } from '@material-ui/core/colors';
import bca from './img/bca.png';
import './css/payment.css';
import mandiri from './img/bankmandiri.jpg';
import whatsapp from './img/whatsapp.png';
import telegram from './img/telegram.png';
import HeaderDashboard from './HeaderDashboard';

class Payment extends Component {
    render() {
      return (
            <div className="isii">
                <div>
                    <HeaderDashboard/>
                </div>
                <div className="kontener">
                    <section className="kotak">
                        <h2 className="butuh">Pembayaran pendaftaran dibutuhkan</h2>
                        <span className="silahkan"> Silahkan membayar biaya  pendaftaran online bootcamp sebesar IDR <br/> 500.000 untuk dapat mengakses konten kami</span>
                        <div style={{marginBottom: '30px'}}>
                            <img className="rounded icobca" src={bca} alt="" /> 
                            <span className="bca" style={{fontWeight: '600', fontFamily: 'helvetica, Arial, sans serif'}}> 320 0401 823 a/n Ega Wachid</span>
                            <br></br>
                            <img className="rounded icoman" src={mandiri} alt=""/> 
                            <span className="mandiri" style={{marginBottom: '50px', fontWeight: '600', fontFamily: 'helvetica, Arial, sans serif'}}> 90000 2773 5407 a/n Ega Wachid</span>
                        </div>
                    </section>
                    <div className="text-center">
                        <h6 style={{
                            height:'auto',color:'black', marginTop: '50px', marginLeft: '20px', fontFamily: 'Open Sans, helvetica, Arial, sans serif'
                        }}>Silahkan Konfirmasi, jika sudah melakukan pembayaran, melalui:</h6>
                        <div>
                            <img src={telegram} alt="" className="icotel"/> 
                            <img src={whatsapp} alt="" className="icowa"/> 
                            <span style={{marginLeft: '10px', fontFamily: 'Open Sans, helvetica, Arial, sans serif'}}>  +62 8564 1278 479</span>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
          );
        }
      }
export default Payment;