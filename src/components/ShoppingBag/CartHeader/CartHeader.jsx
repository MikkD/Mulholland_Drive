import React from 'react';
import { connect } from 'react-redux';
import './CartHeader.css';

function CartHeader(props) {
    const { currentUser, cartItemsNumber } = props;
    console.log('========>Shopping Bag Header <============')
    return (
        <React.Fragment>
            <div className="sb-header">
                <div className="sb-upper-header">
                    <div className="flex-grow-1">
                        <h2>Welcome {currentUser ? currentUser.name : ''}</h2>
                    </div>

                    <div className="welcome-message shrink">
                        {cartItemsNumber ?
                            <React.Fragment>
                                <h4>Shopping Bag</h4>
                                <span>{cartItemsNumber} items</span>
                            </React.Fragment>
                            : <h4>Your Shopping Bag is Empty</h4>}

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
        </React.Fragment>
    )
}
const mapStateToProps = state => ({
    currentUser: state.rootUsers.currentUser,
    cartItemsNumber: state.cartItems.numberOfCartItems
})

export default connect(mapStateToProps, null)(CartHeader)