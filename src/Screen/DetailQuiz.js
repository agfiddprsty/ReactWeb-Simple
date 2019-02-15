import React,{Component} from 'react';
import HeaderDashboard from './HeaderDashboard';
import ListVideoDown from './LIstVideoDown';
import QuizPlayer from './QuizPlayer';
import Quiz from './Quiz';


class DetailQuiz extends Component{
    render(){
        return(
            <div style={{paddingRight:"20px",paddingLeft:"20px"}}>
                <HeaderDashboard/>
                <body className="bg-light" style={{borderTop:"solid",borderColor:"#E7E7E7"}} >
                    <div style={{marginLeft:"75px",marginTop:"80px"}} >
                        <div className="row">
                            <div class="col-md-auto">
                                <QuizPlayer/>
                            </div>
                            <div class="col-md-3" >
                                <div style={{marginLeft:"45px"}}>
                                    <br/>
                                    <h5>Berikutnya : </h5>
                                </div>
                                <ListVideoDown/>
                            </div>
                        </div>
                        <br/>
                        <div style={{borderTop:"solid",borderColor:"#E7E7E7",width:"800px"}}>
                        
                        </div>
                        <br/>
                        <Quiz/>
                    </div>
                </body>
            </div>
        )
    }
}
export default DetailQuiz;