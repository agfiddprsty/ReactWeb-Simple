import React, {Component} from 'react';
import {Progress,Card,CardBody,CardTitle} from 'reactstrap'
import './css/VideoPlayer.css'
class ProgressDetail extends Component{
    render(){
        return(
            <div>
               <div className="col-12-1 col-s-1-2">
                    <br/>
                    <h2 style={{color:"#FFF",marginLeft:"20px",borderRadius:"10px"}}>Progress</h2>
                    <Progress value="25" className="prog-gd"></Progress>
                    <label style={{marginLeft:"250px",marginTop:"10px",color:"#FFF"}}>25%</label>
                
                </div>
            </div>
        )
    }
}
export default ProgressDetail;