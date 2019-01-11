import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Batch from './batch.js';

class ListBatch extends React.Component {
  render() {
    return (
      <div className="Hom">
        <Header />
        <body className="Hom-body">       
        <section id="batch">
        <h5>List Batch Bootcamp</h5>
        <div class="row cardbatch">
            <div class="col"> <a href='/Hack' className="listbatch">
            <Batch /></a>
            </div>
            <div class="col"> <a href='/Hack' className="listbatch">
            <Batch /></a>
            </div>
        </div>
        <div class="row cardbatch">
            <div class="col"> <a href='/Hack' className="listbatch">
            <Batch /></a>
            </div>
            <div class="col"> <a href='/Hack' className="listbatch">
            <Batch /></a>
            </div>
        </div>
        <div class="row cardbatch">
            <div class="col"> <a href='/Hack' className="listbatch">
            <Batch /></a>
            </div>
            <div class="col"> <a href='/Hack' className="listbatch">
            <Batch /></a>
            </div>
        </div>
        </section>
        </body>
        <Footer />
      </div>
    );
  }
}
export default ListBatch;
