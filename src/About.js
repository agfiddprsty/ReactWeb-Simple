import React, { Component } from 'react';
import './Home.css';
import Header from './Header.js';
import Footer from './Footer.js';
import {withRouter,Link} from 'react-router-dom';
class About extends Component{
    render() {
        return(
            <div className="about">
                <h3>About Page</h3>
            <div class="btn-group">
                <button type="button" href="/About/Tentang" class="btn btn-primary">Tentang Kami</button>
                <button type="button" href="/About/Kontak" class="btn btn-primary">Kontak Kami</button>
            </div>
            <p class="p-about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>



        );
    }
}
export default About;
