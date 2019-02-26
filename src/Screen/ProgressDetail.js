import React, {Component} from 'react';
import {Progress,Card,CardBody,CardTitle} from 'reactstrap'
import './css/ProgressDetail.css'
class ProgressDetail extends Component{
    render(){
        return(
            <div>
               <div className="dv-pg-gd dv-pg-cl">
                    <br/>
                    <h2 className="h2-pg-gd h2-pg-cl">Progress</h2>
                    <Progress className="pg-pg-gd" value="40" color="warning"></Progress>
                    <label className="pg-lb-gd pg-lb-cl">40%</label>
                
                </div>
            </div>
        )
    }
}
export default ProgressDetail;