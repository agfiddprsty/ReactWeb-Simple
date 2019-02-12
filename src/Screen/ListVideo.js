import React, { Component } from 'react';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import {withRouter,Link} from 'react-router-dom';
import rnredux from './img/rnreduxplay.png';
import './css/ListVideo.css';
import {Input, InputGroupAddon, Button } from 'reactstrap';
import { RenderLoop } from 'brace';
import quis from './img/quizz.jpg'
import { ActionSettingsBrightness } from 'material-ui/svg-icons';
import HeaderDashboard from './HeaderDashboard';
// import { Link } from 'react-router-dom';

class ListVideo extends Component {

render() {
return (
        <div className="">
        <br/>
        <br/>
                <div className="col-md-12">
                <h3>Minggu 1</h3>
                    <CardDeck >
                        <Card className=" border-0">
                            <a href='/detailvideo' className="modul"> 
                            {/* <Link to = 'https://google.com/'></Link> */}
                            <CardImg className="thumbnail-images" top width="10%" src={rnredux} alt="Card image cap" className="rounded imgcard"/>
                            <CardBody className="crdbdy">
                            <h5>1.Perkenalan</h5>
                            <br></br>
                            </CardBody>
                            </a>
                            </Card>
                        <Card className=" border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="10%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">

                            <h5>2.Instalasi</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className=" border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="10%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>3. Component</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                    </CardDeck>
                    <br/>
                    <br/>
                <div className="col-md-12">
                    <CardDeck>
                        <Card className=" border-0"><a href="/detailvideo" className="modul">
                            <CardImg className="thumbnail-images" style={{height:"255px"}} top width="100%" src={quis} alt="Card image cap" className="rounded imgcard"/>
                            <CardBody className="crdbdy">
                            <h5>4. Quiz</h5>
                            <br></br>
                            </CardBody>
                            </a></Card>
                        <Card className="border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>2. Instalasi</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>3. Component</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                    </CardDeck>
                    <br/>
                    <br/>
                     <h3> Minggu 2</h3> 
                    <CardDeck>
                        <Card className="border-0"><a href="#" className="modul">
                            <CardImg top width="100%" src={rnredux} style={{filter: "grayscale(100%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>1. Perkenalan</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border-0"><a href="#" className="modul">
                            <CardImg top width="100%" src={rnredux} style={{filter: "grayscale(100%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>2. Instalasi</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border-0"><a href="#" className="modul">
                            <CardImg top width="100%" src={rnredux} style={{filter: "grayscale(100%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>3. Component</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                    </CardDeck>
                    
                    </div>
                </div>
                </div>
        );
    }
}

export default ListVideo;