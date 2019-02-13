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
                        <h2 style={{
                            height:'50px',textAlign:'left',color:'black', fontWeight:'600', marginTop: '30px'
                        }}>Pembayaran pendaftaran dibutuhkan</h2>
                        <span style={{
                            height:'auto', color: '#000'
                        }}> silahkan membayar biaya  pendaftaran online bootcamp sebesar IDR 500.000 untuk dapat</span>
                        <span style={{ color: '#000'}}> mengakses konten kami.</span>
                        <div style={{marginBottom: '30px'}}>
                            <img className="rounded" src={bca} alt="" style={{marginLeft: '-25px', width:'20%'}}/> 
                            <span style={{fontWeight: '600'}}> BCA  320 0401 823 a/n Ega Wachid</span>
                            <br></br>
                            <img className="rounded" src={mandiri} alt="" style={{marginLeft: '-20px', width:'20%'}}/> 
                            <span style={{marginBottom: '50px', fontWeight: '600'}}> MANDIRI  90000 2773 5407 a/n Ega Wachid</span>
                        </div>
                    </section>
                    <div className="text-center">
                        <h6 style={{
                            height:'auto',color:'black', marginTop: '50px', marginLeft: '20px'
                        }}>Silahkan Konfirmasi, jika sudah melakukan pembayaran, melalui:</h6>
                        <div>
                            <img src={telegram} alt="" style={{width:'3%'}}/> 
                            <img src={whatsapp} alt="" style={{width:'4%', marginLeft: '10px'}}/> 
                            <span style={{marginLeft: '10px'}}>  +62 8564 1278 479</span>
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