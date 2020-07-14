import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartItemsReducer from './cartItems/cartItems.reducer';
import filterItemsReducer from './filterItems/filterItems.reducer';
import paginationReducer from './pagination/pagination.reducer';





export default combineReducers({
    rootUsers: userReducer,
    cartItems: cartItemsReducer,
    filterItems: filterItemsReducer,
    pagination: paginationReducer
})