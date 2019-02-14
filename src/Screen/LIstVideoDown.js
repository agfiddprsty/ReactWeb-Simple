import React, { Component } from 'react';
import quiz from './img/quiz.png'
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import rnredux from './img/rnreduxplay.png';
import './css/ListVideo.css';
import ProgressDetail from './ProgressDetail';
// import { Progress } from 'reactstrap';

class ListVideoDown extends Component{
    render(){
        return(
            <div>
                {/* <ProgressDetail/> */}
                <div style={{width:"250px",backgroundColor:"#FF6567",height:"130px",borderRadius:"10px"}}>
                    {/* <Card style={{width:"250px"}} color="#000"> */}
                    {/* <CardTitle style={{backgroundColor:"#FF6567"}}>
                        <h2>Progress</h2>
                    </CardTitle> */}
                    <br/>
                    <h2 style={{color:"#FFF",marginLeft:"20px",borderRadius:"10px"}}>Progress</h2>
                    <Progress style={{width:"100",marginLeft:"20px",marginRight:"20px"}} value="25"></Progress>
                    <font style={{marginLeft:"190px",marginTop:"10px"}}color="#FFF">25%</font>
                        {/* <CardBody style={{backgroundColor:"#FF6567"}}>
                            <h2 style={{color:"#FFF"}}>Progress</h2>
                            <Progress value="25"></Progress>
                            <label style={{marginLeft:"190px",marginTop:"10px",color:"#FFF"}}>25%</label>
                            <font style={{marginLeft:"190px",marginTop:"10px"}}color="">25%</font>
                        </CardBody>
                    </Card> */}
                
                </div>

                <br/>
                <div style={{borderTop:"solid",borderColor:"#E7E7E7",width:"250px"}}></div>
                <br/>
                <h5>Berikutnya</h5>
                <div className="col-md-10">
                    <div className="scrollbar scrollbar-primary">
                        <div class="force-overflow">
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
                </div>
               
            </div>
        )
    }
}
export default ListVideoDown;