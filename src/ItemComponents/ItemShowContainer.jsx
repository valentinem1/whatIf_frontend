import React from 'react';

import InfoContainer from './InfoContainer'
import ReviewContainer from './ReviewContainer'

import { connect } from 'react-redux'
import { addToCart } from '../Actions/userActions'
import { decreaseItemQuantity } from '../Actions/itemsActions'

import { Button } from 'semantic-ui-react'

const ItemShowContainer = (props) => {
// console.log(props.items)


    const addToCart = () =>{
        let item_id = props.match.params.id
        fetch('http://localhost:4000/cart_joiners', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                item_id
            })
        })
        .then(r => r.json())
        .then(cartItem => {
            console.log(cartItem)
            props.addToCart(cartItem)
            props.decreaseItemQuantity(cartItem.item)
        })
    }

    return (
        <div>
            <InfoContainer matchProps={props.match}/>
            <Button className="add-to-cart-btn" onClick={addToCart}>Add to cart</Button>
            <ReviewContainer matchProps={props.match}/>
        </div>

    );
};

export default connect(null, { addToCart, decreaseItemQuantity })(ItemShowContainer);