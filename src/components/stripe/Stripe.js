import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

const Stripe = ({ checkoutSum }) => {
    const key = 'pk_test_51H5PBrFkoZ5J6lsh7k8YBx5O91JVzT6BoRRRafn1e4QHA5Uam0Uv22Aesiuwejo7ObGithtg2T29mJp6OigmKGaR00S5ih4REn';
    let USD = checkoutSum * 100;
    const onToken = token => {
        console.log('token', token)
        alert(`Payments Successful`)
    }


    return (
        <StripeCheckout
            style={{ display: "none" }}
            name="Mulholland Drive."
            ComponentClass="span"
            description={`Your total is ${checkoutSum}$`}
            label="pay"
            panelLabel="Pay now"
            amount={USD}
            currency="USD"
            locale="us"
            stripeKey={key}
            token={onToken} />

    )
}

const mapStateToProps = state => ({
    checkoutSum: state.cartItems.totalSum,
})
export default connect(mapStateToProps, null)(Stripe)