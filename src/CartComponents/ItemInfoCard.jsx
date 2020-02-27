import React from 'react';

import { Segment, Image, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'

import { removeFromCart } from '../Actions/userActions'
import { increaseItemQuantity } from '../Actions/itemsActions'

const ItemInfoCard = (props) => {

    const removeItemFromCart = () => {
        let cart_joiner_id = props.cart_joiner

        fetch(`http://localhost:4000/cart_joiners/${cart_joiner_id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedItem => {
            props.increaseItemQuantity(deletedItem.item)
            props.removeFromCart(deletedItem)
        })
    }

    if(props.item){
        return (
            <Segment>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image"/>
                    <br/>
                    <p>{props.item.title}</p>
                    <p>Price: ${props.item.price}</p>
                    {/* <p>Quantity: {props.userCart.map(cartItem => cartItem.quantity)}</p> */}
                    <p>Quantity: {props.cart_joiner_quantity}</p>
                    <Button size='small' onClick={removeItemFromCart}>Remove</Button>
            </Segment>
    
        );
    }
    return null

};

const mapStateToProps = (state) => {
    return{
        userCart: state.user.cart
    }
}

export default connect(mapStateToProps, { removeFromCart, increaseItemQuantity })(ItemInfoCard);