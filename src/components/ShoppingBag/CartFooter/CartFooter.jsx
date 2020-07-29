import React from 'react';
import './CartFooter.css';
import { connect } from 'react-redux';
import { selectTotal } from '../../../redux/cartItems/cartItems.selectors';
import StripeButton from '../../StripeButton';

function CartFooter({ totalShoppingBagSum }) {
    // console.log('~~~~~~~~~~~~~~~ShoppingBag Footer.jsx~~~~~~~~~~~~~~~')
    return (
        < React.Fragment >
            <div className="sb-item sb-footer">
                <div className="subtotal flex-grow-1 "><h3>Your total is : {totalShoppingBagSum}$</h3></div>
                <div className="shrink">
                    <StripeButton totalShoppingBagSum={totalShoppingBagSum} />
                </div>
            </div>
        </React.Fragment >
    )
}

const mapStateToProps = state => ({
    totalShoppingBagSum: selectTotal(state)
})

export default connect(mapStateToProps, null)(CartFooter)