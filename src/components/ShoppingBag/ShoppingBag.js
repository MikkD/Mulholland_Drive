import React, { useState, useEffect } from 'react';
import './ShoppingBag.css';
import { connect } from 'react-redux';
import { action_removeShoppingBagItem } from '../../redux/cartItems/cartItems.action';
import { action_cartItemsNumber } from '../../redux/cartItems/cartItems.action';
import { action_updateCartItem } from '../../redux/cartItems/cartItems.action';
import CartHeader from './CartHeader/CartHeader';
import CartFooter from './CartFooter/CartFooter';

const ShoppingBag = (props) => {
    const { shoppingBagItems, removeShoppingBagItem, cartItemsNumber, updateCartItem } = props;



    useEffect(() => {
        if (shoppingBagItems) {
            console.log('shoppingBagItems regular', shoppingBagItems)
            // shoppingBagItems.map(el => console.log(' el.totalPerItem', el.totalPerItem))
            let copy = [...shoppingBagItems]
            copy.reduce((a, c) => a + c.totalPerItem, 0)
            console.log('shoppingBagItems', copy)
            // let subTotal = shoppingBagItems.map(item => item.totalPerItem.reduce((a, b) => a + b))
            // console.log('subTotal', subTotal)
        }


    }, [shoppingBagItems])

    const removeFromShoppingBag = (e) => {
        const id = e.target.id
        const copy = [...shoppingBagItems]
        const newItems = copy.filter(item => item.id !== id)
        removeShoppingBagItem(id)
        cartItemsNumber()
    }

    const addOneMoreItem = (event) => {
        const copy = [...shoppingBagItems]
        const clickedId = event.target.id
        const updatedItems = copy.map(item => item.id === clickedId ? {
            ...item,
            price: parseInt(item.price),
            quantity: item.quantity + 1,
            totalPerItem: parseInt(item.price) * (item.quantity + 1)
        } : item)
        updateCartItem(updatedItems)
    }

    const substractItem = (event) => {
        let copy = [...shoppingBagItems]
        const clickedId = event.target.id
        const updatedItems = copy.map(item => item.id === clickedId ? {
            ...item,
            price: parseInt(item.price),
            quantity: item.quantity - 1,
            totalPerItem: parseInt(item.price) * (item.quantity - 1)
        } : item)
        updateCartItem(updatedItems)
    }





    return (
        <React.Fragment>
            <div className="sb-container">
                <CartHeader />
                {/* sb-body */}
                {shoppingBagItems.map(item => {
                    return (
                        <React.Fragment>
                            <div id={item.id} className="sb-body">
                                <div className="sb-item flex-grow-1">
                                    <img src={item.image}
                                        className="sb-image" alt="item1"
                                        style={{ width: '130px', height: '130px' }}
                                    />
                                    <div className="sb-item-desctiption">
                                        <p>{item.name}</p>
                                        <p>{item.description}</p>
                                        <a id={item.id}
                                            onClick={removeFromShoppingBag}
                                            className="remove-item-button underline">remove</a>
                                    </div>
                                </div>
                                <div className="shrink quantity-edit">
                                    <span>{item.totalPerItem ? item.totalPerItem : item.price}$</span>
                                    <span>
                                        <button
                                            disabled={item.quantity === 1 ? true : false}
                                            id={item.id}
                                            onClick={substractItem}
                                            className="sb-button substract-item">-</button>
                                        <span>{item.quantity}</span>
                                        <button
                                            id={item.id}
                                            onClick={addOneMoreItem}
                                            className="sb-button add-item">+</button>
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
                <CartFooter />
            </div>
        </React.Fragment >
    )
}


const mapStateToProps = state => ({
    shoppingBagItems: state.cartItems.shoppingBagItems,
    currentUser: state.rootUsers.currentUser
})
const mapDispatchToProps = dispatch => ({
    // newCartItem: (newShoppingBagItem) => dispatch(action_newShoppingBagItem(newShoppingBagItem)),
    removeShoppingBagItem: (id) => dispatch(action_removeShoppingBagItem(id)),
    cartItemsNumber: () => dispatch(action_cartItemsNumber()),
    updateCartItem: (updatedItem) => dispatch(action_updateCartItem(updatedItem))

})


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag)
