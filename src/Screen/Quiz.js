import React,{Component} from 'react';
import './css/Quiz.css'
import Disscus from './QuizDisscuss';
class Quiz extends Component{
    render(){
        return(
            <div className="qz-outt-gd">
                <h4>To-dos(0/3)</h4>
                    <div class="row">
                        <div class="col-sm-4">
                            <ul class="nav flex-column nav-pills qz-ul-gd qz-ul-cl">
                                <li class="nav-item" >
                                    <a class="nav-link active fa fa-square-o qz-tb-gd qz-tb-cl" href="#vtab1" data-toggle="tab"> Membuat Component Dengan Gelap<i className="fa fa-check-circle" style={{marginLeft:"50px",borderRadius:"10px",color:"#4CAF50"}}></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link fa fa-square-o qz-tb-gd qz-tb-cl" href="#vtab2" data-toggle="tab"> Membuat Component Dengan Gelap<i className="fa fa-check-circle" style={{marginLeft:"50px",borderRadius:"10px",color:"#4CAF50"}}></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link fa fa-square-o qz-tb-gd qz-tb-cl" href="#vtab3" data-toggle="tab"> Membuat Component Dengan Terang<i class="fa fa-times-circle "style={{marginLeft:"42px",borderRadius:"10px",color:"#FF2324"}}></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-5">
                            <div class="tab-content tb-ct-qz-cl">
                                <div role="tabpanel" class="tab-pane active" id="vtab1">
                                    <h5>Membuat Component Dengan Gelap</h5>
                                    <p>Place a link with the class <code>.nav-tabs-dropdown.btn.btn-block.btn-primary</code> above the tabs list and add an id of <code>#nav-tabs-wrapper</code> to the tabs list for the dropdown to work.</p>
                                    <Disscus/>
                                </div>
                                <div role="tabpanel" class="tab-pane fade" id="vtab2">
                                    <h5>Membuat Component Dengan Gelap</h5>
                                    <p> Mauris imperdiet dignissim ante, in efficitur mauris elementum sed. Cras vulputate malesuada magna. Morbi tincidunt eros a dui cursus, vitae dignissim nulla scelerisque. Duis pharetra scelerisque mi vel luctus. Cras eu purus efficitur, blandit nisi id, fringilla nulla.</p>
                                    <Disscus/>
                                </div>
                                <div role="tabpanel" class="tab-pane fade in" id="vtab3">
                                    <h5>Membuat Component dengan Terang</h5>
                                    <p>Etiam id pharetra quam. Morbi tristique nunc vel sapien dapibus, sit amet imperdiet quam venenatis. Vestibulum et suscipit urna. Suspendisse volutpat quis est eu volutpat. Nulla non tortor venenatis turpis congue aliquet. Vivamus at elit vel massa elementum tempor sit amet sed odio. Nullam placerat, arcu sed ullamcorper ornare, erat erat placerat quam, in feugiat nulla purus in nunc. Maecenas vitae erat auctor, aliquam tellus et, vulputate eros.</p>
                                    <div style={{backgroundColor:"#FF4344",width:"300px",height:"40px"}}>
                                        <i className="fa fa-info-circle" style={{marginLeft:"10px",marginTop:"10px",color:"#FFF"}}> Jawaban Salah, Mohon Koreksi</i>
                                    </div>
                                    <Disscus/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Quiz;