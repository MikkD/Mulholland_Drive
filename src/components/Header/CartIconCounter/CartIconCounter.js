import React from 'react'
import { Link } from 'react-router-dom';
import './CartIconCounter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

function CartIconCounter({ cartItemsNumber }) {
    return (
        <React.Fragment>
            <Link to={{ pathname: '/ShoppingBag' }} >
                <div className="shopping-bag-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="the-counter">{cartItemsNumber}</span>
                </div>
            </Link>
        </React.Fragment>
    )
}

const mapStateToProps = (props) => ({
    cartItemsNumber: props.cartItems.numberOfCartItems
})

export default connect(mapStateToProps, null)(CartIconCounter)
