import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { action_deliverItemsChecked } from '../../redux/cartItems/cartItems.action';


const StripeButton = ({ totalShoppingBagSum, dispatch_deliverItemsChecked }) => {
    const key = 'pk_test_51H5PBrFkoZ5J6lsh7k8YBx5O91JVzT6BoRRRafn1e4QHA5Uam0Uv22Aesiuwejo7ObGithtg2T29mJp6OigmKGaR00S5ih4REn';
    let USD = totalShoppingBagSum * 100;

    const onToken = (token) => {
        alert('successeful payment')
        dispatch_deliverItemsChecked()
    }



    return (
        <StripeCheckout
            name="Mulholland Drive."
            ComponentClass="span"
            description={`Your total is ${totalShoppingBagSum}$`}
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
};

const mapDispatchToProps = dispatch => ({
    dispatch_deliverItemsChecked: () => dispatch(action_deliverItemsChecked())
})
export default connect(null, mapDispatchToProps)(StripeButton)