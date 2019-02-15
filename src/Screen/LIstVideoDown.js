import React, { Component } from 'react';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import rnredux from './img/rnreduxplay.png';
import './css/ListVideo.css';

class ListVideoDown extends Component{
    render(){
        return(
            <div>
                {/* <h5>Berikutnya</h5> */}
                <div className="col-md-auto">
                    <div className="scrollbar scrollbar-primary">
                        <div class="force-overflow">
                            <CardDeck>
                                <Card className="border-0"><a href="/detailvideo" className="modul">
                                    <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                        <CardBody className="crdbdy">
                                            <h5>1.Perkenalan</h5>
                                            <br></br>
                                        </CardBody>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/detailvideo" className="modul">
                                    <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                        <CardBody className="crdbdy">
                                            <h5>1.Perkenalan</h5>
                                            <br></br>
                                        </CardBody>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/detailquiz" className="modul">
                                    <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                        <CardBody className="crdbdy">
                                            <h5>Quiz</h5>
                                            <br></br>
                                        </CardBody>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/detailvideo" className="modul">
                                    <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                        <CardBody className="crdbdy">
                                            <h5>1.Perkenalan</h5>
                                            <br></br>
                                        </CardBody>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/detailvideo" className="modul">
                                    <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                        <CardBody className="crdbdy">
                                            <h5>1.Perkenalan</h5>
                                            <br></br>
                                        </CardBody>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="#" className="modul">
                                    <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%",filter:"grayscale(100%)"}}/>
                                        <CardBody className="crdbdy">
                                        <i class="fa fa-key"></i>
                                            <h5>1.Perkenalan</h5>
                                            <br></br>
                                        </CardBody>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="#" className="modul">
                                    <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%",filter:"grayscale(100%)"}}/>
                                        <CardBody className="crdbdy">
                                        <i class="fa fa-key"></i>
                                            <h5>1.Perkenalan</h5>
                                            <br></br>
                                        </CardBody>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="#" className="modul">
                                    <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%",filter:"grayscale(100%)"}}/>
                                        <CardBody className="crdbdy">
                                        <i class="fa fa-key"></i>
                                            <h5>1.Perkenalan</h5>
                                            <br></br>
                                        </CardBody>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="#" className="modul">
                                    <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%",filter:"grayscale(100%)"}}/>
                                        <CardBody className="crdbdy">
                                        <i class="fa fa-key"></i>
                                            <h5>1.Perkenalan</h5>
                                            <br></br>
                                        </CardBody>
                                    </a>
                                </Card>
                            </CardDeck>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default ListVideoDown;