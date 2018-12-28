import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import Reg from './Registrasi';
import Hack from './Hackerrank';
import Menu from './Menu';
import About from './About';
import Batch from './LIstBatch';
import Silabus from './Silabus';
import InfoSilabus from './InfoSilabus';
import ListSilabus from './ListSilabus';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
ReactDOM.render(
    
	<Router>
        <div>
            <Route exact path="/" component={ListSilabus} />
            <Route path="/Dashboard" component={Home}/>
            <Route path="/Reg" component={Reg} />
            <Route path="/About" component={About}/>
            <Route path="/Hack" component={Hack} />
            <Route path="/Admin" component={Menu} />
            <Route path="/Silabus/List" component={ListSilabus}/>
            <Route path="/Silabus/Detail" component={Silabus}/>
            <Route path="/Batch" component={Batch}/>
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
