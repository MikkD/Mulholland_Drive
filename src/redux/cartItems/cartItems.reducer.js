
import cartItemsTypes from './cartItems.types';

const INITIAL_STATE = {
    shoppingBagItems: [],
    numberOfCartItems: 0,
    totalSum: 0
}

const cartItemsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case cartItemsTypes.ADD_ITEM:
            return {
                ...state,
                shoppingBagItems: [...state.shoppingBagItems, action.payload]
            }
        case cartItemsTypes.REMOVE_ITEM:
            return {
                ...state,
                shoppingBagItems: [...state.shoppingBagItems.filter(item => item.id !== action.payload)]
            }
        case cartItemsTypes.CART_ITEMS_NUMBER:
            return {
                ...state,
                numberOfCartItems: state.shoppingBagItems.length
            }
        case cartItemsTypes.UPDATE_CART_ITEMS:
            return {
                ...state,
                shoppingBagItems: action.payload
            }
        case cartItemsTypes.TOTAL_SUM:
            return {
                ...state,
                totalSum: action.payload
            }
        case cartItemsTypes.ITEMS_CHECKED:
            return {
                ...state,
                shoppingBagItems: [],
                numberOfCartItems: 0,
                totalSum: 0
            }
    }
    return state
}

export default cartItemsReducer