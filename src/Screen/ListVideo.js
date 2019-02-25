import React, { Component } from 'react';
import './css/ListVideo.css';
import ply from './img/ply.png';
// import { Link } from 'react-router-dom';

class ListVideo extends Component {

render() {
return (
        <div style={{marginLeft:"-25px",overflow:"hidden",backgroundColor:"#fff"}} >
        <div class="container">
            <div>
                <br/>
                <h2 style={{fontWeight:"bold",paddingTop:"45px"}}>Minggu 1</h2>
                <br/>
            </div>
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
                <div className="d-flex justify-content-center ini">
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                        <br/>
                    </a>
                </div>
                <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>1. Perkenalan</span>
                    <span><span className="far fa-clock" style={{opacity: 0.4 ,marginLeft:"70px",color:"red"}}></span> 04:32 </span>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
                <div className="d-flex justify-content-center loh">
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                        <br/>
                    </a>
                </div>
                    <a style={{paddingTop:"15px"}}href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>2. Components</span>
                    <span><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"50px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>3. Instalasi</span>
                    <span><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"90px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center loh">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>4. Character</span>
                    <span><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"80px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center nikuis">
                        <a href="/detailquiz" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" style={{opacity: 0.4,background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/5a461410d099a2ad03f9c998.png" alt=""></img>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailquiz" class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>Quiz Minggu 1</span>
                    <span style={{marginLeft:"70px",paddingBottom:"1px",color:"#00DFEB"}}>Level <span className="fa fa-signal" style={{opacity: 0.4,paddingBottom:"1px",color:"#00DFEB"}}></span>  </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>1. Perkenalan</span>
                    <span><span className="far fa-clock" style={{opacity:0.4 ,marginLeft:"70px",paddingBottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center loh">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>2. Components</span>
                    <a><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"50px",paddingBottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>3. Instalasi</span>
                    <a><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"90px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>
            </div>
            <div></div>
            <div>
            <hr class="mt-2 mb-5"></hr>
                <h2 style={{fontWeight:"bold"}}>Minggu 2</h2>
                <br/>
            </div>
            {/* <span  style={{marginTop:"-300%",color:"red"}} class="fas fa-lock"></span> Konten Terkunci, selesaikan semua kuis di Minggu 1 */}
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>1. Perkenalan</span>
                    <a><span className="far fa-clock" style={{opacity:0.4,marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>2. Components</span>
                    <a><span className="far fa-clock" style={{opacity:0.4,marginLeft:"60px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>3. Instalasi</span>
                    <a><span className="far fa-clock" style={{opacity:0.4,marginLeft:"90px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>4. Character</span>
                    <a><span className="far fa-clock" style={{opacity:0.4,marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>  
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>1. Perkenalan</span>
                    <a><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"70px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>2. Components</span>
                    <a><span className="far fa-clock" style={{opacity:0.4,marginLeft:"60px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>3. Instalasi</span>
                    <a><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"90px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>4. Character</span>   
                    <a><span className="far fa-clock" style={{opacity:0.4,marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
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