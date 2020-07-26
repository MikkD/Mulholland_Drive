import React from 'react';
import './Hero.css';
import { connect } from 'react-redux';
import { selectNumberOfCartItems } from './../../redux/cartItems/cartItems.selectors';
import { selectIsCurrentUserLoggedIn } from '../../redux/user/users.selectors';

function Hero() {
    console.log('~~~~~~~~~~~~~~~Hero.jsx~~~~~~~~~~~~~~~')
    return (
        <React.Fragment>
            <div className="hero">
                <div className="hero-title">
                    <h1>Mulholland
                    <span className="line"></span>
                    </h1>
                    <h1>Drive</h1>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    // console.log('???????????????HERO_MAP_STATE_TO_PROPS????????????????')
    return {
        currentUser: selectIsCurrentUserLoggedIn(state),
        cartItemsNumber: selectNumberOfCartItems(state)
        // shoppingBagItems: state.cartItems.shoppingBagItems,
        // currentUser: state.rootUsers.currentUser
    }
}
export default connect(mapStateToProps, null)(Hero);