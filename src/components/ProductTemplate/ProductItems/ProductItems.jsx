import React, { useState, useEffect, useRef } from 'react';
import './ProductItems.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action_newShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_removeShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
// import { action_cartItemsNumber } from '../../../redux/cartItems/cartItems.action';
// import { firestore } from '../../../firebase/firebse.utils';
import { filterItemsUtils } from './utils';
import { showAllItemsFilterUtils } from './utils';
import Spinner from '../../Spinner/Spinner';
// import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';
import { getProduct } from '../utils';
import { action_fetchProductsAsync } from '../../../redux/products/products.action';
import ProductItemsView from './ProductItemsView/ProductItemsView';


const ProductItems = props => {
    const { newCartItem, removeShoppingBagItem,
        clickedPageNumber, showAllItemsFilter, currentShoppingBagItems, filterTypes,
        fireStoreProductsIsFetching, fireStoreProductsError, fireStoreProducts, dispatch_action_fetchProductsAsync } = props;
    const [items, setItems] = useState([])
    const [totalNumberOfItems, setTotalNumberOfItems] = useState(0)
    const totalItemsPerPage = 6;
    let totalNumberOfPages = Math.round(totalNumberOfItems / totalItemsPerPage);
    let lastItemInRange = clickedPageNumber * totalItemsPerPage
    let firstItemInRange = lastItemInRange - totalItemsPerPage
    console.log('~~~~~~~~~~~~~~~Product Items.jsx~~~~~~~~~~~~~~~')


    useEffect(() => {
        dispatch_action_fetchProductsAsync(props.match.params.product)
    }, [props.match.params.product])

    useEffect(() => {
        const cleanFetcheddata = fireStoreProducts[props.match.params.product]
        let newItems = [...cleanFetcheddata ? cleanFetcheddata : []]
        if (currentShoppingBagItems.length > 0) {
            for (let i = 0; i < newItems.length; i++) {
                for (let j = 0; j < currentShoppingBagItems.length; j++) {
                    if (currentShoppingBagItems[j].id === newItems[i].id) {
                        newItems[i] = {
                            ...newItems[i],
                            isAdded: true,
                        }
                    }
                }
            }
        }
        setItems(newItems)
        setTotalNumberOfItems(newItems.length)
    }, [fireStoreProducts])



    useEffect(() => {
        props.handleTotalNumberOfPages(totalNumberOfPages)
    }, [totalNumberOfPages])


    const addToShoppingBag = (e) => {
        const id = e.target.id
        const copy = [...items]
        let newShoppingBagItem = copy.find(item => item.id === id && !item.isAdded);
        if (newShoppingBagItem) {
            const theIndex = copy.findIndex(item => item.id === id);
            newShoppingBagItem = {
                ...newShoppingBagItem,
                isAdded: true,
                quantity: 1,
                totalPerItem: parseInt(newShoppingBagItem.price)
            }
            copy.splice(theIndex, 1, newShoppingBagItem)
            setItems(copy)
            newCartItem(newShoppingBagItem)
        } else {
            const theIndex = copy.findIndex(item => item.id === id);
            let itemToRemove = copy.find(item => item.id === id)
            itemToRemove.isAdded = !itemToRemove.isAdded
            copy.splice(theIndex, 1, itemToRemove)
            setItems(copy)
            removeShoppingBagItem(id)
        }
    }

    const itemsPerPage = showAllItemsFilterUtils(items, showAllItemsFilter, firstItemInRange, lastItemInRange)
    const filteredItems = filterItemsUtils(itemsPerPage, filterTypes)

    return (
        <React.Fragment>
            {fireStoreProductsIsFetching ? <h1><Spinner /></h1> :
                <div className="product-items-wrapper">
                    {filteredItems.length >= 0 ?
                        filteredItems.map(item => <ProductItemsView key={item.id} item={item} addToShoppingBag={addToShoppingBag} />)
                        : null}
                </div>
            }
        </React.Fragment >
    )
}

const mapStateToProps = state => ({
    fireStoreProducts: state.products.storedProducts,
    fireStoreProductsIsFetching: state.products.isFetching,
    fireStoreProductsError: state.products.errorMessage,
    currentShoppingBagItems: state.cartItems.shoppingBagItems
})

const mapDispatchToProps = dispatch => ({
    dispatch_action_fetchProductsAsync: (productName) => dispatch(action_fetchProductsAsync(productName)),
    newCartItem: (newShoppingBagItem) => dispatch(action_newShoppingBagItem(newShoppingBagItem)),
    removeShoppingBagItem: (id) => dispatch(action_removeShoppingBagItem(id)),

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductItems))
