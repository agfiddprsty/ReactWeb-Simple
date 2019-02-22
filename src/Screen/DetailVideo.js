import React, { Component } from 'react';
import HeaderDashboard from './HeaderDashboard';
import Video from './VideoPlayer'
import ListVideo from './LIstVideoDown'
import ProgressDetail from './ProgressDetail';
import './css/VideoPlayer.css'
import './css/DetailVideo.css'
class DetailVideo extends Component {
    render(){
        return(
            <div style={{background:"#F8F9FA",paddingRight:"20px",paddingLeft:"20px",overflowX:"hidden"}}>
                <HeaderDashboard/>

                <body className="bg-light dt-body-gd dt-body-cl" >
                    <div style={{marginLeft:"75px",marginTop:"30px"}} >
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
                                    <hr class="mt-2 mb-5" style={{width:"300px"}}></hr>
                                    <h5 style={{fontWeight:"bold",}}>Tonton Selanjutnya </h5>
                                </div>
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