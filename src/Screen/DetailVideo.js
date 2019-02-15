import React, { Component } from 'react';
import HeaderDashboard from './HeaderDashboard';
import { Table } from 'material-ui';
import Video from './VideoPlayer'
import ListVideo from './LIstVideoDown'
import DiscussVideo from './DiscussVideo'
import Footer from './Footer';
class DetailVideo extends Component {
    render(){
        return(
            <div style={{background:"#F8F9FA"}}>
                <HeaderDashboard/>
                <body className="bg-light" style={{borderTop:"solid",borderColor:"#E7E7E7"}} >
                    <div style={{marginLeft:"100px",marginTop:"80px"}} >
                        <div className="row">
                            <div class="col-md-auto">
                                <Video/>
                            </div>
                            <div class="col-md-auto" >
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