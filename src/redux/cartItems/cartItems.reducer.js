
import cartItemsTypes from './cartItems.types'

const INITIAL_STATE = {
    addedToShoppingBagItems: []
}

const cartItemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartItemsTypes.ADD_ITEM:
            return [...state, action.payload]

    }
}