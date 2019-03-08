//import library
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Screen/css/button.css';
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
import Menu from './Screen/Menu';
import ListSilabus from './Screen/ListSilabus';
import ProfileRaport from './Screen/ProfileRaport';
import Login from './Screen/Login';
import Register from './Screen/Register';
import Agreement from './Screen/Agreement';
import ProfileFill from './Screen/ProfileFill';
import ProfileFilled from './Screen/ProfileFilled';
import Syllabus from './Screen/Syllabus';
import Payment from './Screen/Payment';
import Video from './Screen/VideoPlayer';
import Dashboard from './Screen/Dashboard'
import DetailVIdeo from './Screen/DetailVideo'
import DetailQuiz from './Screen/DetailQuiz';
//import store 
import store from './store'
ReactDOM.render(
    
	<Router>
        <Provider store={store}>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Menu} />
            <Route path='/profile' component={ProfileFilled} />
            <Route path="/silabus/list" component={ListSilabus}/>
            <Route path="/profileraport" component={ProfileRaport}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/agreement" component={Agreement}/>
            <Route path="/profilefill" component={ProfileFill}/>
            <Route path="/syllabus" component={Syllabus}/>
            <Route path="/payment" component={Payment}/>
            <Route path="/videoplayer" component={Video}/>
            <Route path="/video/:uid" component={DetailVIdeo}/>
            <Route path="/videos" component={Dashboard}/>
            <Route path="/quiz/:uid" component={DetailQuiz}/>

        </div>
        </Provider>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();