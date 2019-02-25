import React,{Component} from 'react';
import './css/DiscussQuiz.css';

class QuizDisscuss extends Component{
    constructor(){
        super()
        this.showreply = this.showreply.bind(this)
        this.state={
            show:false,
            jumlahlike:"1.8rb"
        }
    }
    showreply(){
        this.setState({show:!this.state.show})
    }
    render(){
        return(
            <div>
                <h5 className="diskusi-gd">
                    Diskusi
                </h5>
                <div  >
                    <div class="row" id="post-review-box" >
                        <div class="col-sm-2">
                                <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                        </div>
                        <div class="col-md-auto col-s-9" style={{marginTop:"30px"}}>
                            <input style={{borderStyle:"none none solid none",borderColor:"#E7E7E7",backgroundColor:"transparent",width:"500px"}} placeholder="Write A Comment"></input>
                            <button class="btn btn-outline-primary submit-gd" > Submit</button>
                        </div>
                    </div>
                </div>
              
                <div class="row" style={{marginTop:"10px"}}> 
                    <div class="col-sm-2">
                        <div class="thumbnail">
                            <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                        </div>
                    </div>
                    <div class="col-sm-10">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <strong>myusername</strong> <span class="text-muted">commented 5 days ago</span>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div className="col-md-auto">
                                        <p className="fa fa-thumbs-up">{this.state.jumlahlike +" Like"}</p>    
                                    </div>
                                </div>
                                How To Fast Learning ?
                                <div className="row">
                                    <div className="col-md-auto">
                                        <button className="btn btn-outline-primary ml-2 fa fa-thumbs-up" > Like</button>
                                    </div>
                                    <div className="col-md-auto">
                                        <button class=" btn btn-outline-primary ml-2 fa fa-reply" onClick={this.showreply} > Reply</button>
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
                                            <input style={{borderStyle:"none none solid none",borderColor:"#E7E7E7",backgroundColor:"transparent",width:"420px"}}  placeholder="Write A Comment"></input>
                                            <button class="btn btn-outline-primary" style={{marginLeft:"340px"}} > Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-2">
                        <div class="thumbnail">
                            <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                        </div>
                    </div>
                    <div class="col-sm-10">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <strong>yourusername</strong> <span class="text-muted">commented 5 days ago</span>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div className="col-md-auto">
                                        <p>Reply from myusername</p>    
                                    </div>
                                    <div className="col-md-auto">
                                        <p className="fa fa-thumbs-up">{this.state.jumlahlike +" Like"}</p>    
                                    </div>
                                </div>
                                
                                Just Try Anytime :V
                                <div className="row">
                                    <div className="col-md-auto">
                                        
                                        <button className="btn btn-outline-primary ml-2 fa fa-thumbs-up" > Like</button>
                                    </div>
                                    <div className="col-md-auto">
                                        <button class=" btn btn-outline-primary ml-2 fa fa-reply" onClick={this.showreply} > Reply</button>
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

export default QuizDisscuss;