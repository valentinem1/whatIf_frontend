import React from 'react';
import { connect } from 'react-redux'
import { createOrder, totalPrice } from '../Actions/userActions'
import { Segment, Button } from 'semantic-ui-react'
import StripeCheckout from 'react-stripe-checkout';

const CheckoutCard = (props) => {
    
    const cartTotalPrice = () => {
        if(props.userCart && props.userCart.length > 0){
            let price = props.userCart.map(cartItem => cartItem.item.price)
            let totalPrice = price.reduce((total, num) => total + num)
            return totalPrice
        }
    }

    let total = cartTotalPrice()
    let totalWithShipping = total + (total >= 20 ? 10 : 5)

    const cartTotalItem = () => {
        if(props.userCart){
            let item = props.userCart.length
            return item
        }else{
            return null
        }
    }

    const onToken = (token) => {
        
            const charge = {
                token: token.id
            };
    
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    charge: charge, 
                    price: totalWithShipping * 100
                })
            };

            fetch('https://watif-app-api.herokuapp.com/charges', config)
            .then(res => res.json())
            // .then(console.log)

            fetch('https://watif-app-api.herokuapp.com/order_joiners', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `bearer ${localStorage.token}`
                }
            })
            .then(r => r.json())
            .then(newOrder => {
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
                    <StripeCheckout 
                        disabled={props.userCart.length === 0 ? true : false}
                        token={onToken}
                        stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
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

const mapStateToProps = (state) => {
    return{
        user: state.user,
        userCart: state.user.cart
    }
}

export default connect(mapStateToProps, { createOrder, totalPrice })(CheckoutCard);