import React from 'react';
import Header from './HeaderSilabus';
import Footer from './Footer';
import Batch from './batch.js';
import ModalProfile from './ModalProfile';

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
            <div>
                <Header />
            </div>
            <div>
                <body className="Hom-body">
                    <div class="jumbotron jumbotron-fluid tron">
                        <div class=" troncard" style={{width:"100%", height: "500px"}}>
                                <h4 class="card-title title">Bootcamp Dumbways</h4>
                                <p class="card-text isi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lectus dictum, feugiat arcu laoreet, viverra dolor. Cras et pharetra nulla, id posuere justo.</p>
                                <a href="#batch" class="btn btn-warning tombol">Register Bootcamp</a>
                        </div>
                    </div>
                    
                    <div className="divbatch">
                        <div><br/>
                            <section className="secbatch" id="batch">
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
                        </div>
                    </div>
                </body>
            </div>
            <div>
                <Footer />
            </div>
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
                                    <ModalProfile />
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
