import React, { Component } from 'react';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import {withRouter,Link} from 'react-router-dom';
import rnredux from './rnredux.jpg';
import {Input, InputGroupAddon, Button } from 'reactstrap';
import { RenderLoop } from 'brace';
import quiz from './quiz.png'

class ListVideo extends Component {

render() {
return (
        <div className="row">
                <div className="col-md-10">
                    <CardDeck className="deck border border-0">
                        <Card className="border border-0"><a href="/batch" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded imgcard"/>
                            <CardBody className="crdbdy">
                            <h5>1.Perkenalan</h5>
                            <br></br>
                            </CardBody>
                            </a></Card>
                        <Card className="border border-0"><a href="/batch" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>2.Instalasi</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border border-0"><a href="/batch" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>3.Component</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                    </CardDeck>
                    <CardDeck className="deck border border-0">
                        <Card className="border border-0"><a href="/batch" className="modul">
                            <CardImg top width="100%" src={quiz} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>4.Quiz 1</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border border-0"><a href="/batch" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>2.Instalasi</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border border-0"><a href="/batch" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>3.Component</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                    </CardDeck>
                </div>
                </div>
        );
    }
}

export default ListVideo;