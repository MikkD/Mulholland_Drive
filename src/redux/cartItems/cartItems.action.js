import cartItemsTypes from './cartItems.types';


export const action_newShoppingBagItem = (item) => ({
    type: cartItemsTypes.ADD_ITEM,
    payload: item
})
export const action_removeShoppingBagItem = (id) => ({
    type: cartItemsTypes.REMOVE_ITEM,
    payload: id
})
export const action_updateCartItem = (item) => ({
    type: cartItemsTypes.UPDATE_CART_ITEMS,
    payload: item
})
export const action_deliverTotalSum = (totalSum) => ({
    type: cartItemsTypes.TOTAL_SUM,
    payload: totalSum
})
export const action_deliverItemsChecked = () => ({
    type: cartItemsTypes.ITEMS_CHECKED
})
