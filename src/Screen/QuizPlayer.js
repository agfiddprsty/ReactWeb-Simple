import React,{Component} from 'react';
import './css/QuizPlayer.css'
class QuizPlayer extends Component{
    render(){
        return(
            <div className="col-12 col-s-9">
                <img src="http://brainboosterstv.com/wp-content/uploads/2018/03/quiz-1400-800x500.jpg" ></img>
                <div style={{borderWidth:"1px",borderTop:"solid",width:"800px",borderColor:"#E7E7E7",marginTop:"20px"}} className="col-12 col-s-9"> 
                    <br/>
                    <br/>
                    <h5 style={{fontWeight:"bold"}}>Deskripsi: </h5>
                    <h6 className="col-12 col-s-9"style={{width:"800px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>
                    <br/>                    
                    <h5 style={{fontWeight:"bold"}}>Petunjuk: </h5>
                    <br/>
                  <div className="qp-dv-pg qp-dv-cl">
                        <br/>
                        <h6 className="qp-h6-pg qp-h6-cl">Cara Submit git : </h6>
                        <ul style={{display: "block",listStyleType:"disc",marginLeft:"10px",color:"#FFF"}}className="col-12 col-s-9">
                            <li className="qp-li-cl" > Register Ke git arkademy melalui link berikut</li>
                            <li className="qp-li-cl"> Buat Repository baru dengan nama "kuis"</li>
                            {/* <label className="qp-li-cl">Register Ke git arkademy melalui link berikut</label>
                            <label className="qp-li-cl">Buat Repository baru dengan nama "kuis"</label> */}
                        </ul>
                    </div>
                </div>     
            </div>
        )
    }
}
export default QuizPlayer;