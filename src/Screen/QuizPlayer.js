import React,{Component} from 'react';
import './css/QuizPlayer.css'
// import './css/DetailVideo.css'
class QuizPlayer extends Component{
    render(){
        return(
            <div className="col-12 col-s-9 qp-dv-out-gd">
                <img src="http://brainboosterstv.com/wp-content/uploads/2018/03/quiz-1400-800x500.jpg" className="img-quiz-gd" ></img>
                <div className="col-12 col-s-9 dv-gd"> 
                    <h5 className="h5-desk-gd">Deskripsi: </h5>
                    <h6 className="col-12 col-s-9 h6-detail-gd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>
                    <h5 className="h5-pet-gd">Petunjuk: </h5>
                  <div className="qp-dv-pg qp-dv-cl">
                        <br/>
                        <h6 className="qp-h6-pg qp-h6-cl">Cara Submit git : </h6>
                        <ul className="col-12 col-s-9 ul-gd">
                            <li className="qp-li-cl" > Register Ke git arkademy melalui link berikut</li>
                            <li className="qp-li-cl"> Buat Repository baru dengan nama "kuis"</li>
                        </ul>
                    </div>
                </div>     
            </div>
        )
    }
}
export default QuizPlayer;