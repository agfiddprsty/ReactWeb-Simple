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
            type: 'input',
            hidden: true,
            background:"",
        }
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleEmailChange(e) {
        this.setState({email:e.target.value})
        // console.log(this.state.email)
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (pattern.test(this.state.email)) {
            // alert('Silahkan masukkan email yang valid')
            this.setState({background:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg"})
        }
        console.log(this.state.background)
    }
    handlePasswordChange(p) {
        this.setState({password:p.target.value})
    }
    loginhandle(){
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
            alert('Silakan masukkan email yang valid')
        }else if(this.state.email === ""){
            alert("Silakan masukkan email anda");
        }else if(this.state.password === ""){
            alert("Silakan masukkan password anda");
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
            this.props.history.push("/syllabus");
            console.log(this.state.selectedValue);
        }        
    }
    moveLogin(){
        this.props.history.push("/");
    }
  
    handlePasswordChange(pc) {
        this.setState({ password: pc.target.value });
      }
    toggleShow(e) {
        // this.setState({ hidden: !this.state.hidden });
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'input' ? 'password' : 'input'
        })
    }
      componentDidMount() {
        if (this.props.password) {
          this.setState({ password: this.props.password });
        }
      }  
      
    render() {
      return (
            <div className="registe">
                    
                <div class="row mb-5 d-none d-lg-flex d-xl-flex">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">   
                    <a href="/"><i class="fa fa-chevron-left arrowleft"></i>     
                        <p class="underarrow">Kembali ke Beranda</p>
                    </a>         
                        <span className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mx-auto">
                            <img class="illus" alt='' src={daftarsekarang}/>
                        </span>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 logright">
                        <div>
                            <div className="text-title" style={{padding:'40px 0 0 52px'}}>
                                <img class="logo" alt='' src={logo}/>
                                <h1 className="welcome">Selamat datang di Squad </h1>
                                <p class="onlinebootcamp" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>
                                    Online Bootcamp Zaman Now
                                </p>
                            </div>
                        </div>

                        <div style={{padding:'0 0 10px 45px'}}>
                            <div class="daftar">
                                <div class="col-md-12" style={{padding:'16px 10px 0 30px', }}>
                                    <div class="persegilogin">
                                        <form>
                                            <table style={{width: '100%'}}>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span class="far fa-envelope fa-lg" style={{fontSize: '30px', marginBottom: '30px'}}></span>
                                                        </td>
                                                        <td>
                                                            <input class="textinput" type="text" name="email" required="" 
                                                                onChange={(e)=>this.handleEmailChange(e)} value={this.state.email}
                                                                style={{backgroundImage: 'url(' + this.state.background + ')', marginLeft: '-5px', backgroundSize: '20px',backgroundRepeat: "no-repeat",backgroundPosition: "right 12px"}}
                                                            />
                                                            <label class="textlabellog" style={{marginTop: '40px'}}>
                                                            Email</label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="https://img.icons8.com/material-outlined/35/000000/lock.png"
                                                            style={{marginBottom:'25px', marginLeft:'-3px'}}/>
                                                            {/* <span class="fa fa-lock fa-lg" style={{fontSize: '35px', marginBottom: '30px', marginLeft:'4px'}}></span> */}
                                                        </td>
                                                        <td>
                                                            <input class="textinput" type={this.state.type} className="password__input" 
                                                            onChange={(pc)=>this.handlePasswordChange(pc)} value={this.state.password} 
                                                            style={{marginLeft: '-5px'}}
                                                            />
                                                            <label class="textlabellog" style={{marginTop: '110px'}}>
                                                            Password</label>
                                                        </td>
                                                        <td>
                                                            <span className={"password__show" +(this.state.type==='input' ? ' fa fa-eye':' far fa-eye-slash')} 
                                                            style={{marginBottom: '230px', marginRight: '30px'}} onClick={this.toggleShow}></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="text-center btn-lg" 
                                            style={{width:'', padding:'5px 0 5px 0', margin:'0'}}>
                                                <button type="button" class="btnsel btn btn-lg btnmasuk" 
                                                    onClick={this.loginhandle} 
                                                    >Masuk
                                                </button>
                                            </div>
                                                <p class="textpass">Lupa Password?</p>
                                                <p class="textpass">Belum punya akun?
                                                    <a href="/register">
                                                        <span style={{color:'red'}}> Daftar</span>
                                                    </a>
                                                </p>
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
                <div class="row mb-10 d-lg-none d-xl-none" style={{height: '50%', marginTop:'0px'}}>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                        <div>
                        <a href="/" style={{width:'30%', marginLeft:'-80px'}}><i class="fa fa-chevron-left arrowleft" style={{fontSize:'14px'}}></i>     
                            <p class="underarrow" style={{marginTop:'-25px', marginLeft:'40px', fontSize:'14px', marginBottom:'10px'}}>Kembali ke Beranda</p>
                        </a>   
                            <div className="text-title" style={{padding:'0 0 0 30px'}}>
                            <img alt='' src={logo} style={{margin:'-50px 0 -20px -8px', width:'17%'}}/>
                                <h1 className="welcome" style={{fontSize:'2.05000000em'}}>Selamat datang di Squad </h1>
                                <p style={{color:'grey', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.250000000em', display:'block', margin:'0 0 20px -7px'}}>
                                    Online Bootcamp Zaman Now
                                </p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center" style={{height:'50%', marginLeft:'-325px'}}>
                            <div class="daftar">
                                <div class="col-md-12">
                                    <div class="persegilogin" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                        <form>
                                        <table style={{width: '100%'}}>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span class="far fa-envelope fa-lg" style={{fontSize: '30px', marginBottom: '30px'}}></span>
                                                        </td>
                                                        <td>
                                                            <input class="textinput" type="text" name="email" required="" 
                                                                onChange={(e)=>this.handleEmailChange(e)} value={this.state.email}
                                                                style={{backgroundImage: 'url(' + this.state.background + ')', 
                                                                marginLeft: '-5px', backgroundSize: '20px',backgroundRepeat: "no-repeat",backgroundPosition: "right 12px",
                                                                marginLeft:'23px', width:'88%'}}
                                                            />
                                                            <label class="textlabellog" style={{marginTop: '40px'}}>
                                                            Email</label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="https://img.icons8.com/material-outlined/35/000000/lock.png"
                                                            style={{marginBottom:'25px', marginLeft:'-3px'}}/>
                                                            {/* <span class="fa fa-lock fa-lg" style={{fontSize: '35px', marginBottom: '30px', marginLeft:'4px'}}></span> */}
                                                        </td>
                                                        <td>
                                                            <input class="textinput" type={this.state.type} className="password__input" 
                                                            onChange={(pc)=>this.handlePasswordChange(pc)} value={this.state.password} 
                                                            style={{marginLeft: '-5px', marginLeft:'23px', width:'88%'}}
                                                            />
                                                            <label class="textlabellog" style={{marginTop: '110px'}}>
                                                            Password</label>
                                                        </td>
                                                        <td>
                                                            <span className={"password__show" +(this.state.type==='input' ? ' fa fa-eye':' far fa-eye-slash')} 
                                                            style={{marginBottom: '230px', marginRight: '30px'}} onClick={this.toggleShow}></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="text-center btn-lg" 
                                            style={{padding:'5px 0 5px 0', margin:'0'}}>
                                                <button type="button" 
                                                    onClick={this.loginhandle} class="btnsel btn btn-danger btn-lg btnmasuk">
                                                    Masuk
                                                </button>
                                            </div>
                                                <p class="textpass" style={{fontSize:'14px'}}>Lupa Password?</p>
                                                <p class="textpass" style={{fontSize:'14px'}}>Belum punya akun?
                                                    <a href="/register">
                                                        <span class="redtext"> Daftar</span>
                                                    </a>
                                                </p>
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