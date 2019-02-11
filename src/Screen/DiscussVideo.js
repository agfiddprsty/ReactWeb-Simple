import React,{Component}from 'react'
import Profile from '../Screen/img/boy.png'
import { transparent } from 'material-ui/styles/colors';
import  '../Screen/css/DiscussVideo.css'
class DiscussVideo extends Component{
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
            <div >
                <h3>
                    Diskusi Yuk...
                </h3>
                <div  >
                    <div class="row" id="post-review-box" >
                        <div class="col-md-auto">
                            <textarea class="form-control animated" cols="150" id="new-review" name="comment" placeholder="Enter your question here..." rows="5" style={{width:"800px"}}></textarea>
                            <button class=" btn btn-outline-primary"style={{marginLeft:"700px"}} > Submit</button>
                        </div>
                    </div>
                </div>
              
                <div class="row"> 
                    <div class="col-sm-2">
                        <div class="thumbnail">
                            <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
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
                                <div id="reply" style={{display: this.state.show ? 'block' : 'none'}}>
                                    <div class="row" id="post-review-box">
                                        <div class="col-md-auto">
                                            <textarea class="form-control animated" cols="50" id="new-review" name="comment" placeholder="Enter your question here..." rows="5" style={{width:"600px"}}></textarea>                           
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
                            <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
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
export default DiscussVideo;