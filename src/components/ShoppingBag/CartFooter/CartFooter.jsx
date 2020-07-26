import React, { useState, useEffect } from 'react'
import './CartFooter.css';
import { connect } from 'react-redux';
import { action_deliverTotalSum } from '../../../redux/cartItems/cartItems.action';
import Stripe from '../../stripe/Stripe';





function CartFooter(props) {
    const { shoppingBagItems, dispatchTotalSum } = props;
    const [totalSum, setTotalSum] = useState()

    useEffect(() => {
        setTotalSum(shoppingBagItems.reduce((accumulator, currentValue) =>
            accumulator + currentValue.totalPerItem, 0))
    }, [shoppingBagItems])

    useEffect(() => {
        dispatchTotalSum(totalSum)
    }, [totalSum])


    console.log('~~~~~~~~~~~~~~~ShoppingBag Footer.jsx~~~~~~~~~~~~~~~')
    return (
        < React.Fragment >
            <div className="sb-item sb-footer">
                <div className="subtotal flex-grow-1 "><h3>Your total is : {totalSum}$</h3></div>
                <div className="shrink">
                    <a className="checkout-button">
                        <Stripe />
                        Check Out</a>
                </div>
            </div>
        </React.Fragment >
    )
}

const mapStateToProps = state => {
    console.log('!!!!!!!!!mapStateToProps CartFooter!!!!!!!!!')
    return {
        shoppingBagItems: state.cartItems.shoppingBagItems,
    }
}
const mapDispatchToProps = dispatch => ({
    dispatchTotalSum: (totalSum) => dispatch(action_deliverTotalSum(totalSum))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartFooter)