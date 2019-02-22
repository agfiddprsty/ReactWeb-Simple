import React, { Component } from 'react';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import {withRouter,Link} from 'react-router-dom';
import rnredux from './img/rnreduxplayred.png';
import './css/ListVideo.css';
import boy from './img/boy.png';
import play from './img/playbutton.png';
import {Input, InputGroupAddon, Button } from 'reactstrap';
import { RenderLoop } from 'brace';
import quis from './img/quizz.jpg'
import { ActionSettingsBrightness } from 'material-ui/svg-icons';
import HeaderDashboard from './HeaderDashboard';
// import { Link } from 'react-router-dom';

class ListVideo extends Component {

render() {
return (
        <div style={{overflow:"hidden",backgroundColor:"#fff"}} >
        <div class="container">
            <div>
                <br/>
                <h1 style={{fontWeight:"bold"}}>Minggu 1</h1>
                <br/>
            </div>
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
                <div className="d-flex justify-content-center ini">
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
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
                    <img class="img-fluid img-thumbnail plybtn" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
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
                        <img class="img-fluid img-thumbnail plybtn" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>3. Instalasi</span>
                    <span><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"90px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center loh">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>                        </a>
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
                    <span style={{marginLeft:"70px",paddingBottom:"1px"}}>Level <span className="fa fa-signal" style={{opacity: 0.4,paddingBottom:"1px",color:"#00DFEB"}}></span>  </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>                            <br/>
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
                        <img class="img-fluid img-thumbnail plybtn" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>2. Components</span>
                    <a><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"50px",paddingBottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>3. Instalasi</span>
                    <a><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"90px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>
            </div>
            <div>
            <hr class="mt-2 mb-5"></hr>
                <h1 style={{fontWeight:"bold"}}>Minggu 2</h1>
                <br/>
            </div>
        <div id="sociallocker">
            <div id="sociallocker-content">
            <div class="alert alert-danger" role="alert">
            <span  style={{marginTop:"-300%",color:"red"}} class="fas fa-lock"></span> Konten Terkunci, selesaikan semua kuis di Minggu 1
            </div>
            {/* <span  style={{marginTop:"-300%",color:"red"}} class="fas fa-lock"></span> Konten Terkunci, selesaikan semua kuis di Minggu 1 */}
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
            <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>1. Perkenalan</span>
                    <span><span className="far fa-clock" style={{opacity:0.4,marginLeft:"70px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>
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
                            <img class="img-fluid img-thumbnail plybtn" src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>
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
                        <img class="img-fluid img-thumbnail plybtn" src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>4. Character</span>
                    <a><span className="far fa-clock" style={{opacity:0.4,marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>  
                <hr class="mt-2 mb-5"></hr>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>                            <br/>
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
                        <img class="img-fluid img-thumbnail plybtn" src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>                            <br/>
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
                        <img class="img-fluid img-thumbnail plybtn" src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>                            <br/>
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
                        <img class="img-fluid img-thumbnail plybtn" src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"10px"}} class="d-block mb-4 h-100">
                    <span style={{fontWeight:"bold"}}>4. Character</span>   
                    <a><span className="far fa-clock" style={{opacity:0.4,marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div> 
            </div>
            </div>
            <br/>
            <br/>
            </div>
            </div>
        </div>
        );
    }
}

export default ListVideo;