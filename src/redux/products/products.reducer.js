
import getProductsTypes from './products.types';

const INITIAL_STATE = {
    products: [],
    isFetching: false,
    errorMessage: ''
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case getProductsTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                isFetching: true
            }
        case getProductsTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                shoppingBagItems: action.payload
            }
        case getProductsTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
    }
    return state
}

export default productsReducer