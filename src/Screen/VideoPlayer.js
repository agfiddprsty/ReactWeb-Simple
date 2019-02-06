import React, { Component } from 'react';
import Player from 'react-player'
import Fb from './img/fb.png'
class VideoPlayer extends Component{
    
    render(){
       
        return(
            <Player
            url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
            controls
            playing
            light={Fb}
            width='100%'
            height='100%'
            config={{ 
                file: { 
                attributes: {
                    
                    controlsList: 'nodownload',
                    onContextMenu: e => e.preventDefault()
                } 
                } 
            }}
        />
        )
    }
}
export default VideoPlayer;