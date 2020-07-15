
import cartItemsTypes from './cartItems.types'

const INITIAL_STATE = {
    shoppingBagItems: [],
    numberOfCartItems: 0,
    totalSum: 0,
    allProductItems: []
}

const cartItemsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case cartItemsTypes.ALL_PRODUCT_ITEMS:
            return {
                ...state,
                allProductItems: action.payload
            }
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
    }
    return state
}

export default cartItemsReducer