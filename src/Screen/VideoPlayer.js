import React, { Component } from 'react';
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
            <div className="col-md-auto vp-dv-out-gd vp-dv-out-cl">
                <div className="vp-v-gd vp-v-cl">
                    <Iframeresponsive src="https://fast.wistia.net/embed/iframe/dso2sjap7u"
                    // width="800px"
                    // height="500px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    ratio='16:9'
                    allowFullScreen/>
                </div>
                <h4 className="tittlevideo-gd">2. Mengenal Component</h4>
                <div className="col-12 col-s-9">
                    <hr class="mt-2 mb-5 hr1-vp-gd hr1-vp-cl"></hr>

                    <br/>
                    <br/>
                    <h5 className="deskripsi-gd">Deskripsi </h5>
                    <h6 className="col-12 col-s-9 detail-deskripsi-gd">On The Course dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s,</h6>
                </div> 
                <div style={{width:"800px"}}className="col-12 col-s-9">
                <hr class="mt-2 mb-5 hr1-vp-gd hr1-vp-cl"></hr>
                    <COmment/>
                </div>
            </div>
        )
    }
}
export default VideoPlayer;