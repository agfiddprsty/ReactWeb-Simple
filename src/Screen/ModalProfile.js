import React, { Component } from 'react';

class ModalProfile extends Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name:'',
            skill:'',
            asal:'',
            no:'',
            usia:'',
            alamat:'',
            value:''
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    render() {
        return (
          <div>
            <div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name *" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Skill *" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Asal Sekolah *" />
                </div>
                <div class="form-group">
                    <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Phone *" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Usia *" />
                </div>
                <div class="form-group">
                    <textarea type="text" class="form-control" placeholder="Alamat *" />
                </div>
                <div class="form-group">
                    <select class="form-control">
                        <option class="hidden"  selected disabled>Last Education</option>
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SMA/SMK">SMA/SMK</option>
                        <option value="D3">D3</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                    </select>
                </div>
            </div>
          </div>
        );
    }
}

export default ModalProfile;