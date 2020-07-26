import { createSelector } from 'reselect';




//inputSelector
const selectCartItems = state => state.cartItems;



export const selectNumberOfCartItems = createSelector(
    [selectCartItems], cartItems => cartItems.numberOfCartItems)


