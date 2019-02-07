import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom';
import { red } from '@material-ui/core/colors';
import bca from './img/bca.png';
import './css/payment.css';
import mandiri from './img/bankmandiri.jpg';
import whatsapp from './img/whatsapp.png';
import telegram from './img/telegram.png';

class Payment extends Component {
    render() {
      return (
            <div className="isii">
                <div className="kontener">
                    <div class="kotak">
                        <div>
                            <h2 style={{
                                height:'50px',textAlign:'left',color:'red', fontWeight:'600', marginTop: '30px', marginLeft: '20px'
                            }}>Pembayaran Pendaftaran Dibutuhkan!</h2>
                            <span style={{
                                height:'auto', marginLeft: '20px'
                            }}> silahkan membayar biaya  pendaftaran online bootcamp sebesar **IDR 500.000,-** untuk dapat</span>
                            <span style={{marginLeft:'20px'}}> mengakses konten kami.</span>
                            <h6 style={{
                                height:'auto',textAlign:'left',color:'red', marginTop: "30px", marginLeft: '20px'
                            }}>Silahkan kirim ke Rekening berikut:</h6>
                            <br></br>
                            <div>
                            <img className="rounded" src={bca} alt="" style={{width:'10%',height:'50px', marginLeft: '20px'}}/> 
                                <span> BCA  320 0401 823 a.n Ega Wachid</span>
                                <br></br>
                                <img className="rounded" src={mandiri} alt="" style={{width:'10%', marginLeft: '20px'}}/> 
                            <span> MANDIRI  90000 2773 5407 a.n Ega Wachid</span>
                            </div>
                            <h6 style={{
                                height:'auto',color:'red', marginTop: '20px', marginLeft: '20px'
                            }}>Silahkan Konfirmasi, jika sudah melakukan pembayaran,melalui:</h6>
                            <div>
                                <img src={whatsapp} alt="" style={{width:'6%', marginLeft: '20px'}}/> 
                            <img src={telegram} alt="" style={{width:'5%', marginLeft: '20px'}}/> 
                                <span style={{marginLeft: '20px'}}>  +62 8564 1278 479</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );
        }
      }
export default Payment;