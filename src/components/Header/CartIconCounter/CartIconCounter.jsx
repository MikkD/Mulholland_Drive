import React from 'react'
import { Link } from 'react-router-dom';
import './CartIconCounter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
// import { ReactComponent as ShopIcon } from './icon_bag.svg'
import { selectCartItemsNumber } from '../../../redux/cartItems/cartItems.selectors';

const CartIconCounter = ({ cartItemsNumber }) => {
    console.log('~~~~~~~CartIconCounter~~~~~~~~~');
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

const mapStateToProps = state => {
    console.log('!!!!!!mapStateToProps-Cart-Icon-NUMBER WIH SELECT!!!!!!!');
    return {
        cartItemsNumber: selectCartItemsNumber(state)
    }
}

export default connect(mapStateToProps, null)(CartIconCounter)
