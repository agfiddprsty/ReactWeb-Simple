import React, { Component } from 'react';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import rnredux from './img/rnreduxplay.png';
import './css/ListVideo.css';
import './css/VideoPlayer.css'
import lvl from './img/Level.png'
import lock from './img/LockWhite.png'
import ply from './img/ply.png'
class ListVideoDown extends Component{
    constructor(){
        super()
        this.state={
            urlbackground:"https://source.unsplash.com/95YRwf6CNw8/450x250",
            url:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://source.unsplash.com/95YRwf6CNw8/450x250)",
            listvideo:[
                {id:"1",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Test"},
                {id:"2",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Test"},
                {id:"3",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Test"},
                {id:"4",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Test"},
            ],
        }
    }
    componentDidMount(){
        console.log(this.state.listvideo);
    }
    render(){
        return(
            <div className="dv-list-out-gd">
                {/* <h5>Berikutnya</h5> */}
                <div className="col-md">
                    <div className="scrollbar scrollbar-primary scrollbar-cl">
                        <div class="force-overflow">
                            {this.state.listvideo.map((item,key)=>{
                                return(
                                    <div>
                                        <CardDeck>
                                            <Card className="border-0"><a href="/video/example" className="modul">
                                                    <div className="row dv-row-gd">
                                                        <div className="col-md-auto">
                                                            <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundImage:`url(${item.image})`}}>
                                                                <img class="img-fluid img-thumbnail play-img-gd" src={ply} alt=""></img>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-auto dv-tittle-gd">
                                                            <h6 className="tittledown">{item.tittle}</h6>
                                                            <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Card>
                                        </CardDeck>
                                    </div>
                                )
                            })}
                            {/* <CardDeck>
                                <Card className="border-0"><a href="/video/example" className="modul">
                                        <div className="row dv-row-gd">
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundImage:`url(${this.state.urlbackground})`}}>
                                                    <img class="img-fluid img-thumbnail play-img-gd" src={ply} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto dv-tittle-gd">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/video/example" className="modul">
                                        <div className="row dv-row-gd">
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundImage:`url(${this.state.urlbackground})`}}>
                                                    <img class="img-fluid img-thumbnail play-img-gd" src={ply} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto dv-tittle-gd">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/video/example" className="modul">
                                        <div className="row dv-row-gd">
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundImage:`url(${this.state.urlbackground})`}}>
                                                    <img class="img-fluid img-thumbnail play-img-gd" src={ply} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto dv-tittle-gd">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/video/example" className="modul">
                                        <div className="row dv-row-gd">
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundImage:`url(${this.state.urlbackground})`}}>
                                                    <img class="img-fluid img-thumbnail play-img-gd" src={ply} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto dv-tittle-gd">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/video/example" className="modul">
                                        <div className="row dv-row-gd">
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundImage:`url(${this.state.urlbackground})`}}>
                                                    <img class="img-fluid img-thumbnail play-img-gd" src={ply} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto dv-tittle-gd">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/quiz/example" className="modul">
                                        <div className="row dv-row-gd">
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundColor:"#FF5D5D"}}>
                                                </div>
                                            </div>
                                            <div className="col-md-auto dv-tittle-gd">
                                                <h6 className="tittledown">Kuiz</h6>
                                                <a className="a-clock-gd">Level <img src={lvl} style={{width:"13px"}}></img></a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0">
                                    <a href="#" className="modul">
                                        <div className="row dv-row-gd">
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center dv-bg-gd" style={{background:this.state.url}}>
                                                    <img class="img-fluid img-thumbnail play-img-gd" src={lock} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto dv-tittle-gd">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0">
                                    <a href="#" className="modul">
                                        <div className="row dv-row-gd">
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center dv-bg-gd" style={{background:this.state.url}}>
                                                    <img class="img-fluid img-thumbnail play-img-gd" src={lock} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto dv-tittle-gd">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0">
                                    <a href="#" className="modul">
                                        <div className="row dv-row-gd">
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center dv-bg-gd" style={{background:this.state.url}}>
                                                    <img class="img-fluid img-thumbnail play-img-gd" src={lock} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto dv-tittle-gd">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0">
                                    <a href="#" className="modul">
                                        <div className="row dv-row-gd">
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center dv-bg-gd" style={{background:this.state.url}}>
                                                    <img class="img-fluid img-thumbnail play-img-gd" src={lock} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto dv-tittle-gd">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck> */}
                            
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default ListVideoDown;