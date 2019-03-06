import React, { Component } from 'react';

class ModalProfile extends Component {
    constructor(){
        super()
        this.handleChecked = this.handleChecked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            code:'',
            name:'',
            skill:'',
            asal:'',
            no:'',
            usia:'',
            alamat:'',
            value:'',
            checked: false,
        }
    }


    handleChecked(){
        this.setState({
            checked: true
        })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    render() {
        return (
          <div>
            <div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={this.handleChange} value={this.state.value} placeholder="Code Confirmation Email *"/>
                    <div class="input-group-append">
                        <button class="btn btn-success" type="submit">Send Code Confirmation</button>
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name *" required/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Skill *" required/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Asal Sekolah *" required/>
                </div>
                <div class="form-group">
                    <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Phone *" required />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Usia *" required/>
                </div>
                <div class="form-group">
                    <textarea type="text" class="form-control" placeholder="Alamat *" required />
                </div>
                <div class="form-group">
                    <select class="form-control" required>
                        <option class="hidden"  selected disabled>Last Education</option>
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SMA/SMK">SMA/SMK</option>
                        <option value="D3">D3</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                    </select>
                </div>
                <div>
                    <label class="text-left">               
                        <input type="checkbox" checked={this.state.checked} onChange={this.handleChecked} name="checked"
                        ></input>
                        Saya Menyutujui   
                        <a href="/"> Syarat Dan Ketentuan</a>
                    </label>
                </div> 
            </div>
          </div>
        );
    }
}

export default ModalProfile;