import React from 'react';
import { connect } from 'react-redux'
import { createOrder, totalPrice } from '../Actions/userActions'
import { Segment, Button } from 'semantic-ui-react'
import StripeCheckout from 'react-stripe-checkout';

const CheckoutCard = (props) => {
    // calculating the cart total price.
    const cartTotalPrice = () => {
        // first check if the userCart exist and if the userCart is bigger than 0.
        if(props.userCart && props.userCart.length > 0){
            // if yes, map over the cart to collect the item price and return an array with only prices.
            let price = props.userCart.map(cartItem => cartItem.item.price)
            // then sum up all the price together to get the total price by using reduce which reduce the array to a single value.
            let totalPrice = price.reduce((total, num) => total + num)
            return totalPrice
        }
    }

    // assign the function to a variable to be able to add it. can't add a function with numbers.
    let total = cartTotalPrice()
    // add the total of prices from the above function with the shipping price. check if the total is bigger than 20.
    // if yes the shipping will be 10 otherwise 5.
    let totalWithShipping = total + (total >= 20 ? 10 : 5)

    // calculate the total of item in the cart.
    const cartTotalItem = () => {
        // check if the cart exist. due to asynchronous functionality of react an if statement is needed to check if the data has arrived yet to be able to use the .length method on it.
        if(props.userCart){
            let item = props.userCart.length
            return item
        }else{
            return null
        }
    }

    // fetching to the Stripe API. get the token as first parameters for free from the function.
    const onToken = (token) => {
            // save the token id to a variable to then use it in the body of the fetch.
            const charge = {
                token: token.id
            };
    
            // save the body of the fetch in variable
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    // Stripe API need at least a token and a price.
                    charge: charge,
                    price: totalWithShipping * 100
                })
            };

            // fetch to the charge controller which handles the Stripe API transaction.
            fetch('https://watif-app-api.herokuapp.com/charges', config)
            .then(res => res.json())

            // fetch the order_joiner to create the order when checking out.
            fetch('https://watif-app-api.herokuapp.com/order_joiners', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `bearer ${localStorage.token}`
                }
            })
            .then(r => r.json())
            .then(newOrder => {
                // send the new order to the state by calling the createOrder action which will trigger the store to call the reducer to change the state.
                props.createOrder(newOrder)
            })
    }

    if(props.userCart){
        return (
    
            <Segment>
                <div className="checkout-info">
                    <div className="item-total-price">
                        <p className="items-total-title">Item(s) total:</p>
                        <p className="items-cart-total">${total ? total : total = 0}</p>
                    </div>
                    <div className="item-total-price">
                        <p className="items-shipping-title">Shipping: </p>
                        <p className="items-cart-shipping">{total >= 20 ? "$10" : "$5"}</p>
                    </div>
                    <hr/>
                    <div className="item-total-price">
                        <p className="total-price-title">Total({cartTotalItem()} item)</p>
                        <p className="cart-total-price">${totalWithShipping ? totalWithShipping : totalWithShipping = 0}</p>
                    </div>
                    {/* To be able provide payments we need the StripeCheckout component imported from Stripe API. It gives us access to the Stripe Modal for payment. */}
                    <StripeCheckout 
                        disabled={props.userCart.length === 0 ? true : false}
                        token={onToken}
                        stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
                        // provide input for billing address and shipping address.
                        billingAddress
                        shippingAddress
                    >
                    <Button className="checkout-btn">Checkout</Button>
                    </StripeCheckout>
                </div>
            </Segment>
        );
    } return null
};

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return{
        user: state.user,
        userCart: state.user.cart
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps, second argument like { createOrder, totalPrice } an ES6 destructuring feature must be the function(s) that dispatches the actions to the store.
export default connect(mapStateToProps, { createOrder, totalPrice })(CheckoutCard);