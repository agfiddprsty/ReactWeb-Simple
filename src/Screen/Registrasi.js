import React, { Component } from 'react';
import './css/Register.css';
import ReactDOM from 'react-dom';
import { ReCaptcha } from 'react-recaptcha-google'
import Header from './Headereg.js';
import Footer from './Footer.js';
import {Link,Redirect,withRouter} from 'react-router-dom'
import { Alert } from 'reactstrap';
import {RadioGroup,Radio} from 'react-radio-group';
class registrasi extends Component{
  constructor(props){
    super(props)
    this.registerhandle = this.registerhandle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onLoadReecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
<<<<<<< HEAD
    this.handleChecked = this.handleChecked.bind(this);
    this.handleValue = this.handleValue.bind(this);
=======
>>>>>>> 0a49e32287fd8f8488ae9fa6f3a34d1a9e7f1e90
    this.moveLogin = this.moveLogin.bind(this);
    this.state = {
        isverified: false,
        name:'',
        email:'',
        password: '',
        confpassword:'',
        checked: false,
        selectedValue: 'Male',

    }
  }
      handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }

      // startregister(){

      // }
      registerhandle(){
        //check all is ok
        if(!this.state.isverified){
          alert("Please Proof Your Human");
        }else if(this.state.name == ""){
            alert("Please Insert Your Name");
        }else if(this.state.email == ""){
            alert("Please Insert Your Email");
        }else if(this.state.password == ""){
            alert("Please Insert Your Password");
        }else if(this.state.confpassword == ""){
            alert("Please Insert Your Confirmation Password");
        }else if(this.state.password != this.state.confpassword){
            alert("Please Check Your Password And Confirmation Password");
        }else if(!this.state.checked){
            alert("Please Checked Term And Condition");
        }
        else{
            this.props.history.push("/home");
            console.log(this.state.selectedValue);
        }
      }

      moveLogin(){
        this.props.history.push("/");
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

      handleChecked(){
        this.setState({
            checked: true
        })
      }
      handleValue(value) {
        this.setState({selectedValue: value});
      }
      moveLogin(){
        this.props.history.push("/");
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
                        <button className="btn btn-light" onClick={this.moveLogin}>LOGIN</button><br/>
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Register Bootcamp</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Name *" onChange={this.handleChange} value={this.state.name} name="name" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email *" onChange={this.handleChange} value={this.state.email} name="email"/>
                                        </div>
                                        <div class="form-group">
                                            {/* <div class="maxl">
                                                <label class="radio inline" > 
                                                    <input type="radio" name="gender" value="male" checked/>
                                                    <span> Male </span> 
                                                </label>
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="female"/>
                                                    <span>Female </span> 
                                                </label>
                                            </div> */}
                                            <RadioGroup
                                            name="fruit"
                                            selectedValue={this.state.selectedValue}
                                            onChange={this.handleValue}>
                                                <label>
                                                    <Radio value="Male" />Male
                                                </label>
                                                <label>
                                                    <Radio value="Female" />Female
                                                </label>
                                            </RadioGroup>
                                        </div>
                                        <div>
                                        <label>               
                                            <input type="checkbox" checked={this.state.checked} onChange={this.handleChecked} name="checked"></input>
                                            Saya Menyutujui   
                                            <a href="/"> Syarat Dan Ketentuan</a>
                                        </label>
                                      </div> 
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group passw">
                                            <input type="password" class="form-control" placeholder="Password *" onChange={this.handleChange} value={this.state.password} name="password"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" onChange={this.handleChange} value={this.state.confpassword} name="confpassword"/>
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