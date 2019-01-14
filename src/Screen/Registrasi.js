import React, { Component } from 'react';
import './css/Register.css';
import ReactDOM from 'react-dom';
import { ReCaptcha } from 'react-recaptcha-google'
import Header from './Headereg.js';
import Footer from './Footer.js';
import {Link,Redirect,withRouter} from 'react-router-dom'

class registrasi extends Component{
  constructor(props){
    super(props)
    this.registerhandle = this.registerhandle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onLoadReecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
        isverified: false,
        name:'',
        email:'',
        password: '',
        skill:'',
        asal:'',
        no:'',
        usia:'',
        alamat:'',

    }
  }
      handleChange(event) {
        this.setState({name: event.target.value});
      }

      // startregister(){

      // }
      registerhandle(){
        if(this.state.isverified){
          this.props.history.push("/home");

          
        }else{

          // alert('Please Proof You Are Human')
       //   this.props.history.push("/Hack");

           alert('Please Proof You Are Human')
        //alert(this.state.name);
        }
      }
      componentDidMount() {
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
        }
      }
      onLoadRecaptcha() {
          if (this.captchaDemo) {
              this.captchaDemo.reset();
          }
      }
      verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
        //console.log(recaptchaToken, "<= your recaptcha token")
        if(recaptchaToken){
          this.setState({
            isverified: true
          })
        }
      }
      
      render(){
        
          return(
            <div>
            <Header/>
        <body>
          <div>
          <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>Arkademian</p>
                        <button className="btn btn-light">LOGIN</button><br/>
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Register Bootcamp</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Name *" onChange={this.handleChange} value={this.state.name} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email *" />
                                        </div>
                                        <div class="form-group">
                                            <div class="maxl">
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="male" checked/>
                                                    <span> Male </span> 
                                                </label>
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="female"/>
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                        <label>               
                                            <input type="checkbox"></input>
                                            Saya Menyutujui   
                                            <a href="/"> Syarat Dan Ketentuan</a>
                                        </label>
                                      </div> 
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group passw">
                                            <input type="password" class="form-control" placeholder="Password *" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" />
                                        </div>
                                        <div>
                                      {/* You can replace captchaDemo with any ref word */}
                                      <ReCaptcha
                                        ref={(el) => {this.captchaDemo = el;}}
                                        size="normal"
                                        data-theme="dark"            
                                        render="explicit"
                                        sitekey="6LfQR4IUAAAAAFPioJtlx1v2GeVJJ8_cRrLaa4Ww"
                                        onloadCallback={this.onLoadRecaptcha}
                                        verifyCallback={this.verifyCallback}
                                      />
                                      </div>
                                        <button class="btn btn-primary btnRegister" onClick={this.registerhandle}>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </body>
       <Footer/>
      </div>
          );
      }
}
export default registrasi;