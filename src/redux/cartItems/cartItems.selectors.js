import { createSelector } from 'reselect';




//inputSelector / Just returns the slice of the state 
const selectCart = state => state.cartItems;

export const selectCartItems = createSelector(
    [selectCart],
    cartItems => cartItems.shoppingBagItems
);

export const selectCartItemsNumber = createSelector(
    [selectCart],
    cartItems => cartItems.shoppingBagItems.reduce(
        (acc, currentQuantityOfItems) => acc + currentQuantityOfItems.quantity, 0)
);

export const selectTotal = createSelector(
    [selectCart],
    cartItems => cartItems.shoppingBagItems.reduce(
        (acc, currentCartItem) => acc + currentCartItem.totalPerItem, 0)
);

