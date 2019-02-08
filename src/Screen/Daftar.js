import React, { Component } from 'react';
import Footer from './Footer.js';
import './css/Daftar.css';

class Daftar extends Component {
    render() {
      return (
        <div>
            <div>
                <div className="text-center">
                <h1 style={{
                    fontSize:'30px', fontStyle:'vertical-align: inherit;', color:'red',fontWeight:300, margin:'25px 0 25px 0',
                }}>Daftar Sekarang</h1>
            </div>
        </div>

        <div>
            <div class="container" style={{margin:'0 0 0 120px',}}>
                <label for="fname">Nama Lengkap</label>
                <input type="text" id="fname" name="fullname" placeholder="">
                </input>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="">
                </input>

                <label for="password">Password</label>
                <input type="text" id="password" name="password" placeholder="">
                </input>

                <label for="email">Konfirmasi Password</label>
                <input type="text" id="confirmpass" name="confirmpass" placeholder="">
                </input>


                <div className="button" style={{margin:'0 0 0 400px'}}>
                    <a href="/silabusnew"><button type="button" class="btn btn-danger btn-md" data-disable="Saving...">Daftar dan Kirim Silabus</button></a>
                </div>

            </div>
            <br/>
            <br/>
        </div>
        <Footer />
        </div>
      );
    }
  }
  export default Daftar;