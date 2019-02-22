import React,{Component} from 'react';
import HeaderDashboard from './HeaderDashboard';
import ListVideoDown from './LIstVideoDown';
import QuizPlayer from './QuizPlayer';
import Quiz from './Quiz';
import './css/VideoPlayer.css'

class DetailQuiz extends Component{
    render(){
        return(
            <div style={{overflowX:"hidden"}}>
                <HeaderDashboard/>
                <body className="bg-light" style={{borderTop:"solid",borderColor:"#E7E7E7"}} >
                    <div style={{marginLeft:"75px",marginTop:"30px"}} >
                        <div className="row">
                            <div class="col-md-auto">
                                <h3 style={{fontWeight:"bold",marginLeft:"10px",marginBottom:"50px"}}>Kuis Mingguan #1</h3>
                                <QuizPlayer/>
                            </div>
                            <div class="col-md-3" >
                                <div style={{marginLeft:"45px",marginTop:"10px"}}>
                                    <br/>
                                    <h5 style={{fontWeight:"bold"}}>Tonton Selanjutnya </h5>
                                </div>
                                <ListVideoDown/>
                            </div>
                        </div>
                        <br/>
                        <div style={{borderTop:"solid",borderColor:"#E7E7E7",marginLeft:"10px",width:"800px"}} className="col-s-9">
                        
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