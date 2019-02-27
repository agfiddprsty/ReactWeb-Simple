import React, { Component } from 'react';
import './css/ListVideo.css';
import ply from './img/ply.png';
// import { Link } from 'react-router-dom';
import lvl from './img/Level.png';
import lock from './img/LockRed.png'
class ListVideo extends Component {

render() {
return (
        <div style={{overflow:"hidden",backgroundColor:"#fff"}} >
        <div class="container">
            <div>
                <br/>
                <h2 className="h2week1" style={{paddingTop:"90px"}}>Minggu 1</h2>
                <br/>
            </div>
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
                <div className="d-flex justify-content-center listA">
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                        <br/>
                    </a>
                </div>
                <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span className="span-title-video">1. Perkenalan</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"96px",color:"red"}}></span> 04:32 </span>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
                <div className="d-flex justify-content-center listB">
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                        <br/>
                    </a>
                </div>
                    <a style={{paddingTop:"15px"}}href="/detailvideo" class="d-block mb-4 h-100">
                    <span className="span-title-video">2. Components</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"75px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span className="span-title-video">3. Instalasi</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"115px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span className="span-title-video">4. Character</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"103px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center quiiiz">
                        <a href="/detailquiz" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" style={{opacity: 0.4,background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/5a461410d099a2ad03f9c998.png" alt=""></img>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailquiz" class="d-block mb-4 h-100">
                    <span className="span-title-video">Quiz Minggu 1</span>
                    <span className="span-time" style={{fontSize:"13px",marginLeft:"90px",paddingBottom:"1px",color:"#00DFEB"}}>Level <img src={lvl} style={{width:"13px"}}></img>  </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span className="span-title-video">1. Perkenalan</span>
                    <span className="span-time" style={{fontSize:"13px"}} ><span className="far fa-clock" style={{opacity:0.4 ,marginLeft:"96px",paddingBottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span className="span-title-video">2. Components</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"75px",paddingBottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span className="span-title-video">3. Instalasi</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"115px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>  
            </div>  
            <div></div>
            <div>
                <br/>
            <hr class="mt-2 mb-5"></hr>
                <h2 className="h2week2" >Minggu 2</h2>
                <br/>
                
                <div stlye={{width:"20px"}} class="alert alert-danger" role="alert">
                <div style={{marginRight:"10px"}} className="fas fa-lock"></div>
                 Konten Terkunci,silahkan selesaikan semua kuis di minggu 1
                
                </div>
            </div> 
            <div class="row" style={{height:"1px",width:"3440px"}}>
            <div style={{backgroundcolor:"black",height:"442px",width:"1470px"}} class="col-sm-4"><div className="bg-overlay">
            <img src={lock} style={{height:"130px",marginLeft:"515px",marginTop:"130px",zIndex:"1",position:"absolute"}}></img>
            <label className="label-locked" style={{fontWeight:"bold",fontSize:"17px",fontFamily:"Montserrat",marginLeft:"290px",marginTop:"300px",color:"red",zIndex:"1",position:"absolute"}}> Konten Terkunci,silahkan selesaikan semua kuis di minggu 1</label>
            </div></div>
            </div>
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
            
                    <div className="d-flex justify-content-center listA">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span className="span-title-video">1. Perkenalan</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"96px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span className="span-title-video">2. Components</span>
                    <span className="span-time" style={{fontSize:"13px"}} ><span className="far fa-clock" style={{opacity:0.4,marginLeft:"75px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span className="span-title-video">3. Instalasi</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"115px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span className="span-title-video">4. Character</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"103px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>  
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span className="span-title-video">1. Perkenalan</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"96px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span className="span-title-video">2. Components</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"75px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span className="span-title-video">3. Instalasi</span>
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"115px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span className="span-title-video">4. Character</span>   
                    <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"103px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
            </div>     
            </div>
            </div>
                    <br/>
                    <br/>
            </div>
            
        );
    }
}

export default ListVideo;