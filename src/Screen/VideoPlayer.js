import React, { Component } from 'react';
import Player from 'react-player'

class VideoPlayer extends Component{
    
    render(){
       
        return(
            <Player
            url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
            controls
            playing
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