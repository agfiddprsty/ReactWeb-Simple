import React, { Component } from 'react';
import LabelFloatInput from 'label-float-input';
import Header from './HeaderPage';
import './css/DashboardPaidProfile.css';
import DropboxChooser from 'react-dropbox-chooser';
import {RadioGroup,Radio} from 'react-radio-group';
import './css/Register.css';

const APP_KEY = 'jni8bfvqjntw35s';

class DashboardPaidProfile extends Component {
    constructor(props){
        super(props)
        this.finishhandle = this.finishhandle.bind(this);
        this.pendidikanhandle = this.pendidikanhandle.bind(this);
        this.kerjahandle = this.kerjahandle.bind(this);
        this.projecthandle = this.projecthandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.moveLogin = this.moveLogin.bind(this);
        this.upload = this.upload.bind(this)
        this.onSuccess = this.onSuccess.bind(this);
        this.state = {
            isverified: false,
            fullname:'',
            email:'',
            telpnumber:'',
            adress:'',
            summary:'',
            emailValid: true,
            ressjson:'',
            checked: false,
            selectedValue: '',
            sekolah: '',
            study: '', 
            jurusan: '',
            gelar: '',
            perusahaan: '',
            industri: '',
            title: '',
            description: '',
            namaproject: '',
            projecturl: '',
            descproject: '',
            image:null,
            files: ''

        }
    }
    onSuccess(value){
        this.setState({files: value});
        console.log(this.state.files);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    finishhandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
            alert('Silahkan masukkan email yang valid')
        }else if(this.state.fullname === ""){
            alert("Silahkan masukkan nama lengkap anda");
        }else if(this.state.email === ""){
            alert("Silahkan masukkan email anda");
        }else if(this.state.telpnumber === ""){
            alert("Silahkan masukkan nomor telepon anda");
        }else if(this.state.adress === ""){
            alert("Silahkan masukkan alamat anda");
        }else if(this.state.summary === ""){
            alert("Silahkan masukkan summary anda");
        }
        else{
            //init POST AXIOS
            const fullname = this.state.fullname;
            const email = this.state.email;
            const telpnumber = this.state.telpnumber;
            const adress = this.state.adress;
            const summary = this.state.summary;
            const body={
                fullname,
                email,
                telpnumber,
                adress,
                summary
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
            this.props.history.push("#");
            console.log(this.state.selectedValue);
        }        
        
    }

    handleChecked(){
        this.setState({
            checked: true
        })
    }
    fileUploadHandler = () => {
        if (this.state.image) {
          console.log(this.state.image, this.props.userId);
          const fd = new FormData();
          fd.append('avatar', this.state.image, this.state.image.name);
          this.props.addAvatar({ avatar: fd, userId: this.props.userId });
        }
    };
    fileSelectHandler = (e) => {
        this.setState({
          image: e.target.files[0],
        });
    };
    handleValue(value) {
        this.setState({selectedValue: value});
        console.log(this.state.selectedValue);
    }
    upload() {
        document.getElementById("selectImage").click()
    }

    pendidikanhandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (this.state.sekolah === "") {
            alert('Silahkan masukkan sekolah anda')
        }else if(this.state.study === ""){
            alert("Silahkan masukkan bidang study anda");
        }else if(this.state.jurusan === ""){
            alert("Silahkan masukkan jurusan anda");
        }else if(this.state.degree === ""){
            alert("Silahkan masukkan degree anda");
        }
        else{
            //init POST AXIOS
            const sekolah = this.state.sekolah;
            const study = this.state.study;
            const jurusan = this.state.jurusan;
            const degree = this.state.degree;
            const body={
                sekolah,
                study,
                jurusan,
                degree
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
            this.props.history.push("#");
            console.log(this.state.selectedValue);
        }
    }

    kerjahandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (this.state.perusahaan === "") {
            alert('Silahkan masukkan perusahaan pekerjaan anda')
        }else if(this.state.industri === ""){
            alert("Silahkan masukkan industri pekerjaan anda");
        }else if(this.state.title === ""){
            alert("Silahkan masukkan title pekerjaan anda");
        }else if(this.state.description === ""){
            alert("Silahkan masukkan deskripsi pekerjaan anda");
        }
        else{
            //init POST AXIOS
            const perusahaan = this.state.perusahaan;
            const industri = this.state.industri;
            const title = this.state.title;
            const description = this.state.description;
            const body={
                perusahaan,
                industri,
                title,
                description
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
            this.props.history.push("#");
            console.log(this.state.selectedValue);
        }
    }

    projecthandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (this.state.namaproject === "") {
            alert('Silahkan masukkan nama project anda')
        }else if(this.state.projecturl === ""){
            alert("Silahkan masukkan project url anda");
        }else if(this.state.descproject === ""){
            alert("Silahkan masukkan description project anda");
        }
        else{
            //init POST AXIOS
            const namaproject = this.state.namaproject;
            const projecturl = this.state.projecturl;
            const descproject = this.state.descproject;
            const body={
                namaproject,
                projecturl,
                descproject
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
            this.props.history.push("#");
            console.log(this.state.selectedValue);
        }
    }


    moveLogin(){
        this.props.history.push("/");
    }

    render() {
      return (
    <div>
        <Header/>
        <body>
    
        <div style={{backgroundColor:'#FFF', paddingBottom:'1250px'}}>
            <div className="text-title">
                <div className="text-center" style={{padding:'75px 0 0 0'}}>
                    <h1 style={{color:'##3B3B3B', fontWeight:'510', fontFamily:'Circular Std Black, sans-serif;', fontSize:'2.17000000em',display:'block', margin:'-5px 0 0 0',}}>
                    Terimakasih telah mengikuti bootcamp online ini </h1>
                    <p style={{color:'grey', fontWeight:'400', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.39000000em', display:'block', margin:'15px 0 75px 0'}}>
                    Silahkan melengkapi profile anda demi kemudahan kami dalam menyalurkan kerja dan administrasi
                    </p>
                </div>
            </div>

                <div class="text-center" style={{padding:'0 0 350px 158px', }}>
                    <div class="daftar" style={{width:'86.5%'}}>
                        <div class="col-md-12" style={{padding:'15px 10px 0 30px'}}>
                            <div class="box" style={{width:'100%', boxShadow: '0 0 20px 1px rgba(136, 136, 136, 0.4)'}}>
                                <div class="row" style={{marginBottom:'30px'}}>
                                    <p class="col-1" style={{color:'black', fontWeight:'601', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left', marginLeft:''}}>
                                        Profil
                                    </p>
                                    <p class="col-12" style={{color:'blue', fontFamily:'helvetica, Arial, sans serif', fontWeight:'600', fontSize:'1.00500000em', textAlign:'right', marginTop:'-41px'}}><span style={{color:'blue'}}>*</span>required</p>
                                </div>
                                    <form>
                                        <div>
                                            <input type="text" name="fullname" onChange={this.handleChange} value={this.state.fullname} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nama Lengkap</label>
                                        </div>
                                        <div>
                                            <input type="text" name="email" onChange={this.handleChange} value={this.state.email} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Email</label>
                                        </div>
                                        <div>
                                            <input type="text" name="telpnumber" onChange={this.handleChange} value={this.state.telpnumber} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nomor Ponsel</label>
                                        </div>
                                        <div>
                                            <input type="text" name="adress" onChange={this.handleChange} value={this.state.adress} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Alamat</label>
                                        </div>
                                        {/* <div style={{padding:'20px 0px 20px 20px'}}>
                                            <form>
                                                <label class="radio-inline" style={{paddingRight:'20px'}}>
                                                    <input type="radio" name="optradio" checked/>Male
                                                </label>
                                                <label class="radio-inline">
                                                    <input type="radio" name="optradio"/>Female
                                                </label>
                                            </form>
                                        </div> */}
                                        {/* <div>
                                            <form class="row">
                                                <div class="form-group col-1">
                                                    <label for="Date">Date</label>
                                                    <select class="form-control" id="exampleFormControlSelect1">
                                                    <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
                                        <div>
                                            <form className="text-left" style={{marginLeft: '20px'}}>
                                        <div class="form-group">
                                            <form className="text-left" style={{marginLeft: '20px'}}action="">
                                                <div class="custom-control custom-radio custom-control-inline" style={{paddingRight: '100px'}}>
                                                    <input type="radio" defaultChecked class="custom-control-input" onChange={this.handleValue} selectedValue={this.state.selectedValue}  id="lakilaki" name="gender" value="Laki-Laki" placeholder="Laki-Laki"/>
                                                    <label class="custom-control-label" for="lakilaki">Laki-Laki</label>  
                                                    
                                                </div>
                                                <div class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio"class="custom-control-input" onChange={this.handleValue} selectedValue={this.state.selectedValue} class="custom-control-input" id="perempuan" name="gender" value="Perempuan"/>
                                                    <label class="custom-control-label" for="perempuan">Perempuan</label>
                                                </div> 
                                                
                                            </form>
                                        </div>
                                        <div>
                                            <label for="tgl">Tanggal Lahir</label>
                                            <form class="row" id="tgl" style={{marginLeft: '0'}}>
                                                <div class="form-group col-2">
                                                    <select class="form-control text-center" id="exampleFormControlSelect1">
                                                        <option value="" selected disabled hidden>Date</option>
                                                        <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-2">
                                                    <select class="form-control text-center" id="exampleFormControlSelect1">
                                                        <option value="" selected disabled hidden>Month</option>
                                                        <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
                                                        <option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div> */}
                                        <br/>
                                        <div>
                                            <input type="text" name="summary" onChange={this.handleChange} value={this.state.summary} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                            <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Summary</label>
                                        </div>
                                    </form>
                                        
                                        <br/>
                                        <div class="row">
                                            <p class="col-5" style={{color:'black', fontWeight:'601', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left', marginLeft:''}}>
                                                Riwayat Pendidikan
                                            </p>
                                            <p class="col-12" style={{color:'blue', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontWeight:'600', fontSize:'1.00500000em', textAlign:'right', marginTop:'-41px'}}><span style={{color:'blue'}}>*</span>required</p>
                                        </div>
                                        <div>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block" data-toggle="collapse" data-target="#tambahpendidikan" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 30px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                            >+ Tambah Pendidikan</button>
                                                </div>
                                                <br/>
                                                    <div>
                                                    <form>
                                                        <div id="tambahpendidikan" class="collapse" style={{margin:'0 40px 0 40px'}}>
                                                            <p style={{color:'red', fontWeight:'525', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', margin:'25px 0 15px 0', textAlign:'left'}}>
                                                                Tambah Pendidikan
                                                            </p>
                                                            <br/>
                                                            <div>
                                                                <input type="text" name="sekolah" onChange={this.handleChange} value={this.state.sekolah} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Sekolah</label>
                                                            </div>
                                                            <div>
                                                                <input type="text" name="study" onChange={this.handleChange} value={this.state.study} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Bidang Study</label>
                                                            </div>
                                                            <div>
                                                                <input type="text" name="jurusan" onChange={this.handleChange} value={this.state.jurusan} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Jurusan</label>
                                                            </div>
                                                            <div>
                                                                <input type="text" name="degree" onChange={this.handleChange} value={this.state.degree} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Degree</label>
                                                            </div>
                                                            <br/>
                                                            <div class="d-flex justify-content-end" style={{paddingTop:'-25px'}}>
                                                                <a href="#"><span class="btn btn-outline-danger btn-lg setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0', marginRight:'15px'}}>Batal</span></a>  
                                                                <a href="#"><span class="btn btn-danger btn-lg setuju" onClick={this.pendidikanhandle} style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0'}}>Selesai</span></a>  
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <br/>
                                                <div>
                                                <br/>
                                            <p style={{color:'black', fontWeight:'601', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left'}}>
                                                Pengalaman Kerja
                                            </p>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block" data-toggle="collapse" data-target="#tambahpengalamankerja" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 30px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                            >+ Tambah Pengalaman Kerja</button>
                                                </div>
                                                <br/>
                                                    <div>
                                                        <form>
                                                            <div id="tambahpengalamankerja" class="collapse" style={{margin:'0 40px 0 40px'}}>
                                                                <p style={{color:'red', fontWeight:'525', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', margin:'25px 0 15px 0', textAlign:'left'}}>
                                                                    Tambah Pengalaman
                                                                </p>
                                                                <br/>
                                                                <div>
                                                                    <input type="text" name="perusahaan" onChange={this.handleChange} value={this.state.perusahaan} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Perusahaan</label>
                                                                </div>
                                                                <div>
                                                                    <input type="text" name="industri" onChange={this.handleChange} value={this.state.industri} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Industri</label>
                                                                </div>
                                                                <div>
                                                                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Title</label>
                                                                </div>
                                                                <div>
                                                                    <input type="text" name="description" onChange={this.handleChange} value={this.state.description} required="" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Description</label>
                                                                </div>
                                                                <br/>
                                                                <div class="d-flex justify-content-end" style={{paddingTop:'-25px'}}>
                                                                    <a href="#"><span class="btn btn-outline-danger btn-lg setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0', marginRight:'15px'}}>Batal</span></a>  
                                                                    <a href="#"><span class="btn btn-danger btn-lg setuju" onClick={this.kerjahandle} style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0'}}>Selesai</span></a>  
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                        <br/>
                                        <div>
                                            <br/>
                                            <p style={{color:'black', fontWeight:'601', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left', marginBottom:'10px'}}>
                                                Portfolio
                                            </p>
                                            <p style={{color:'grey', textAlign:'left', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'1.10000000em', marginTop:'-5px'}}>
                                                Upload atau link ke portfolio yang kamu punya.
                                            </p>
                                            <br/>
                                            <div class="row">
                                                <div class="col-6">

                                                    {/* <button onClick={this.upload} type="button" class="btn btn-outline-danger btn-lg btn-block" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                                    >
                                                    <i class="fa fa-cloud-upload"></i> Upload</button>
                                                    <input id='selectImage' hidden type="file" onChange={this.fileSelectHandler} /> */}
                                                    <div>
                                                        <DropboxChooser 
                                                            appKey={APP_KEY}
                                                            success={files => this.onSuccess(files)}
                                                            cancel={() => console.log('Closed')}
                                                            multiselect={true}>
                                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block dropbox-button" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>
                                                            <i class="fa fa-cloud-upload"></i> Upload</button> 
                                                        </DropboxChooser>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <button type="button" class="btn btn-outline-danger btn-lg btn-block" data-toggle="collapse" data-target="#link" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                                    >
                                                    <i class="fas fa-link"></i> Link</button>
                                                </div>
                                                <div>
                                                    {this.state.files && this.state.files.map((files, key) => 
                                                    <span className="d-flex text-left" style={{padding: '10px'}}>
                                                        <span class="fa fa-dropbox" aria-hidden="true" style={{color: 'blue', fontSize:'30px', paddingRight: '10px'}}></span>
                                                        <a href={files.link}>
                                                        <span key={key} style={{display: 'flex', flexGrow: '1', color: 'blue'}}>{files.link}</span>
                                                        </a>
                                                    </span> )}
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div>
                                        <br/>
                                            <p style={{color:'black', fontWeight:'601', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left'}}>
                                                Sertifikat
                                            </p>
                                            <br/>
                                            <button type="button" onClick={this.upload} class="btn btn-outline-danger btn-lg btn-block" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}>
                                            <i class="fa fa-cloud-upload"></i> Upload</button>
                                            <input id='selectImage' hidden type="file" onChange={this.fileSelectHandler} />
                                        </div>
                                        <br/>
                                        <div>
                                            <br/>
                                            <div class="row">
                                                <p class="col-3" style={{color:'black', fontWeight:'601', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left'}}>
                                                    Skills
                                                </p>
                                                <button type="button" class="btn" data-toggle="collapse" data-target="#tambahskills" style={{backgroundColor:'lightgrey', color:'#000', marginLeft:'625px', borderRadius:'0', fontFamily:'helvetica, Arial, sans serif'}}>Add Skill</button>
                                            </div>
                                            <div>
                                                <form>
                                                    <div id="tambahskills" class="collapse" style={{marginRight:'80px'}}>
                                                        <p style={{color:'red', fontWeight:'525', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', margin:'25px 0 30px 40px', textAlign:'left'}}>
                                                            Tambah Skills
                                                        </p>
                                                        <div class="input-group input-group-lg" style={{margin:'0 -80px 0 40px'}}>
                                                            <input class="input-group-prepend" type="text" name="skills" required="" placeholder="          Skill (ex: Data Analysis)" style={{fontFamily:'Open Sans, helvetica, Arial, sans serif', border:'1px solid red', margin:'0 40x 0 -80px', paddingRight:'-70px'}}/>
                                                        </div>
                                                        <p style={{textAlign:'left', color:'black', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'.75000000em', marginLeft:'40px', marginTop:'-25px'}}>Kamu bisa menambahkan 10 skills lagi</p> 
                                                        <br/>
                                                        <br/>
                                                        <div class="d-flex justify-content-end" style={{paddingTop:'-25px', marginRight:'-40px'}}>  
                                                            <a href="#"><button class="btn btn-danger btn-sm setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0'}}>Tambah</button></a>  
                                                        </div>  
                                                    </div>
                                                </form>
                                            </div>    
                                        </div>
                                        <br/>
                                        <div>
                                            <p style={{color:'black', fontWeight:'601', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left'}}>
                                                Projects
                                            </p>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block" data-toggle="collapse" data-target="#tambahproject" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 30px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                            >+ Tambah Project</button>
                                                </div>
                                                <br/>
                                                    <div>
                                                        <form>
                                                            <div id="tambahproject" class="collapse" style={{margin:'0 40px 0 40px'}}>
                                                                <p style={{color:'red', fontWeight:'525', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', margin:'25px 0 15px 0', textAlign:'left'}}>
                                                                    Tambah Project
                                                                </p>
                                                                <br/>
                                                                <div>
                                                                    <input type="text" name="" required="" onChange={this.handleChange} value={this.state.namaproject} style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Nama Project</label>
                                                                </div>
                                                                <div>
                                                                    <input type="text" name="" required="" onChange={this.handleChange} value={this.state.projecturl} style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Project URL</label>
                                                                </div>
                                                                <div>
                                                                    <input type="text" name="" required="" onChange={this.handleChange} value={this.state.descproject} style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}/>
                                                                    <label style={{fontFamily:'Open Sans, helvetica, Arial, sans serif'}}>Description</label>
                                                                </div>
                                                                <br/>
                                                                <div class="d-flex justify-content-end" style={{paddingTop:'-25px'}}>
                                                                    <a href="#"><span class="btn btn-outline-danger btn-lg setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0', marginRight:'15px'}}>Batal</span></a>  
                                                                    <a href="#"><span class="btn btn-danger btn-lg setuju" onClick={this.projecthandle} style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0'}}>Selesai</span></a>  
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>

                                        <div class="d-flex justify-content-end" style={{paddingTop: '35px'}}>
                                            <a href="#"><span class="btn btn-danger btn-lg setuju" onClick={this.finishhandle} style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'5px'}}>Finish</span></a>  
                                        </div>
                                </div>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
        </div>
        </body>
        

                
                
        </div>
      );
    }
  }
  export default DashboardPaidProfile;