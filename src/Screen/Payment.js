import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader,CardDeck,CardImg, Col, Row } from 'reactstrap';
import {withRouter,Link} from 'react-router-dom';
import { red } from '@material-ui/core/colors';
import bca from './bca.png'
import mandiri from './bankmandiri.jpg'
import whatsapp from './whatsapp.png'
import telegram from './telegram.png'

class Payment extends Component {
    render() {
      return (
        <div className="col-md-10 text-left">
        <div className="row">
        <div className="col-md-10 text-left">
                    <CardDeck className="deck border border-0">
                        <Card className="border border-0">
                    </Card>
                    </CardDeck>
                    <CardBody>
              <div class="div">
              <div class="row">
                <h2 style={{
                    height:'50px',textAlign:'center',color:'red'
                }}>Pembayaran Pendaftaran Dibutuhkan!</h2>
                <span style={{
                    height:'auto',textAlign:'left'
                }}> silahkan membayar biaya  pendaftaran online bootcamp sebesar **IDR 500.000,-** untuk dapat mengakses konten kami.</span>
                <h6 style={{
                    height:'auto',textAlign:'center',color:'red'
                   }}>Silahkan kirim ke Rekening berikut:</h6>
                   <br></br>
                   <div>
                   <img className="rounded" src={bca} alt="" style={{width:'10%',height:'50px'}}/> 
                    <span> BCA  320 0401 823 a.n Ega Wachid</span>
                    <br></br>
                    <img className="rounded" src={mandiri} alt="" style={{width:'10%'}}/> 
                   <span> MANDIRI  90000 2773 5407 a.n Ega Wachid</span>
                   </div>
                   <h6 style={{
                    height:'auto',color:'red'
                   }}>Silahkan Konfirmasi, jika sudah melakukan pembayaran,melalui:</h6>
                   <div>
                    <img src={whatsapp} alt="" style={{width:'6%'}}/> 
                   <img src={telegram} alt="" style={{width:'5%'}}/> 
                    <span>  +62 8564 1278 479</span>
                </div>
              </div>
              </div>
          </CardBody>
        </div>
        </div>
        </div>
          );
        }
      }
export default Payment;