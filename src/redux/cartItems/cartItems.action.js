import cartItemsTypes from './cartItems.types';


export const action_newShoppingBagItem = (item) => ({
    type: cartItemsTypes.ADD_ITEM,
    payload: item
})