import { takeEvery } from 'redux-saga/effects';
import cartItemsTypes from './cartItems.types';



export function* fetchProductsAsync() {

    yield console.log('HI ROCKER')
}

export function* fetchProductsStart() {
    yield takeEvery(cartItemsTypes.FETCH_PRODUCTS, fetchProductsAsync)
}