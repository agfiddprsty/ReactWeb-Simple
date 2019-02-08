import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './css/Home.css';


class HomeVideo extends Component{
    render(){
        return(
            <div>
            <Iframe url="https://fast.wistia.net/embed/iframe/dso2sjap7u"
                width="1000px"
                height="600px"
                id="myId"
                className="resp-iframe"
                display="initial"
                position="relative"
                allowFullScreen/>
            </div>
        )
    }
}
export default HomeVideo;