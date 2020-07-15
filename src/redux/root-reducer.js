import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartItemsReducer from './cartItems/cartItems.reducer';





export default combineReducers({
    rootUsers: userReducer,
    cartItems: cartItemsReducer,
})