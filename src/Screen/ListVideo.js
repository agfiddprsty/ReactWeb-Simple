import React, { Component } from 'react';
import './css/ListVideo.css';
import ply from './img/ply.png';
import lvl from './img/Level.png';
import lock from './img/LockRed.png'
class ListVideo extends Component {
    constructor(){
        super()
        this.state={
            listvideo:[
                {id:"1",image:"https://source.unsplash.com/Mv4sg6_6qmE/650x240",tittle:"1. Perkenalan",type:"video"},
                {id:"2",image:"https://source.unsplash.com/F2WX4BTIkpQ/650x240",tittle:"2. Komponen",type:"video"},
                {id:"3",image:"https://source.unsplash.com/Mv4sg6_6qmE/650x240",tittle:"3. Instalation",type:"video"},
                {id:"4",image:"https://source.unsplash.com/F2WX4BTIkpQ/650x240",tittle:"4. Character",type:"video"},
                {id:"5",image:"https://source.unsplash.com/ZSPBhokqDMc/550x240",tittle:"Kuis Mingguan #1",type:"quiz"},
                {id:"6",image:"https://source.unsplash.com/Mv4sg6_6qmE/650x240",tittle:"1. Perkenalan",type:"video"},
                {id:"7",image:"https://source.unsplash.com/F2WX4BTIkpQ/650x240",tittle:"2. Komponen",type:"video"},
                {id:"8",image:"https://source.unsplash.com/Mv4sg6_6qmE/650x240",tittle:"3. Instalation",type:"video"},

            ],  
        }
    }
    componentDidMount(){
        console.log(this.state.listvideo);
    }
render() {
return (
                <div style={{overflow:"hidden",backgroundColor:"#fff"}} >
                <div class="container">
                    <div>
                        <br/>
                        <h2 className="h2week1" style={{fontFamily:"Nunito",fontWeight:"625",paddingTop:"75px"}}>Minggu 1</h2>
                        <br/>
                    </div>
                    <div class="row text-center text-lg-left">
                    {this.state.listvideo.map((item,key)=>{
                        if(item.type==="video"){
                        return(
                        <div class="col-lg-3 col-md-4 col-6">
                            <div className="d-flex justify-content-center" style={{height:"165px",width:"260px",background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("+item.image+")"}}>
                            
                                <a href="/video/example" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                                    <br/>
                                </a>
                            </div>
                            <a style={{paddingTop:"15px"}} href="/video/example" class="d-block mb-4 h-100">
                                <span className="span-title-video" style={{fontFamily:"Nunito",fontWeight:"500"}}>{item.tittle}</span>
                                <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"96px",color:"red"}}></span> 04:32 </span>
                            </a>
                        </div>
                        
                        )
                        }
                        else if(item.type==="quiz"){
                            return (
                                <div class="col-lg-3 col-md-4 col-6">
                            <div className="d-flex justify-content-center " style={{height:"165px",width:"260px",background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("+item.image+")"}}>
                                <a href="/quiz/example" class="d-block mb-4 h-100">
                                <img class="img-fluid img-thumbnail" style={{opacity: 0.4,background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/5a461410d099a2ad03f9c998.png" alt=""></img>
                                </a>
                            </div>
                            <a style={{paddingTop:"15px"}} href="/quiz/example" class="d-block mb-4 h-100">
                            <span className="span-title-video"style={{fontFamily:"Nunito",fontWeight:"500"}}>{item.tittle}</span>
                            <span className="span-time" style={{fontSize:"13px",marginLeft:"65px",paddingBottom:"1px",color:"#00DFEB"}}>Level <img src={lvl} alt="level" style={{width:"13px"}}></img>  </span>
                            </a>
                        </div>
                        )
                            }
                               })}
                    </div>
                    <div>
                    </div>
                    <div>
                        <br/>
                    <hr class="mt-2 mb-5"></hr>
                        <h2 className="h2week2" style={{fontFamily:"Nunito",fontWeight:"625",marginTop:"-5px"}}>Minggu 2</h2>
                        <br/>
                    </div> 

                    {/* LOCKED CONTENT */}
                    <div class="row" style={{height:"1px",width:"3440px"}}>
                    <div style={{backgroundcolor:"#b2b2b2",height:"442px",width:"1470px"}} class="col-sm-4"><div className="bg-overlay">
                    <img src={lock} alt="lock" style={{height:"130px",marginLeft:"508px",marginTop:"155px",zIndex:"1",position:"absolute"}}></img>
                    <label className="label-locked" style={{fontWeight:"500",fontSize:"23.5px",fontFamily:"Nunito",marginLeft:"287px",marginTop:"315px",color:"red",zIndex:"1",position:"absolute"}}> 
                        Konten Terkunci, selesaikan semua kuis di minggu 1
                    </label>    
                    </div></div>
                    </div>
                    <div class="row text-center text-lg-left">
                    <div class="col-lg-3 col-md-4 col-6">
                    
                            <div className="d-flex justify-content-center lockedctn">
                                <a class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                                    <br/>
                                </a>
                            </div>
                            <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                            <span className="span-title-video"
                            style={{fontFamily:"Nunito"}}>1. Perkenalan</span>
                            <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"96px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6">
                            <div className="d-flex justify-content-center lockedctn">
                                <a class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                                    <br/>
                                </a>
                            </div>
                            <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                            <span className="span-title-video"
                            style={{fontFamily:"Nunito"}}>2. Components</span>
                            <span className="span-time" style={{fontSize:"13px"}} ><span className="far fa-clock" style={{opacity:0.4,marginLeft:"75px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6">
                            <div className="d-flex justify-content-center lockedctn">
                                <a class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                                    <br/>
                                </a>
                            </div>
                            <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                            <span className="span-title-video"
                            style={{fontFamily:"Nunito"}}>3. Instalasi</span>
                            <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"115px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6">
                            <div className="d-flex justify-content-center lockedctn">
                                <a class="d-block mb-4 h-100">
                                <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                                </a>
                            </div>
                            <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                            <span className="span-title-video"
                            style={{fontFamily:"Nunito"}}>4. Character</span>
                            <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"103px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                            </a>
                        </div>  
                        <div class="col-lg-3 col-md-4 col-6">
                            <div className="d-flex justify-content-center lockedctn">
                                <a class="d-block mb-4 h-100">
                                <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                                </a>
                            </div>
                            <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                            <span className="span-title-video"
                            style={{fontFamily:"Nunito"}}>1. Perkenalan</span>
                            <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"96px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6">
                            <div className="d-flex justify-content-center lockedctn">
                                <a class="d-block mb-4 h-100">
                                <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                                </a>
                            </div>
                            <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                            <span className="span-title-video"
                            style={{fontFamily:"Nunito"}}>2. Components</span>
                            <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"75px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6">
                            <div className="d-flex justify-content-center lockedctn">
                                <a class="d-block mb-4 h-100">
                                <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                                </a>
                            </div>
                            <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                            <span className="span-title-video"
                            style={{fontFamily:"Nunito"}}>3. Instalasi</span>
                            <span className="span-time" style={{fontSize:"13px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"115px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6">
                            <div className="d-flex justify-content-center lockedctn">
                                <a class="d-block mb-4 h-100">
                                <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                                </a>
                            </div>
                            <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                            <span className="span-title-video"
                            style={{fontFamily:"Nunito"}}>4. Character</span>   
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