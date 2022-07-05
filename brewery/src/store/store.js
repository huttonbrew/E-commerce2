
//createstore is the brain of the redux, creates store that holds state, middleware extends redux functinalitity with redux functionanily, 

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {};

const middleware =[thunk];

const store = createStore(rootReducer, initialState, compose (

applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.
    __REDUX_DEVTOOLS_EXTENSION__()
))

export default store;


