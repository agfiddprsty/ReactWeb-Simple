import React from "react"
import $ from "jquery"

class ProfileLinked extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {firstName:"FN", headline:"Title"};
    }

    componentDidMount(){
        var o = this;
        var uid = window.location.href;
        var id = uid.replace('https://pklnode.firebaseapp.com/profilelink/','');
        $.ajax("https://pklnode.firebaseapp.com/profiledata?uid="+ id).done(function (data) {
           // console.log("data  ", data);
            o.setState(data);
            
        })
    }

    render(){

        return (
            <div>

                <h2>Welcome {this.state.firstName} {this.state.lastName}</h2>

                <h4>{this.state.headline}</h4>

            </div>
        )
    }
}



export default ProfileLinked;