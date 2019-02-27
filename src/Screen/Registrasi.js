import React, { Component } from 'react';
import './css/Register.css';
import ReactDOM from 'react-dom';
import { ReCaptcha } from 'react-recaptcha-google'
import Header from './Headereg.js';
import Footer from './Footer.js';
import {Link,Redirect,withRouter} from 'react-router-dom'
import { Alert } from 'reactstrap';
import {RadioGroup,Radio} from 'react-radio-group';
import Axios from 'axios';
class registrasi extends Component{
  constructor(props){
        super(props)
        this.registerhandle = this.registerhandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onLoadReecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.moveLogin = this.moveLogin.bind(this);
        this.state = {
            isverified: false,
            name:'',
            email:'',
            password: '',
            confpassword:'',
            checked: false,
            selectedValue: '',
            emailValid: true,
            ressjson:''

        }
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    registerhandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
            alert('Please Enter Valid Email')
        }else if(this.state.name === ""){
            alert("Please Insert Your Name");
        }else if(this.state.email === ""){
            alert("Please Insert Your Email");
        }else if(this.state.password === ""){
            alert("Please Insert Your Password");
        }else if(this.state.confpassword === ""){
            alert("Please Insert Your Confirmation Password");
        }else if(this.state.password !== this.state.confpassword){
            alert("Please Check Your Password And Confirmation Password");
        }else if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!]).*$/)) {
            alert('Please Enter Strong Password');
        }
        else if(!this.state.checked){
            alert("Please Accept Term And Condition");
        }else if(!this.state.isverified){
            alert("Please Proof Your Human");
        }
        else{
            //init POST AXIOS
            const nama = this.state.name;
            const email = this.state.email;
            const pass = this.state.password;
            const gender = this.state.selectedValue;
            const body={
                nama,
                email,
                pass,
                gender
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
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
        console.log(this.state.selectedValue);
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
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group passw">
                                            <input type="password" class="form-control" placeholder="Password *" onChange={this.handleChange} value={this.state.password} name="password"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" onChange={this.handleChange} value={this.state.confpassword} name="confpassword"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div class="form-group">
                                        <div class="maxl">
                                            <RadioGroup
                                            name="gender"
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
                                           
                                        </div>
                                        <div>
                                            <label>               
                                                <input type="checkbox" checked={this.state.checked} onChange={this.handleChecked} name="checked"></input>
                                                Saya Menyutujui   
                                                <a href="/"> Syarat Dan Ketentuan</a>
                                            </label>
                                        </div> 
                                    </div>
                                    <div className="col-md-6">
                                    <div  className="g-recaptcha">
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