import React, { useState, useEffect } from 'react';
import './ProductItems.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action_newShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_removeShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_cartItemsNumber } from '../../../redux/cartItems/cartItems.action';
import { firestore } from '../../../firebase/firebse.utils';
import { filterItemsUtils } from './utils';
import { showAllItemsFilterUtils } from './utils';
import Spinner from '../../Spinner/Spinner';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';
import { getProduct } from '../utils';
import uuid from 'react-uuid'


const ProductItems = props => {
    const { newCartItem, removeShoppingBagItem, cartItemsNumber,
        clickedPageNumber, showAllItemsFilter, currentShoppingBagItems, filterTypes } = props;
    const [items, setItems] = useState([])
    const [totalNumberOfItems, setTotalNumberOfItems] = useState(0)
    const [loading, setLoading] = useState(true)
    const totalItemsPerPage = 5;
    let totalNumberOfPages = Math.round(totalNumberOfItems / totalItemsPerPage);
    let lastItemInRange = clickedPageNumber * totalItemsPerPage
    let firstItemInRange = lastItemInRange - totalItemsPerPage
    // props.handleTotalNumberOfPages(totalNumberOfPages)
    console.log('========>Product Items<============')

    useEffect(() => {
        const getDataFromFirebase = async () => {
            const itemsFromFireStore = []
            await firestore.collection(`${props.match.params.product}`)
                .get().then((snapshot) => snapshot.docs.forEach(item => itemsFromFireStore.push(item.data())))
            if (itemsFromFireStore.length > 0) {
                let newItems = [...itemsFromFireStore]
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
                setItems(newItems)
                setTotalNumberOfItems(newItems.length)
                setLoading(false)
            }
        }
        getDataFromFirebase()

    }, [props.match.params.product])

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


    const itemsPerPage = showAllItemsFilterUtils(items, showAllItemsFilter, firstItemInRange, lastItemInRange)
    const filteredItems = filterItemsUtils(itemsPerPage, filterTypes)
    return (
        <React.Fragment>
            {loading ? <h1><Spinner /></h1> :
                <div className="product-items-wrapper">
                    {filteredItems.length >= 0 ?
                        filteredItems.map(item => {
                            return (
                                <div id={item.id} key={item.id} className="product-item-tile">
                                    <div className="product-item-link-wrapper" >
                                        <img src={item.image} alt="product" />
                                        <button
                                            id={item.id}
                                            onClick={addToShoppingBag}
                                            className={item.isAdded ? "regular-button added" : "regular-button"}>
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
