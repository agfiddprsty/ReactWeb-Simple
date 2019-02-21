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
        <div class="container">
            <div>
                <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Minggu 1</h1>                       
                <hr class="mt-2 mb-5"></hr>
            </div>
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>1. Perkenalan</span>
                    <span><span className="fa fa-clock-o" style={{marginLeft:"80px",color:"red"}}></span> 04:32 </span>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center loh">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>2. Instalasi</span>
                    <span><span className="fa fa-clock-o" style={{marginLeft:"80px",color:"red"}}></span> 04:32 </span>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>3. Component</span>
                    <span><span className="fa fa-clock-o" style={{marginLeft:"70px",color:"red"}}></span> 04:32 </span>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center loh">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>4. Character</span>
                    <span><span className="fa fa-clock-o" style={{marginLeft:"80px",color:"red"}}></span> 04:32 </span>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center loh">
                        <a href="/detailquiz" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>Quiz Minggu 1</span>
                    <span><span className="fa fa-signal" style={{marginLeft:"60px",paddingBottom:"1px",color:"#00DFEB"}}></span> Level </span>
                    <a href="/detailquiz" class="d-block mb-4 h-100">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>4. Character</span>
                    <span><span className="fa fa-clock-o" style={{marginLeft:"80px",paddingBottom:"1px",color:"red"}}></span> 04:32 </span>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center loh">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>2. Instalasi</span>
                    <a><span className="fa fa-clock-o" style={{marginLeft:"80px",paddingBottom:"1px",color:"red"}}></span> 04:32 </a>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <span>3. Component </span>
                    <a><span className="fa fa-clock-o" style={{marginLeft:"70px",paddingbottom:"1px",color:"red"}}></span> 04:32 </a>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    </a>
                </div>
            </div>
            <div>
            <hr class="mt-2 mb-5"></hr>
                <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Minggu 2</h1>
                <hr class="mt-2 mb-5"></hr>
                <h5 style={{color:"red"}}>Konten Terkunci!. selesaikan semua kuis di Minggu 1 untuk membuka</h5>
            </div>
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <h4>1. Perkenalan</h4>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <h4>2. Instalasi</h4>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <h4>3. Component</h4>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <h4>4. Character</h4>
                </div>
                <hr class="mt-2 mb-5"></hr>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <h4>1. Perkenalan</h4>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <h4>2. Instalasi</h4>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <h4>3. Component</h4>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="https://images.vexels.com/media/users/3/132074/isolated/preview/0117cb0129593faa02646a8277ca80e3-security-lock-icon-by-vexels.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <h4>4.  Character</h4>   
                </div>    
            </div>
            <br/>
            <br/>
        </div>
        );
    }
}

export default ListVideo;