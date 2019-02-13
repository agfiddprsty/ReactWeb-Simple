import React, {Component} from 'react';
import {Progress,Card,CardBody,CardTitle} from 'reactstrap'
class ProgressDetail extends Component{
    render(){
        return(
            <div>
                <Card style={{width:"250px"}} color="#000">
                <CardTitle style={{backgroundColor:"#FF6567"}}>
                    <h2>Progress</h2>
                </CardTitle>
                <CardBody style={{backgroundColor:"#FF6567"}}>
                    <Progress value="25"></Progress>
                </CardBody>
                </Card>
            </div>
        )
    }
}
export default ProgressDetail;