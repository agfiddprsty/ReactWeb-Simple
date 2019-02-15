import React, { Component } from 'react';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import {withRouter,Link} from 'react-router-dom';
import rnredux from './img/rnreduxplayred.png';
import './css/ListVideo.css';
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

                        <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Minggu 1</h1>
                    
                        <hr class="mt-2 mb-5"></hr>
                        <div class="row text-center text-lg-left">

                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="/detailvideo" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" alt=""></img>
                                    <br/>
                                    <h4>1. Perkenalan</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="/detailvideo" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" alt=""></img>
                                    <br/>
                                    <h4>2. Instalasi</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="/detailvideo" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" alt=""></img>
                                    <br/>
                                    <h4>3. Component</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="/detailvideo" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" alt=""></img>
                                    <br/>
                                    <h4>4. Character</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="/detailquiz" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/jvBXiynINGE/450x250" alt=""></img>
                                    <br/>
                                    <h4>Quiz Mingguan #1</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="/detailvideo" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" alt=""></img>
                                    <br/>
                                    <h4>1. Perkenalan</h4> 
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="/detailvideo" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" alt=""></img>
                                    <br/>
                                    <h4>2. Instalasi</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="/detailvideo" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" alt=""></img>
                                    <br/>
                                    <h4>3. Component</h4>
                                </a>
                            </div>
                            </div>

                            <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Minggu 2</h1>
                            <br/>
                            <span>Konten Terkunci. selesaikan semua kuis di Minggu 1 untuk membuka</span>
                            <hr class="mt-2 mb-5"></hr>
                        <div class="row text-center text-lg-left">
                        <div class="col-lg-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" style={{filter:"grayscale(100%)"}} alt=""></img>
                                    <br/>
                                    <h4>1. Perkenalan</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" style={{filter:"grayscale(100%)"}} alt=""></img>
                                    <br/>
                                    <h4>2. Instalasi</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" style={{filter:"grayscale(100%)"}} alt=""></img>
                                    <br/>
                                    <h4>3. Component</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" style={{filter:"grayscale(100%)"}} alt=""></img>
                                    <br/>
                                    <h4>4. Character</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" style={{filter:"grayscale(100%)"}} alt=""></img>
                                    <br/>
                                    <h4>1.Perkenalan</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" style={{filter:"grayscale(100%)"}} alt=""></img>
                                    <br/>
                                    <h4>2. Instalasi</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" style={{filter:"grayscale(100%)"}} alt=""></img>
                                    <br/>
                                    <h4>3. Component</h4>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/95YRwf6CNw8/450x250" style={{filter:"grayscale(100%)"}} alt=""></img>
                                    <br/>
                                    <h4>4. Character</h4>
                                </a>
                            </div>
                        
                   
                </div>
                </div>
        );
    }
}

export default ListVideo;