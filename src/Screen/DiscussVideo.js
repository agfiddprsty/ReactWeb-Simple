import React,{Component}from 'react'
import Profile from '../Screen/img/boy.png'
import { transparent } from 'material-ui/styles/colors';
import  '../Screen/css/DiscussVideo.css'
class DiscussVideo extends Component{
    constructor(){
        super()
        this.showreply = this.showreply.bind(this)
        this.state={
            show:false
        }
    }
    showreply(){
        this.setState({show:!this.state.show})
    }
    render(){
        return(
            <div>
                <h3>
                    Diskusi Yuk...
                </h3>
                <div className="tulis" id="tulis" >
                    {/* <table>
                        <tr>
                            <td>
                                <img src={Profile} style={{width:"20px"}} ></img>
                                <input style={{border:"0",outline:transparent}}></input>
                            </td>
                        </tr>
                    </table> */}
                    <div class="row" id="post-review-box">
                        <div class="col-md-12">
                            <textarea class="form-control animated" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." rows="5"></textarea>
                        </div>
                    </div>
                </div>
              
                <div class="row">
                    <div class="col-sm-1">
                        <div class="thumbnail">
                            <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <strong>myusername</strong> <span class="text-muted">commented 5 days ago</span>
                            </div>
                            <div class="panel-body">
                                panelcontent
                                <button class="float-right btn btn-outline-primary ml-2" onClick={this.showreply} >Reply</button>
                                <div id="reply" style={{display: this.state.show ? 'block' : 'none'}}>
                                    <div class="row" id="post-review-box">
                                        <div class="col-md-12">
                                            <textarea class="form-control animated" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." rows="5"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-1">
                        <div class="thumbnail">
                            <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <strong>myusername</strong> <span class="text-muted">commented 5 days ago</span>
                            </div>
                            <div class="panel-body">
                                panelcontent
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}
export default DiscussVideo;