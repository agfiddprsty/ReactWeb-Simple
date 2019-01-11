import {createStore, combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import newsReducer from './Reducers/newsReducer';
import promise from 'redux-promise-middleware'
import Axios from 'axios';

const middleware = applyMiddleware(promise(),thunk,logger);

const store = createStore(
   newsReducer,
    // {},
    middleware
);
// store.dispatch((dispatch)=>{
//     dispatch({type: 'FETCH_NEWS_PENDING'});
//     Axios.get('http://rest.learncode.academy/api/fiid/pras').then((response)=>{
//         dispatch({type:'FETCH_NEWS_FULLFIED',payload: response.data})
//     }).catch((err)=>{
//         dispatch({type:'FETCH_NEWS_ERROR'})
//     })
// })
export default store;