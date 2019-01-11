//import library
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import {Provider} from 'react-redux';
//import screen
import './Screen/css/index.css';
import App from './Screen/App';
import Home from './Screen/Home';
import * as serviceWorker from './serviceWorker';
import Reg from './Screen/Registrasi';
import Hack from './Screen/Hackerrank';
import Menu from './Screen/Menu';
import About from './Screen/About';
import Batch from './Screen/LIstBatch';
import Silabus from './Screen/Silabus';
import InfoSilabus from './Screen/InfoSilabus';
import ListSilabus from './Screen/ListSilabus';
import Login from './Screen/Login';
//import store 
import store from './store'
ReactDOM.render(
    
	<Router>
        <Provider store={store}>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/Dashboard" component={Home}/>
            <Route path="/Reg" component={Reg} />
            <Route path="/About" component={About}/>
            <Route path="/Hack" component={Hack} />
            <Route path="/Admin" component={Menu} />

            <Route path="/Silabus/List" component={ListSilabus}/>
            <Route path="/Silabus/Detail" component={Silabus}/>
            <Route path="/Silabus/List" component={ListSilabus}/>
            <Route path="/Silabus/Detail" component={Silabus}/>
            <Route path="/Batch" component={Batch}/>
        </div>
        </Provider>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
