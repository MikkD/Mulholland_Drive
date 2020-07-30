import { createSelector } from 'reselect';

const selectProducts = state => state.products;

export const selectFetchedProducts = createSelector(
    [selectProducts],
    products => products.storedProducts
)
export const selectIsFetching = createSelector(
    [selectProducts],
    products => products.isFetching
)
export const selectIsError = createSelector(
    [selectProducts],
    products => products.errorMessage
)