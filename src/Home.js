import React, { Component } from 'react';
import './css/Home.css';
import Header from './Header.js';
import Footer from './Footer.js';
import rnredux from './rnredux.jpg';
import profile from './profile.jpeg';
import Batch from './batch.js';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import {withRouter,Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Hom">
        <Header />
        <body className="Hom-body">
        <div class="alert alert-success alert-dismissible alrt fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>WELCOME!</strong> Agfid Danu Prasetyo
        </div>
          <section id="box-profile">
          <div className="img-profile">
              <div>
                <img src={profile} className="img-profile" alt="profile" />
              </div>
          </div>
          <div class="description">
              <h1>Agfid Danu Prasetyo</h1>
              <p>Android Dev</p>
          </div>
          <div className="information">
              <div className="data">
                  <p className="field">Availability</p>
                  <p className="text-gray">Full Time</p>
              </div>
              <div className="data">
                  <p className="field">Age</p>
                  <p className="text-gray">16</p>
              </div>
              <div className="data">
                  <p className="field">Location</p>
                  <p className="text-gray">Purwokerto, Indonesia</p>
              </div>
              <div className="data">
                  <p className="field">Years Exprience</p>
                  <p className="text-gray">1</p>
              </div>
              <div className="data">
                  <p className="field">Email</p>
                  <p className="text-gray">agfid11@gmail.com</p>
              </div>
          </div>
        </section>
        <section id="silabus">
            <div class="list-group">
             <h5 className="silab">Silabus</h5>
             <div>
             <CardDeck className="deck">
             <Card className="border border-0"><a href="/Batch" className="modul">
                <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                <CardBody className="crdbdy">
                <h5>Frontend Mobile Developer dengan React Native dan Redux</h5>
                <br></br>
                <p>learning progress:</p>
                <Progress value="10">10%</Progress>
                </CardBody>
                </a></Card>
            <Card className="border border-0"><a href="/Batch" className="modul">
                <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                <CardBody className="crdbdy">
                <h5>Frontend Mobile Developer dengan React Native dan Redux</h5>
                <br></br>
                <p>learning progress:</p>
                <Progress value="10">10%</Progress>
                </CardBody>
            </a></Card>
            <Card className="border border-0"><a href="/Batch" className="modul">
                <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                <CardBody className="crdbdy">
                <h5>Frontend Mobile Developer dengan React Native dan Redux</h5>
                <br></br>
                <p>learning progress:</p>
                <Progress value="10">10%</Progress>
                </CardBody>
            </a></Card>
            </CardDeck>
            </div>
            </div>        
        </section>
        <section id="batch">
        <h5 className="bat">Batch</h5>
        <div class="row cardbatch">
            <div class="col"> <a href='/Hack' className="listbatch">
            <Batch /></a>
            </div>
            <div class="col"> <a href='/Hack' className="listbatch">
            <Batch /></a>
            </div>
        </div>
        <a href="/Batch" className="btn btn-outline-primary btnbatch">See More Batch</a>
        </section>
        </body>
        <Footer />
      </div>
    );
  }
}

export default Home;
