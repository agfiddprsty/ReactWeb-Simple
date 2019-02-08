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
                <body>
                    <div className="container">
                        <div className="row">
                            <div class="col">
                                <Video/>
                            </div>
                            <div class="col">
                                <ListVideo/>
                            </div>
                        </div>
                    </div>
                    <DiscussVideo/>
                </body>
            </div>
        )
    }
}

export default DetailVideo;