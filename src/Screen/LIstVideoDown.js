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
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                            <div className="col-md-4">
                                                <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)",backgroundSize:"100px 50px",backgroundRepeat:"no-repeat"}}>
                                                    <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '100px', border: 'none',height:"50px"}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h5>1.Perkenalan</h5>
                                                <i className="fa fa-clock-o" style={{color:"red"}}><a> 04.32</a></i>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0">
                                    <a href="/detailquiz" className="modul">
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                                <div className="col-md-4">
                                                    <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)",backgroundSize:"100px 50px",backgroundRepeat:"no-repeat"}}>
                                                        <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '100px', border: 'none',height:"50px"}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <h5>Quiz</h5>
                                                    <i className="fa fa-clock-o" style={{color:"red"}}><a> 04.32</a></i>

                                                </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0">
                                    <a href="#" className="modul">
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                            <div className="col-md-4">
                                                <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)",backgroundSize:"100px 50px",backgroundRepeat:"no-repeat",filter:"grayscale(100%)"}}>
                                                    <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '100px', border: 'none',height:"50px"}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <i class="fa fa-key"></i>
                                                <h5>1.Perkenalan</h5>
                                                <i className="fa fa-clock-o" style={{color:"red"}}><a> 04.32</a></i>

                                            </div>
                                        </div>
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