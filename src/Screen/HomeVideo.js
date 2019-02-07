import React, { Component } from 'react';
import Iframe from 'react-iframe'


class HomeVideo extends Component{
    render(){
        return(
            <div>
            <Iframe url="https://fast.wistia.net/embed/iframe/dso2sjap7u"
            width="450px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/>
            </div>
        )
    }
}
export default HomeVideo;