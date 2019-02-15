import React, { Component } from 'react';
import HeaderDashboar from './HeaderDashboard'
import ListVideo from './ListVideo'
import { List } from 'material-ui';
import Footer from './Footer';

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <HeaderDashboar/>
                <body>
                    <ListVideo/>
                </body>
            </div>
        )
    }
}
export default Dashboard;