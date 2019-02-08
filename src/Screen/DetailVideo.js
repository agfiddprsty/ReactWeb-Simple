import React, { Component } from 'react';
import HeaderDashboard from './HeaderDashboard';
import { Table } from 'material-ui';
import Video from './VideoPlayer'
import ListVideo from './LIstVideoDown'
import DiscussVideo from './DiscussVideo'
class DetailVideo extends Component {
    render(){
        return(
            <div>
                <HeaderDashboard/>
                <body >
                    <div style={{marginLeft:"100px",marginTop:"80px"}} className="bg-light">
                        <div className="row">
                            <div class="col-md-auto">
                                <Video/>
                            </div>
                            <div class="col-md-auto" style={{marginLeft:"100px"}}>
                                <ListVideo/>
                            </div>
                        </div>
                        <DiscussVideo/>
                    </div> 
                </body>
            </div>
        )
    }
}

export default DetailVideo;