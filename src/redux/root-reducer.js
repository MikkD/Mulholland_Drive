import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import userReducer from './user/user.reducer';
import cartItemsReducer from './cartItems/cartItems.reducer';
import productsReducer from './products/products.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartItems']
}


export const rootReducer = combineReducers({
    rootUsers: userReducer,
    cartItems: cartItemsReducer,
    products: productsReducer
})

export default persistReducer(persistConfig, rootReducer);
