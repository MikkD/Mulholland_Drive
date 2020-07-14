import React from 'react';
import { connect } from 'react-redux';
import './CartHeader.css';

function CartHeader(props) {
    const { currentUser, cartItemsNumber } = props;
    return (
        <React.Fragment>
            <div className="sb-header">
                <div className="sb-upper-header">
                    <div className="flex-grow-1">
                        <h3>Shopping Bag</h3>
                        <span>{cartItemsNumber} items</span>
                    </div>

                    <div className="weclome-message">
                        <h2>Welcome {currentUser ? currentUser.name : ''}</h2>
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