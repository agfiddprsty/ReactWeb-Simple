import React, { Component } from 'react';
import './css/video.css';
import Iframe from 'react-iframe'
import COmment from './DiscussVideo'
import './css/VideoPlayer.css'
import Iframeresponsive from 'react-responsive-embed'
class VideoPlayer extends Component{
    constructor(){
        super()
        this._Pause = this._Pause.bind(this)
        this.state={
            playing:false
        }
    }
    _Pause(){

        
        this.setState({ playing: !this.state.playing })
    }
    render(){
       
        return(
            <div className="col-md-auto">
                <div className="">
                    <Iframeresponsive src="https://fast.wistia.net/embed/iframe/dso2sjap7u"
                    // width="800px"
                    // height="500px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    ratio='4:3'
                    allowFullScreen/>
                </div>
                <h2 style={{width:"800px",marginTop:"1%"}}>1. Perkenalan</h2>
                <br/>
                <br/>
                <div style={{borderWidth:"1px",borderTop:"solid",width:"800px",borderColor:"#E7E7E7"}} className="col-12 col-s-9">
                    <br/>
                    <br/>
                    <h3>Deskripsi: </h3>
                    <h6 style={{width:"800px"}} className="col-12 col-s-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>
                </div>             
                <br/>
                <br/>
                <br/>
                <br/>

                <div style={{borderWidth:"1px",borderTop:"solid",width:"800px",borderColor:"#E7E7E7"}}>
                    <br/>
                    <COmment/>
                </div>
            </div>
        )
    }
}
export default VideoPlayer;