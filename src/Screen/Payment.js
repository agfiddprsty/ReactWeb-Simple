import React, { Component } from 'react';
import bca from './img/bca.png';
import './css/payment.css';
import mandiri from './img/mandiri.png';
import whatsapp from './img/whatsapp.png';
import telegram from './img/telegram.png';
import Header from './HeaderPage';

class Payment extends Component {
    render() {
      return (
            <div className="isii">
                <div>
                    <Header/>
                </div>
                <div className="kontener d-flex flex-wrap align-content-center">
                    <section className="sqare">
                        <h2 className="butuh">Pembayaran pendaftaran dibutuhkan</h2>
                        <span className="silahkan"> Silahkan membayar biaya  pendaftaran online bootcamp sebesar IDR <br/> 500.000 untuk dapat mengakses konten kami</span>
                        <div className="norek">
                            <div className="rekbca">
                                <img className="rounded icobca" src={bca} alt="" /> 
                                <span className="bca"> 320 0401 823 a/n Ega Wachid</span>
                            </div>
                            <div className="rekman">
                                <img className="rounded icoman" src={mandiri} alt=""/> 
                                <span className="mandiri"> 90000 2773 5407 a/n Ega Wachid</span>
                            </div>
                        </div>
                    </section>
                    <div className="text-center">
                        <h6 className="plsconfrm">Silahkan Konfirmasi, jika sudah melakukan pembayaran, melalui:</h6>
                        <div>
                            <img src={telegram} alt="" className="icotel"/> 
                            <img src={whatsapp} alt="" className="icowa"/> 
                            <span className="nophone">  +62 8564 1278 479</span>
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