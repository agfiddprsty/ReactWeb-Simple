import React, { Component } from 'react';
import Header from './HeaderPage'
import './css/Silabusnew.css';

class Silabusnew extends Component {
    constructor(props){
        super(props)
        this.kirimsilabushandle = this.kirimsilabushandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.moveLogin = this.moveLogin.bind(this);
        this.state = {
            email:'',
            password:''

        }
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    kirimsilabushandle(){
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
            const fullname = this.state.fullname;
            const body={
                email,
                fullname
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
        <div style={{backgroundColor:'#FFF', paddingBottom:'250px'}}>
            <Header/>
            <body style={{backgroundColor:'#FFF'}}>
            <div className="jumbotron jumbotron-fluid silabus" style={{height: "660px"}}>
                <h4 className="card-title text-center tengah">Menjadi Fullstack Mobile Developer <br/>Professional dan Disalurkan Kerja</h4>
            </div>
              
                <div className="text-title">
                    <div className="text-center" style={{padding:'90px 0 0 0', backgroundColor:'#FFF'}}>
                        <h1 style={{color:'##3B3B3B', fontWeight:'510', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.9700000em',display:'block', margin:'0 0 30px 0'}}>
                        Tertarik dengan pembelajaran kami? </h1>
                        <p style={{color:'#666666', fontWeight:'325', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.48500000em', display:'block', margin:'33px 0 39px 0'}}>
                        Isi Form dibawah ini untuk mendapatkan silabus melalui email
                        </p>
                    </div>
                </div>
            
                <div style={{padding:'0 0 140px 425px', }}>
                    <div class="daftar" >
                        <div class="col-md-12" style={{padding:'16px 10px 0 30px', boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                            <div class="box" style={{boxShadow:'0 0 20px 1px rgba (0,0,0,0.2)'}}>
                                <form>
                                    <div>
                                        <input type="text" name="fullname" required="" onChange={this.handleChange} value={this.state.fullname} pattern="[A-Za-z}" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nama Lengkap</label>
                                    </div>
                                    <div>
                                        <input type="email" name="email" required="" onChange={this.handleChange} value={this.state.email} pattern="[^@]+@[^@]+.[a-zA-z]{2,6}" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                        <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Email</label>
                                    </div>
                                    <div className="btn-block" style={{width:'', padding:'10px 0 15px 0', margin:'0'}}>
                                    <button type="button" class="btn btn-danger btn-block" onClick={this.kirimsilabushandle} style={{marginBottom:'10px', padding:'10px 0 10px 0', borderRadius:'0'}}>Kirim Silabus</button>
                                </div>
                                </form>
                            </div>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
                </body>
        </div>
        );
    }
  }
  export default Silabusnew;
    