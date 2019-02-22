import React, { Component } from 'react';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import {withRouter,Link} from 'react-router-dom';
import rnredux from './img/rnreduxplayred.png';
import './css/ListVideo.css';
import boy from './img/boy.png';
import {Input, InputGroupAddon, Button } from 'reactstrap';
import { RenderLoop } from 'brace';
import quis from './img/quizz.jpg'
import { ActionSettingsBrightness } from 'material-ui/svg-icons';
import HeaderDashboard from './HeaderDashboard';
// import { Link } from 'react-router-dom';

class ListVideo extends Component {

render() {
return (
        <div style={{overflowX:"hidden"}} class="container">
            <div>
                <br/>
                <h1 style={{fontWeight:"bold"}}>Minggu 1</h1>
                <br/>
            </div>
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <span>1. Perkenalan</span>
                    <span><span className="fa fa-clock-o" style={{marginLeft:"80px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center loh">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <span>2. INSTALASI</span>
                    <span><span className="fa fa-clock-o" style={{marginLeft:"80px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <span>3. Component</span>
                    <span><span className="fa fa-clock-o" style={{marginLeft:"70px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center loh">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <span>4. Character</span>
                    <span><span className="fa fa-clock-o" style={{marginLeft:"80px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center nikuis">
                        <a href="/detailquiz" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/5a461410d099a2ad03f9c998.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailquiz" class="d-block mb-4 h-100">
                    <span>Quiz Minggu 1</span>
                    <span><span className="fa fa-signal" style={{marginLeft:"60px",paddingBottom:"1px",color:"#00DFEB"}}></span> Level </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <span>4. Character</span>
                    <span><span className="fa fa-clock-o" style={{marginLeft:"80px",paddingBottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center loh">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <span>2. INSTALASI</span>
                    <a><span className="fa fa-clock-o" style={{marginLeft:"80px",paddingBottom:"1px",color:"red"}}></span> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/280967b2-c1da-4ccf-a6d0-291621216405/d798zp5-74577664-7bf1-4e52-9849-959ab72ffc2e.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <span>3. Component </span>
                    <a><span className="fa fa-clock-o" style={{marginLeft:"70px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
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
            <span  style={{marginTop:"-300%",color:"red"}} class="fas fa-lock"></span> Konten Terkunci, selesaikan semua kuis di Minggu 1
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
            <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a class="d-block mb-4 h-100">
                    <span>1. Perkenalan</span>
                    <span><span className="fa fa-clock-o" style={{marginLeft:"80px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>2. INSTALASI</span>
                    <a><span className="fa fa-clock-o" style={{marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>3. Component</span>
                    <a><span className="fa fa-clock-o" style={{marginLeft:"70px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>4. Character</span>
                    <a><span className="fa fa-clock-o" style={{marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                </div>  
                <hr class="mt-2 mb-5"></hr>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>1. Perkenalan</span>
                    <a><span className="fa fa-clock-o" style={{marginLeft:"70px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>2. INSTALASI</span>
                    <a><span className="fa fa-clock-o" style={{marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>3. Component</span>
                    <a><span className="fa fa-clock-o" style={{marginLeft:"70px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none',opacity: 0.8}} src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627163-lock-512.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>4. Character</span>   
                    <a><span className="fa fa-clock-o" style={{marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                </div>      
            </div>
            </div>
            <br/>
            <br/>
            </div>
        </div>
        );
    }
}

export default ListVideo;