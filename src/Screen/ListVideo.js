import React, { Component } from 'react';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import {withRouter,Link} from 'react-router-dom';
import rnredux from './rnreduxplay.png';
import './css/ListVideo.css';
import {Input, InputGroupAddon, Button } from 'reactstrap';
import { RenderLoop } from 'brace';
import quiz from './quiz.png'
import { ActionSettingsBrightness } from 'material-ui/svg-icons';
import HeaderDashboard from './HeaderDashboard';

class ListVideo extends Component {

render() {
return (
        <div className="">
        <h3> Minggu 1</h3>
                <div className="col-md-12">
                    <CardDeck className="deck border border-0">
                        <Card className="border border-0"><a href="/video" className="modul">
                            <CardImg className="thumbnail-images" top width="100%" src={rnredux} alt="Card image cap" className="rounded imgcard"/>
                            <CardBody className="crdbdy">
                            <h5>1.Perkenalan</h5>
                            <br></br>
                            </CardBody>
                            </a></Card>
                        <Card className="border border-0"><a href="/video" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>2.Instalasi</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border border-0"><a href="/video" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>3.Component</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                    </CardDeck>
                    <CardDeck className="deck border border-0">
                        <Card className="border border-0"><a href="#" className="modul">
                            <CardImg top width="100%" src={quiz} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>4.Quiz 1</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border border-0"><a href="/video" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>2.Instalasi</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border border-0"><a href="/video" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>3.Component</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                    </CardDeck>
                    <h3> Minggu 2</h3>
                    <CardDeck className="deck border border-0">
                        <Card className="border border-0"><a href="#" className="modul">
                            <CardImg top width="100%" src={quiz} style={{filter: "brightness(10%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>4.Quiz 1</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border border-0"><a href="/video" className="modul">
                            <CardImg top width="100%" src={rnredux} style={{filter: "brightness(10%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>2.Instalasi</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border border-0"><a href="/video" className="modul">
                            <CardImg top width="100%" src={rnredux} style={{filter: "brightness(10%)"}} alt="Card image cap" className="rounded"/>
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