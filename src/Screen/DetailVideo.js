import React, { Component } from 'react';
import HeaderDashboard from './HeaderPage';
import './css/VideoPlayer.css'
import './css/DetailVideo.css'
import Iframeresponsive from 'react-responsive-embed'
import Axios from 'axios';
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import './css/ListVideo.css';
import './css/VideoPlayer.css'
import lvl from './img/Level.png'
import lock from './img/LockWhite.png'
import ply from './img/ply.png'
import './css/ProgressDetail.css'

class DetailVideo extends Component {
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
        var uid = window.location.href;
        var id = uid.replace('http://localhost:3000/video/','');
        Axios.get("http://localhost:3333/lecture/"+id,{
            'headers':{
                'Authorization':'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU1MjAxMzk3NX0.EWlD_LAWdCdMbQxh9UFbKlCMIUMxqijtFSMqLwDd2Y4'
            }
        }).then(res=>{
            this.setState({
                title:res.data.title,
                fileurl:res.data.file_url
            })
        })
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
            <div className="dv-out-vd-gd dv-out-vd-cl">
                <HeaderDashboard/>
                
                <body className="bg-light dt-body-gd dt-body-cl" >
                    <div className="bd-dv-vd-gd" >
                        <div className="row">
                            <div class="col-md-auto">
                                <div className="col-md-auto vp-dv-out-gd vp-dv-out-pb vp-dv-out-cl">
                                    <div className="vp-v-gd vp-v-pb vp-v-cl">
                                        <Iframeresponsive src={this.state.fileurl}
                                        // width="800px"
                                        // height="500px"
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        ratio='16:9'
                                        allowFullScreen/>
                                    </div>
                                    <h4 className="tittlevideo-gd">{this.state.title}</h4>
                                    <div className="col-12 col-s-9">
                                        <hr class="mt-2 mb-5 hr1-vp-gd hr1-vp-cl hr1-vp-pb"></hr>

                                        <br/>
                                        <br/>
                                        <h5 className="deskripsi-gd">Deskripsi </h5>
                                        <h6 className="col-12 col-s-9 detail-deskripsi-gd">On The Course dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s,</h6>
                                    </div> 
                                    <div style={{width:"800px"}}className="col-12 col-s-9">
                                        <hr class="mt-2 mb-5 hr1-vp-gd hr1-vp-cl"></hr>
                                        <div style={{marginTop:"-30px"}} >
                                            <h5 className="disscuss-vd-gd">
                                                Diskusi
                                            </h5>
                                            <div  >
                                                <div class="row" id="post-review-box" >
                                                    <div className="img-cmt-gd img-cmt-cl">
                                                            <img  class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                                                    </div>
                                                    <div class="col-md-auto col-s-9 dv-input-cmt-gd dv-input-cmt-cl">
                                                        <input onClick={this.showreply} className="input-cmt-gd input-cmt-cl" placeholder="Write A Comment"></input>
                                                        <div id="btn" style={{display: this.state.show ? 'block' : 'none'}}>
                                                            <button class="btn btn-outline-primary submit-cmt-gd submit-cmt-cl" > Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {this.state.comment.map((item,key)=>{
                                                // if else .map
                                                if(item.reply!==""){
                                                return(
                                                    <div class="row" style={{marginTop:"30px"}}> 
                                                        <div className="img-cmt-gd img-cmt-cl">
                                                            <div class="thumbnail">
                                                                <img alt="profileimage" class="img-responsive user-photo" src={item.photo} style={{borderRadius:"50px"}}/>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading">
                                                                    <strong>{item.username}</strong> <span class="text-muted">{item.commented}</span><br/>
                                                                    
                                                                    <span class="text-muted">{"Reply To " + item.reply}</span>
                                                                </div>
                                                                <div class="panel-body sh-cmt-gd sh-cmt-cl">
                                                                    <div class="row" >
                                                                    </div>
                                                                    <label >{item.comment}</label>
                                                                    <div className="row">
                                                                        <div style={{marginLeft:"15px",marginRight:"10px"}}>
                                                                            <i className="btn fa fa-thumbs-up"style={{marginTop:"-6px",marginLeft:"-13px"}}></i>
                                                                        </div>
                                                                        <div style={{marginRight:"10px"}}>
                                                                            <i className="btn fa fa-thumbs-down fa-flip-horizontal" style={{marginTop:"-6px",marginLeft:"-25px"}}></i>
                                                                        </div>
                                                                        <div style={{marginLeft:"1px"}}>
                                                                            <a onClick={this.showreply} className="btn" style={{marginTop:"-6px",marginLeft:"-25px"}}>Reply</a>

                                                                        </div>
                                                                    </div>
                                                                    {/* true false ? */}
                                                                    <div id="reply" style={{display: this.state.show ? 'block' : 'none'}}>
                                                                    {/* end true false ? */}
                                                                        <div class="row" id="post-review-box" style={{marginTop:"30px"}} >
                                                                            <div className="img-cmt-gd img-cmt-cl">
                                                                                    <img alt="profileimage" class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                                                                            </div>
                                                                            <div class="col-md-auto col-s-9 dv-input-cmt-gd dv-input-cmt-cl">
                                                                                <input onClick={this.showreply} className="input-rpl-qz-gd input-rpl-qz-cl" placeholder="Write A Comment"></input>
                                                                                <button class="btn btn-outline-primary submit-rpl-qz-gd submit-rpl-qz-cl" > Submit</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <br/> */}
                                                    </div>
                                                )}else{
                                                    return(
                                                        <div class="row" style={{marginTop:"30px"}}> 
                                                        <div className="img-cmt-gd img-cmt-cl">
                                                            <div class="thumbnail">
                                                                <img alt="profileimage" class="img-responsive user-photo" src={item.photo} style={{borderRadius:"50px"}}/>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading">
                                                                    <strong>{item.username}</strong> <span class="text-muted">{item.commented}</span><br/>
                                                                </div>
                                                                <div class="panel-body sh-cmt-gd sh-cmt-cl">
                                                                    <div class="row" >
                                                                    </div>
                                                                    <label >{item.comment}</label>
                                                                    <div className="row">
                                                                    <div style={{marginLeft:"15px",marginRight:"10px"}}>
                                                                            <i className="btn fa fa-thumbs-up"style={{marginTop:"-6px",marginLeft:"-13px"}}></i>
                                                                        </div>
                                                                        <div style={{marginRight:"10px"}}>
                                                                            <i className="btn fa fa-thumbs-down fa-flip-horizontal" style={{marginTop:"-6px",marginLeft:"-25px"}}></i>
                                                                        </div>
                                                                        <div style={{marginLeft:"1px"}}>
                                                                            <a onClick={this.showreply} className="btn" style={{marginTop:"-6px",marginLeft:"-25px"}}>Reply</a>

                                                                        </div>
                                                                    </div>
                                                                    {/* true false ? */}
                                                                    <div id="reply" style={{display: this.state.show ? 'block' : 'none'}}>
                                                                    {/* end true false ? */}
                                                                        <div class="row" id="post-review-box" style={{marginTop:"30px"}} >
                                                                            <div className="img-cmt-gd img-cmt-cl">
                                                                                    <img alt="profileimage" class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                                                                            </div>
                                                                            <div class="col-md-auto col-s-9 dv-input-cmt-gd dv-input-cmt-cl">
                                                                                <input onClick={this.showreply} className="input-rpl-qz-gd input-rpl-qz-cl" placeholder="Write A Comment"></input>
                                                                                <button class="btn btn-outline-primary submit-rpl-qz-gd submit-rpl-qz-cl" > Submit</button>
                                                                            </div>
                                                                            <br/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <br/> */}
                                                    </div>
                                                    )
                                                }
                                            })}
                
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3" >
                                <div className="dt-dv-pg-gd dt-dv-pg-cl">
                                    
                                    <div className="dv-pg-gd dv-pg-cl">
                                        <br/>
                                        <h2 className="h2-pg-gd h2-pg-cl">Progress</h2>
                                        <Progress className="pg-pg-gd" value="40" color="warning"></Progress>
                                        <label className="pg-lb-gd pg-lb-cl">40%</label>

                                    </div>
                                </div>
                                <br/>
                                <div className="dt-gr-gd dt-gr-cl" >
                                    <hr class="mt-2 mb-5 hr-dt-gd"></hr>
                                    <h5 className="h5-tn-gd">Tonton Selanjutnya </h5>
                                </div>
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
                                                                                    <div className="col-md-auto dv-tittle-gd">
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
                                                                                <div className="col-md-auto dv-tittle-gd">
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
                                                                                <div className="col-md-auto dv-tittle-gd">
                                                                                    <h6 className="tittledown">1.Perkenalan</h6>
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
                </body>
            </div>
        )
    }
}

export default DetailVideo;