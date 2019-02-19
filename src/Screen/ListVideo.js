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
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <h4>1. Perkenalan</h4>
                    <a><i className="fa fa-clock-o" style={{color:"red"}}></i> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <h4>2. Instalasi</h4>
                    <a><i className="fa fa-clock-o" style={{color:"red"}}></i> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <h4>3. Component</h4>
                    <a><i className="fa fa-clock-o" style={{color:"red"}}></i> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <h4>4. Character</h4>
                    <span><i className="fa fa-clock-o" style={{color:"red"}}></i> 04:32 </span>
                    </a>
                </div>
                    <div class="col-lg-3 col-md-4 col-6">
                    <a href="/detailquiz" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" style={{backgroundSize:"100px 50px",background: 'transparent',border: 'none'}}src="http://brainboosterstv.com/wp-content/uploads/2018/03/quiz-1400-800x500.jpg" alt=""></img>
                        <br/>
                        <h4>Quiz Mingguan #1</h4>
                        <a> Level <i className="fa fa-signal" style={{color:"#00DFEB"}}></i></a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <h4>4. Character</h4>
                    <span><i className="fa fa-clock-o" style={{color:"red"}}></i> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <h4>2. Instalasi</h4>
                    <a><i className="fa fa-clock-o" style={{color:"red"}}></i> 04:32 </a>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center ini">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" style={{background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png" alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <h4>3. Component </h4>
                    <a><i className="fa fa-clock-o" style={{color:"red"}}></i> 04:32 </a>
                    </a>
                </div>
            </div>
            <div>
            <hr class="mt-2 mb-5"></hr>
                <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Minggu 2</h1>
                <br/>
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