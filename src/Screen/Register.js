import React, { Component } from 'react';
import daftarsekarang from './img/daftarsekarang.png';
import logo from './img/logo.png';
import './css/Registerpage.css';
class Register extends Component {
    constructor(props){
        super(props)
        this.daftarhandle = this.daftarhandle.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.moveLogin = this.moveLogin.bind(this);
        this.state = {
            fullname:'',
            email:'',
            pass: '',
            confirmpass:'',
            checked: false,
            selectedValue: '',
            emailValid: true,
            ressjson:'',
            type: 'password',
            backgroundf:"",
            backgrounde:""
        }
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleFullnameChange(f) {
        this.setState({fullname:f.target.value})
        if(this.state.fullname !== ""){
            this.setState({backgroundf:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg"})
        }else{
            this.setState({backgroundf:""})
        }
    }
    handleEmailChange(e) {
        this.setState({email:e.target.value})
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (pattern.test(this.state.email)) {
            // alert('Silahkan masukkan email yang valid')
            this.setState({backgrounde:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg"})
        }else{
            this.setState({backgrounde:""})
        }
    }
    handlePasswordChange(p) {
        this.setState({pass:p.target.value})
    }
    handleConfirmpassChange(cp) {
        this.setState({confirmpass:cp.target.value})
    }
    daftarhandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
            alert('Silahkan masuk email yang valid')
        }else if(this.state.fullname === ""){
            alert("Silahkan masukkan nama lengkap anda");
        }else if(this.state.email === ""){
            alert("Silahkan masukkan email anda");
        }else if(this.state.pass === ""){
            alert("Silahkan masukkan password anda");
        }else if(this.state.confirmpass === ""){
            alert("Silahkan masukkan konfirmasi password anda");
        }else if(this.state.pass !== this.state.confirmpass){
            alert("Silakan periksa kata sandi anda dan kata sandi konfirmasi");
        }
        else{
            //init POST AXIOS
            const fullname = this.state.fullname;
            const email = this.state.email;
            const pass = this.state.pass;
            const confirmpass = this.state.confirmpass;
            const body={
                fullname,
                email,
                pass,
                confirmpass
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
            this.props.history.push("/silabusnew");
            console.log(this.state.selectedValue);
        }        
    }
    handlePasswordChange(pc) {
        this.setState({ pass: pc.target.value });
      }
      toggleShow(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'input' ? 'password' : 'input'
        })
      }
      componentDidMount() {
        if (this.props.pass) {
          this.setState({ pass: this.props.pass });
        }
      }  
    moveLogin(){
        this.props.history.push("/");
    }
    
    render() {
      return (
        <div className="registr">
            <div class="row mb-5 d-none d-lg-flex d-xl-flex">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <span className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mx-auto">
                        <img class="illus" alt='' src={daftarsekarang}/>
                    </span>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div>
                        <div className="text-title" style={{padding:'20px 0 0 52px'}}>
                            <img class="logo" alt='' src={logo}/>
                            <h1 className="welcome">Selamat datang di Squad </h1>
                            <p class="onlinebootcamp" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>
                                Online Bootcamp Zaman Now
                            </p>
                        </div>
                    </div>
                    <div style={{padding:'0 0 0 45px'}}>
                        <div class="daftar">
                            <div class="col-md-12" style={{padding:'16px 10px 0 30px', }}>
                                <div class="persegireg">
                                    <form>
                                        <div>
                                            <input class="textinput" type="text" name="fullname" required="" pattern="[A-Za-z}"
                                                onChange={(f)=>this.handleFullnameChange(f)} value={this.state.fullname}
                                                style={{backgroundImage: 'url(' + this.state.backgroundf + ')',backgroundSize: '20px',backgroundRepeat: "no-repeat",backgroundPosition: "right 12px"}}
                                            />
                                            <label class="textlabel"
                                                style={{ 
                                                // color:this.state.fullname!=''?'red':'#999'
                                                }}>Nama Lengkap
                                            </label>
                                        </div>
                                        <div>
                                            <input class="textinput" type="text" name="email" required="" pattern="[^@]+@[^@]+.[a-zA-z]{2,6}" 
                                                onChange={(e)=>this.handleEmailChange(e)} value={this.state.email}
                                                style={{backgroundImage: 'url(' + this.state.backgrounde + ')',backgroundSize: '20px',backgroundRepeat: "no-repeat",backgroundPosition: "right 12px"}}
                                            />
                                            <label class="textlabel" style={{ 
                                                // color:this.state.email!=''?'red':'#999'
                                                }}>Email
                                            </label>
                                        </div>
                                        <div>
                                            <input class="textinput" type={this.state.type} className="password__input" 
                                            onChange={(pc)=>this.handlePasswordChange(pc)} value={this.state.password} />
                                                <label class="textlabel" 
                                                    style={{
                                                    }}>Password
                                                </label>
                                                <span className={"password__show" +(this.state.type==='input' ? ' fa fa-eye':' far fa-eye-slash')} onClick={this.toggleShow}></span>
                                        </div>
                                        <div>
                                            <input class="textinput" type="password" name="confirmpass" required="" 
                                                onChange={this.handleChange} value={this.state.confirmpass} 
                                                onChange={(cp)=>this.handleConfirmpassChange(cp)} value={this.state.confirmpass}
                                                style={{}}/>
                                            <label class="textlabel"
                                                style={{ 
                                                // color:this.state.confirmpass!=''?'red':'#999'
                                                }}>Konfirmasi Password
                                            </label>
                                        </div>
                                        <div className="text-center btn-lg" 
                                        style={{width:'', padding:'5px 0 5px 0', margin:'0'}}>
                                            <button type="button" 
                                                onClick={this.daftarhandle} class="btn btn-danger btn-lg btndaftar"
                                                > Daftar Sekarang
                                            </button>
                                        </div>
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
            <div class="row mb-10 d-lg-none d-xl-none" style={{height: '50%', marginTop:'50px'}}>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                    <div>
                        <div className="text-title" style={{padding:'0 0 0 30px'}}>
                            <img alt='' src={logo} style={{margin:'0 0 15px -8px', width:'14%'}}/>
                            <h1 className="welcome" style={{fontSize:'2.05000000em'}}>Selamat datang di Squad </h1>
                            <p style={{color:'grey', fontWeight:'400', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.250000000em', display:'block', margin:'0 0 20px -7px'}}>
                                Online Bootcamp Zaman Now
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center" style={{height:'50%', marginLeft:'-325px'}}>
                        <div class="daftar">
                            <div class="col-md-12">
                                <div class="persegireg" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                    <form>
                                        <div>
                                            <input class="textinput" class="ceklist" type="text" name="fullname" required="" pattern="[A-Za-z}"
                                                onChange={this.handleChange} value={this.state.fullname} 
                                                onChange={(f)=>this.handleFullnameChange(f)} value={this.state.fullname}
                                                style={{}}/>
                                            <label class="textlabel" 
                                                style={{ 
                                                // color:this.state.fullname!=''?'red':'#999'
                                                }}>Nama Lengkap
                                            </label>
                                        </div>
                                        <div>
                                            <input class="textinput" class="ceklist" type="text" name="email" required="" pattern="[^@]+@[^@]+.[a-zA-z]{2,6}"
                                                onChange={this.handleChange} value={this.state.email} 
                                                onChange={(e)=>this.handleEmailChange(e)} value={this.state.email}
                                                style={{}}/>
                                            <label class="textlabel"
                                                style={{
                                                //  color:this.state.email!=''?'red':'#999'
                                                }}>Email
                                            </label>
                                        </div>
                                        <span class="fa fa-eye" aria-hidden="true" onClick={this.toggleShow} style={{margin:'0 0 0 250px'}}></span>
                                        <div>
                                            <input class="textinput" type={this.state.hidden ? 'password': 'text'} id="password-field" name="pass" required="" value="secret"
                                                    onChange={this.handleChange} value={this.state.password} 
                                                    onChange={(pc)=>this.handlePasswordChange(pc)} value={this.state.pass}
                                                    style={{}}/>
                                                    {/* <button onClick={this.toggleShow}>Show / Hide</button> */}
                                            <label class="textlabel"
                                                    style={{ 
                                                    // color:this.state.pass!=''?'red':'#999'
                                                    }}>Password
                                            </label>
                                        </div>
                                        <div>
                                            <input class="textinput" type="password" name="confirmpass" required="" 
                                                onChange={this.handleChange} value={this.state.confirmpass} 
                                                onChange={(cp)=>this.handleConfirmpassChange(cp)} value={this.state.confirmpass}
                                                style={{}}/>
                                            <label class="textlabel"
                                                style={{ 
                                                // color:this.state.confirmpass!=''?'red':'#999'
                                                }}>Konfirmasi Password
                                            </label>
                                        </div>
                                        <div className="text-center btn-lg" 
                                        style={{width:'', padding:'5px 0 5px 0', margin:'0'}}>
                                            <button type="button" 
                                                onClick={this.daftarhandle} class="btn btn-danger btn-lg btndaftar"
                                                > Daftar Sekarang
                                            </button>
                                        </div>
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
  export default Register;