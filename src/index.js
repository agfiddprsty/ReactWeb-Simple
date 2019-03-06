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
import Login from './Screen/Login';
import Register from './Screen/Register';
import Syllabus from './Screen/Syllabus';
import Agreement from './Screen/Agreement';
import Payment from './Screen/Payment';
// import ProfileFill from './Screen/ProfileFill';
import ProfileFilled from './Screen/ProfileFilled';
import Dashboard from './Screen/Dashboard'
import DetailVIdeo from './Screen/DetailVideo'
import DetailQuiz from './Screen/DetailQuiz';
import * as serviceWorker from './serviceWorker';

//import store 
import store from './store'
ReactDOM.render(
    
	<Router>
        <Provider store={store}>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/syllabus" component={Syllabus}/>
            <Route path="/agreement" component={Agreement}/>
            <Route path="/payment" component={Payment}/>
            <Route path='/profile' component={ProfileFilled} />
            <Route path="/videos" component={Dashboard}/>
            <Route path="/video/example" component={DetailVIdeo}/>
            <Route path="/quiz/example" component={DetailQuiz}/>
            {/* <Route path="/profilefill" component={ProfileFill}/> */}
        </div>
        </Provider>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
