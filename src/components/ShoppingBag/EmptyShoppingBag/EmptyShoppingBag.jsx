import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyShoppingBag.scss';

const EmptyShoppingBag = () => {
    return (
        <React.Fragment>
            <div className="empty-sb-wrapper">
                <div className="sb-empty-heading">Shopping Bag</div>
                <p>Mulholland Drive</p>
                <h5>Your cart is currently empty</h5>
                <Link to={{ pathname: "/" }} className="submit-form-button">Continue Shopping</Link>

            </div>
        </React.Fragment>
    )
}


export default EmptyShoppingBag