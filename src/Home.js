import React, { Component } from 'react';
import './Home.css';
import Header from './Header.js';
import Footer from './Footer.js';
//import Batch from './ListBatch';
import profile from './profile.jpeg';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';   
import {withRouter,Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Hom">
        <Header />
        <body className="Hom-body">
          <section id="box-profile">
          <div className="img-profile">
              <div>
                <img src={profile} className="img-profile" alt="profile" />
              </div>
          </div>
          <div class="description">
              <h1>Agfid Danu Prasetyo</h1>
              <p>Android Dev</p>
              <a href="#" className="btn btn-primary" role="button">Edit</a>
              <a href="#" className="btn btn-outline-primary">Resume</a>
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
             <p class="list-group-item active">Silabus</p>
             <div>
             <CardDeck className="deck">
             <Card><a href="#" className="modul">
                <CardImg top width="100%" src={profile} alt="Card image cap" />
                <CardBody>
                <CardTitle>Module 1</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <a href="#" className="btn btn-outline-primary">Read Module</a>
                </CardBody>
                </a></Card>
            <Card><a href="#" className="modul">
                <CardImg top width="100%" src={profile} alt="Card image cap" />
                <CardBody>
                <CardTitle>Module 2</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <a href="#" className="btn btn-outline-primary">Read Module</a>
                </CardBody>
            </a></Card>
            <Card><a href="#" className="modul">
                <CardImg top width="100%" src={profile} alt="Card image cap" />
                <CardBody>
                <CardTitle>Module 3</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <a href="#" className="btn btn-outline-primary">Read Module</a>
                </CardBody>
            </a></Card>
            </CardDeck>
            </div>
            </div>        
        </section>
        <section id="batch">
            <div class="list-group">
             <p class="list-group-item active">Batch</p>
            </div>
            <div class="card list">
                <div class="card-header">
                <a class="card-link" data-toggle="collapse" href="#collapseOne">
                    Bootcamp #1
                </a>
                </div>
                <div id="collapseOne" class="collapse" disabled data-parent="#accordion">
                <div class="card-body desc">
                <h6>Bootcamp Frontend Mobile Developer dengan React Native dan Redux </h6>
                    <dl>
                        <dt>Jadwal</dt>
                        <dd>
                            - 5 Mei s.d 9 Juni, setiap sabtu (08.00 - 17.00). So sangat cocok bagi Anda yang punya kesibukan sendiri atau sedang bekerja.
                        </dd>
                        <dd>
                            - hari lain diharuskan tetap mengerjakan tugas dan tanggung jawab seputar bootcamp di rumah masing2, dan report min 2 hari sekali 
                        </dd>
                    </dl>
                </div>
                <Link to='/Hack' className="btn btn-primary botcam">Start Test</Link>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                    Bootcamp #2
                </a>
                </div>
                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                <div class="card-body desc">
                    <h6>Bootcamp Frontend Mobile Developer dengan React Native dan Redux </h6>
                    <dl>
                        <dt>Jadwal</dt>
                        <dd>
                            - 5 Mei s.d 9 Juni, setiap sabtu (08.00 - 17.00). So sangat cocok bagi Anda yang punya kesibukan sendiri atau sedang bekerja.
                        </dd>
                        <dd>
                            - hari lain diharuskan tetap mengerjakan tugas dan tanggung jawab seputar bootcamp di rumah masing2, dan report min 2 hari sekali 
                        </dd>
                    </dl>
                </div>
                <Link to='/Hack' className="btn btn-primary botcam">Start Test</Link>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                    Bootcamp #3
                </a>
                </div>
                <div id="collapseThree" class="collapse" data-parent="#accordion">
                <div class="card-body desc">
                <h6>Bootcamp Frontend Mobile Developer dengan React Native dan Redux </h6>
                    <dl>
                        <dt>Jadwal</dt>
                        <dd>
                            - 5 Mei s.d 9 Juni, setiap sabtu (08.00 - 17.00). So sangat cocok bagi Anda yang punya kesibukan sendiri atau sedang bekerja.
                        </dd>
                        <dd>
                            - hari lain diharuskan tetap mengerjakan tugas dan tanggung jawab seputar bootcamp di rumah masing2, dan report min 2 hari sekali 
                        </dd>
                    </dl>
                </div>
                <Link to='/Hack' className="btn btn-primary botcam">Start Test</Link>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                <a class="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                    Bootcamp #4
                </a>
                </div>
                <div id="collapseFour" class="collapse" data-parent="#accordion">
                <div class="card-body desc">
                <h6>Bootcamp Frontend Mobile Developer dengan React Native dan Redux </h6>
                    <dl>
                        <dt>Jadwal</dt>
                        <dd>
                            - 5 Mei s.d 9 Juni, setiap sabtu (08.00 - 17.00). So sangat cocok bagi Anda yang punya kesibukan sendiri atau sedang bekerja.
                        </dd>
                        <dd>
                            - hari lain diharuskan tetap mengerjakan tugas dan tanggung jawab seputar bootcamp di rumah masing2, dan report min 2 hari sekali 
                        </dd>
                    </dl>
                </div>
                <Link to='/Hack' className="btn btn-primary botcam">Start Test</Link>
                </div>
            </div>
        </section>
        </body>
        <Footer />
      </div>
    );
  }
}

export default Home;
