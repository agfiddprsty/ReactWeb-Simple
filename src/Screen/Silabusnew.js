import React, { Component } from 'react';

class Silabusnew extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#FFF'}}>
            
            <div className="jumbotron jumbotron-fluid imagelanding" style={{height: "650px"}}>
            </div>
              
                <div className="text-title">
                    <div className="text-center" style={{padding:'60px 0 0 0', backgroundColor:'#FFF'}}>
                        <h1 style={{color:'##3B3B3B', fontWeight:'510', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.9700000em',display:'block', margin:'0 0 30px 0'}}>
                        Tertarik dengan pembelajaran kami? </h1>
                        <p style={{color:'#666666', fontWeight:'325', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.48500000em', display:'block', margin:'33px 0 39px 0'}}>
                        Isi Form dibawah ini untuk mendapatkan silabus melalui email
                        </p>
                    </div>
                </div>
            
                <div style={{paddingBottom:'50px', backgroundColor:'#FFF'}}>
                    <div class="daftar" style={{boxShadow:'0 0 7px 0 rgba(136, 136, 136, 0.4)', width:'37.5%', backgroundColor:'#FFF', position:'center', margin:'25px 0 100px 430px', border:'1px solid #ececec'}}> 
                        <div class="col-md-12" style={{margin:'0 25px 0 75px'}}>
                            <form class="login-form validate-form" style={{margin:'50px 25px 0 25px'}}>

                                <div class="wrap-input validate-input" data-validate = "">
                                    <input class="input" type="text" name="fullname" placeholder="Nama Lengkap"/>
                                    <span class="focus-input"></span>
                                </div>

                                <div class="wrap-input validate-input" data-validate = "">
                                  <input class="input" type="text" name="email" placeholder="Email"/>
                                  <span class="focus-input"></span>
                                </div>

                            </form>

                            <div className="btn-block" style={{width:'85%', padding:'15px 0 15px 0', margin:'0 0 0 -35px'}}>
                              <a href="/payment"><button type="button" class="btn btn-danger btn-block" style={{marginBottom:'10px', borderRadius:'0'}}>Kirim Silabus</button></a>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
        );
    }
  }
  export default Silabusnew;

//   <div className="text-title">
//   <div className="text-center" style={{padding:'25px 0 0 0'}}>
//       <h1 style={{color:'##3B3B3B', fontWeight:'510', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'2.07550000em',display:'block', margin:'0 0 0 0',}}>
//       Tertarik dengan pembelajaran kami? </h1>
//       <p style={{color:'#666666', fontWeight:'150', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', margin:'15px 0 39px 0'}}>
//       Isi Form dibawah ini untuk mendapatkan silabus melalui email
//       </p>
//   </div>
// </div>