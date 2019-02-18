import React, { Component } from 'react';
import HeaderDashboard from './HeaderDashboard';
import Video from './VideoPlayer'
import ListVideo from './LIstVideoDown'
import ProgressDetail from './ProgressDetail';
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
                                <div style={{marginLeft:"45px",marginTop:"10px"}}>
                                    
                                    <ProgressDetail/>
                                </div>
                                <br/>
                                <br/>
                                <div style={{borderTop:"solid",borderColor:"#E7E7E7",width:"300px",marginLeft:"45px"}}>
                                    <br/>
                                    <h5>Berikutnya : </h5>
                                </div>
                                <br/>
                                <br/>

                                <ListVideo/>
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