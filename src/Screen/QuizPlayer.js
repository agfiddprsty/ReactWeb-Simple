import React,{Component} from 'react';

class QuizPlayer extends Component{
    render(){
        return(
            <div>
                <img src="http://brainboosterstv.com/wp-content/uploads/2018/03/quiz-1400-800x500.jpg"></img>
                <div style={{borderWidth:"1px",borderTop:"solid",width:"800px",borderColor:"#E7E7E7",marginTop:"20px"}}>
                    <br/>
                    <br/>
                    <h3>Deskripsi: </h3>
                    <h6 style={{width:"800px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>
                    <br/>                    
                    <h3>Petunjuk: </h3>
                    <br/>
                    <div style={{backgroundColor:"#FFAD4E",width:"500px",height:"110px"}}>
                        <br/>
                        <h6 style={{color:"#FFF",marginLeft:"10px"}}>Cara Submit git : </h6>
                        <ul style={{display: "block",listStyleType:"disc",marginLeft:"10px",color:"#FFF"}}>
                            <li > Register Ke git arkademy melalui link berikut</li>
                            <li> Buat Repository baru dengan nama "kuis"</li>
                        </ul>
                    </div>
                </div>     
            </div>
        )
    }
}
export default QuizPlayer;