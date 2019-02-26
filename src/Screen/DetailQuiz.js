import React,{Component} from 'react';
import HeaderDashboard from './HeaderDashboard';
import ListVideoDown from './LIstVideoDown';
import QuizPlayer from './QuizPlayer';
import Quiz from './Quiz';
// import './css/VideoPlayer.css'
import './css/DetailQuiz.css'
class DetailQuiz extends Component{
    render(){
        return(
            <div className="dv-out-gd dv-out-qz-cl">
                <HeaderDashboard/>
                <body className="bg-light">
                    <div className="bd-dv-qz-gd bd-dv-cl">
                        <div className="row">
                            <div class="col-md-auto">
                                <h3 className="h3-gd">Kuis Mingguan #1</h3>
                                <QuizPlayer/>
                            </div>
                            <div class="col-md-3" >
                                <div className="dv-md3-gd">
                                    <br/>
                                    <h5 className="h5-gd h5-cl">Tonton Selanjutnya </h5>
                                </div>
                                <div className="ls-dq-gd ls-dq-cl">
                                <ListVideoDown/>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-2 mb-5 hr-gd"></hr>
                        <Quiz/>
                    </div>
                </body>
            </div>
        )
    }
}
export default DetailQuiz;