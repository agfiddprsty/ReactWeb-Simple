import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader,CardDeck,CardImg, Col, Row } from 'reactstrap';
import {withRouter,Link} from 'react-router-dom';
import { red } from '@material-ui/core/colors';
import bca from './bca.png'
import mandiri from './mandiri.png'
import whatsapp from './whatsapp.png'
import telegram from './telegram.png'

class Payment extends Component {
    render() {
      return (
        <div className="col-md-10 text-center">
        <div className="row">
        <div className="col-md-10">
                    <CardDeck className="deck border border-0">
                        <Card className="border border-0">
                    </Card>
                    </CardDeck>
                    <CardBody>
              <div class="div">
              <div class="row">
                <h2 style={{
                    height:'auto',textAlign:'center',color:'red'
                }}>Pembayaran Pendaftaran Dibutuhkan</h2>
                <span>silahkan membayar biaya  pendaftaran online bootcamp sebesar **IDR 500.000,-** untuk dapat mengakses konten.</span>
               
                <h3 style={{
                    textAlign:'center',color:'red'
                   }}>silahkan mengirim ke rekening berikut:</h3>
                   <br></br>
                   <div>
                   <img className="rounded" src={bca} alt="" style={{width:'80px'}}/> 
                    <span> BCA :320 0401 823 a.n Ega Radiegtya</span>
                    <br></br>
                    <img className="rounded" src={mandiri} alt="" style={{width:'80px'}}/> 
                   <span> MANDIRI :90000 2773 5407 a.n Ega Radiegtya</span>
                   </div>
                   
                   <h3 style={{
                    height:'auto',color:'red'
                   }}>silahkan konfirmasi, jika sudah melakukan pembayaran,melalui:</h3>
                   <div>
                    <img src={whatsapp} alt="" style={{width:'80px'}}/> 
                   <img src={telegram} alt="" style={{width:'75px'}}/> 
                    <h5>  +62 8564 1278 479</h5>
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