import React from 'react';
import { connect } from 'react-redux'
import { createOrder, totalPrice } from '../Actions/userActions'
import { Segment } from 'semantic-ui-react'
import StripeCheckout from 'react-stripe-checkout';

const CheckoutCard = (props) => {
    
    const cartTotalPrice = () => {
        if(props.userCart && props.userCart.length > 0){
            let price = props.userCart.map(cartItem => cartItem.item.price)
            let totalPrice = price.reduce((total, num) => total + num)
            props.totalPrice(totalPrice)
            return totalPrice
        }else{
            return null
        }
    }

    const cartTotalItem = () => {
        if(props.userCart){
            let item = props.userCart.length
            return item
        }else{
            return null
        }
    }

    const totalWithTax = () => {
       return cartTotalPrice() + 10
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
                body: JSON.stringify({ charge: charge, price: totalWithTax * 100 })
            };

            fetch('http://localhost:4000/charges', config)
            .then(res => res.json())
            .then(console.log)

            fetch('http://localhost:4000/order_joiners', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `bearer ${localStorage.token}`
                }
            })
            .then(r => r.json())
            .then(newOrder => {
                console.log(newOrder)
                props.createOrder(newOrder)
            })
    }

    return (

        <Segment>
            Item(s) total:
            ${cartTotalPrice()}
            <br/>
            Shipping: $10
            <br/>
            Total({cartTotalItem()} item)
            <br/>
            <StripeCheckout 
                token={onToken}
                stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
            /> 
            {/* <Button onClick={createOrder}>Checkout</Button> */}
        </Segment>

    );
};

const mapStateToProps = (state) => {
    return{
        userCart: state.user.cart
    }
}

export default connect(mapStateToProps, { createOrder, totalPrice })(CheckoutCard);