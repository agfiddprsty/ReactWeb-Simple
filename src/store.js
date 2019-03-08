import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './Reducers';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const middleware = applyMiddleware(logger, thunk, promise());

export const store = createStore(persistedReducer, middleware);

export const persistor = persistStore(store);

// const middleware = applyMiddleware(promise(),thunk,logger);

// const store = createStore(
//    newsReducer,
//     // {},
//     middleware
// );
// store.dispatch((dispatch)=>{
//     dispatch({type: 'FETCH_NEWS_PENDING'});
//     Axios.get('http://rest.learncode.academy/api/fiid/pras').then((response)=>{
//         dispatch({type:'FETCH_NEWS_FULLFIED',payload: response.data})
//     }).catch((err)=>{
//         dispatch({type:'FETCH_NEWS_ERROR'})
//     })
// })
// export default store;