import React, { Component } from 'react';
import quiz from './img/quiz.png'
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import rnredux from './img/rnreduxplay.png';
import './css/ListVideo.css';

class ListVideoDown extends Component{
    render(){
        return(
            <div >
                <h5>Berikutnya</h5>
                <div className="col-md-10">
                    <CardDeck>
                        <Card className="border-0"><a href="/video" className="modul">
                            <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                <CardBody className="crdbdy">
                                    <h5>1.Perkenalan</h5>
                                    <br></br>
                                </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                    <CardDeck>
                        <Card className="border-0"><a href="/video" className="modul">
                            <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                <CardBody className="crdbdy">
                                    <h5>1.Perkenalan</h5>
                                    <br></br>
                                </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                    <CardDeck>
                        <Card className="border-0"><a href="/video" className="modul">
                            <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                <CardBody className="crdbdy">
                                    <h5>1.Perkenalan</h5>
                                    <br></br>
                                </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                    <CardDeck>
                        <Card className="border-0"><a href="/video" className="modul">
                            <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                <CardBody className="crdbdy">
                                    <h5>1.Perkenalan</h5>
                                    <br></br>
                                </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                    <CardDeck>
                        <Card className="border-0"><a href="/video" className="modul">
                            <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                <CardBody className="crdbdy">
                                    <h5>1.Perkenalan</h5>
                                    <br></br>
                                </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                    <CardDeck>
                        <Card className="border-0"><a href="/video" className="modul">
                            <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                <CardBody className="crdbdy">
                                    <h5>1.Perkenalan</h5>
                                    <br></br>
                                </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                    <CardDeck>
                        <Card className="border-0"><a href="/video" className="modul">
                            <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                <CardBody className="crdbdy">
                                    <h5>1.Perkenalan</h5>
                                    <br></br>
                                </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                    <CardDeck>
                        <Card className="border-0"><a href="/video" className="modul">
                            <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                <CardBody className="crdbdy">
                                    <h5>1.Perkenalan</h5>
                                    <br></br>
                                </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                    <CardDeck>
                        <Card className="border-0"><a href="/video" className="modul">
                            <CardImg src={rnredux} alt="Card image cap" className="rounded imgcard" style={{height:"50%"}}/>
                                <CardBody className="crdbdy">
                                    <h5>1.Perkenalan</h5>
                                    <br></br>
                                </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}
export default ListVideoDown;