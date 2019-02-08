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
                    <table>
                        <tr>
                            <td>
                                <Video/>
                            </td>
                            <td>
                                <ListVideo/>
                            </td>
                        </tr>
                    </table>
                    <DiscussVideo/>
                </body>
            </div>
        )
    }
}

export default DetailVideo;