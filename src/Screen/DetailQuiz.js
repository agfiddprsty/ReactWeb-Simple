import React,{Component} from 'react';
import HeaderDashboard from './HeaderPage';
import './css/QuizPlayer.css'
import './css/DetailQuiz.css'
import { Card,CardDeck } from 'reactstrap';  
    import lvl from './img/Level.png'
import lock from './img/LockWhite.png'
import ply from './img/ply.png'
import './css/ListVideo.css';
import './css/VideoPlayer.css'
import './css/DetailVideo.css'
import Axios from 'axios';
import {store} from '../store';
import './css/Quiz.css'
import Disscus from './QuizDisscuss';
class DetailQuiz extends Component{
    constructor(){
        super();
        this.setActiveTab = this.setActiveTab.bind(this)
        this.state={
            comment:[
                {id:"1",photo:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",commented:"commented 5 days ago",username:"myusername",comment:"How To Fast Learning ?",reply:""},
                {id:"1",photo:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",commented:"commented 5 days ago",username:"yourusername",comment:"Just Try Anytime",reply:"myusername"}
            ],
            ListVideo:[],
            title:"",
            fileurl:"",
            deskripsi:"",
            Todos:[],
            isActive: 1,
            titdodo:"",
            textodo:"",
        }
    }

    componentDidMount(){
        var uid = window.location.href;
        var id = uid.replace('http://localhost:3000/quiz/','');
        var auth = "bearer " +store.getState().auth.token;
        Axios.get("http://localhost:3333/todos/",{
            'headers':{
                'Authorization':auth
            }
        }).then(res=>{
            console.log(res.data)
            this.setState({
                Todos:res.data.data
            })
            console.log(this.state.Todos)
        })
        Axios.get("http://localhost:3333/lectures",{
            'headers':{
            'Authorization':auth
            }
        }).then(ress=>{
            this.setState({ListVideo:ress.data.data})
            console.log(this.state.ListVideo);
        })
        Axios.get("http://localhost:3333/lecture/"+id,{
            'headers':{
                'Authorization':auth
            }
        }).then(res=>{
            console.log(res.data)
            this.setState({
                title:res.data.title,
                fileurl:res.data.file_url,
                deskripsi:res.data.text
            })
        })
        Axios.get("http://localhost:3333/todo/"+this.state.isActive,{
            'headers':{
                'Authorization':auth
            }
        }).then(res=>{
            console.log(res.data.title)
            this.setState({
                titdodo:res.data.title,
                textodo:res.data.text,
            })
        })
        console.log(this.state.isActive)
    }
    componentDidUpdate(){
        var auth = "bearer " +store.getState().auth.token;

        Axios.get("http://localhost:3333/todo/"+this.state.isActive,{
            'headers':{
                'Authorization':auth
            }
        }).then(res=>{
            console.log(res.data.title)
            this.setState({
                titdodo:res.data.title,
                textodo:res.data.text,
            })
        })
    }
    setActiveTab(id) {
        console.log(id)
        this.setState({ isActive: id })
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
                                    <img src={this.state.fileurl} className="img-quiz-gd img-quiz-cl" alt="quizimage" ></img>
                                    <div className="col-12 col-s-9 dv-gd">
                                        <div className="row" style={{marginTop:"-23px"}}>
                                            <div className="col-md-auto"> 
                                                <h5 className="h5-desk-gd">Deskripsi: </h5>
                                            </div>
                                            <div className="col-md-auto lvl-qz-ds-gd lvl-qz-ds-cl">
                                                <span style={{color:"#22E2ED",fontWeight:"600", marginLeft:"10px"}}>Level <img alt="Level" style={{marginLeft:"5px"}} src={lvl}></img></span>
                                            </div>
                                        </div>
                                        <h6 className="col-12 col-s-9 h6-detail-gd">{this.state.deskripsi}</h6>
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
                            <div className="col-md-3" >
                                <div className="dv-md3-gd">
                                    <br/>
                                    <h5 className="h5-gd h5-cl">Tonton Selanjutnya </h5>
                                </div>
                                <div className="ls-dq-gd ls-dq-cl">
                                <div className="ls-dv-mg-gd ls-dv-mg-cl">
                                    <div className="dv-list-out-gd">
                                        <div className="col-md">
                                            <div className="scrollbar scrollbar-primary scrollbar-cl">
                                                <div className="force-overflow">
                                                    {this.state.ListVideo.map((item,key)=>{
                                                        if(item.type==="video"){
                                                            return(
                                                                <div>
                                                                    <CardDeck>
                                                                        <Card className="border-0"><a href={"/video/"+item.id} className="modul">
                                                                                <div className="row dv-row-gd">
                                                                                    <div className="col-md-auto">
                                                                                        <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundImage:`url(${item.thumbnail_url})`}}>
                                                                                            <img className="img-fluid img-thumbnail play-img-gd" src={ply} alt=""></img>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-5 dv-tittle-gd">
                                                                                        <h6 className="tittledown">{item.title}</h6>
                                                                                        <span><i className="far fa-clock i-clock-gd"></i> <span className="a-clock-gd">04.32</span></span>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </Card>
                                                                    </CardDeck>
                                                                </div>
                                                            )
                                                        }else if(item.type==="quiz"){
                                                            return(
                                                                <CardDeck style={{marginBottom:"8px"}}>
                                                                    <Card className="border-0">
                                                                        <a href={"/quiz/"+item.id} className="modul">
                                                                            <div className="row dv-row-gd">
                                                                                <div className="col-md-auto">
                                                                                    <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundColor:"#FF5D5D"}}>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-5 dv-tittle-gd">
                                                                                    <h6 className="tittledown">{item.title}</h6>
                                                                                    <span className="a-clock-gd">Level <img src={lvl} alt="" style={{width:"13px"}}></img></span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </Card>
                                                                </CardDeck>
                                                            )
                                                        }else{
                                                            return(
                                                                <CardDeck style={{marginBottom:"8px"}}>
                                                                    <Card className="border-0">
                                                                        <a href="a" className="modul">
                                                                            <div className="row dv-row-gd">
                                                                                <div className="col-md-auto">
                                                                                    <div className="d-flex justify-content-center dv-bg-gd" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("+item.thumbnail_url+")"}}>
                                                                                        <img className="img-fluid img-thumbnail play-img-gd" src={lock} alt=""></img>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-5 dv-tittle-gd">
                                                                                    <h6 className="tittledown">{item.title}</h6>
                                                                                    <span><i className="far fa-clock i-clock-gd"></i> <span className="a-clock-gd">04.32</span></span>
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
                        {/* <Quiz/> */}
                        <div className="qz-outt-gd">
                            <h4>{"To-dos(0/"+this.state.Todos.length+")"}</h4>
                            <div className="row">
                                <div className="col-sm-4">
                                    {this.state.Todos.map((item,key)=>{
                                        return(
                                            <ul class="nav flex-column nav-pills qz-ul-gd qz-ul-cl" id="tabbb" style={{borderRadius:"0px!important"}}>
                                                <li class="nav-item pill" >
                                                    <table>
                                                        <tr className={"nav-link qz-tb-gd qz-tb-cl rounded-0 " + (this.state.isActive === item.id ? 'active':'')} style={{marginTop:"10px"}}>
                                                            <td>
                                                                <input type="checkbox" className="nav-link" style={{marginTop:"3px",marginRight:"10px"}} />
                                                            </td>
                                                            <td>
                                                                <a  class="aquiz" href={"#"+item.id} data-toggle="tab" onClick={() => this.setActiveTab(item.id)} >
                                                                    <span>
                                                                    <a class="aquiz" href={"#"+item.id} data-toggle="tab" style={{marginTop:"10px"}}>
                                                                        {item.title}
                                                                        <span>
                                                                            <i className="fa fa-check-circle" style={{marginLeft:"20px",borderRadius:"10px",color:"#4CAF50"}}>  </i>
                                                                        </span>
                                                                    </a>
                                                                    </span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </li>
                                            </ul>
                                        )
                                    })}
                                </div>
                                <div class="col-sm-5">
                                    {/* {this.state.Todos.map((item,key)=>{ */}
                                        {/* return(                                         */}
                                            <div class="tab-content tb-ct-qz-cl">
                                                <div role="tabpanel" class={"tab-pane active"} id={this.state.isActive}>
                                                    <h5>{this.state.titdodo}</h5>
                                                    <p>{this.state.textodo}</p>
                                                    <div style={{backgroundColor:"#4CAF50",width:"300px",height:"40px"}}>
                                                        <i className="fa fa-info-circle" style={{marginLeft:"10px",marginTop:"10px",color:"#FFF"}}> 
                                                            <span style={{marginLeft:"10px"}}>
                                                                Jawaban Benar
                                                            </span>
                                                        </i>
                                                    </div>
                                                    <Disscus/>
                                                </div>
                                            </div>
                                        {/* ) */}
                                    {/* })} */}
                                </div>
                                    
                            </div>
                            
                        </div>
                        
                    </div>
                </body>
            </div>
        )
    }
}
export default DetailQuiz;