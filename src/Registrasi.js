import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { ReCaptcha } from 'react-recaptcha-google'
import Header from './Headereg.js';
import Footer from './Footer.js';
import {Link,Redirect,withRouter} from 'react-router-dom'
import Home from './Home';
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
        alamat:'',
        no:'',
        usia:'',
        Skill:'',
        asal:'',

    }
  }
      handleChange(event) {
        this.setState({name: event.target.value});
      }

      // startregister(){

      // }
      registerhandle(){
        if(this.state.isverified){
          this.props.history.push("/Dashboard");

          
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
            <div className="App">
            <Header/>
        <body className="grey">
           <div className="form">
              <div className="register-font">
               <h1>Register</h1>
              </div>
              <div className="colom">
              <label className="label-regis">Name</label>
              <div className="col-9">
                 <input type="text" placeholder="Name" className="form-control" onChange={this.handleChange} value={this.state.name}></input>
                 </div>
              </div>
              <div className="colom">
                <label className="label-regis">Email</label>
                <div className="col-9">
                <input type="email" placeholder="Email" className="form-control"></input>
                </div>
              </div>

              <div className="colom">
                <label className="label-regis">Password</label>
                <div className="col-9">
                <input type="password" placeholder="Password" className="form-control"></input>
                </div>
              </div>
              
              <div className="colom">
             
                <label className="label-regis">Alamat</label>
                <div className="col-9">
                <textarea placeholder="Alamat" className="form-control"></textarea>
                </div>
              </div>
              
              <div className="colom">
                <label className="label-regis">No Handphone</label>
                <div className="col-9">
                <input type="text" placeholder="No Handphone" className="form-control"></input>
                </div>
              </div>
              
              <div className="colom">
                <label className="label-regis">Usia</label>
                <div className="col-9">
                <input type="text" placeholder="Usia" className="form-control"></input>
                </div>
              </div>
             
              <div className="colom">
               <label className="label-regis">Skils</label>
               <div className="col-9">
               <input type="text" placeholder="Skill" className="form-control"></input>
               </div>
              </div>
              
              <div className="colom">
                <label className="label-regis">Pendidikan Terakhir</label><br/>
                <select className="label-regis">
                  <option>SD</option>
                  <option>SMP</option>
                  <option>SMA</option>
                  <option>S1</option>
                </select>
              </div>
              
              <div className="colom">
                 <label className="label-regis">Asal Sekolah</label>
                 <div className="col-9">
                 <input type="text" placeholder="Asal Sekolah" className="form-control"></input>
                 </div>
              </div>
              
              <div className="colom">
                 <label className="label-regis">Uploud KTP/Kartu Identitas</label>
                 <div className="col-9">
                 <input type="file" placeholder="Asal Sekolah" className="form-control-file border"></input><br/>
                 </div>
              </div>
              
              <div className="colom">
                <label className="label-regis">               
                  <input type="checkbox"></input>
                  Saya Menyutujui   
                  <a href="/">Syarat Dan Ketentuan</a>
                </label><br/>
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
                    verifyCallback={this.verifyCallback}
                  />
              </div>
             
              </div>
               <div className="button-regis">
                <button className="btn btn-primary marginbutton" onClick={this.registerhandle} > Submit</button>
              </div>
          
          </div>
        </body>
       <Footer/>
      </div>
          );
      }
}
export default registrasi;