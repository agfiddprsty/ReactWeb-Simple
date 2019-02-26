import React, { Component } from 'react';
import HeaderDashboard from './HeaderPage';
import Video from './VideoPlayer'
import ListVideo from './LIstVideoDown'
import ProgressDetail from './ProgressDetail';
import './css/VideoPlayer.css'
import './css/DetailVideo.css'
class DetailVideo extends Component {
    render(){
        return(
            <div className="dv-out-vd-gd dv-out-vd-cl">
                <HeaderDashboard/>
                
                <body className="bg-light dt-body-gd dt-body-cl" >
                    <div className="bd-dv-vd-gd" >
                        <div className="row">
                            <div class="col-md-auto">
                                <Video/>
                            </div>
                            <div class="col-md-3" >
                                <div className="dt-dv-pg-gd dt-dv-pg-cl">
                                    
                                    <ProgressDetail/>
                                </div>
                                <br/>
                                <div className="dt-gr-gd dt-gr-cl" >
                                    <hr class="mt-2 mb-5 hr-dt-gd"></hr>
                                    <h5 className="h5-tn-gd">Tonton Selanjutnya </h5>
                                </div>
                                <div className="ls-dv-mg-gd ls-dv-mg-cl">
                                    <ListVideo/>
                                </div>
                            </div>
                            
                        </div>
                    </div> 
                </body>
            </div>
        )
    }
}

export default DetailVideo;