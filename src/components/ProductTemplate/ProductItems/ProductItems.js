import React, { useState, useRef, useEffect, useMemo } from 'react';
import { getProduct } from '../utils';
import { withRouter } from 'react-router-dom';
import './ProductItems.css';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';
import { connect } from 'react-redux';
import { action_newShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_removeShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_cartItemsNumber } from '../../../redux/cartItems/cartItems.action';
import { action_pagination_number } from '../../../redux/pagination/pagination.action';
import { action_pagination_total_items_per_page } from '../../../redux/pagination/pagination.action';
import { action_pagination_total_number_of_pages } from '../../../redux/pagination/pagination.action';


const ProductItems = props => {
    const { newCartItem, removeShoppingBagItem,
        cartItemsNumber, filterItemByProduct,
        filterItemByPriceLowToHigh, filterItemByPriceHighToLow,
        dispatchPaginationNumber, dispatchTotalItemsPerPage, dispatchTotalNumberOfPages,
        clickedPaginationNumberFromRedux, showAllItems } = props;

    const [items, setItems] = useState([])
    const [totalNumberOfItems, setTotalNumberOfItems] = useState()
    // Pagination Redux
    let clickedPaginationNumber = clickedPaginationNumberFromRedux;
    const totalItemsPerPage = 5
    let totalNumberOfPages = Math.round(totalNumberOfItems / totalItemsPerPage);
    let lastItemInRange = clickedPaginationNumber * totalItemsPerPage
    let firstItemInRange = lastItemInRange - totalItemsPerPage
    if (items.length > 0) {
        dispatchPaginationNumber(clickedPaginationNumber)
        dispatchTotalItemsPerPage(totalItemsPerPage)
        dispatchTotalNumberOfPages(totalNumberOfPages)
    }

    useEffect(() => {
        setTimeout(() => {
            let theItems = getProduct(props.match.params.product)
            setTotalNumberOfItems(theItems.length)
            if (showAllItems == true) {
                setItems(theItems)
            } else {
                const slicedItems = theItems.slice(firstItemInRange, lastItemInRange)
                setItems(slicedItems)
            }
        }, 1000);

    }, [clickedPaginationNumber, showAllItems])

    useEffect(() => {
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
            newShoppingBagItem = { ...newShoppingBagItem, isAdded: true, quantity: 1 }
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
            <div className="product-items-wrapper">
                {!items ? <div className="LOADER">LOADING</div> :
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
                    })}
                <ScrollToTopButton />
            </div>

        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    addedButtonsToCart: state.cartItems.shoppingBagItems,
    filterItemByProduct: state.filterItems.filterByProduct,
    filterItemByPriceLowToHigh: state.filterItems.filterByPriceLowToHigh,
    filterItemByPriceHighToLow: state.filterItems.filterByPriceHighToLow,
    clickedPaginationNumberFromRedux: state.pagination.clickedPaginationNumber,
    showAllItems: state.pagination.showAllItems,
})


const mapDispatchToProps = dispatch => ({
    newCartItem: (newShoppingBagItem) => dispatch(action_newShoppingBagItem(newShoppingBagItem)),
    removeShoppingBagItem: (id) => dispatch(action_removeShoppingBagItem(id)),
    cartItemsNumber: () => dispatch(action_cartItemsNumber()),
    dispatchPaginationNumber: (clickedPaginationNumber) => dispatch(action_pagination_number(clickedPaginationNumber)),
    dispatchTotalItemsPerPage: (totalItemsPerPage) => dispatch(action_pagination_total_items_per_page(totalItemsPerPage)),
    dispatchTotalNumberOfPages: (totalNumberOfPages) => dispatch(action_pagination_total_number_of_pages(totalNumberOfPages))

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductItems))



// // ЧТО ЗА ХУЙНЯ??????
// const addToShoppingBag = (e) => {
//     const id = e.target.id
//     let copy = [...items]
//     setItems(copy)
//     // console.log('copy before ', copy)
//     let newShoppingBagItem = items.find(item => item.id === id);
//     let theIndex = items.findIndex(item => item.id === id);
//     // console.log('theIndex is ', theIndex)
//     newShoppingBagItem = { ...newShoppingBagItem, isAdded: true }
//     copy = copy.splice(theIndex, 1, newShoppingBagItem)
//     // console.log('copy after ', copy)
//     // setShoppingBagItem((prevState) => [...prevState, newShoppingBagItem])
//     // newCartItem(newShoppingBagItem)
//     newCartItem(items)
// }

// useEffect(() => {
//     console.log('items', items)
// }, [items])
