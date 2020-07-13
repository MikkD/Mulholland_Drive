import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartItemsReducer from './cartItems/cartItems.reducer';
import filterItemsReducer from './filterItems/filterItems.reducer';






export default combineReducers({
    rootUsers: userReducer,
    cartItems: cartItemsReducer,
    filterItems: filterItemsReducer
})