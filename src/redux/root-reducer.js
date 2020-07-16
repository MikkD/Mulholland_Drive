import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import userReducer from './user/user.reducer';
import cartItemsReducer from './cartItems/cartItems.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartItems']
}


export const rootReducer = combineReducers({
    rootUsers: userReducer,
    cartItems: cartItemsReducer,
})

export default persistReducer(persistConfig, rootReducer);
