import React, { Component } from 'react';
import Header from './HeaderPage'
import './css/Silabusnew.css';

class Silabusnew extends Component {
    constructor(props){
        super(props)
        this.kirimhandle = this.kirimhandle.bind(this);
        this.moveLogin = this.moveLogin.bind(this);
        this.updateInputfullnameValue = this.updateInputfullnameValue.bind(this);
        this.activatefullnameField = this.activatefullnameField.bind(this);
        this.disablefullnameFocus = this.disablefullnameFocus.bind(this);
        this.updateInputemailValue = this.updateInputemailValue.bind(this);
        this.activateemailField = this.activateemailField.bind(this);
        this.disableemailFocus = this.disableemailFocus.bind(this);
        this.state = {
            email:'',
            fullname:'',
            inputValue: '',
            fieldActive: false,

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
    activatefullnameField() {
        this.setState({
         fieldfullnameActivate: false
        })
    }
    // to deactivate input only if it's empty
    disablefullnameFocus(f) {
    if (f.target.value === "") {
        this.setState({
            fieldfullnameActivate: false
            })
        }
    }
    // to update the changes in the input and activate it
    updateInputfullnameValue(f) {
        this.setState({
        inputfullnameValue: f.target.value,
    });
        this.activatefullnameField(f);
        f.preventDefault();
    }
    activateemailField() {
        this.setState({
         fieldfullnameActivate: false
        })
    }
    // to deactivate input only if it's empty
    disableemailFocus(e) {
    if (e.target.value === "") {
        this.setState({
            fieldemailActivate: false
            })
        }
    }
    // to update the changes in the input and activate it
    updateInputemailValue(e) {
        this.setState({
        inputValue: e.target.value,
    });
        this.activateemailField(e);
        e.preventDefault();
    }
    kirimhandle(){
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
            <body style={{backgroundColor:'#FFF'}}>
                <div className="mb-10 d-none d-md-block d-lg-block d-xl-block">
                    <div className="jumbotron jumbotron-fluid silabus" style={{height: "650px"}}>
                        <h4 className="card-title text-center middle">Menjadi Fullstack Mobile Developer <br/>Professional dan Disalurkan Kerja</h4>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                        <div className="text-center" style={{padding:'90px 0 0 0', backgroundColor:'#FFF'}}>
                            <h1 className="tertarik">Tertarik dengan pembelajaran kami? </h1>
                            <p className="isiform">Isi Form dibawah untuk mendapatkan silabus melalui email</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div class="daftar">
                                <div class="col-md-12"></div>
                                    <div class="persegi" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                        <form>
                                            <div >
                                                <input type="text" name="fullname" required="" placeholder="" pattern="[A-Za-z}"
                                                    onChange={this.handleChange} value={this.state.fullname} 
                                                    onChange={(f)=>this.handleFullnameChange(f)} value={this.state.fullname}
                                                    value={this.state.inputfullnameValue}
                                                    onFocus={this.activatefullnameField}
                                                    onBlur={this.disablefullnameField}
                                                    onChange={this.updateInputfullnameValue}
                                                    style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}
                                                />
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif', color:this.state.fullname!=''?'red':'#999'}}
                                                // check state the input, whether it is active then apply the class for floating label
                                                className={this.state.fieldfullnameActive ? "field-active" : ""}
                                                >Nama Lengkap</label>
                                            </div>
                                            <div>
                                                <input type="text" name="email" required=""  placeholder="" pattern="[^@]+@[^@]+.[a-zA-z]{2,6}"
                                                    onChange={this.handleChange} value={this.state.email}                                                     
                                                    onChange={(e)=>this.handleEmailChange(e)} value={this.state.email}
                                                    value={this.state.inputemailValue}
                                                    onFocus={this.activateemailField}
                                                    onBlur={this.disableemailField}
                                                    onChange={this.updateInputemailValue}
                                                    style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}
                                                />
                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif', color:this.state.email!=''?'red':'#999'}}
                                                // check state the input, whether it is active then apply the class for floating label
                                                className={this.state.fieldemailActive ? "field-active" : ""}
                                                >Email</label>
                                            </div>
                                            <div className="btn-block" 
                                                    onClick={this.kirimhandle}
                                                    style={{width:'', padding:'10px 0 15px 0', margin:'0'}}>
                                                    <button type="button" class="btn btn-danger btn-block" style={{marginBottom:'10px', padding:'10px 0 10px 0', borderRadius:'0'}}>Kirim Silabus</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-10 d-md-none d-lg-none d-xl-none" style={{height: '100%'}}>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                            <div className="text-center" style={{padding:'90px 0 0 0', backgroundColor:'#FFF'}}>
                                <h1 className="tertarik">Tertarik dengan pembelajaran kami? </h1>
                                <p className="isiform">Isi Form dibawah untuk mendapatkan silabus melalui email</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div class="daftar">
                                    <div class="col-md-12">
                                        <div class="persegi" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                            <form>
                                                <div>
                                                    <input className="floating-label" className="floating-label" type="text" name="fullname" required="" placeholder="Nama Lengkap" pattern="[A-Za-z}"
                                                        onChange={this.handleChange} value={this.state.fullname} 
                                                        onChange={(f)=>this.handleFullnameChange(f)} value={this.state.fullname}
                                                        value={this.state.inputValue}
                                                        onFocus={this.activateField}
                                                        onBlur={this.disableField}
                                                        onChange={this.updateInputValue}
                                                        style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}
                                                    />
                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif', color:this.state.fullname!=''?'red':'#999'}}
                                                    className={this.state.fieldActive ? "field-active" : ""}
                                                    >Nama Lengkap</label>
                                                </div>
                                                <div>
                                                    <input className="floating-label" className="floating-label" type="text" name="email" required=""  placeholder="" pattern="[^@]+@[^@]+.[a-zA-z]{2,6}"
                                                        onChange={this.handleChange} value={this.state.email}                                                     
                                                        onChange={(e)=>this.handleEmailChange(e)} value={this.state.email}
                                                        value={this.state.inputValue}
                                                        onFocus={this.activateField}
                                                        onBlur={this.disableField}
                                                        onChange={this.updateInputValue}
                                                        style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}
                                                    />
                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif', color:this.state.email!=''?'red':'#999'}}
                                                    className={this.state.fieldActive ? "field-active" : ""}
                                                    >Email</label>
                                                </div>
                                                <div className="btn-block" 
                                                    onClick={this.kirimhandle}
                                                    style={{width:'', padding:'10px 0 15px 0', margin:'0'}}>
                                                    <button type="button" class="btn btn-danger btn-block" style={{marginBottom:'10px', padding:'10px 0 10px 0', borderRadius:'0'}}>Kirim Silabus</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            <br/>
            <br/>
        </div>  
        );
    }
  }
  export default Silabusnew;