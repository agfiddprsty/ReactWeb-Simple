import axios from 'axios';
export default function fetchUser(){
    var uid = window.location.href;
    var id = uid.replace('https://pklnode.firebaseapp.com/profilelink/','');
    return{
        type: "FETCH_USER",
        payload: axios.get("https://expressjss.herokuapp.com/profiledata?uid="+ id)
    };
}