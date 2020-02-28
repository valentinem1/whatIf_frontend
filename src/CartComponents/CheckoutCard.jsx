import React from 'react';
import { connect } from 'react-redux'
import { createOrder } from '../Actions/userActions'
import { Segment, Button } from 'semantic-ui-react'

const CheckoutCard = (props) => {
    
    const cartTotalPrice = () => {
        if(props.userCart && props.userCart.length > 0){
            let price = props.userCart.map(cartItem => cartItem.item.price)
            let totalPrice = price.reduce((total, num) => total + num)
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

    const createOrder = () => {
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
    // console.log(props)
    return (

        <Segment>
            Item(s) total:
            ${cartTotalPrice()}
            <br/>
            Shipping: $10
            <br/>
            Total({cartTotalItem()} item)
            <br/>
            <Button onClick={createOrder}>Checkout</Button>
        </Segment>
        );

};

const mapStateToProps = (state) => {
    return{
        userCart: state.user.cart
    }
}

export default connect(mapStateToProps, { createOrder })(CheckoutCard);