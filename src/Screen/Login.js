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
class registrasi extends Component{
  constructor(props){
    super(props)
    this.loginhandle = this.loginhandle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onLoadReecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
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
    render(){
        return(
            <div className="App">
                <Header/>
                <body className="blue">
                    <div className="login-header">
                        <h1 style={{color: 'white'}}>Welcome Back!</h1>
                        <div className="login-body">
                            <h3 style={{color: 'white'}}>Please Login</h3>
                        </div>
                    </div>
                    <div className="form">
                        <div className="colom">
                            <label className="label-regis">Email</label>
                            <div className="col-9">
                                <input type="email" placeholder="Email" className="form-control" onChange={this.handleChange} value={this.state.emailform} name="emailform"></input>
                            </div>
                        </div>
                        <div className="colom">
                            <label className="label-regis">Password</label>
                            <div className="col-9">
                                <input type="password" placeholder="Password" className="form-control"onChange={this.handleChange} value={this.state.passwordform} name="passwordform"></input>
                            </div>
                        </div>
                        <div className="colom">
                            <div className="label-regis">
                                {/* You can replace captchaDemo with any ref word */}
                                <ReCaptcha
                                ref={(el) => {this.captchaDemo = el;}}
                                size="normal"
                                data-theme="dark"            
                                render="explicit"
                                sitekey="6LfQR4IUAAAAAFPioJtlx1v2GeVJJ8_cRrLaa4Ww"
                                onloadCallback={this.onLoadRecaptcha}
                                verifyCallback={this.verifyCallback}/>
                            </div> 
                        </div>
                        <div className="button-regis">
                            <button className="btn btn-primary marginbutton" onClick={this.loginhandle} > Submit</button>
                        </div>  
                    </div>
                </body>
            </div>
        );
    }
}
export default registrasi;