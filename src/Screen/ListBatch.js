import React from 'react';
import Header from './HeaderSilabus';
import Footer from './Footer';
import Batch from './batch.js';
import ModalProfile from './ModalProfile';
import './css/App.css'

class ListBatch extends React.Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        code:'',
    }
}

handleChange(event) {
    this.setState({code: event.target.value});
  }


  render() {
    return (
      <div className="Hom">
        <Header />
        <body className="Hom-body">       
        <section id="batch">
        <h5 className="listboot">List Batch Bootcamp</h5>
        <div class="row cardbatch">
            <div class="col"> <a href='#' data-toggle="modal" data-target="#myModal" className="listbatch">
            <Batch /></a>
            </div>
            <div class="col"> <a href='#' data-toggle="modal" data-target="#myModal" className="listbatch">
            <Batch /></a>
            </div>
        </div>
        <div class="row cardbatch">
            <div class="col"> <a href='#' data-toggle="modal" data-target="#myModal" className="listbatch">
            <Batch /></a>
            </div>
            <div class="col"> <a href='#' data-toggle="modal" data-target="#myModal" className="listbatch">
            <Batch /></a>
            </div>
        </div>
        <div class="row cardbatch">
            <div class="col"> <a href='#' data-toggle="modal" data-target="#myModal" className="listbatch">
            <Batch /></a>
            </div>
            <div class="col"> <a href='#' data-toggle="modal" data-target="#myModal" className="listbatch">
            <Batch /></a>
            </div>
        </div>
        </section>
        </body>
        <Footer />
        <div>
            <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                    <h4 class="modal-title">Confirm</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                {/* <!-- Modal body --> */}
                <div class="modal-body">
                <div>
                    <button type="button" class="btn btn-primary btn-block float-left">Connect to LinkedIn</button> <br/>
                </div><br/><br/>    
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" onChange={this.handleChange} value={this.state.code} placeholder="Code Confirmation Email *" required/>
                        <div class="input-group-append">
                            <button class="btn btn-success" type="submit">Send Code Confirmation</button>
                        </div>
                    </div>
                    <div>
                        <ModalProfile />
                    </div>
                    <div>
                        <label class="text-left">               
                            <input type="checkbox"></input>
                            Saya Menyutujui   
                            <a href="/"> Syarat Dan Ketentuan</a>
                        </label>
                    </div> 
                </div>

                {/* <!-- Modal footer --> */}
                <div class="modal-footer">
                    <a href="/hack"><button type="button" class="btn btn-success">Submit</button></a>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}
export default ListBatch;
