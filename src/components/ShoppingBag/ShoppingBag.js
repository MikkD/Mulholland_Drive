import React, { Component } from 'react';
import './ShoppingBag.css';
import Header from '../Header/Header';

export class ShoppingBag extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="sb-container">
                    {/*  */}
                    <div className="sb-header">
                        <div className="sb-upper-header flex-grow-1">
                            <h3>Shopping Bag</h3>
                            <span>2items</span>
                        </div>
                        <div className="sb-header-description">
                            <p className="flex-grow-1">Item</p>
                            <div className="shrink">
                                <span>Price</span>
                                <span>Quantity</span>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="sb-body">
                        <div className="sb-item flex-grow-1">
                            <img className="sb-image" style={{ width: '100px', height: '100px' }}
                                src={require('./bag.png')} />
                            <div className="sb-item-desctiption">
                                <p>Item name</p>
                                <p>Description</p>
                                <a className="remove-item-button">remove</a>
                            </div>
                        </div>

                        <div className="shrink quantity-edit">
                            <span>105$</span>
                            <span>
                                <button className="sb-button substract-item">-</button>
                                <span>1</span>
                                <button className="sb-button add-item">+</button>
                            </span>
                        </div>
                    </div>
                    {/*  */}
                    <div className="sb-item sb-footer">
                        <div className="subtotal flex-grow-1 "><h3>Your subtotal is : 500$</h3></div>
                        <div className="shrink">
                            <a className="checkout-button">Check Out</a>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default ShoppingBag
