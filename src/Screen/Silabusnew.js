import React, { Component } from 'react';
import Header from './HeaderPage'
import './css/Silabusnew.css';

class Silabusnew extends Component {
    constructor(props){
        super(props)
        this.sendsilabushandle = this.sendsilabushandle.bind(this);
        this.moveLogin = this.moveLogin.bind(this);
        this.state = {
            email:'',
            fullname:''
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleEmailChange(e) {
        this.setState({email:e.target.value})
    }
    handleFullnameChange(f) {
        this.setState({fullname:f.target.value})
    }

    sendsilabushandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
            alert('Silahkan masukkan email yang valid')
        }else if(this.state.email === ""){
            alert("Silahkan masukkan email anda");
        }else if(this.state.fullname === ""){
            alert("Silahkan masukkan nama lengkap anda");
        }
        else{
            //init POST AXIOS
            const email = this.state.email;
            const password = this.state.fullname;
            const body={
                email:'',
                fullname:''
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
            this.props.history.push("/payment");
            console.log(this.state.selectedValue);
        }        
    }

    moveLogin(){
        this.props.history.push("/");
    }

    render() {
      return (
        <div style={{backgroundColor:'#FFF', overflow: 'hidden'}}>
            <div>
                <Header/>
            </div>
            <body style={{marginTop: '80px', backgroundColor:'#FFF'}}>
                <div className="mb-10 d-none d-md-block d-lg-block d-xl-block">
                    <div className="jumbotron jumbotron-fluid silabus" style={{height: "600px"}}>
                        <h4 className="card-title text-center tengah">Menjadi Fullstack Mobile Developer <br/>Professional dan Disalurkan Kerja</h4>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                        <div className="text-center" style={{padding:'90px 0 0 0', backgroundColor:'#FFF'}}>
                            <h1 className="title">Tertarik dengan pembelajaran kami? </h1>
                            <p className="title-silabus">Isi Form dibawah ini untuk mendapatkan silabus melalui email</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div class="daftar">
                                <div class="col-md-12">
                                    <div class="persegi" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                        <form>
                                            <div class="Input">
                                                <input type="text" id="input" class="Input-text" name="fullname" required="" placeholder="Nama Lengkap" pattern="[A-Za-z}"
                                                style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label for="input" class="Input-label" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif', }}>Nama Lengkap</label>
                                            </div>
                                            <div class="Input">
                                                <input type="text" id="input" class="Input-text" name="email" required  placeholder="Email" pattern="[^@]+@[^@]+.[a-zA-z]{2,6}"
                                                style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label for="input" class="Input-label" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif', }}>Email</label>
                                            </div>
                                            <div className="btn-block" 
                                            onClick={this.sendsilabushandle}
                                            style={{width:'', padding:'10px 0 15px 0', margin:'0'}}>
                                                <button type="button" class="btn btn-danger btn-block" style={{marginBottom:'10px', padding:'10px 0 10px 0', borderRadius:'0'}}>Kirim Silabus</button>
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
                <div class="row mb-10 d-md-none d-lg-none d-xl-none" style={{height: '100%'}}>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                        <div className="text-center" style={{padding:'90px 0 0 0', backgroundColor:'#FFF'}}>
                            <h1 className="title">Tertarik dengan pembelajaran kami? </h1>
                            <p className="title-silabus">Isi Form dibawah ini untuk mendapatkan silabus melalui email</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div class="daftar">
                                <div class="col-md-12">
                                    <div class="persegi" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                        <form>
                                            <div class="Input">
                                                <input type="text" id="input" class="Input-text" name="fullname" required=""  placeholder="Nama Lengkap" pattern="[A-Za-z}" 
                                                style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label for="input" class="Input-label" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif', }}>Nama Lengkap</label>
                                            </div>
                                            <div class="Input">
                                                <input type="text" id="input" class="Input-text" name="email" required  placeholder="Email" pattern="[^@]+@[^@]+.[a-zA-z]{2,6}" 
                                                style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                <label for="input" class="Input-label" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif', }}>Email</label>
                                            </div>
                                            <div className="btn-block" style={{width:'', padding:'10px 0 15px 0', margin:'0'}}>
                                                <button type="button" class="btn btn-danger btn-block" 
                                                onClick={this.sendsilabushandle}
                                                style={{marginBottom:'10px', padding:'10px 0 10px 0', borderRadius:'0'}}>Kirim Silabus</button>
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
            </body>
        </div>
        );
    }
  }
  export default Silabusnew;