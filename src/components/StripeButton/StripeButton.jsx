import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { action_deliverItemsChecked } from '../../redux/cartItems/cartItems.action';


const StripeButton = ({ checkoutSum, dispatch_deliverItemsChecked }) => {
    const key = 'pk_test_51H5PBrFkoZ5J6lsh7k8YBx5O91JVzT6BoRRRafn1e4QHA5Uam0Uv22Aesiuwejo7ObGithtg2T29mJp6OigmKGaR00S5ih4REn';
    let USD = checkoutSum * 100;


    const onToken = (token) => {
        alert('successeful payment')
        dispatch_deliverItemsChecked()
    }



    return (
        <StripeCheckout
            name="Mulholland Drive."
            ComponentClass="span"
            description={`Your total is ${checkoutSum}$`}
            label="pay"
            panelLabel="Pay now"
            amount={USD}
            currency="USD"
            locale="auto"
            stripeKey={key}
            token={onToken}>
            <a className="checkout-button">Check Out</a>
        </StripeCheckout>
    )
}

const mapStateToProps = state => ({
    checkoutSum: state.cartItems.totalSum,
})
const mapDispatchToProps = dispatch => ({
    dispatch_deliverItemsChecked: () => dispatch(action_deliverItemsChecked())
})
export default connect(mapStateToProps, mapDispatchToProps)(StripeButton)