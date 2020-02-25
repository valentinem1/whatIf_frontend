import React from 'react';

import { Segment, Image, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'

import { removeFromCart } from '../Actions/userActions'

const ItemInfoCard = (props) => {

    const removeItemFromCart = () => {
        // console.log(props.cart_joiner)
        let cart_joiner_id = props.cart_joiner

        fetch(`http://localhost:4000/cart_joiners/${cart_joiner_id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedItem => {
            // console.log(deletedItem)
            props.removeFromCart(deletedItem)
        })
    }
    // console.log(props.cart_joiner)

    return (
        // <div></div>
        <Segment>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image"/>
                <br/>
                <p>{props.item.title}</p>
                <p>Price: ${props.item.price}</p>
                <Button size='small' onClick={removeItemFromCart}>Remove</Button>
        </Segment>
        
    );

};

const mapStateToProps = (state) => {
    // console.log(state)
    return{
        user: state.user.cart
    }
}

export default connect(mapStateToProps, { removeFromCart })(ItemInfoCard);