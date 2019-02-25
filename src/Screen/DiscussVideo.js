import React,{Component}from 'react'
import  '../Screen/css/DiscussVideo.css'
import './css/VideoPlayer.css'
class DiscussVideo extends Component{
    constructor(){
        super()
        this.showreply = this.showreply.bind(this)
        this.showbtn = this.showbtn.bind(this)
        this.state={
            showreply:false,
            jumlahlike:"1.8rb",
            showbtn:false,
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
            <div style={{marginTop:"-30px"}} >
                <h5 className="disscuss-vd-gd">
                    Diskusi
                </h5>
                <div  >
                    <div class="row" id="post-review-box" >
                        <div className="img-cmt-gd img-cmt-cl">
                                <img  class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                        </div>
                        <div class="col-md-auto col-s-9" style={{marginTop:"30px"}}>
                            <input onClick={this.showreply} style={{borderStyle:"none none solid none",borderColor:"#E7E7E7",backgroundColor:"transparent",width:"650px"}} placeholder="Write A Comment"></input>
                            <div id="btn" style={{display: this.state.show ? 'block' : 'none'}}>
                                <button class="btn btn-outline-primary submit-gd submit-btn-cl" > Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div class="row" style={{marginTop:"30px"}}> 
                        <div className="img-cmt-gd img-cmt-cl">
                        <div class="thumbnail">
                            <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                        </div>
                    </div>
                    <div class="col-sm-10">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <div class="row">
                                </div>
                                How To Fast Learning ?
                                <div className="row">
                                    <div style={{marginLeft:"15px",marginRight:"10px"}}>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                    <div style={{marginRight:"10px"}}>
                                        <i className="fa fa-thumbs-down fa-flip-horizontal"></i>
                                    </div>
                                    <div style={{marginLeft:"1px"}}>
                                        <a onClick={this.showreply}>Reply</a>

                                    </div>
                                </div>
                                {/* true false ? */}
                                <div id="reply" style={{display: this.state.show ? 'block' : 'none'}}>
                                {/* end true false ? */}
                                    <div class="row" id="post-review-box" style={{marginTop:"30px"}}>
                                        <div class="col-sm-auto">
                                            <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{width:"50px",height:"50px",borderRadius:"50px"}}/>
                                        </div>
                                        <div class="col-md-auto col-s-9" style={{marginTop:"30px"}}>
                                            <input style={{borderStyle:"none none solid none",borderColor:"#E7E7E7",backgroundColor:"transparent",width:"570px"}}  placeholder="Write A Comment"></input>
                                            <button class="btn btn-outline-primary" style={{marginLeft:"480px"}} > Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">
                        <div className="img-cmt-gd img-cmt-cl">
                        <div class="thumbnail">
                            <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                        </div>
                    </div>
                    <div class="col-sm-10">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                
                                Just Try Anytime :V
                                <div className="row">
                                    <div style={{marginLeft:"15px",marginRight:"10px"}}>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                    <div style={{marginRight:"10px"}}>
                                        <i className="fa fa-thumbs-down fa-flip-horizontal"></i>
                                    </div>
                                    <div style={{marginLeft:"1px"}}>
                                        <a onClick={this.showreply}>Reply</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}
export default DiscussVideo;