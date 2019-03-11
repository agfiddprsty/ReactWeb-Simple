import React,{Component} from 'react';
import HeaderDashboard from './HeaderPage';
import ListVideoDown from './LIstVideoDown';
import Quiz from './Quiz';
import './css/QuizPlayer.css'
import './css/DetailQuiz.css'
import quizzimage from  './img/quiz-1400-800x500.jpg'
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';  
    import lvl from './img/Level.png'
import lock from './img/LockWhite.png'
import ply from './img/ply.png'
import './css/ListVideo.css';
import './css/VideoPlayer.css'
import './css/DetailVideo.css'
import Axios from 'axios';

class DetailQuiz extends Component{
    constructor(){
        super();
        this.state={
            comment:[
                {id:"1",photo:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",commented:"commented 5 days ago",username:"myusername",comment:"How To Fast Learning ?",reply:""},
                {id:"1",photo:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",commented:"commented 5 days ago",username:"yourusername",comment:"Just Try Anytime",reply:"myusername"}
            ],
            ListVideo:[],
            title:"",
            fileurl:"",
        }
    }
    componentDidMount(){
        Axios.get("http://localhost:3333/lectures",{
            'headers':{
            'Authorization':'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU1MjAxMzk3NX0.EWlD_LAWdCdMbQxh9UFbKlCMIUMxqijtFSMqLwDd2Y4'
            }
        }).then(ress=>{
            this.setState({ListVideo:ress.data.data})
            console.log(this.state.ListVideo);
        })
    }
    render(){
        return(
            <div className="dv-out-gd dv-out-qz-cl">
                <HeaderDashboard/>
                <body className="bg-light">
                    <div className="bd-dv-qz-gd bd-dv-cl">
                        <div className="row">
                            <div class="col-md-auto">
                                <h3 className="h3-gd">Kuis Mingguan #1</h3>
                                <div className="col-12 col-s-9 qp-dv-out-gd">
                                    <img src={quizzimage} className="img-quiz-gd img-quiz-cl" alt="quizimage" ></img>
                                    <div className="col-12 col-s-9 dv-gd">
                                        <div className="row" style={{marginTop:"-23px"}}>
                                            <div className="col-md-auto"> 
                                                <h5 className="h5-desk-gd">Deskripsi: </h5>
                                            </div>
                                            <div className="col-md-auto lvl-qz-ds-gd lvl-qz-ds-cl">
                                                <a style={{color:"#22E2ED",fontWeight:"600", marginLeft:"10px"}}>Level <img alt="Level Image" style={{marginLeft:"5px"}} src={lvl}></img></a>
                                            </div>
                                        </div>
                                        <h6 className="col-12 col-s-9 h6-detail-gd">Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,</h6>
                                        <h5 className="h5-pet-gd">Petunjuk: </h5>
                                        <div className="qp-dv-pg qp-dv-cl">
                                            <br/>
                                            <h6 className="qp-h6-pg qp-h6-cl" style={{fontWeight:"bold"}}>Cara Submit git : </h6>
                                            {/* <li className="qp-li-cl" > Register Ke git arkademy melalui link berikut</li> */}
                                            <h7 style={{color:"#fff"}} className="h7-gd"> Register Ke git arkademy melalui link berikut</h7><br/>
                                            <h7 style={{color:"#fff"}} className="h7-gd">Buat Repository baru dengan nama "kuis"</h7>
                                        </div>
                                    </div>     
                                </div>
                            </div>
                            <div class="col-md-3" >
                                <div className="dv-md3-gd">
                                    <br/>
                                    <h5 className="h5-gd h5-cl">Tonton Selanjutnya </h5>
                                </div>
                                <div className="ls-dq-gd ls-dq-cl">
                                <div className="ls-dv-mg-gd ls-dv-mg-cl">
                                    <div className="dv-list-out-gd">
                                        <div className="col-md">
                                            <div className="scrollbar scrollbar-primary scrollbar-cl">
                                                <div class="force-overflow">
                                                    {this.state.ListVideo.map((item,key)=>{
                                                        if(item.type==="video"){
                                                            return(
                                                                <div>
                                                                    <CardDeck>
                                                                        <Card className="border-0"><a href={"/video/"+item.id} className="modul">
                                                                                <div className="row dv-row-gd">
                                                                                    <div className="col-md-auto">
                                                                                        <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundImage:`url(${item.thumbnail_url})`}}>
                                                                                            <img class="img-fluid img-thumbnail play-img-gd" src={ply} alt=""></img>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-5 dv-tittle-gd">
                                                                                        <h6 className="tittledown">{item.title}</h6>
                                                                                        <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </Card>
                                                                    </CardDeck>
                                                                </div>
                                                            )
                                                        }else if(item.type==="quiz"){
                                                            return(
                                                                <CardDeck>
                                                                    <Card className="border-0">
                                                                        <a href={"/quiz/"+item.id} className="modul">
                                                                            <div className="row dv-row-gd">
                                                                                <div className="col-md-auto">
                                                                                    <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundColor:"#FF5D5D"}}>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-5 dv-tittle-gd">
                                                                                    <h6 className="tittledown">{item.title}</h6>
                                                                                    <a className="a-clock-gd">Level <img src={lvl} style={{width:"13px"}}></img></a>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </Card>
                                                                </CardDeck>
                                                            )
                                                        }else{
                                                            return(
                                                                <CardDeck>
                                                                    <Card className="border-0">
                                                                        <a href="#" className="modul">
                                                                            <div className="row dv-row-gd">
                                                                                <div className="col-md-auto">
                                                                                    <div className="d-flex justify-content-center dv-bg-gd" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("+item.thumbnail_url+")"}}>
                                                                                        <img class="img-fluid img-thumbnail play-img-gd" src={lock} alt=""></img>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-5 dv-tittle-gd">
                                                                                    <h6 className="tittledown">{item.title}</h6>
                                                                                    <a><i className="far fa-clock i-clock-gd"></i> <a className="a-clock-gd">04.32</a></a>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </Card>
                                                                </CardDeck>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-2 mb-5 hr-gd"></hr>
                        <Quiz/>
                    </div>
                </body>
            </div>
        )
    }
}
export default DetailQuiz;