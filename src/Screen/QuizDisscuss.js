import React,{Component} from 'react';
import './css/DiscussQuiz.css';

class QuizDisscuss extends Component{
    constructor(){
        super()
        this.showreply = this.showreply.bind(this)
        this.showbtn = this.showbtn.bind(this)
        this.state={
            showreply:false,
            jumlahlike:"1.8rb",
            showbtn:false,
            comment:[
                {id:"1",photo:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",commented:"commented 5 days ago",username:"myusername",comment:"How To Fast Learning ?"},
                {id:"1",photo:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",commented:"commented 5 days ago",username:"yourusername",comment:"Just Try Anytime"}
            ]
        }
    }
    showreply(){
        this.setState({show:!this.state.showreply})
    }
    showbtn(){
        this.setState({show:!this.state.showbtn})
    }
    render(){
        return(
            <div>
                <h5 className="diskusi-gd">
                    Diskusi
                </h5>
                <div className="sh-qz-cmt-gd">
                    <div>
                        <div class="row" id="post-review-box" >
                            <div className="img-cmt-gd img-cmt-cl">
                                    <img alt="profileimage"  class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                            </div>
                            <div class="col-md-auto col-s-9 dv-input-cmt-qz-gd dv-input-cmt-qz-cl">
                                <input onClick={this.showreply} className="input-cmt-qz-gd input-cmt-qz-cl" placeholder="Write A Comment"></input>
                                <div id="btn" style={{display: this.state.show ? 'block' : 'none'}}>
                                    <button class="btn btn-outline-primary submit-cmt-qz-gd submit-cmt-qz-cl" > Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.comment.map((item,key)=>{
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
                                            <strong>{item.username}</strong> <span class="text-muted">{item.commented}</span>
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
                        )
                    })}
                    <br/>
                </div>
            </div>
        )
    }
}

export default QuizDisscuss;