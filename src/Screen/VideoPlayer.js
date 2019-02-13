import React, { Component } from 'react';
import Player from 'react-player'
import Fb from './img/bg.svg'
// import ''
import rnredux from './rnredux.jpg';
import './css/video.css';
import Iframe from 'react-iframe'
import COmment from './DiscussVideo'
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
            <div className="pl">
            {/* <Player
            url='https://fast.wistia.net/embed/iframe/dso2sjap7u'
            controls
            playing={this.state.playing}
            // light={rnredux}
            onClick={this._Pause}
            config={{ 
                file: { 
                attributes: {
                    style: { width: '50%', height: '50%', },
                    controlsList: 'nodownload',
                    onContextMenu: e => e.preventDefault(),
                    
                } 
                }
                 
            }}
            /> */}
            <Iframe url="https://fast.wistia.net/embed/iframe/dso2sjap7u"
            width="800px"
            height="500px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/>
            <h2 style={{width:"800px",marginTop:"1%"}}>1.Perkenalan</h2>
            <br/>
            <br/>
            <h5 style={{width:"800px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
             
            <br/>
            <br/>
            <br/>
            <br/>

            <div style={{borderWidth:"1px",borderTop:"solid",width:"800px"}}>
                <br/>
                <COmment/>
            </div>
            {/* <COmment/> */}
            {/* <iframe src="https://fast.wistia.net/embed/iframe/dso2sjap7u" style={{width:"100%",height:"100%"}}></iframe> */}
            </div>
        )
    }
}
export default VideoPlayer;