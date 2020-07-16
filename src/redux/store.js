import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import combineReducers from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';



const middlewares = [logger];

export const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

// export  {store, persistor};
