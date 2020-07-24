// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { fetchProductsStart } from './cartItems/cartItems.sagas';

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

export const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(fetchProductsStart)

export const persistor = persistStore(store);

