import React, { Component } from 'react';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import {withRouter,Link} from 'react-router-dom';
import rnredux from './img/rnredux.jpg';
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
                            <a href='#' className="modul"> 
                            {/* <Link to = 'https://google.com/'></Link> */}
                            <CardImg class="zoom" top width="10%" src={rnredux} alt="Card image cap" class="image" className="rounded imgcard"/>
                            <CardBody className="crdbdy">
                        <div class="overlay">       
                             <a href="/detailvideo" class="icon">
                                <i class="fa fa-play"></i>
                            </a>
                        </div>
                            <h5>1. Perkenalan <span className="fa fa-clock-o" style={{fontSize:'15px',color:"red", marginLeft:"260px"}}> 04.32</span></h5>
                            <br></br>
                            </CardBody>
                            </a>
                            </Card>
                        <Card className=" border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="10%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <div class="overlay">
                        <a href="/detailvideo" class="icon">
                            <i class="fa fa-play"></i>
                        </a>

                        </div>
                            <h5>2. Instalasi <span className="fa fa-clock-o" style={{fontSize:'15px',color:"red", marginLeft:"270px"}}> 04.32</span> </h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className=" border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="10%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>3. Component <span className="fa fa-clock-o" style={{fontSize:'15px',color:"red",marginLeft:"260px"}}> 04.32</span> </h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className=" border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="10%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">

                            <h5>4. Character <span className="fa fa-clock-o" style={{fontSize:'15px',color:"red", marginLeft:"260px"}}> 04.32</span> </h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                    </CardDeck>
                    <br/>
                    <br/>
                    <CardDeck>
                        <Card className=" border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>4. Kuis Mingguan #1 <span className="fa fa-clock-o" style={{fontSize:'15px',color:"red", marginLeft:"260px"}}> 04.32</span> </h5>
                            <br></br>
                            </CardBody>
                            </a></Card>
                        <Card className="border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>2. Instalasi <span className="fa fa-clock-o" style={{fontSize:'15px',color:"red", marginLeft:"260px"}}> 04.32</span> </h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="100%" src={rnredux} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <h5>3. Component <span className="fa fa-clock-o" style={{fontSize:'15px',color:"red", marginLeft:"260px"}}> 04.32</span> </h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className=" border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="10%" src={rnredux}  alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">

                            <h5>4. Character<span className="fa fa-clock-o" style={{fontSize:'15px',color:"red", marginLeft:"260px"}}> 04.32</span> </h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                    </CardDeck>
                    <br/>
                    <br/>
                    <div style={{borderWidth:"100px",borderBottom:"solid",width:"1470px",borderColor:"#e7e7e7"}}></div>
                    <br/>
                     <h3> Minggu 2</h3> 
                     <span>Konten Terkunci,selesaikan dulu semua kuis di Minggu 1</span>
                    <CardDeck>
                        <Card className="border-0"><a href="#" className="modul">
                            <CardImg top width="100%" src={rnredux} style={{filter: "grayscale(100%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <i class="fa fa-key"></i>
                            <h5>1. Perkenalan</h5>  
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border-0"><a href="#" className="modul">
                            <CardImg top width="100%" src={rnredux} style={{filter: "grayscale(100%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <i class="fa fa-key"></i>
                            <h5>2. Instalasi</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border-0"><a href="#" className="modul">
                            <CardImg top width="100%" src={rnredux} style={{filter: "grayscale(100%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <i class="fa fa-key"></i>
                            <h5>3. Component</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className=" border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="10%" src={rnredux}  style={{filter: "grayscale(100%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <i class="fa fa-key"></i>
                            <h5>4. Character</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                    </CardDeck>
                    <CardDeck>
                        <Card className="border-0"><a href="#" className="modul">
                            <CardImg top width="100%" src={rnredux} style={{filter: "grayscale(100%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <i class="fa fa-key"></i>
                            <h5>1. Kuis Mingguan #2</h5>  
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border-0"><a href="#" className="modul">
                            <CardImg top width="100%" src={rnredux} style={{filter: "grayscale(100%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <i class="fa fa-key"></i>
                            <h5>2. Instalasi</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className="border-0"><a href="#" className="modul">
                            <CardImg top width="100%" src={rnredux} style={{filter: "grayscale(100%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <i class="fa fa-key"></i>
                            <h5>3. Component</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                        <Card className=" border-0"><a href="/detailvideo" className="modul">
                            <CardImg top width="10%" src={rnredux}  style={{filter: "grayscale(100%)"}} alt="Card image cap" className="rounded"/>
                            <CardBody className="crdbdy">
                            <i class="fa fa-key"></i>
                            <h5>4. Character</h5>
                            <br></br>
                            </CardBody>
                        </a></Card>
                    </CardDeck>
                    <br/>
                    <br/>
                    <br/>
                    </div>
                </div>
        );
    }
}

export default ListVideo;