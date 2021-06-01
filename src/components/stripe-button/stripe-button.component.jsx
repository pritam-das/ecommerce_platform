import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IxgaGFVKorRuA6QzdInxEqXZCdDkbnL1ALNygu9n2lqvor9IP5I9TorgYRr6YtLq4XA2t8wpUyXAxM01EIvm8Hv00D0b4mpaQ'
    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        //https://github.com/azmenak/react-stripe-checkout for the different options
        <StripeCheckout billingAddress='false'
                        label='Pay Now'
                        shippingAddress
                        image='https://svgshare.com/i/CUz.svg'
                        description={`Your total is $${price}`}
                        amount={priceForStripe}
                        panelLabel='Pay Now'
                        //TOKEN IS THE ON SUBMISSION CALLBACK
                        token={onToken}
                        stripeKey={publishableKey}
                        />
    )
}

export default StripeCheckoutButton;