import React, { Component } from 'react';
import daftarsekarang from './img/daftarsekarang.png';
import logo from './img/logo.png';
import './css/Login.css';

class Login extends Component {
    constructor(props){
        super(props)
        this.loginhandle = this.loginhandle.bind(this);
        //this.viewPassword = this.viewPassword.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.moveLogin = this.moveLogin.bind(this);
        this.state = {
            email:'',
            password:'',
            type: 'password',
            hidden: true,

        }
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleEmailChange(e) {
        this.setState({email:e.target.value})
    }
    handlePasswordChange(p) {
        this.setState({password:p.target.value})
    }
    loginhandle(){
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
            alert('Silahkan masukkan email yang valid')
        }else if(this.state.email === ""){
            alert("Silahkan masukkan email anda");
        }else if(this.state.password === ""){
            alert("Silahkan masukkan password anda");
        }
        else{
            //init POST AXIOS
            const email = this.state.email;
            const password = this.state.password;
            const body={
                email,
                password
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
            this.props.history.push("/silabusnew");
            console.log(this.state.selectedValue);
        }        
    }
    moveLogin(){
        this.props.history.push("/");
    }
  
    handlePasswordChange(pc) {
        this.setState({ password: pc.target.value });
      }
    
      toggleShow() {
        this.setState({ hidden: !this.state.hidden });
      }
    
      componentDidMount() {
        if (this.props.password) {
          this.setState({ password: this.props.password });
        }
      }  

    
    // viewPassword(){
    //     if(!this.state.show){
    //         this.setState({show: !this.state.show})
    //     }else{
    //         this.setState({show:!this.state.show})
    //     }
    //     // var passwordInput = this.state.password('password-field');
        // var passStatus = this.state.password('password-status');
        // if (passwordInput.type == 'password'){
        //     passwordInput.type='text';
        //     passStatus.className='fa fa-eye-slash';
        // }
        // else{
        //     passwordInput.type='password';
        //     passStatus.className='fa fa-eye';
        // }


    render() {
      return (
            <div className="registe">
                <div class="row mb-5 d-none d-lg-flex d-xl-flex" style={{paddingBottom:'50px'}}>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <span className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mx-auto">
                            <img alt='' src={daftarsekarang} style={{margin:'150px 0 0 85px'}}/>
                        </span>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div>
                            <div className="text-title" style={{padding:'40px 0 0 52px'}}>
                                <img alt='' src={logo} style={{margin:'0 0 15px -8px', width:'18%'}}/>
                                <h1 style={{color:'##3B3B3B', fontWeight:'515', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.15000000em',display:'block', margin:'0 0 0 -7px',
                                }}>Selamat datang di Squad </h1>
                                <p style={{color:'grey', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.400000000em', display:'block', margin:'0 0 20px -7px'}}>
                                Online Bootcamp Zaman Now
                                </p>
                            </div>
                        </div>

                        <div style={{padding:'0 0 10px 45px'}}>
                            <div class="daftar">
                                <div class="col-md-12" style={{padding:'16px 10px 0 30px', }}>
                                    <div class="box" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                        <form>
                                            <div>
                                                <input type="text" name="email" required="" 
                                                onChange={this.handleChange} value={this.state.email} 
                                                onChange={(e)=>this.handleEmailChange(e)} value={this.state.email}
                                                style={{fontFamily:'Open Sans, helvetica, Arial, sans serif',}}/>
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Email</label>
                                            </div>
                                            <span class="fa fa-eye" aria-hidden="true" onClick={this.toggleShow} style={{margin:'0 0 0 375px'}}></span>
                                            <div>
                                                <input type={this.state.hidden ? 'password': 'text'} id="password-field" name="password" required="" value="secret"
                                                onChange={this.handleChange} value={this.state.password} 
                                                onChange={(pc)=>this.handlePasswordChange(pc)} value={this.state.password}
                                                style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                {/* <button onClick={this.toggleShow}>Show / Hide</button> */}
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Password</label>
                                            </div>
                                            <div className="text-center btn-lg" style={{width:'', padding:'10px 0 10px 0', margin:'0'}}>
                                                <button type="button" class="btn btn-danger btn-lg" 
                                                onClick={this.loginhandle} 
                                                style={{padding:'15px 170px 15px 170px', borderRadius:'0', boxShadow:'0 0 15px 0 rgba(136, 136, 136, 0.4)', fontFamily:'helvetica, Arial, sans serif'
                                            }} >Masuk</button>
                                            </div>
                                            <p class="text-center" style={{color:'#666666', fontWeight:'400', fontSize:'.97514286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}}>Lupa Password?</p>
                                            <p class="text-center" style={{color:'#666666', fontWeight:'400', fontSize:'.97514286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif', marginBottom:'-15px'}}>Belum punya akun? <a href="/register"><span style={{color:'red'}}> Daftar</span></a></p>
                                        </form>
                                    </div>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Responsive */}
                <div class="row mb-10 d-lg-none d-xl-none" style={{height: '80%', marginTop:'25px'}}>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                        <div>
                            <div className="text-title" style={{padding:'0 0 0 20px'}}>
                                <img alt='' src={logo} style={{margin:'0 0 15px -8px', width:'14%'}}/>
                                <h1 style={{color:'##3B3B3B', fontWeight:'515', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.15000000em',display:'block', margin:'0 0 0 -7px',
                                }}>Selamat datang di Squad </h1>
                                <p style={{color:'grey', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.500000000em', display:'block', margin:'0 0 20px -7px'}}>
                                Online Bootcamp Zaman Now
                                </p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div class="daftar">
                                <div class="col-md-12">
                                    <div class="persegi" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                        <form>
                                            <div>
                                                <input type="text" name="email" required placeholder="" 
                                                onChange={this.handleChange} value={this.state.email} 
                                                onChange={(e)=>this.handleEmailChange(e)} value={this.state.email}
                                                style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif', fontWeight:'600'}}>Email</label>
                                            </div>
                                            <span class="fa fa-eye" aria-hidden="true" onClick={this.toggleShow} style={{margin:'0 0 0 375px'}}></span>
                                            <div>
                                                <input type={this.state.hidden ? 'password': 'text'} id="password-field" name="password" required="" value="secret"
                                                onChange={this.handleChange} value={this.state.password} 
                                                onChange={(pc)=>this.handlePasswordChange(pc)} value={this.state.password}
                                                style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                {/* <button onClick={this.toggleShow}>Show / Hide</button> */}
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Password</label>
                                            </div>
                                            <div className="text-center btn-lg" style={{width:'', padding:'10px 0 10px 0', margin:'0'}}>
                                                <button type="button" 
                                                onClick={this.loginhandle} 
                                                class="btn btn-danger btn-lg btnmsk">Masuk</button>
                                            </div>
                                            <p class="text-center" style={{color:'#666666', fontWeight:'400', fontSize:'.97514286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}}>Lupa Password?</p>
                                            <p class="text-center" style={{color:'#666666', fontWeight:'400', fontSize:'.97514286em', fontFamily: 'Lato, Verdana, Helvetica, sans-serif'}}>Belum punya akun? <a href="/register"><span style={{color:'red'}}> Daftar</span></a></p>
                                        </form>
                                    </div>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        );
    }
}
  export default Login;