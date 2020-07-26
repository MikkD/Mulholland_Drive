import getProductsTypes from './products.types.js';
import { firestore } from '../../firebase/firebse.utils';



export const action_fetchProductsStart = () => ({
    type: getProductsTypes.FETCH_PRODUCTS_START,
})
export const action_fetchProductsSuccess = () => ({
    type: getProductsTypes.FETCH_PRODUCTS_START,
})
export const action_fetchProductsFailure = () => ({
    type: getProductsTypes.FETCH_PRODUCTS_FAILURE,
})

export const action_fetchProductsAsync = (productName) => {
    return dispatch => {
        let itemsFromFireStore = [];
        const fetchProducts = firestore.collection(`${productName}`)
        dispatch(action_fetchProductsStart())
        fetchProducts.get().then((snapshot) => snapshot.docs.forEach(item => itemsFromFireStore.push(item.data())))
            .catch(err => dispatch(action_fetchProductsFailure(err.message)))
        dispatch(action_fetchProductsSuccess(itemsFromFireStore))
    }
}


// export const action_updateCartItem = (item) => ({
//     type: cartItemsTypes.UPDATE_CART_ITEMS,
//     payload: item
// })
// export const action_deliverTotalSum = (totalSum) => ({
//     type: cartItemsTypes.TOTAL_SUM,
//     payload: totalSum
// })
