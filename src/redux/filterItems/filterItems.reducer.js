import filterItemsType from './filterItems.types';

const INITIAL_STATE = {
    filterByProduct: false,
    filterByPriceLowToHigh: false,
    filterByPriceHighToLow: false,
}

const filterItemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case filterItemsType.FILTER_BY_PRODUCT:
            return {
                ...state,
                filterByProduct: true,
                filterByPriceLowToHigh: false,
                filterByPriceHighToLow: false
            }
        case filterItemsType.FILTER_BY_PRICE_LOW_TO_HIGH:
            return {
                ...state,
                filterByPriceLowToHigh: true,
                filterByProduct: false,
                filterByPriceHighToLow: false
            }
        case filterItemsType.FILTER_BY_PRICE_HIGH_TO_LOW:
            return {
                ...state,
                filterByPriceHighToLow: true,
                filterByProduct: false,
                filterByPriceLowToHigh: false
            }
    }
    return state
}

export default filterItemsReducer;