import React, {Component} from 'react';
import {Progress,Card,CardBody,CardTitle} from 'reactstrap'
class ProgressDetail extends Component{
    render(){
        return(
            <div>
               <div style={{width:"340px",backgroundColor:"#FF6567",height:"130px",borderRadius:"10px"}}>
                    <br/>
                    <h2 style={{color:"#FFF",marginLeft:"20px",borderRadius:"10px"}}>Progress</h2>
                    <Progress style={{width:"100",marginLeft:"20px",marginRight:"20px"}} value="25"></Progress>
                    <label style={{marginLeft:"290px",marginTop:"10px",color:"#FFF"}}>25%</label>
                
                </div>
            </div>
        )
    }
}
export default ProgressDetail;