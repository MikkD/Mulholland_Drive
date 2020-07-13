import React, { useState, useRef, useEffect } from 'react';
import { getProduct } from '../utils';
import { withRouter } from 'react-router-dom';
import './ProductItems.css';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';
import { connect } from 'react-redux';
import { action_newShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_removeShoppingBagItem } from '../../../redux/cartItems/cartItems.action';
import { action_cartItemsNumber } from '../../../redux/cartItems/cartItems.action';


const ProductItems = props => {
    // console.log('props !', props)
    const { newCartItem, removeShoppingBagItem, cartItemsNumber } = props;
    const [items, setItems] = useState(getProduct(props.match.params.product))


    const addToShoppingBag = (e) => {
        const id = e.target.id
        const copy = [...items]

        let newShoppingBagItem = copy.find(item => item.id === id && !item.isAdded);
        if (newShoppingBagItem) {
            const theIndex = copy.findIndex(item => item.id === id);
            newShoppingBagItem = { ...newShoppingBagItem, isAdded: true }
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
                {items.map(item => {
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
                                <p>{item.price}$</p>
                            </div>
                        </div>
                    )
                })}
                <ScrollToTopButton />
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    newCartItem: (newShoppingBagItem) => dispatch(action_newShoppingBagItem(newShoppingBagItem)),
    removeShoppingBagItem: (id) => dispatch(action_removeShoppingBagItem(id)),
    cartItemsNumber: () => dispatch(action_cartItemsNumber())

})

export default connect(null, mapDispatchToProps)(withRouter(ProductItems))



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
