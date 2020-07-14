
import cartItemsTypes from './cartItems.types'

const INITIAL_STATE = {
    shoppingBagItems: [],
    numberOfCartItems: 0
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
    }
    return state
}

export default cartItemsReducer