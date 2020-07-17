import React, { useState, useRef, useEffect } from 'react';
import { getProduct } from '../utils';
import { withRouter } from 'react-router-dom';
import './ProductItems.css';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';
import { connect } from 'react-redux';
import { action_newShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_removeShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_cartItemsNumber } from '../../../redux/cartItems/cartItems.action';
import Spinner from '../../Spinner/Spinner';
import addProductsToFirestore from '../../../firebase/firebse.utils';
import firebase from 'firebase/app';
import 'firebase/firestore';
export const firestore = firebase.firestore();


const ProductItems = props => {
    const { newCartItem, removeShoppingBagItem, cartItemsNumber, clickedPageNumber, showAllItemsFilter, currentShoppingBagItems } = props;
    const { filterItemByProduct, filterItemByPriceLowToHigh, filterItemByPriceHighToLow } = props.filterTypes;
    const [items, setItems] = useState([])
    const [totalNumberOfItems, setTotalNumberOfItems] = useState(0)
    const [loading, setLoading] = useState(true)

    const totalItemsPerPage = 5;
    let totalNumberOfPages = Math.round(totalNumberOfItems / totalItemsPerPage);
    let lastItemInRange = clickedPageNumber * totalItemsPerPage
    let firstItemInRange = lastItemInRange - totalItemsPerPage
    props.handleTotalNumberOfPages(totalNumberOfPages)

    // const getDataFromFirebase = async (params) => {
    //     const theProductsFromFirebase = []
    //     await firestore.collection(`${params}`)
    //         .get().then((snapshot) => snapshot.docs.forEach(item => theProductsFromFirebase.push(item.data())))
    //     return theProductsFromFirebase
    // }





    // NOW WORKING ***********************// NOW WORKING ***********************// NOW WORKING ***********************
    // Doesn't set the state 
    useEffect(() => {
        let theNewItems = getProduct(props.match.params.product)
        console.log('newItems', theNewItems)
        if (theNewItems.length > 0) {
            setItems(theNewItems)
            setTotalNumberOfItems(theNewItems.length)
            setLoading(false)
        }
    }, [props.match.params.product])

    useEffect(() => {
        // setTimeout(() => {
        // let newItems = getProduct(props.match.params.product)
        let newItems = [...items]
        if (currentShoppingBagItems.length > 0) {
            for (let i = 0; i < newItems.length; i++) {
                for (let j = 0; j < currentShoppingBagItems.length; j++) {
                    if (currentShoppingBagItems[j].id === newItems[i].id) {
                        newItems[i] = {
                            ...newItems[i],
                            isAdded: true
                        }
                    }
                }
            }
        }
        showAllItemsFilter ? setItems(newItems) : setItems(newItems.slice(firstItemInRange, lastItemInRange))
        setTotalNumberOfItems(newItems.length)
        setLoading(false)
        // }, 1000);

    }, [clickedPageNumber, showAllItemsFilter])


    // Filter
    useEffect(() => {
        const { filterItemByProduct, filterItemByPriceLowToHigh, filterItemByPriceHighToLow } = props.filterTypes
        if (filterItemByProduct) {
            setItems((prevState) => [...prevState.sort((a, b) => a.name > b.name ? 1 : -1)])
        } else if (filterItemByPriceLowToHigh) {
            setItems((prevState) => [...prevState.sort((a, b) => parseInt(a.price) > parseInt(b.price) ? 1 : -1)])
        } else if (filterItemByPriceHighToLow) {
            setItems((prevState) => [...prevState.sort((a, b) => parseInt(a.price) < parseInt(b.price) ? 1 : -1)])
        }

    }, [filterItemByProduct, filterItemByPriceLowToHigh, filterItemByPriceHighToLow])

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
            cartItemsNumber()
        } else {
            const theIndex = copy.findIndex(item => item.id === id);
            let itemToRemove = copy.find(item => item.id === id)
            itemToRemove.isAdded = !itemToRemove.isAdded
            copy.splice(theIndex, 1, itemToRemove)
            setItems(copy)
            removeShoppingBagItem(id)
            cartItemsNumber()
        }
    }

    return (
        <React.Fragment>
            {loading ? <h1><Spinner /></h1> :
                <div className="product-items-wrapper">
                    {items.length >= 0 ?
                        items.map(item => {
                            return (
                                <div id={item.id} key={item.id} className="product-item-tile">
                                    <div className="product-item-link-wrapper" >
                                        <img src={item.image} alt="product" />
                                        <button
                                            id={item.id}
                                            onClick={addToShoppingBag}
                                            className="regular-button">
                                            {item.isAdded ? 'Remove from cart' : 'Add to cart'}
                                        </button>
                                    </div>
                                    <div className="product-item-tile-description">
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                        <p>{parseInt(item.price)}$</p>
                                    </div>
                                </div>
                            )
                        }) : null}
                    < ScrollToTopButton />
                </div>
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    currentShoppingBagItems: state.cartItems.shoppingBagItems,
})


const mapDispatchToProps = dispatch => ({
    newCartItem: (newShoppingBagItem) => dispatch(action_newShoppingBagItem(newShoppingBagItem)),
    removeShoppingBagItem: (id) => dispatch(action_removeShoppingBagItem(id)),
    cartItemsNumber: () => dispatch(action_cartItemsNumber()),

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductItems))
