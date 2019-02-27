import React,{Component} from 'react';
import './css/QuizPlayer.css'
// import './css/DetailVideo.css'
import lvl from './img/Level.png'
import quizzimage from  './img/quiz-1400-800x500.jpg'
class QuizPlayer extends Component{
    render(){
        return(
            <div className="col-12 col-s-9 qp-dv-out-gd">
                <img src={quizzimage} className="img-quiz-gd img-quiz-cl" ></img>
                <div className="col-12 col-s-9 dv-gd">
                    <div className="row" style={{marginTop:"-23px"}}>
                        <div className="col-md-auto"> 
                            <h5 className="h5-desk-gd">Deskripsi: </h5>
                        </div>
                        <div className="col-md-auto lvl-qz-ds-gd lvl-qz-ds-cl">
                            <a style={{color:"#22E2ED",fontWeight:"600"}}>Level <img style={{marginLeft:"5px"}} src={lvl}></img></a>
                        </div>
                    </div>
                    <h6 className="col-12 col-s-9 h6-detail-gd">Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,</h6>
                    <h5 className="h5-pet-gd">Petunjuk: </h5>
                  <div className="qp-dv-pg qp-dv-cl">
                        <br/>
                        <h6 className="qp-h6-pg qp-h6-cl" style={{fontWeight:"bold"}}>Cara Submit git : </h6>
                        <ul className="col-12 col-s-9 ul-gd" style={{listStyleType:"disc"}}>
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