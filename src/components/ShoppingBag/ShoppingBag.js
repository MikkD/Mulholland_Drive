import React, { Component } from 'react';
import './ShoppingBag.css';
import { getProduct } from '../ProductTemplate/utils';
import { connect } from 'react-redux';

export class ShoppingBag extends Component {

    render() {
        console.log('this.props SB', this.props)
        console.log('this.state SB', this.state)

        const { shoppingBagItems } = this.props;

        return (
            <React.Fragment>
                {/* <Header /> */}
                <div className="sb-container">
                    {/* sb-header */}
                    <div className="sb-header">
                        <div className="sb-upper-header">
                            <div className="flex-grow-1">
                                <h3>Shopping Bag</h3>
                                <span>2items</span>
                            </div>

                            <div className="weclome-message">
                                <h2>Welcome {this.props.currentUser ? this.props.currentUser.name : ''}</h2>
                            </div>
                        </div>

                        <div className="sb-header-description">
                            <p className="flex-grow-1">Item</p>
                            <div className="shrink">
                                <span>Price</span>
                                <span>Quantity</span>
                            </div>
                        </div>
                    </div>
                    {/* sb-body */}

                    {shoppingBagItems.map(item => {
                        return (
                            <div id={item.id} className="sb-body">
                                <div className="sb-item flex-grow-1">
                                    <img src={item.image}
                                        className="sb-image" alt="item1"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <div className="sb-item-desctiption">
                                        <p>{item.name}</p>
                                        <p>{item.description}</p>
                                        <p className="remove-item-button underline">remove</p>
                                    </div>
                                </div>
                                <div className="shrink quantity-edit">
                                    <span>{item.price}$</span>
                                    <span>
                                        <button className="sb-button substract-item">-</button>
                                        <span>1</span>
                                        <button className="sb-button add-item">+</button>
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                    {/* sb-footer */}
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


const mapStateToProps = state => ({
    shoppingBagItems: state.cartItems.shoppingBagItems
})

export default connect(mapStateToProps, null)(ShoppingBag)
