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
            return totalPrice
        }
    }

    let total = cartTotalPrice()
    let totalWithShipping = total + 10

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
        console.log(props.user)
    return (
        <Segment>
            Item(s) total:
            ${total ? total : total = 0}
            <br/>
            Shipping: $10
            <br/>
            Total({cartTotalItem()} item)
            <br/>
            Total: ${totalWithShipping ? totalWithShipping : totalWithShipping = 0}
            <br/>
            <StripeCheckout 
                token={onToken}
                stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
            />
        </Segment>
    );
};

const mapStateToProps = (state) => {
    return{
        user: state.user,
        userCart: state.user.cart
    }
}

export default connect(mapStateToProps, { createOrder, totalPrice })(CheckoutCard);