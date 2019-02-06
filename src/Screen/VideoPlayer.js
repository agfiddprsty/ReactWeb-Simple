import React, { Component } from 'react';
import Player from 'react-player'
import Fb from './img/bg.svg'
// import ''
import rnredux from './rnredux.jpg';
import './css/video.css';
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
            <Player
            url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
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
            />
            </div>
        )
    }
}
export default VideoPlayer;