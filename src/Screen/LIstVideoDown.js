import React, { Component } from 'react';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import rnredux from './img/rnreduxplay.png';
import './css/ListVideo.css';
import './css/VideoPlayer.css'
class ListVideoDown extends Component{
    render(){
        return(
            <div style={{marginLeft:"-60px"}}>
                {/* <h5>Berikutnya</h5> */}
                <div className="col-md">
                    <div className="scrollbar scrollbar-primary scrollbar-cl" style={{overflowX:"hidden"}}>
                        <div class="force-overflow">
                            <CardDeck>
                                <Card className="border-0"><a href="/detailvideo" className="modul">
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)",backgroundRepeat:"no-repeat", backgroundSize:"100% auto",width:"130px",height:"80px"}}>
                                                    <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '70px', border: 'none',height:"60px",marginTop:"10px"}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock" style={{opacity: 0.4,color:"red"}}></i> 04.32</a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/detailvideo" className="modul">
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)",backgroundRepeat:"no-repeat", backgroundSize:"100% auto",width:"130px",height:"80px"}}>
                                                    <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '70px', border: 'none',height:"60px",marginTop:"10px"}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto">
                                                <h6 className="tittledown"> 1.Perkenalan</h6>
                                                <a><i className="far fa-clock" style={{opacity: 0.4,color:"red"}}></i> 04.32</a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/detailvideo" className="modul">
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)",backgroundRepeat:"no-repeat", backgroundSize:"100% auto",width:"130px",height:"80px"}}>
                                                    <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '70px', border: 'none',height:"60px",marginTop:"10px"}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock" style={{opacity: 0.4,color:"red"}}></i> 04.32</a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/detailvideo" className="modul">
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)",backgroundRepeat:"no-repeat", backgroundSize:"100% auto",width:"130px",height:"80px"}}>
                                                    <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '70px', border: 'none',height:"60px",marginTop:"10px"}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock" style={{opacity: 0.4,color:"red"}}></i> 04.32</a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0"><a href="/detailvideo" className="modul">
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)",backgroundRepeat:"no-repeat", backgroundSize:"100% auto",width:"130px",height:"80px"}}>
                                                    <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '70px', border: 'none',height:"60px",marginTop:"10px"}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto">
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock" style={{opacity: 0.4,color:"red"}}></i> 04.32</a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0">
                                    <a href="#" className="modul">
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)", backgroundRepeat:"no-repeat",filter:"grayscale(100%)",backgroundSize:"100% auto",width:"130px",height:"80px"}}>
                                                    <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '70px', border: 'none',height:"60px",marginTop:"10px"}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto">
                                                {/* <i class="fa fa-key"></i> */}
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock" style={{opacity: 0.4,color:"red"}}></i> 04.32</a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0">
                                    <a href="#" className="modul">
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)", backgroundRepeat:"no-repeat",filter:"grayscale(100%)",backgroundSize:"100% auto",width:"130px",height:"80px"}}>
                                                    <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '70px', border: 'none',height:"60px",marginTop:"10px"}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto">
                                                {/* <i class="fa fa-key"></i> */}
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock" style={{opacity: 0.4,color:"red"}}></i> 04.32</a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0">
                                    <a href="#" className="modul">
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)", backgroundRepeat:"no-repeat",filter:"grayscale(100%)",backgroundSize:"100% auto",width:"130px",height:"80px"}}>
                                                    <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '70px', border: 'none',height:"60px",marginTop:"10px"}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto">
                                                {/* <i class="fa fa-key"></i> */}
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock" style={{opacity: 0.4,color:"red"}}></i> 04.32</a>
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                <Card className="border-0">
                                    <a href="#" className="modul">
                                        <div className="row" style={{backgroundColor:"#FFF"}}>
                                            <div className="col-md-auto">
                                                <div className="d-flex justify-content-center" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/95YRwf6CNw8/450x250)", backgroundRepeat:"no-repeat",filter:"grayscale(100%)",backgroundSize:"100% auto",width:"130px",height:"80px"}}>
                                                    <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '70px', border: 'none',height:"60px",marginTop:"10px"}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-auto">
                                                {/* <i class="fa fa-key"></i> */}
                                                <h6 className="tittledown">1.Perkenalan</h6>
                                                <a><i className="far fa-clock" style={{opacity: 0.4,color:"red"}}></i> 04.32</a>
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