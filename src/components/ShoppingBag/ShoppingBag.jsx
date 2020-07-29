import React, { useState, useEffect } from 'react';
import './ShoppingBag.scss';
import { connect } from 'react-redux';
import { action_removeShoppingBagItem } from '../../redux/cartItems/cartItems.action';
import { action_updateCartItem } from '../../redux/cartItems/cartItems.action';
import CartHeader from './CartHeader/CartHeader';
import CartFooter from './CartFooter/CartFooter';
import EmptyShoppingBag from './EmptyShoppingBag/EmptyShoppingBag';

const ShoppingBag = ({ shoppingBagItems, removeShoppingBagItem, updateCartItem }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const removeFromShoppingBag = (e) => {
        const id = e.target.id
        const copy = [...shoppingBagItems]
        const newItems = copy.filter(item => item.id !== id)
        removeShoppingBagItem(id)
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

    console.log('~~~~~~~~~~~~~~~ShoppingBag.jsx~~~~~~~~~~~~~~~')

    return (
        <React.Fragment>
            {shoppingBagItems.length > 0 ?
                <div className="sb-container">
                    <CartHeader />
                    {/* sb-body */}
                    {shoppingBagItems.map(item => {
                        return (
                            <React.Fragment key={item.id}>
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
                </div> : <EmptyShoppingBag />}
        </React.Fragment >
    )
}


const mapStateToProps = state => {
    console.log('!!!!!!!!!mapStateToProps Shopping Bag!!!!!!!!!')
    return {
        shoppingBagItems: state.cartItems.shoppingBagItems,
    }
}
const mapDispatchToProps = dispatch => ({
    removeShoppingBagItem: (id) => dispatch(action_removeShoppingBagItem(id)),
    updateCartItem: (updatedItem) => dispatch(action_updateCartItem(updatedItem))

})


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag)
