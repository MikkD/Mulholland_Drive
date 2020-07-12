import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import combineReducers from './root-reducer';

// import rootReducer from './root-reducer';
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

const middlewares = [logger];


const store = createStore(combineReducers, applyMiddleware(...middlewares));

export default store;
