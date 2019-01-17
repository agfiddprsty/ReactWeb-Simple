import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import ReactDOM from 'react-dom';
import { ReCaptcha } from 'react-recaptcha-google'
import Header from './Headereg.js';
import Footer from './Footer.js';
import {Link,Redirect,withRouter} from 'react-router-dom'
import Home from './Home';
import connect from 'react-redux';
import { white } from 'material-ui/styles/colors';
import bghead from './img/image.svg';
class Login extends Component{
  constructor(props){
    super(props)
    this.loginhandle = this.loginhandle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onLoadReecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.moveRegister = this.moveRegister.bind(this);
    this.state = {
        isverified: false,
        email:'dw@cam.p',
        password:'dwcamp',
        emailform:'',
        passwordform:''

    }
    }
    componentDidMount() {
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
        }
    }
    //for recaptha
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
    // for login
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    loginhandle(){
        if(this.state.emailform == ""){
            alert('please fill email form');
        }
        else if(this.state.passwordform == ""){
            alert('please fill password form')
        }
        else if(!this.state.isverified){
            alert('Please proof your human')
        }
        else if(this.state.email != this.state.emailform){
            alert('please enter correct email')
        }
        else if(this.state.password != this.state.passwordform){
            alert('please enter correct password');
        }
        else{
            this.props.history.push("/Dashboard");
        }
    }
    moveRegister(){
        this.props.history.push("/reg");
    }
    render(){
        var bgheads = {
            width: '300px',
            left: '15%',
            position: 'absolute',
            overflow: 'hidden',
            paddingBottom: ( 'height' / 'width' * 100 ) + '%',
        }
        return(
            <div className="App">
                <Header/>
                <body>
                    <div class="container register">
                        <div class="row">
                            <div class="col-md-3 register-left">
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                                <h3>Welcome</h3>
                                <p>Arkademian</p>
                                <button className="btn btn-light" onClick={this.moveRegister}>Register</button><br/>
                            </div>
                            <div class="col-md-9 register-right">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <h3 class="register-heading">Login Bootcamp</h3>
                                        <div class="row register-form">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="email" class="form-control" placeholder="Email *" onChange={this.handleChange} value={this.state.emailform} name="emailform" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control" placeholder="Password *" onChange={this.handleChange} value={this.state.passwordform} name="passwordform" />
                                                </div>
                                                <div class="form-group">
                                                    <div className="g-recaptcha">
                                                        <ReCaptcha
                                                        ref={(el) => {this.captchaDemo = el;}}
                                                        size="normal"
                                                        data-theme="dark"            
                                                        render="explicit"
                                                        sitekey="6LfQR4IUAAAAAFPioJtlx1v2GeVJJ8_cRrLaa4Ww"
                                                        onloadCallback={this.onLoadRecaptcha}
                                                        verifyCallback={this.verifyCallback}/>
                                                        <button class="btn btn-primary btnRegister" onClick={this.loginhandle} >Login</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <img id="home" src={bghead} alt="img" style={{bgheads}} />
                                                
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
export default Login;