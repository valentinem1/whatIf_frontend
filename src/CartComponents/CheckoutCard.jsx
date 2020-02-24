import React from 'react';
import { connect } from 'react-redux'

import { Segment, Button } from 'semantic-ui-react'

const CheckoutCard = (props) => {
    // console.log(props.userCart)

    // debugger
    const cartTotalPrice = () => {
        if(props.userCard){
            let price = props.userCart.map(item => item.price)
        
            function myFunc(total, num) {
            return total + num;
            }
        
            let totalPrice = price.reduce(myFunc)
            return totalPrice
        } else{
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
    
    return (

        <Segment>
            Item(s) total:
            {cartTotalPrice()}
            <br/>
            Shipping: $10
            <br/>
            Total({cartTotalItem()} item)
            <br/>
            <Button>Checkout</Button>
        </Segment>
    );

};

const mapStateToProps = (state) => {
    return{
        userCart: state.user.cart
    }
}

export default connect(mapStateToProps)(CheckoutCard);