import React, { useState, useRef, useEffect, useMemo } from 'react';
import { getProduct } from '../utils';
import { withRouter } from 'react-router-dom';
import './ProductItems.css';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';
import { connect } from 'react-redux';
import { action_newShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_removeShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_cartItemsNumber } from '../../../redux/cartItems/cartItems.action';
import { action_deliverAllProductItems } from '../../../redux/cartItems/cartItems.action';


const ProductItems = props => {
    const { allProducts, deliverAllProductItems, newCartItem, removeShoppingBagItem, cartItemsNumber, clickedPageNumber, showAllItemsFilter, currentShoppingBagItems } = props;
    const { filterItemByProduct, filterItemByPriceLowToHigh, filterItemByPriceHighToLow } = props.filterTypes;

    const [items, setItems] = useState([])
    const [totalNumberOfItems, setTotalNumberOfItems] = useState(0)
    // Pagination Redux
    let clickedNumber = clickedPageNumber ? clickedPageNumber : 1;
    const totalItemsPerPage = 5
    let totalNumberOfPages = Math.round(totalNumberOfItems / totalItemsPerPage);
    let lastItemInRange = clickedNumber * totalItemsPerPage
    let firstItemInRange = lastItemInRange - totalItemsPerPage
    if (allProducts.length > 0) {
        props.handleTotalNumberOfPages(totalNumberOfPages)
    }


    useEffect(() => {
        console.log('useEffect called')
        let theItems = getProduct(props.match.params.product)
        let newItems = theItems.map(item => ({ ...item, isAdded: false }))
        console.log('theItems', theItems)
        // Отправили в Редакс
        deliverAllProductItems(newItems)
        setItems(newItems)
        setTotalNumberOfItems(newItems.length)


    }, [])


    useEffect(() => {
        setTimeout(() => {
            if (showAllItemsFilter != true) {
                const slicedProducts = items.slice(firstItemInRange, lastItemInRange)
                setItems(slicedProducts)
            } else {
                let a = getProduct(props.match.params.product)
                setItems(a)
            }
        }, 1000);

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
        // const copy = [...allProducts]
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
            deliverAllProductItems(copy)
            newCartItem(newShoppingBagItem)
            cartItemsNumber()
        } else {
            const theIndex = copy.findIndex(item => item.id === id);
            let itemToRemove = copy.find(item => item.id === id)
            itemToRemove.isAdded = !itemToRemove.isAdded
            copy.splice(theIndex, 1, itemToRemove)
            deliverAllProductItems(copy)
            removeShoppingBagItem(id)
            cartItemsNumber()
        }
    }

    return (

        <React.Fragment>
            {console.log('items', items)}
            <div className="product-items-wrapper">
                {items.length >= 0 ?
                    items.map((item, index) => {
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

        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    currentShoppingBagItems: state.cartItems.shoppingBagItems,
    allProducts: state.cartItems.allProductItems
})


const mapDispatchToProps = dispatch => ({
    newCartItem: (newShoppingBagItem) => dispatch(action_newShoppingBagItem(newShoppingBagItem)),
    removeShoppingBagItem: (id) => dispatch(action_removeShoppingBagItem(id)),
    cartItemsNumber: () => dispatch(action_cartItemsNumber()),
    deliverAllProductItems: (allItems) => dispatch(action_deliverAllProductItems(allItems))

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
