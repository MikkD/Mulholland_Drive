import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import combineReducers from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const middlewares = [];


const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
