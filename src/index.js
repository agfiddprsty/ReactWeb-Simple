import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
//import Batch from './ListBatch.js';
import * as serviceWorker from './serviceWorker';
import Reg from './Registrasi';
import Hack from './Hackerrank';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
ReactDOM.render(
    
	<Router>
        <div>
            <Route exact path="/" component={Reg} />

            <Route path="/Home" component={Home} />
            <Route path="/Hack" component={Hack} />
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
