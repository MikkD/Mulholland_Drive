import filterItemsType from './filterItems.types';


export const action_filterItemByProduct = () => ({
    type: filterItemsType.FILTER_BY_PRODUCT
});
export const action_filterItemByPriceLowToHigh = () => ({
    type: filterItemsType.FILTER_BY_PRICE_LOW_TO_HIGH
});
export const action_filterItemByPriceHighToLow = () => ({
    type: filterItemsType.FILTER_BY_PRICE_HIGH_TO_LOW
});
