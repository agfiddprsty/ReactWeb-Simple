import React, { Component } from 'react';
import HeaderDashboard from './HeaderDashboard';
import Video from './VideoPlayer'
import ListVideo from './LIstVideoDown'
import ProgressDetail from './ProgressDetail';
import './css/VideoPlayer.css'
class DetailVideo extends Component {
    render(){
        return(
            <div style={{background:"#F8F9FA"}}>
                <HeaderDashboard/>

                <body className="bg-light" style={{borderTop:"solid",borderColor:"#E7E7E7",paddingLeft:"20px",paddingRight:"20px"}} >
                    <div style={{marginLeft:"75px",marginTop:"80px"}} >
                        <div className="row">
                            <div class="col-md-auto">
                                <Video/>
                            </div>
                            <div class="col-md-auto" >
                                <div className="dt-dv-pg-gd dt-dv-pg-cl">
                                    
                                    <ProgressDetail/>
                                </div>
                                <br/>
                                <br/>
                                <div className="dt-gr-gd dt-gr-cl" >
                                    <br/>
                                    <h5>Berikutnya : </h5>
                                </div>
                                <br/>
                                <br/>
                                <div>
                                    <ListVideo/>
                                </div>
                            </div>
                            
                        </div>
                        {/* <DiscussVideo/> */}
                    </div> 
                </body>
            </div>
        )
    }
}

export default DetailVideo;