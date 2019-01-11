import axios from 'axios';
export default function setNews(){
    return{
        type: "FETCH_NEWS",
       // payload: axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-04&sortBy=publishedAt&apiKey=1b7736686b974c9eb308993b5aa7e6ae')
        payload: axios.get('https://jsonplaceholder.typicode.com/posts')
    };
}