import React, { Component } from 'react';
import './css/DashboardPaidProfile.css';

class DashboardPaidProfile extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#FFF'}}>
            <div className="text-title">
                <div className="text-center" style={{padding:'145px 0 0 0'}}>
                    <h1 style={{color:'##3B3B3B', fontWeight:'510', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.07550000em',display:'block', margin:'0 0 0 0',}}>
                    Terimakasih telah mengikuti bootcamp online ini </h1>
                    <p style={{color:'#666666', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.297550000em', display:'block', margin:'15px 0 25px 0'}}>
                    Silahkan melengkapi profile anda demi kemudahan kami dalam menyalurkan kerja dan administrasi
                    </p>
                </div>
            </div>
            
            <div>
                <div class="container" style={{boxShadow:'0 0 7px 0 rgba(136, 136, 136, 0.4)', width:'37%', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}> 
                    <div class="col-md-12" style={{padding:'0 25px 0 25px'}}>
                    <form class="login100-form validate-form">

                        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input class="input100" type="email" name="email" placeholder="Email"/>
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div class="wrap-input100 validate-input" data-validate = "Password is required">
                            <input class="input100" type="password" name="pass" placeholder="Password"/>
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                    </form>

                            <div className="text-center btn-lg" style={{width:'95%', padding:'15px 0 15px 283px'}}>
                                <a href="/dashboard">
                                    <button type="button text-center" class="btn btn-danger btn-lg" style={{padding:'15px 34px 20px 34px', borderRadius:'0', boxShadow:'0 0 15px 0 rgba(136, 136, 136, 0.4)'}}>Selesai</button>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
      );
    }
  }
  export default DashboardPaidProfile;