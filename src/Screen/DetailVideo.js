import React, { Component } from 'react';
import HeaderDashboard from './HeaderPage';
import './css/VideoPlayer.css';
import './css/DetailVideo.css';
import './css/Backup.css';
import Iframeresponsive from 'react-responsive-embed';
import Axios from 'axios';
import { Card,CardDeck,Progress } from 'reactstrap';   
import './css/ListVideoDown.css';
import './css/VideoPlayer.css';
import lvl from './img/Level.png';
import lock from './img/LockWhite.png';
import ply from './img/ply.png';
import './css/ProgressDetail.css';
import {store} from '../store';

class DetailVideo extends Component {
    constructor(){
        super();
        this.showreply = this.showreply.bind(this)
        this.showbtn = this.showbtn.bind(this)
        this.state={
            comment:[
                {id:"1",photo:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",commented:"commented 5 days ago",username:"myusername",comment:"How To Fast Learning ?",reply:""},
                {id:"1",photo:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",commented:"commented 5 days ago",username:"yourusername",comment:"Just Try Anytime",reply:"myusername"}
            ],
            ListVideo:[],
            title:"",
            fileurl:"",
            deskripsi:"",
            showreply:false,
            jumlahlike:"1.8rb",
            showbtn:false, 
        }
    }
    componentDidMount(){
        var uid = window.location.href;
        var id = uid.replace('http://localhost:3000/video/','');
        var auth = "bearer " +localStorage.getItem('token');
        console.log(auth)
        Axios.get("http://localhost:3333/lecture/"+id,{
            'headers':{
                'Authorization':auth
            }
        }).then(res=>{
            this.setState({
                title:res.data.title,
                fileurl:res.data.file_url,
                deskripsi:res.data.text
            })
        })
        Axios.get("http://localhost:3333/lectures",{
            'headers':{
            'Authorization':auth
            }
        }).then(ress=>{
            this.setState({ListVideo:ress.data.data})
            console.log(this.state.ListVideo);
        })
    }
    showreply(){
        this.setState({show:!this.state.showreply})
    }
    showbtn(){
        this.setState({show:!this.state.showbtn})
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
                                        <h6 className="col-12 col-s-9 detail-deskripsi-gd">{this.state.deskripsi}</h6>
                                    </div> 
                                    <div style={{width:"800px"}}className="col-12 col-s-9">
                                        <hr className="mt-2 mb-5 hr1-vp-gd hr1-vp-cl"></hr>
                                        <div style={{marginTop:"-30px"}} >
                                            <h5 className="disscuss-vd-gd">
                                                Diskusi
                                            </h5>
                                            <div  >
                                                <div className="row" id="post-review-box" >
                                                    <div className="img-cmt-gd img-cmt-cl">
                                                            <img  class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt= "" style={{borderRadius:"50px"}}/>
                                                    </div>
                                                    <div className="col-md-auto col-s-9 dv-input-cmt-gd dv-input-cmt-cl">
                                                        <input onClick={this.showreply} className="input-cmt-gd input-cmt-cl" placeholder="Write A Comment"></input>
                                                        <div id="btn" style={{display: this.state.show ? 'block' : 'none'}}>
                                                            <button className="btn btn-outline-primary submit-cmt-gd submit-cmt-cl" > Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {this.state.comment.map((item,key)=>{
                                                // if else .map
                                                if(item.reply!==""){
                                                return(
                                                    <div className="row" style={{marginTop:"30px"}}> 
                                                        <div className="img-cmt-gd img-cmt-cl">
                                                            <div className="thumbnail">
                                                                <img alt="profileimage" className="img-responsive user-photo" src={item.photo} style={{borderRadius:"50px"}}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-10">
                                                            <div className="panel panel-default">
                                                                <div className="panel-heading">
                                                                    <strong>{item.username}</strong> <span className="text-muted">{item.commented}</span><br/>
                                                                    
                                                                    <span className="text-muted">{"Reply To " + item.reply}</span>
                                                                </div>
                                                                <div className="panel-body sh-cmt-gd sh-cmt-cl">
                                                                    <div className="row" >
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
                                                                            <span onClick={this.showreply} className="btn" style={{marginTop:"-6px",marginLeft:"-25px"}}>Reply</span>

                                                                        </div>
                                                                    </div>
                                                                    {/* true false ? */}
                                                                    <div id="reply" style={{display: this.state.show ? 'block' : 'none'}}>
                                                                    {/* end true false ? */}
                                                                        <div className="row" id="post-review-box" style={{marginTop:"30px"}} >
                                                                            <div className="img-cmt-gd img-cmt-cl">
                                                                                    <img alt="profileimage" className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                                                                            </div>
                                                                            <div className="col-md-auto col-s-9 dv-input-cmt-gd dv-input-cmt-cl">
                                                                                <input onClick={this.showreply} className="input-rpl-qz-gd input-rpl-qz-cl" placeholder="Write A Comment"></input>
                                                                                <button className="btn btn-outline-primary submit-rpl-qz-gd submit-rpl-qz-cl" > Submit</button>
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
                                                                            <span onClick={this.showreply} className="btn" style={{marginTop:"-6px",marginLeft:"-25px"}}>Reply</span>

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
                                                                                    <div className="col-md-5  dv-tittle-gd">
                                                                                        <h6 className="tittledown">{item.title}</h6>
                                                                                        {/* <span className="tittledown">{item.title}</span> */}
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
                                                                                        <img class="img-fluid img-thumbnail play-img-gd" src={lock} alt=""></img>
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
                </body>
            </div>
        )
    }
}

export default DetailVideo;