import React, { useState, useEffect } from 'react';
import './ProductItems.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action_newShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_removeShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { filterItemsUtils } from './utils';
import { showAllItemsFilterUtils } from './utils';
import { getProduct } from '../utils';
import { action_fetchProductsAsync } from '../../../redux/products/products.action';
import { selectCartItems } from '../../../redux/cartItems/cartItems.selectors';
import { selectFetchedProducts } from '../../../redux/products/products.selectors';
import { selectIsFetching } from '../../../redux/products/products.selectors';
import { selectIsError } from '../../../redux/products/products.selectors';
import ProductItemsView from './ProductItemsView/ProductItemsView';
import Spinner from '../../Spinner/Spinner';


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
    // console.error('~~~~~~~~~~~~~~~Product Items.jsx~~~~~~~~~~~~~~~')

    useEffect(() => {
        // alert('use effect 3 ');
        if (fireStoreProducts[props.match.params.product] == undefined) {
            dispatch_action_fetchProductsAsync(props.match.params.product)
        }
        const cleanFetchedData = fireStoreProducts[props.match.params.product]
        console.log('cleanFetchedData', cleanFetchedData);
        let newItems = [...cleanFetchedData ? cleanFetchedData : []]
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
    }, [fireStoreProducts, props.match.params.product])

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
    fireStoreProducts: selectFetchedProducts(state),
    fireStoreProductsIsFetching: selectIsFetching(state),
    fireStoreProductsError: selectIsError(state),
    currentShoppingBagItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
    dispatch_action_fetchProductsAsync: (productName) => dispatch(action_fetchProductsAsync(productName)),
    newCartItem: (newShoppingBagItem) => dispatch(action_newShoppingBagItem(newShoppingBagItem)),
    removeShoppingBagItem: (id) => dispatch(action_removeShoppingBagItem(id)),

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductItems))
