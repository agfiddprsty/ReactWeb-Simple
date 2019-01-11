import React, { Component } from 'react';
import './css/Contact.css';

export default class Contact extends Component{
    render(){
        return (
            <div>
        <div>
        <div className="text-center">
        <p>How can you communicate?</p>
        <h1 style={{
            fontSize:'30px',color:'#685AA7',fontWeight:300
        }}>Contact Me</h1>
    </div>
    </div>

        <div>
        <div class="container">
    <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
    </input>

    <label for="email">Email</label>
    <input type="text" id="email" name="lastname" placeholder="Your Email..">
    </input>

    <label for="subject">Message</label>
        <textarea id="message" name="message" placeholder="Write Message.."></textarea>

        <input type="submit" value="Submit">
    </input>
    </div>
    </div>
        </div>
    
    )
    }
}